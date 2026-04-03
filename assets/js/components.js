/**
 * Ram Technical Help - Shared UI Components
 * Centralizes Header and Footer management.
 */

const Components = {
    init() {
        // Auto-inject FontAwesome if missing
        if (!document.querySelector('link[href*="font-awesome"]')) {
            const fa = document.createElement('link');
            fa.rel = 'stylesheet';
            fa.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
            document.head.appendChild(fa);
        }

        this.renderHeader();
        this.renderFooter();
        this.renderSocialShare();
        this.ensureFavicon();
        this.renderCookieConsent();
    },

    renderCookieConsent() {
        if (!localStorage.getItem('cookieConsent')) {
            const banner = document.createElement('div');
            banner.id = 'cookie-consent-banner';
            banner.innerHTML = `
                <div class="cookie-content">
                    <p>We use cookies to personalize content, show ads, and analyze website traffic. By clicking "Accept All", you consent to our use of cookies per our <a href="privacy.html">Privacy Policy</a>.</p>
                    <div class="cookie-buttons">
                        <button id="accept-cookies" class="btn btn-sm" style="background:var(--brand-primary); color:white;">Accept All</button>
                    </div>
                </div>
            `;
            document.body.appendChild(banner);

            document.getElementById('accept-cookies').addEventListener('click', () => {
                localStorage.setItem('cookieConsent', 'true');
                banner.classList.add('hide');
                setTimeout(() => banner.remove(), 400);
            });
        }
    },

    ensureFavicon() {
        if (!document.querySelector('link[rel*="icon"]')) {
            const link = document.createElement('link');
            link.type = 'image/png';
            link.rel = 'icon';
            link.href = 'assets/img/rth-logo.png';
            document.getElementsByTagName('head')[0].appendChild(link);
        }
    },

    renderHeader() {
        const header = document.querySelector('.site-header');
        if (!header) return;

        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const isAdmin = currentPage === 'admin.html';
        const isAuth = currentPage === 'login.html';

        const logoText = 'Ram Technical Help';

        const navItems = [
            { name: 'Home', url: 'index.html', check: (cp) => cp === 'index.html' },
            {
                name: 'Learn',
                url: 'qa-testing.html',
                check: (cp) => ['qa-testing.html', 'manual-testing.html', 'automation-testing.html', 'api-testing.html', 'sql-testing.html'].includes(cp),
                dropdown: [
                    { name: 'Manual Testing', url: 'manual-testing.html' },
                    { name: 'Automation Testing', url: 'automation-testing.html' },
                    { name: 'API Testing', url: 'api-testing.html' },
                    { name: 'SQL Testing', url: 'sql-testing.html' }
                ]
            },
            {
                name: 'Practice',
                url: 'practice-lab.html',
                check: (cp) => ['practice-lab.html', 'problems.html', 'mobile-problems.html'].includes(cp),
                dropdown: [
                    { name: 'Practice Lab (2.0) <span class="badge-new">NEW</span>', url: 'practice-lab.html' },
                    { name: 'PC Troubleshooting', url: 'problems.html' },
                    { name: 'Mobile Issues', url: 'mobile-problems.html' }
                ]
            },
            {
                name: 'Interview Prep',
                url: 'qa-testing.html',
                check: (cp) => ['qa-testing.html', 'MobileTesting.html', 'QALeadInterviewQ&A.html', 'ai-testing.html', 'mock-interview.html'].includes(cp),
                dropdown: [
                    { name: 'All Interview Q&A', url: 'qa-testing.html' },
                    { name: 'Mock Interview Prep <span class="badge-new">NEW</span>', url: 'mock-interview.html' },
                    { name: 'AI Testing Prep <span class="badge-new">NEW</span>', url: 'ai-testing.html' },
                    { name: 'Mobile Testing', url: 'MobileTesting.html' },
                    { name: 'QA Lead Interview', url: 'QALeadInterviewQ&A.html' }
                ]
            },
            {
                name: 'Resources',
                url: 'faq.html',
                check: (cp) => cp === 'faq.html' || cp.startsWith('blog'),
                dropdown: [
                    { name: 'FAQs', url: 'faq.html' },
                    { name: 'Technical Blog', url: 'blog.html' }
                ]
            },
            { name: 'Contact', url: 'contact.html', check: (cp) => cp === 'contact.html' }
        ];

        header.innerHTML = `
            <div class="container header-inner">
                <a class="logo" href="index.html">
                    <div class="logo-3d-wrap">
                        <img src="assets/img/rth-logo.png" alt="Ram Technical Help Logo">
                    </div>
                    <span class="logo-text">${logoText}</span>
                </a>
                <nav class="nav">
                    ${navItems.map(item => {
            if (item.dropdown) {
                return `
                                <div class="nav-item-dropdown">
                                    <a href="${item.url}" ${item.check(currentPage) ? 'class="dropdown-trigger is-active" aria-current="page"' : 'class="dropdown-trigger"'} data-i18n="nav_${item.name.toLowerCase().replace(/\s+/g, '_')}">
                                        ${item.name} <i class="fas fa-chevron-down" style="font-size: 0.7rem; margin-top:2px;"></i>
                                    </a>
                                    <div class="dropdown-menu">
                                        ${item.dropdown.map(d => `<a href="${d.url}" ${currentPage === d.url ? 'class="is-active"' : ''}>${d.name}</a>`).join('')}
                                    </div>
                                </div>
                            `;
            }
            return `
                            <a href="${item.url}" ${item.check(currentPage) ? 'class="is-active" aria-current="page"' : ''} data-i18n="nav_${item.name.toLowerCase().replace(/\s+/g, '_')}">${item.name}</a>
                        `;
        }).join('')}
                    ${isAdmin ? `
                        <div class="nav-item-dropdown lang-menu">
                            <button class="dropdown-trigger lang-trigger" id="lang-btn" title="Select Language">
                                <i class="fas fa-globe"></i>
                                <span id="current-lang-code">EN</span>
                            </button>
                            <div class="dropdown-menu modern-dropdown" id="lang-dropdown">
                                <div class="dropdown-header">Select Language</div>
                                <a href="#" data-lang="en">English</a>
                                <a href="#" data-lang="hi">Hindi</a>
                                <a href="#" data-lang="ta">Tamil</a>
                                <a href="#" data-lang="mr">Marathi</a>
                                <a href="#" data-lang="zh">Chinese</a>
                                <a href="#" data-lang="ja">Japanese</a>
                                <a href="#" data-lang="pt">Portuguese</a>
                                <a href="#" data-lang="de">German</a>
                                <a href="#" data-lang="fr">French</a>
                                <a href="#" data-lang="es">Spanish</a>
                            </div>
                        </div>
                        <button id="global-search-trigger" title="Quick Search (Ctrl + K)" aria-label="Search"><i class="fas fa-search"></i> <span style="font-size: 0.7rem; padding: 2.5px 6px; background: rgba(0,0,0,0.1); border-radius: 4px; margin-left: 5px; opacity: 0.8; vertical-align: middle;">Ctrl+K</span></button>
                        <button id="theme-toggle-comp" title="Toggle Dark Mode" aria-label="Toggle Dark Mode">🌓</button>
                        <button onclick="Auth.logout()" class="btn btn-sm btn-secondary">Logout</button>
                    ` : `
                        <div class="nav-item-dropdown lang-menu">
                            <button class="dropdown-trigger lang-trigger" id="lang-btn" title="Select Language">
                                <i class="fas fa-globe"></i>
                                <span id="current-lang-code">EN</span>
                            </button>
                            <div class="dropdown-menu modern-dropdown" id="lang-dropdown">
                                <div class="dropdown-header">Select Language</div>
                                <a href="#" data-lang="en">English</a>
                                <a href="#" data-lang="hi">Hindi</a>
                                <a href="#" data-lang="ta">Tamil</a>
                                <a href="#" data-lang="mr">Marathi</a>
                                <a href="#" data-lang="zh">Chinese</a>
                                <a href="#" data-lang="ja">Japanese</a>
                                <a href="#" data-lang="pt">Portuguese</a>
                                <a href="#" data-lang="de">German</a>
                                <a href="#" data-lang="fr">French</a>
                                <a href="#" data-lang="es">Spanish</a>
                            </div>
                        </div>
                        <!-- <a href="login.html" class="btn btn-sm" ${currentPage === 'login.html' ? 'aria-current="page"' : ''}>Login</a> -->
                        <button id="global-search-trigger" title="Quick Search (Ctrl + K)" aria-label="Search"><i class="fas fa-search"></i> <span style="font-size: 0.7rem; padding: 2.5px 6px; background: rgba(0,0,0,0.1); border-radius: 4px; margin-left: 5px; opacity: 0.8; vertical-align: middle;">Ctrl+K</span></button>
                        <button id="theme-toggle-comp" title="Toggle Dark Mode" aria-label="Toggle Dark Mode">🌓</button>
                    `}
                </nav>
            </div>
            <!-- Professional Translation Bridge (Hidden) -->
            <div id="google_translate_element" style="display:none"></div>

            <!-- Global Search Overlay -->
            <div id="search-overlay" class="search-overlay">
                <div class="search-modal">
                    <div class="search-header">
                        <input type="text" id="global-search-input" placeholder="Search questions, fixes, or topics..." autocomplete="off">
                        <button class="close-search">&times;</button>
                    </div>
                    <div id="search-results" class="search-results">
                        <div class="search-hint">Type at least 3 characters to search...</div>
                    </div>
                </div>
            </div>
        `;

        // Search trigger event - Handle all instances (Desktop & Mobile)
        const triggers = document.querySelectorAll('#global-search-trigger');
        const overlay = document.getElementById('search-overlay');
        const close = overlay ? overlay.querySelector('.close-search') : null;
        const input = document.getElementById('global-search-input');

        if (triggers.length > 0 && overlay && input) {
            triggers.forEach(trigger => {
                trigger.addEventListener('click', (e) => {
                    e.preventDefault();
                    overlay.classList.add('active');
                    setTimeout(() => input.focus(), 100); // Small delay for focus
                    document.body.style.overflow = 'hidden';
                });
            });

            if (close) {
                close.addEventListener('click', () => {
                    overlay.classList.remove('active');
                    document.body.style.overflow = '';
                });
            }

            overlay.addEventListener('click', (e) => {
                if (e.target === overlay) overlay.classList.remove('active');
                document.body.style.overflow = '';
            });
        }

        // Language Selector logic
        const langBtn = document.getElementById('lang-btn');
        const langDropdown = document.getElementById('lang-dropdown');
        const currentLangCode = document.getElementById('current-lang-code');

        if (langBtn && langDropdown) {
            langBtn.addEventListener('click', (e) => {
                e.preventDefault();
                langDropdown.classList.toggle('active');
                e.stopPropagation();
            });

            document.addEventListener('click', () => {
                langDropdown.classList.remove('active');
            });

            langDropdown.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', async (e) => {
                    e.preventDefault();
                    const lang = link.getAttribute('data-lang');

                    if (window.I18n) {
                        await window.I18n.setLanguage(lang);
                        if (currentLangCode) currentLangCode.textContent = lang.toUpperCase();
                    }

                    // Highlight active
                    langDropdown.querySelectorAll('a').forEach(l => l.classList.remove('is-active'));
                    link.classList.add('is-active');

                    langDropdown.classList.remove('active');
                });
            });

            // Set initial code
            const savedLang = localStorage.getItem('site_lang') || 'en';
            if (currentLangCode) currentLangCode.textContent = savedLang.toUpperCase();

            // Highlight saved lang in menu
            const activeLink = langDropdown.querySelector(`[data-lang="${savedLang}"]`);
            if (activeLink) activeLink.classList.add('is-active');
        }

        // Inject i18n script if not present
        if (!document.getElementById('i18n-script')) {
            const script = document.createElement('script');
            script.id = 'i18n-script';
            script.src = 'assets/js/i18n.js';
            document.head.appendChild(script);
        }

        // Inject share.js script if not present
        if (!document.getElementById('share-script')) {
            const script = document.createElement('script');
            script.id = 'share-script';
            script.src = 'assets/js/share.js';
            document.head.appendChild(script);
        }

        // Render Global Share UI
        this.renderSocialShare();
        
        // Global Event Delegation for Share Buttons
        document.addEventListener('click', (e) => {
            const btn = e.target.closest('[data-platform]');
            if (!btn) return;
            
            e.preventDefault();
            if (window.Share) {
                window.Share.open(btn.getAttribute('data-platform'));
            } else {
                console.warn('Share utility not ready yet.');
            }
        });
    },

    renderSocialShare() {
        if (document.querySelector('.social-pillar')) return;
        
        // Pillar Bar (Right side desktop, Bottom Bar Mobile)
        const pillar = document.createElement('div');
        pillar.className = 'social-pillar';
        pillar.innerHTML = `
            <button class="pillar-toggle" title="Toggle Panel" style="background:none; border:none; color:var(--text-muted); cursor:pointer; font-size:0.7rem; margin-bottom:5px;"><i class="fas fa-chevron-right"></i></button>
            <div class="pillar-label">Share</div>
            <div class="pillar-icons" style="display:flex; flex-direction:inherit; gap:inherit;">
                <button class="pillar-btn wa" title="WhatsApp" data-platform="whatsapp"><i class="fa-brands fa-whatsapp"></i></button>
                <button class="pillar-btn fb" title="Facebook" data-platform="facebook"><i class="fa-brands fa-facebook-f"></i></button>
                <button class="pillar-btn tw" title="Twitter" data-platform="twitter"><i class="fa-brands fa-twitter"></i></button>
                <button class="pillar-btn li" title="LinkedIn" data-platform="linkedin"><i class="fa-brands fa-linkedin-in"></i></button>
                <button class="pillar-btn tg" title="Telegram" data-platform="telegram"><i class="fa-brands fa-telegram-plane"></i></button>
                <button class="pillar-btn cp" title="Copy Link" data-platform="copy"><i class="fa-solid fa-link"></i></button>
            </div>
        `;
        document.body.appendChild(pillar);

        const toggle = pillar.querySelector('.pillar-toggle');
        if (toggle) {
            toggle.addEventListener('click', () => {
                pillar.classList.toggle('manual-collapsed');
                toggle.querySelector('i').className = pillar.classList.contains('manual-collapsed') ? 'fas fa-chevron-left' : 'fas fa-chevron-right';
            });
        }
    },

    renderFooter() {
        const footer = document.querySelector('.site-footer');
        if (!footer) return;

        footer.innerHTML = `
            <div class="container footer-inner">
                <div class="footer-top">
                    <div class="footer-links">
                        <a href="about.html">About Us</a>
                        <a href="privacy.html">Privacy</a>
                        <a href="disclaimer.html">Disclaimer</a>
                        <a href="terms.html">Terms</a>
                        <a href="contact.html">Contact</a>
                    </div>
                </div>
                <!-- Newsletter Section -->
                <div class="footer-newsletter" style="margin: 2rem 0; padding: 2rem; background: rgba(79, 70, 229, 0.05); border-radius: var(--radius-lg); border: 1px solid rgba(79, 70, 229, 0.1); text-align: center;">
                    <h4 style="margin-bottom: 0.5rem; font-weight: 800; font-size: 1.25rem;">🚀 Ace Your Next Interview</h4>
                    <p class="muted" style="margin-bottom: 1.5rem; font-size: 0.95rem;">Join 5,000+ engineers. Get weekly QA tips, practice sheets, and direct troubleshooting help.</p>
                    <form onsubmit="event.preventDefault(); alert('Thanks for subscribing!');" style="display: flex; gap: 0.75rem; max-width: 500px; margin: 0 auto; flex-wrap: wrap; justify-content: center;">
                        <input type="email" placeholder="Enter your email" required style="flex: 1; min-width: 250px; height: 50px; padding: 0 1.5rem; border-radius: 12px; border: 1px solid var(--border-light); background: var(--bg-surface); font-size: 0.95rem;">
                        <button type="submit" class="btn" style="height: 50px; border-radius: 12px; padding: 0 2rem; font-weight: 700;">Subscribe</button>
                    </form>
                </div>
                <div class="footer-bottom">
                    <p class="footer-copyright">© <span id="year-comp"></span> Ram Technical Help</p>
                    <div class="footer-sharing">
                        <div class="footer-share-grid">
                            <button class="share-icon wa" data-platform="whatsapp" title="Share on WhatsApp"><i class="fa-brands fa-whatsapp"></i></button>
                            <button class="share-icon fb" data-platform="facebook" title="Share on Facebook"><i class="fa-brands fa-facebook-f"></i></button>
                            <button class="share-icon tw" data-platform="twitter" title="Share on Twitter"><i class="fa-brands fa-twitter"></i></button>
                            <button class="share-icon li" data-platform="linkedin" title="Share on LinkedIn"><i class="fa-brands fa-linkedin-in"></i></button>
                            <button class="share-icon tg" data-platform="telegram" title="Share on Telegram"><i class="fa-brands fa-telegram-plane"></i></button>
                            <button class="share-icon cp" data-platform="copy" title="Copy URL"><i class="fa-solid fa-link"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        const yearEl = document.getElementById('year-comp');

        // -- Start Added Premium Features --
        
        // 1. Reading Progress Bar
        const prog = document.createElement('div');
        prog.className = 'reading-progress-bar';
        document.body.appendChild(prog);
        window.addEventListener('scroll', () => {
            const h = document.documentElement;
            const scroll = h.scrollTop || document.body.scrollTop;
            const height = h.scrollHeight - h.clientHeight;
            prog.style.width = (scroll / height) * 100 + "%";
        });

        // 2. Mock AI Mentor Widget
        if(!document.querySelector('.qa-mentor-widget')) {
            const mentor = document.createElement('div');
            mentor.className = 'qa-mentor-widget';
            mentor.innerHTML = `
                <div class="qa-mentor-panel" id="mentorPanel">
                    <div class="qa-mentor-header">
                        <span><i class="fas fa-robot" style="color:var(--brand-primary)"></i> QA Mentor AI</span>
                        <i class="fas fa-times" style="cursor:pointer; color:var(--text-muted);" onclick="document.getElementById('mentorPanel').style.display='none'"></i>
                    </div>
                    <div class="qa-mentor-body">
                        <div class="chat-msg">Hi! Need help tracking a bug, finding XPath, or writing a test? Check out our interactive hands-on labs!</div>
                        <a href="practice-lab.html" class="btn btn-outline" style="display:block; text-align:center; width: 100%">Go to Practice Lab <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>
                <button class="qa-mentor-btn" onclick="const p = document.getElementById('mentorPanel'); p.style.display = (p.style.display==='flex')?'none':'flex';">
                    <i class="fas fa-comment-dots"></i>
                </button>
            `;
            document.body.appendChild(mentor);
        }

        // 3. PWA & Service Worker Logic
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js').catch(err => console.log('SW registration failed: ', err));
        }
        
        // Inject Manifest tag dynamically into HEAD to avoid touching all HTML files manually
        if(!document.querySelector('link[rel="manifest"]')){
            const manifestLink = document.createElement('link');
            manifestLink.rel = 'manifest';
            manifestLink.href = 'manifest.json';
            document.head.appendChild(manifestLink);
        }
        // -- End Added Premium Features --

        if (yearEl) yearEl.textContent = new Date().getFullYear();
    },
};

// Initialize if script is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => Components.init());
} else {
    Components.init();
}
