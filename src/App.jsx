import { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowSquareOut, BookOpen, BookmarkSimple, CaretDown, Check, DownloadSimple, FolderSimple, Headphones, List, ListBullets, NotePencil, Pause, PencilSimple, Play, SpeakerHigh, Star, TextAa, X, AndroidLogo, AppleLogo, ArrowCounterClockwise } from './icons.jsx';
import { english } from './translations.js';
import { InfoPage, infoPage, infoMetadata } from './InfoPages.jsx';
const paragraphs = ['清晨，山里的风先于阳光来到窗前。树叶轻轻翻动，像有人在远处翻开一本书。', '我把手机调成静音，给自己留下一小段不被打扰的时间。读几页文字，也听听心里的声音。', '不必急着抵达最后一页。每一次停留，都让我们更接近自己。'];
const features = [{
  icon: FolderSimple,
  title: '本地导入',
  lines: ['支持 EPUB / PDF 格式', '把自己的书，放进书库']
}, {
  icon: Headphones,
  title: 'AI 听书',
  lines: ['让文字自然流淌', '阅读累了，就听一会儿']
}, {
  icon: PencilSimple,
  title: '笔记与划线',
  lines: ['随时记录灵感', '让思考更有痕迹']
}, {
  icon: BookOpen,
  title: '专注阅读',
  lines: ['纯净界面与书籍排版', '沉浸每一次阅读']
}];
function DownloadDialog({
  close,
  t
}) {
  const dialog = useRef(null);
  useEffect(() => {
    dialog.current.showModal();
    const old = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = old;
    };
  }, []);
  return <dialog ref={dialog} className="download-dialog" onCancel={close} onClick={e => {
    if (e.target === dialog.current) close();
  }} aria-labelledby="download-title">
    <button className="icon-button close-dialog" aria-label={t("关闭下载窗口")} onClick={close}><X size={22} /></button>
    <img className="dialog-logo" src="/assets/logo.png" alt="" />
    <p className="eyebrow">YOUR NEXT CHAPTER</p><h2 id="download-title">{t("把 Chibook")}<br />{t("带在身边。")}</h2>
    <p className="dialog-description">{t("你的私人书库，随身携带。")}<br />{t("iPhone / iPad 版可前往 App Store 下载。")}</p>
    <div className="platform"><AndroidLogo size={25} /><div><strong>Android</strong><span>{t("安装包准备中")}</span></div><span className="status-pill">{t("即将开放")}</span></div>
    <a className="platform" href="https://apps.apple.com/us/app/chibook/id6810264383" target="_blank" rel="noreferrer"><AppleLogo size={25} /><div><strong>iPhone / iPad</strong><span>{t("在 App Store 下载")}</span></div><span className="status-pill">{t("立即下载")}</span></a>
    <a className="project-link" href="https://github.com/mutse/chibook" target="_blank" rel="noreferrer">{t("查看项目进展")}<ArrowSquareOut size={17} /></a>
  </dialog>;
}
export function App() {
  const [language, setLanguage] = useState(() => {
    try {
      return localStorage.getItem('chibook-language') === 'en' ? 'en' : 'zh';
    } catch {
      return 'zh';
    }
  });
  const t = text => language === 'en' ? english[text] || text : text;
  useEffect(() => {
    document.documentElement.lang = language === 'en' ? 'en' : 'zh-CN';
    document.title = language === 'en' ? 'Chibook · A new way to read.' : t("Chibook · 好书，换一种方式读。");
    document.querySelector('meta[name="description"]')?.setAttribute('content', language === 'en' ? 'Your personal library. Import EPUB and PDF, and switch between reading and listening.' : t("Chibook 私人书库：EPUB/PDF 阅读、AI 听书，在阅读与聆听之间自由切换。"));
    if (infoPage) {
      const metadata = infoMetadata(language);
      document.title = metadata.title;
      document.querySelector('meta[name="description"]')?.setAttribute('content', metadata.description);
    }
    try {
      localStorage.setItem('chibook-language', language);
    } catch {}
  }, [language]);
  const [download, setDownload] = useState(false);
  const [menu, setMenu] = useState(false);
  const [tab, setTab] = useState('listen');
  const [playing, setPlaying] = useState(false);
  const [rate, setRate] = useState(1);
  const [progress, setProgress] = useState(0);
  const [saved, setSaved] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const [contents, setContents] = useState(false);
  const [speechStatus, setSpeechStatus] = useState('');
  const speech = useRef(null);
  const reader = useRef(null);
  const returnFocus = useRef(null);
  const openDownload = e => {
    returnFocus.current = e.currentTarget;
    setDownload(true);
  };
  const closeDownload = () => {
    setDownload(false);
    requestAnimationFrame(() => returnFocus.current?.focus());
  };
  useEffect(() => () => {
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  }, []);
  function startSpeech(nextRate = rate) {
    if (!('speechSynthesis' in window)) {
      setSpeechStatus(t("当前浏览器不支持语音朗读，请在 App 中体验听书。"));
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(paragraphs.map(t).join(language === 'en' ? ' ' : ''));
    utterance.lang = language === 'en' ? 'en-US' : 'zh-CN';
    utterance.rate = nextRate;
    const voice = window.speechSynthesis.getVoices().find(v => v.lang.startsWith(language));
    if (voice) utterance.voice = voice;
    utterance.onstart = () => {
      setPlaying(true);
      setSpeechStatus(t("正在朗读 · 浏览器音色演示"));
    };
    utterance.onboundary = e => setProgress(Math.round(Math.min(100, e.charIndex / utterance.text.length * 100)));
    utterance.onend = () => {
      setPlaying(false);
      setProgress(100);
      setSpeechStatus(t("试读结束，愿你享受下一页。"));
    };
    utterance.onerror = e => {
      if (e.error !== 'interrupted' && e.error !== 'canceled') {
        setPlaying(false);
        setSpeechStatus(t("暂时无法播放，请检查设备语音设置后重试。"));
      }
    };
    speech.current = utterance;
    setProgress(0);
    window.speechSynthesis.speak(utterance);
  }
  function toggleSpeech() {
    if (playing) {
      window.speechSynthesis.cancel();
      setPlaying(false);
      setSpeechStatus(t("已停止朗读，可重新播放。"));
    } else startSpeech();
  }
  function switchLanguage() {
    if (speech.current) {
      speech.current.onend = null;
      speech.current.onstart = null;
      speech.current.onboundary = null;
      speech.current.onerror = null;
    }
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    setPlaying(false);
    setProgress(0);
    setSpeechStatus('');
    setLanguage(current => current === 'zh' ? 'en' : 'zh');
  }
  function changeRate() {
    const next = rate === 1 ? 1.25 : rate === 1.25 ? 1.5 : 1;
    setRate(next);
    if (playing) startSpeech(next);
  }
  function explore(mode) {
    setTab(mode);
    reader.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'center'
    });
    setMenu(false);
  }
  if (infoPage) return <InfoPage language={language} switchLanguage={switchLanguage} />;
  return <>
    <a className="skip-link" href="#main">{t("跳至正文")}</a>
    <header className="header">
      <a className="brand" href="#" aria-label={t("Chibook 首页")}><img src="/assets/logo.png" alt="" /><span>Chibook</span></a>
      <div className="header-actions"><button className="language-switch" onClick={switchLanguage} aria-label={language === 'zh' ? 'Switch to English' : t("切换为中文")}><span lang="zh-CN" className={language === 'zh' ? 'active' : ''}>{t("中")}</span><span aria-hidden="true">/</span><span lang="en" className={language === 'en' ? 'active' : ''}>EN</span></button><button className="menu-toggle icon-button" aria-label={menu ? t("关闭导航") : t("打开导航")} aria-expanded={menu} onClick={() => setMenu(!menu)}>{menu ? <X size={25} /> : <List size={25} />}</button></div>
      <nav className={menu ? 'nav open' : 'nav'} aria-label={t("主导航")}><a href="#experience" onClick={() => setMenu(false)}>{t("阅读体验")}</a><button onClick={() => explore('listen')}>{t("AI 听书")}</button><a href="#faq" onClick={() => setMenu(false)}>{t("常见问题")}</a></nav>
    </header>
    <main id="main">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-inner">
          <div className="hero-copy"><span className="quiet-label">Quiet Reading</span><h1 id="hero-title">{language === 'zh' ? <>{t("好书，")}<br />{t("换一种方式")}<span>{t("读。")}</span></> : <>Good books.<br />A new way<br />to <span>read.</span></>}</h1><p className="hero-description">{t("把你的 EPUB 与 PDF 收进私人书库，")}<br className="desktop-break" />{t("在阅读与聆听之间，自由切换。")}</p><div className="hero-actions"><button className="button primary" onClick={openDownload}><DownloadSimple size={23} />{t("下载 Chibook")}</button><button className="button secondary" onClick={() => explore('read')}><Play size={21} />{t("了解阅读体验")}</button></div></div>
          <div className="product-scene" ref={reader} id="reader-demo">
            <div className="reader-window">
              <aside className="reader-sidebar"><div className="window-controls" aria-hidden="true"><i /><i /><i /></div><p className="sidebar-caption">{t("书架")}</p><div className="sidebar-item selected"><BookOpen />{t("全部")}<span>1</span></div><div className="sidebar-item"><Headphones />{t("在听")}<span>{playing ? 1 : 0}</span></div><div className="sidebar-item"><BookmarkSimple />{t("未读")}<span>0</span></div><div className="sidebar-item"><Star />{t("收藏")}<span>{saved ? 1 : 0}</span></div><p className="sidebar-caption library-caption">{t("我的书库")}</p><div className="sidebar-item"><FolderSimple />{t("散文与随笔")}</div><p className="sidebar-bottom">CHIBOOK<br /><span>{t("你的私人阅读时光")}</span></p></aside>
              <div className="reader-main"><div className="reader-heading"><strong>{t("山间来信")}</strong><span className="demo-label">{t("试读")}</span></div><div className="reader-tabs" role="tablist" aria-label={t("阅读方式")}><button role="tab" aria-selected={tab === 'read'} onClick={() => setTab('read')}><BookOpen />{t("阅读")}</button><button role="tab" aria-selected={tab === 'listen'} onClick={() => setTab('listen')}><Headphones />{t("AI 听书")}</button></div>
                <div className={'reader-text' + (largeText ? ' large-text' : '')} role="tabpanel"><h3>{t("第 1 章\u3000给自己一段时间")}</h3>{paragraphs.map((p, i) => <p key={p} className={playing && i === 0 ? 'reading-active' : ''}>{t(p)}</p>)}{contents && <div className="contents-panel"><strong>{t("目录")}</strong><button onClick={() => setContents(false)}>{t("第 1 章\u3000给自己一段时间")}<Check size={15} /></button><small>{t("原创试读 · 共 1 章")}</small></div>}</div>
                <div className="reader-bottom"><div className="page-progress"><span /><small>1 / 1</small></div><div className="reader-tools"><button aria-expanded={contents} onClick={() => setContents(!contents)}><ListBullets />{t("目录")}</button><button aria-pressed={saved} onClick={() => setSaved(!saved)}>{saved ? <Check /> : <BookmarkSimple />}{saved ? t("已收藏") : t("收藏")}</button><button aria-pressed={largeText} onClick={() => setLargeText(!largeText)}><TextAa />{t("字号")}</button><button onClick={() => explore(tab === 'listen' ? 'read' : 'listen')}><Headphones />{tab === 'listen' ? t("阅读") : t("听书")}</button></div></div>
              </div>
            </div>
            <div className={'audio-card' + (tab === 'read' ? ' reading-mode' : '')}>
              <div className="audio-heading">{tab === 'read' ? t("随时，切换到听书") : t("AI 听书")}<SpeakerHigh size={16} /></div><div className="audio-book"><img src="/assets/book-cover.png" alt={t("山间来信蓝色山峦书封")} /><div><strong>{t("山间来信")}</strong><p>{t("Chibook · 原创试读")}</p></div></div><div className="audio-progress"><span>{progress}%</span><progress aria-label={t("朗读进度")} value={progress} max="100" /><span>{t("试读")}</span></div><div className="audio-controls"><button className="rate-button" onClick={changeRate} aria-label={language === 'en' ? `Reading speed ${rate}x. Click to change.` : `朗读速度 ${rate} 倍，点击切换`}>{rate.toFixed(rate === 1 ? 1 : 2)}x</button><button className="icon-button" onClick={() => startSpeech()} aria-label={t("从头朗读")}><ArrowCounterClockwise size={23} /></button><button className="play-button" aria-label={playing ? t("停止朗读") : t("播放试读")} onClick={toggleSpeech}>{playing ? <Pause size={25} /> : <Play size={25} />}</button><button className="icon-button bookmark" aria-label={saved ? t("取消收藏") : t("收藏试读")} aria-pressed={saved} onClick={() => setSaved(!saved)}>{saved ? <Check size={22} /> : <BookmarkSimple size={22} />}</button></div><p className="speech-status" aria-live="polite">{speechStatus || t("点击播放，听一段阅读时光")}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="experience" id="experience" aria-labelledby="experience-title"><div className="experience-copy"><h2 id="experience-title">{t("导入一本书，留一段时间给自己。")}</h2><p>{t("Chibook 支持本地 EPUB 与 PDF 导入，建立你的私人书库。")}<br />{t("在阅读、聆听与思考之间，自由切换，沉浸于属于你的节奏。")}</p></div><div className="feature-grid">{features.map(({
            icon: Icon,
            title,
            lines
          }) => <article className="feature" key={title}><Icon size={31} /><h3>{t(title)}</h3><p>{t(lines[0])}<br />{t(lines[1])}</p></article>)}</div></section>
      <section className="faq" id="faq"><div><p className="eyebrow">A LITTLE MORE ABOUT CHIBOOK</p><h2>{t("开始之前，")}<br />{t("你也许想知道。")}</h2><p className="faq-intro">{t("关于书库、阅读，还有你的下一本书。")}</p></div><div className="faq-list">{[[t("可以导入哪些格式的电子书？"), t("Chibook 支持导入你自己的 EPUB 和 PDF 文件。导入后，可以在私人书库中管理书籍并继续阅读。")], [t("没有网络，也能阅读和听书吗？"), t("已导入的书籍可在本地阅读。设备本地 TTS 可用于离线朗读；云端音色通常需要网络连接。")], [t("网页上的声音就是 App 的 AI 音色吗？"), t("这里提供浏览器语音试读，便于体验读听切换。实际声音由设备和浏览器决定，App 中可用的音色与设置可能不同。")], [t("在哪里下载 Chibook？"), t("点击“下载 Chibook”，即可前往 App Store 下载 iPhone / iPad 版。Android 安装包仍在准备中。")]].map(([q, a]) => <details key={q}><summary>{q}<CaretDown size={19} /></summary><p>{a}</p></details>)}</div></section>
    </main>
    <footer><a className="brand footer-brand" href="#"><img src="/assets/logo.png" alt="" /><span>Chibook</span></a><span>{t("把时间，留给值得读的文字。")}</span><nav className="footer-links" aria-label={language === 'zh' ? '帮助与隐私' : 'Help and privacy'}><a href="/privacy-policy">{language === 'zh' ? '隐私政策' : 'Privacy policy'}</a><a href="/support">{language === 'zh' ? '支持页面' : 'Support'}</a><button onClick={openDownload}>{t("下载 Chibook")}<ArrowDown size={16} /></button></nav></footer>
    {download && <DownloadDialog close={closeDownload} t={t} />}
  </>;
}
