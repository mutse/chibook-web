const email = 'young@mutse.top';
export const infoPage = /^\/privacy-policy(?:\.html)?\/?$/.test(window.location.pathname) ? 'privacy' : /^\/support(?:\.html)?\/?$/.test(window.location.pathname) ? 'support' : null;

const copy = {
  zh: {
    privacy: '隐私政策', support: '支持页面', home: '返回首页', skip: '跳至正文', nav: '页面导航',
    privacyTitle: '耳读隐私政策', supportTitle: '耳读 App 支持', date: '更新日期：2026 年 10 月 2 日',
    privacyIntro: '耳读（ChiBook）是一款本地优先的阅读与听书工具。我们重视你的隐私，并尽量让核心功能在设备上完成。',
    supportIntro: '耳读支持导入 TXT、EPUB 和 PDF，并使用 iPhone 或 iPad 的系统语音进行朗读。',
    sections: [
      ['我们如何处理数据', [
        '你主动导入的 TXT、EPUB、PDF 文件，以及阅读进度、显示偏好、笔记与划线、听书位置和时长，保存在 App 的本地沙盒中，用于提供阅读与听书功能。耳读不会把这些内容上传到开发者服务器。',
        '选择文件时，耳读仅获得你在 Apple 系统文件选择器中明确选中的文件。PDF 的文字识别使用 Apple Vision 在设备端完成。'
      ]],
      ['跟踪、广告与第三方', ['App Store 版本不包含广告 SDK，不进行跨 App 跟踪，不出售个人信息，也不要求创建耳读账户。系统语音由 iOS 提供。系统可能按你的 iCloud 或设备备份设置备份应用数据，该过程由 Apple 和你的系统设置管理。']],
      ['App 内购买', ['Chibook Pro 为一次性内购。支付、退款和 Apple 账户验证由 Apple 处理，应用通过 StoreKit 在设备上验证购买权益；开发者不接收支付卡信息。我们不将交易或文档上传到开发者服务器，也未加入行为追踪 SDK。', '清除本地数据不撤销购买。同一 Apple 账户可在“我的 → Chibook Pro → 恢复购买”恢复权益；恢复购买不会同步书籍或阅读记录。']],
      ['保留与删除', ['数据会保留在设备上，直到你主动删除。在 App 内打开“我的”，选择“清除所有本地数据”，可永久删除导入文件、阅读记录、笔记、缓存和凭证。卸载 App 也会移除其沙盒数据；系统备份副本依照 Apple 的备份规则处理。']]
    ],
    faq: '常见问题', questions: [
      ['无法导入文件', '请确认扩展名为 .txt、.epub 或 .pdf，并在系统文件 App 中确认文件已下载完成。'],
      ['PDF 无法朗读', '扫描版 PDF 需要逐页识别，清晰度、分栏和字体编码会影响结果；部分受密码保护的文件无法处理。'],
      ['没有合适的声音', '可在 iOS“设置 → 辅助功能 → 朗读内容 → 声音”中下载更多系统语音。'],
      ['免费额度', '可同时保留 3 本自导入书籍，欢迎指南不占额度；删除会一并清理相关划线和进度并释放名额。Pro 一次性解锁无限书架，不自动续费。'],
      ['恢复购买', '在“我的 → Chibook Pro”选择“恢复购买”，并使用购买时的 Apple 账户。此操作仅恢复权益，不同步书籍。退款后已有书籍仍可阅读和听书，新增导入受免费额度限制。'],
      ['购买无法加载', '请检查网络和系统购买限制，点击“刷新价格与购买状态”。最终价格以 App Store 为准。'],
      ['删除数据', '在耳读中打开“我的 → 清除所有本地数据”。']
    ],
    contact: '联系我们', supportContact: '联系支持', privacyContact: '如需支持或提出隐私请求，请通过以下邮箱联系我们。', supportBody: '如需帮助，请发送邮件至：'
  },
  en: {
    privacy: 'Privacy policy', support: 'Support', home: 'Back to home', skip: 'Skip to content', nav: 'Page navigation',
    privacyTitle: 'ChiBook Privacy Policy', supportTitle: 'ChiBook App Support', date: 'Updated October 2, 2026',
    privacyIntro: 'ChiBook is a local-first reading and listening app. We value your privacy and keep core features on your device wherever possible.',
    supportIntro: 'ChiBook imports TXT, EPUB and PDF files and reads them aloud using the system voices on your iPhone or iPad.',
    sections: [
      ['How we handle data', [
        'Files you choose to import (TXT, EPUB and PDF), reading progress, display preferences, notes and highlights, and listening position and duration are stored in the app’s local sandbox to provide reading and listening features. ChiBook does not upload this content to developer servers.',
        'ChiBook only receives the files you explicitly select in Apple’s system file picker. Text recognition for PDFs runs on your device using Apple Vision.'
      ]],
      ['Tracking, advertising and third parties', ['The App Store version contains no advertising SDKs, does not track you across apps, does not sell personal information and does not require a ChiBook account. System voices are provided by iOS. The system may back up app data according to your iCloud or device backup settings; Apple and your system settings manage that process.']],
      ['In-app purchases', ['Chibook Pro is a one-time in-app purchase. Apple handles payments, refunds and Apple Account authentication. The app verifies entitlements on your device using StoreKit; the developer does not receive payment card details. We do not upload transactions or documents to developer servers or include behavioral tracking SDKs.', 'Clearing local data does not revoke your purchase. Restore your entitlement with the same Apple Account in Me → Chibook Pro → Restore Purchases. Restoring purchases does not sync books or reading records.']],
      ['Retention and deletion', ['Data stays on your device until you delete it. In the app, open “Me” and select “Clear all local data” to permanently delete imported files, reading history, notes, caches and credentials. Uninstalling the app also removes its sandbox data. System backup copies are handled under Apple’s backup rules.']]
    ],
    faq: 'Frequently asked questions', questions: [
      ['Unable to import a file', 'Check that the file extension is .txt, .epub or .pdf, and confirm in the Files app that the file has finished downloading.'],
      ['A PDF cannot be read aloud', 'Scanned PDFs require text recognition on each page. Image clarity, columns and font encoding can affect the result. Some password-protected files cannot be processed.'],
      ['No suitable voice is available', 'Download additional system voices in iOS Settings → Accessibility → Spoken Content → Voices.'],
      ['Free bookshelf limit', 'Keep up to 3 imported books at a time for free; the welcome guide does not count. Deleting a book also removes its highlights and progress and frees a slot. Pro unlocks an unlimited bookshelf with a one-time purchase and no automatic renewal.'],
      ['Restore Purchases', 'Open Me → Chibook Pro → Restore Purchases using the Apple Account used for your purchase. This restores your entitlement without syncing books. After a refund, existing books remain available for reading and listening; new imports follow the free limit.'],
      ['Purchase unavailable', 'Check your connection and system purchase restrictions, then select Refresh Price and Purchase Status. The final price is shown by the App Store.'],
      ['Deleting data', 'In ChiBook, open Me → Clear all local data.']
    ],
    contact: 'Contact us', supportContact: 'Contact support', privacyContact: 'For support or privacy requests, contact us at the email address below.', supportBody: 'For help, email us at:'
  }
};

