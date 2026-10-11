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
  },
  tw: {
    privacy: '隱私政策', support: '支援頁面', home: '返回首頁', skip: '跳至正文', nav: '頁面導覽',
    privacyTitle: '耳讀隱私政策', supportTitle: '耳讀 App 支援', date: '更新日期：2026 年 10 月 2 日',
    privacyIntro: '耳讀（ChiBook）是一款本地優先的閱讀與聽書工具。我們重視你的隱私，並盡量讓核心功能在裝置上完成。',
    supportIntro: '耳讀支援匯入 TXT、EPUB 和 PDF，並使用 iPhone 或 iPad 的系統語音進行朗讀。',
    sections: [
      ['我們如何處理資料', [
        '你主動匯入的 TXT、EPUB、PDF 檔案，以及閱讀進度、顯示偏好、筆記與劃線、聽書位置和時長，保存在 App 的本地沙盒中，用於提供閱讀與聽書功能。耳讀不會把這些內容上傳到開發者伺服器。',
        '選擇檔案時，耳讀僅獲得你在 Apple 系統檔案選擇器中明確選中的檔案。PDF 的文字辨識使用 Apple Vision 在裝置端完成。'
      ]],
      ['追蹤、廣告與第三方', ['App Store 版本不包含廣告 SDK，不進行跨 App 追蹤，不出售個人資訊，也不要求建立耳讀帳戶。系統語音由 iOS 提供。系統可能按你的 iCloud 或裝置備份設定備份應用資料，該過程由 Apple 和你的系統設定管理。']],
      ['App 內購買', ['Chibook Pro 為一次性內購。付款、退款和 Apple 帳戶驗證由 Apple 處理，應用透過 StoreKit 在裝置上驗證購買權益；開發者不接收付款卡資訊。我們不將交易或文件上傳到開發者伺服器，也未加入行為追蹤 SDK。', '清除本地資料不撤銷購買。同一 Apple 帳戶可在「我的 → Chibook Pro → 恢復購買」恢復權益；恢復購買不會同步書籍或閱讀記錄。']],
      ['保留與刪除', ['資料會保留在裝置上，直到你主動刪除。在 App 內開啟「我的」，選擇「清除所有本地資料」，可永久刪除匯入檔案、閱讀記錄、筆記、快取和憑證。解除安裝 App 也會移除其沙盒資料；系統備份副本依照 Apple 的備份規則處理。']]
    ],
    faq: '常見問題', questions: [
      ['無法匯入檔案', '請確認副檔名為 .txt、.epub 或 .pdf，並在系統檔案 App 中確認檔案已下載完成。'],
      ['PDF 無法朗讀', '掃描版 PDF 需要逐頁辨識，清晰度、分欄和字體編碼會影響結果；部分受密碼保護的檔案無法處理。'],
      ['沒有合適的聲音', '可在 iOS「設定 → 輔助功能 → 朗讀內容 → 聲音」中下載更多系統語音。'],
      ['免費額度', '可同時保留 3 本自匯入書籍，歡迎指南不佔額度；刪除會一併清理相關劃線和進度並釋放名額。Pro 一次性解鎖無限書架，不自動續費。'],
      ['恢復購買', '在「我的 → Chibook Pro」選擇「恢復購買」，並使用購買時的 Apple 帳戶。此操作僅恢復權益，不同步書籍。退款後已有書籍仍可閱讀和聽書，新增匯入受免費額度限制。'],
      ['購買無法載入', '請檢查網路和系統購買限制，點擊「重新整理價格與購買狀態」。最終價格以 App Store 為準。'],
      ['刪除資料', '在耳讀中開啟「我的 → 清除所有本地資料」。']
    ],
    contact: '聯絡我們', supportContact: '聯絡支援', privacyContact: '如需支援或提出隱私請求，請透過以下信箱聯絡我們。', supportBody: '如需協助，請傳送郵件至：'
  }
};

export function infoMetadata(language) {
  const c = copy[language];
  return { title: infoPage === 'privacy' ? c.privacyTitle : c.supportTitle, description: infoPage === 'privacy' ? c.privacyIntro : c.supportIntro };
}

export function InfoPage({ language, chooseLanguage, t }) {
  const c = copy[language];
  const privacy = infoPage === 'privacy';
  return <>
    <a className="skip-link" href="#main">{c.skip}</a>
    <header className="header info-header">
      <a className="brand" href="/" aria-label={`Chibook · ${c.home}`}><img src="/assets/logo.png" width="42" height="42" alt="Chibook" /><span>Chibook</span></a>
      <div className="language-switch" role="group" aria-label={t("语言")}>
        <button onClick={() => chooseLanguage('zh')} aria-pressed={language === 'zh'}><span lang="zh-CN" className={language === 'zh' ? 'active' : ''}>简</span></button>
        <span aria-hidden="true">/</span>
        <button onClick={() => chooseLanguage('tw')} aria-pressed={language === 'tw'}><span lang="zh-TW" className={language === 'tw' ? 'active' : ''}>繁</span></button>
        <span aria-hidden="true">/</span>
        <button onClick={() => chooseLanguage('en')} aria-pressed={language === 'en'}><span lang="en" className={language === 'en' ? 'active' : ''}>EN</span></button>
      </div>
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