export function infoMetadata(language) {
  const c = copy[language];
  return { title: infoPage === 'privacy' ? c.privacyTitle : c.supportTitle, description: infoPage === 'privacy' ? c.privacyIntro : c.supportIntro };
}

export function InfoPage({ language, switchLanguage }) {
  const c = copy[language];
  const privacy = infoPage === 'privacy';
  return <>
    <a className="skip-link" href="#main">{c.skip}</a>
    <header className="header info-header">
      <a className="brand" href="/" aria-label={`Chibook · ${c.home}`}><img src="/assets/logo.png" width="42" height="42" alt="Chibook" /><span>Chibook</span></a>
      <button className="language-switch" onClick={switchLanguage} aria-label={language === 'zh' ? 'Switch to English' : '切换为中文'}><span lang="zh-CN" className={language === 'zh' ? 'active' : ''}>中</span><span aria-hidden="true">/</span><span lang="en" className={language === 'en' ? 'active' : ''}>EN</span></button>
    </header>
    <main id="main" className="info-page">
      <a className="info-back" href="/">← {c.home}</a>
      <article className="info-card">
        <h1>{privacy ? c.privacyTitle : c.supportTitle}</h1>
        {privacy && <p className="info-date"><time dateTime="2026-10-02">{c.date}</time></p>}
        <p className="info-intro">{privacy ? c.privacyIntro : c.supportIntro}</p>
        {privacy ? c.sections.map(([title, paragraphs]) => <section key={title}><h2>{title}</h2>{paragraphs.map(p => <p key={p}>{p}</p>)}</section>) : <section><h2>{c.faq}</h2>{c.questions.map(([title, body]) => <div className="support-answer" key={title}><h3>{title}</h3><p>{body}</p></div>)}</section>}
        <section className="info-contact"><h2>{privacy ? c.contact : c.supportContact}</h2><p>{privacy ? c.privacyContact : c.supportBody}</p><a href={`mailto:${email}`}>{email}</a></section>
      </article>
    </main>
    <footer className="info-footer"><a href="/">Chibook</a><nav className="footer-links" aria-label={c.nav}><a href="/privacy-policy" aria-current={privacy ? 'page' : undefined}>{c.privacy}</a><a href="/support" aria-current={!privacy ? 'page' : undefined}>{c.support}</a></nav></footer>
  </>;
}
