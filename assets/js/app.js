/**
 * Ram Technical Help - Main Application Logic
 * Includes Auth simulation, Form Validation, and UI interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
  App.init();
});

const App = {
  init() {
    this.updateYear();
    this.handleGlobalSearch();
    this.checkAuthStatus();
    this.setupIntersectionObserver();
    this.initMobileMenu();
    this.initSocialShares();
    this.initExamMode();
    this.initDailyChallenge();
    this.initScrollEffects();
    this.initTheme();
    this.handleGlobalSearch();
    this.initSearch();
    this.renderBreadcrumbs();
    this.setupGlobalSearchAPI();

    // Auto-init specific modules based on page content
    if (document.getElementById('videoMount')) VideoPlayer.init();
    if (document.querySelector('.captcha')) Captcha.initAll();
  },

  initSocialShares() {
    const shares = document.querySelectorAll('.share-btn');
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(document.title);

    shares.forEach(btn => {
      let href = btn.getAttribute('href');
      if (href) {
        href = href.replace('[URL]', url).replace('[TITLE]', title);
        btn.setAttribute('href', href);
      }
    });
  },

  initMobileMenu() {
    const headerInner = document.querySelector('.header-inner');
    const nav = document.querySelector('.nav');

    if (headerInner && nav) {
      // Create Toggle Button
      const toggle = document.createElement('button');
      toggle.className = 'mobile-toggle';
      toggle.ariaLabel = 'Toggle Menu';
      toggle.innerHTML = '<span></span><span></span><span></span>';

      // Insert before nav
      headerInner.insertBefore(toggle, nav);

      // Event Listener
      toggle.addEventListener('click', () => {
        const expanded = toggle.getAttribute('aria-expanded') === 'true' || false;
        toggle.setAttribute('aria-expanded', !expanded);
        toggle.classList.toggle('active');
        nav.classList.toggle('active');
        document.body.style.overflow = !expanded ? 'hidden' : ''; // Prevent scrolling
      });

      // Close on link click
      nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          toggle.classList.remove('active');
          nav.classList.remove('active');
          document.body.style.overflow = '';
        });
      });
    }
  },

  updateYear() {
    const el = document.getElementById('current-year');
    if (el) el.textContent = new Date().getFullYear();
  },

  setupGlobalSearchAPI() {
    window.App = window.App || {};
    window.App.openSearch = (query) => {
      const modal = document.getElementById('searchOverlay');
      const input = document.getElementById('global-search-input');
      const trigger = document.getElementById('global-search-trigger');
      
      if (modal && input) {
        modal.classList.add('active');
        input.value = query || '';
        input.focus();
        
        // Trigger the search initialization if not already done
        if (typeof this.initSearch === 'function') {
           // The search listener is already attached to 'input' event in initSearch
           const event = new Event('input', { bubbles: true });
           input.dispatchEvent(event);
        }
      } else {
        // Fallback for pages without modal
        window.location.href = `index.html?q=${encodeURIComponent(query)}`;
      }
    };
  },

  renderBreadcrumbs() {
    // Avoid breadcrumbs on index.html
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    if (currentPage === 'index.html') return;

    const mount = document.getElementById('breadcrumb-mount') || document.querySelector('main .container');
    if (!mount) return;

    const breadcrumbNav = document.createElement('nav');
    breadcrumbNav.className = 'breadcrumbs container reveal';
    breadcrumbNav.setAttribute('aria-label', 'breadcrumb');

    const homeLink = '<a href="index.html"><i class="fas fa-home"></i> Home</a>';
    let currentTitle = document.title.split('|')[0].trim();
    
    // Mapping for cleaner breadcrumbs
    const pathMap = {
      'manual-testing.html': { category: 'Learn', name: 'Manual Testing' },
      'automation-testing.html': { category: 'Learn', name: 'Automation Testing' },
      'api-testing.html': { category: 'Learn', name: 'API Testing' },
      'sql-testing.html': { category: 'Learn', name: 'SQL Testing' },
      'practice-lab.html': { category: 'Practice', name: 'Practice Lab' },
      'problems.html': { category: 'Practice', name: 'PC Issues' },
      'mobile-problems.html': { category: 'Practice', name: 'Mobile Issues' },
      'faq.html': { category: 'Resources', name: 'FAQs' },
      'qa-testing.html': { category: 'Interview', name: 'QA Interview Hub' },
      'mock-interview.html': { category: 'Interview', name: 'Mock Interview' },
      'ai-testing.html': { category: 'Interview', name: 'AI Testing' },
      'contact.html': { category: 'Help', name: 'Contact' }
    };

    const mapping = pathMap[currentPage] || { category: 'Explore', name: currentTitle };

    breadcrumbNav.innerHTML = `
      ${homeLink}
      <i class="fas fa-chevron-right"></i>
      <span class="category">${mapping.category}</span>
      <i class="fas fa-chevron-right"></i>
      <span class="current">${mapping.name}</span>
    `;

    // Insert at top of main
    const main = document.querySelector('main');
    if (main) {
      main.insertBefore(breadcrumbNav, main.firstChild);
    }
  },
  handleGlobalSearch() {
    const params = new URLSearchParams(window.location.search);
    const q = params.get('q');

    // 1. Sync search inputs with URL param
    document.querySelectorAll('input[type="search"], #global-search-input').forEach(input => {
      if (q) input.value = q;
    });

    // 2. Handle Hero Search Box on index.html
    const heroSearchBtn = document.querySelector('.search-large .btn, .search-box .btn-primary');
    const heroSearchInput = document.querySelector('#homeSearch, .search-box input');

    if (heroSearchBtn && heroSearchInput) {
      const runHeroSearch = () => {
        const query = heroSearchInput.value.trim();
        if (query) {
          // Open global search modal with this query
          const trigger = document.getElementById('global-search-trigger');
          const globalInput = document.getElementById('global-search-input');
          if (trigger && globalInput) {
            trigger.click();
            globalInput.value = query;
            globalInput.dispatchEvent(new Event('input'));
          }
        }
      };

      heroSearchBtn.addEventListener('click', runHeroSearch);
      heroSearchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') runHeroSearch();
      });
    }
  },

  async _getSearchData(resultsContainer) {
    if (this._searchDataPromise) return this._searchDataPromise;

    this._searchDataPromise = (async () => {
      try {
        let resp = await fetch('extracted_qa.json');
        if (!resp.ok) resp = await fetch('/extracted_qa.json');

        if (resp.ok) {
          this.searchData = await resp.json();
          return this.searchData;
        }
        throw new Error('Network response not ok');
      } catch (err) {
        console.error('Search init fail:', err);
        if (resultsContainer) {
          resultsContainer.innerHTML = `
            <div class="search-hint" style="color: var(--danger); text-align: center; padding: 2rem;">
              <strong>⚠️ Search Error</strong><br>
              <p style="font-size: 0.9rem; margin-top: 0.5rem; color: var(--text-muted); text-transform: none;">
                Search requires a local server. Please navigate to:<br>
                <a href="http://localhost:8081" style="color: var(--brand-primary); font-weight: bold; text-decoration: underline;">http://localhost:8081</a>
              </p>
            </div>`;
        }
        this._searchDataPromise = null; // Allow retry
        return null;
      }
    })();

    return this._searchDataPromise;
  },

  initSearch() {
    this.searchData = null;
    const input = document.getElementById('global-search-input');
    const resultsContainer = document.getElementById('search-results');
    if (!input || !resultsContainer) return;

    // 1. Preload if on server
    if (location.protocol !== 'file:') {
      this._getSearchData(); // Fire and forget
    }

    // 2. Input listener
    input.addEventListener('input', async (e) => {
      const query = e.target.value.trim().toLowerCase();

      if (query.length < 3) {
        resultsContainer.innerHTML = '<div class="search-hint">Type at least 3 characters to search...</div>';
        return;
      }

      // Show temporary loading state if data not yet here
      if (!this.searchData) {
        resultsContainer.innerHTML = '<div class="search-hint"><i class="fas fa-spinner fa-spin"></i> Initializing database...</div>';
      }

      const data = await this._getSearchData(resultsContainer);
      if (data) this.performSearch(query, resultsContainer);
    });

    // Handle Enter key for specific query
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        const query = e.target.value.trim();
        if (query.length >= 3) {
          this._getSearchData(resultsContainer).then(data => {
            if (data) this.performSearch(query.toLowerCase(), resultsContainer);
          });
        }
      }
    });
  },

  // Security Helpers
  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  },

  performSearch(query, container) {
    let results = [];
    if (!this.searchData) return;

    for (const [category, levels] of Object.entries(this.searchData)) {
      for (const [level, questions] of Object.entries(levels)) {
        questions.forEach(item => {
          if (item.q.toLowerCase().includes(query) || item.en.toLowerCase().includes(query)) {
            results.push({ ...item, category: `${category} (${level})` });
          }
        });
      }
    }

    if (results.length === 0) {
      container.innerHTML = '<div class="search-hint">No results found for your query.</div>';
      return;
    }

    // Security: Escape all dynamic content from the JSON source
    container.innerHTML = results.slice(0, 20).map(item => `
      <div class="result-item" onclick="window.location.href='practice-lab.html?q=${encodeURIComponent(item.q)}'">
        <div class="result-category">${this.escapeHtml(item.category)}</div>
        <div class="result-question">${this.escapeHtml(item.q)}</div>
        <div class="result-answer">${this.escapeHtml(item.en)}</div>
      </div>
    `).join('');
  },

  initDailyChallenge() {
    const dailyTarget = document.getElementById('daily-challenge-mount');
    if (!dailyTarget) return;

    const now = new Date();
    const istOffset = 5.5 * 60 * 60 * 1000;
    const today = new Date(now.getTime() + istOffset).toISOString().split('T')[0];
    const saved = JSON.parse(localStorage.getItem('daily_challenge') || '{}');

    if (saved.date === today && saved.question) {
      this.renderDailyChallenge(saved.question, dailyTarget, saved.status);
    } else {
      this.fetchNewDaily(today, dailyTarget);
    }
  },

  async fetchNewDaily(date, target) {
    try {
      if (!this.searchData) {
        const resp = await fetch('extracted_qa.json');
        this.searchData = await resp.json();
      }

      const all = [];
      for (const levels of Object.values(this.searchData)) {
        for (const questions of Object.values(levels)) {
          all.push(...questions);
        }
      }

      const seed = date.split('-').join('');
      const index = parseInt(seed) % all.length;
      const question = all[index];

      const daily = { date, question, status: 'pending' };
      localStorage.setItem('daily_challenge', JSON.stringify(daily));
      this.renderDailyChallenge(question, target, 'pending');
    } catch (err) {
      console.error('Daily challenge fail:', err);
    }
  },

  renderDailyChallenge(q, target, status) {
    const isCompleted = status === 'completed';
    target.innerHTML = `
      <div class="card daily-card" style="border-left: 4px solid ${isCompleted ? 'var(--success)' : 'var(--brand-primary)'}; background: var(--bg-surface);">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; gap: 1rem;">
          <div style="flex:1;">
            <span class="lang-badge" style="background:${isCompleted ? 'var(--success)' : 'var(--brand-primary)'}; color:white; margin-bottom:0.5rem; display:inline-block;">🔥 Daily Challenge</span>
            <h3 style="margin:0; font-size:1.25rem; font-weight:800; letter-spacing:-0.02em;">${this.escapeHtml(q.q)}</h3>
          </div>
          ${isCompleted ?
        ' <div style="color:var(--success); font-weight:800;">✅ COMPLETED</div>' :
        `<button class="btn btn-sm" onclick="App.showDailyAnswer()">Answer</button>`
      }
        </div>
        <div id="daily-answer" style="display:${isCompleted ? 'block' : 'none'}; margin-top:1.25rem; padding-top:1.25rem; border-top:1px solid var(--border-light);">
          <p style="margin-bottom:0.75rem;"><strong>English:</strong> ${this.escapeHtml(q.en)}</p>
          <p style="margin-bottom:0.75rem; color:var(--text-muted); italic;"><strong>Hinglish:</strong> ${this.escapeHtml(String(q.hi || 'Not available'))}</p>
          ${q.ex ? `<div style="background:var(--bg-surface-alt); padding:0.75rem; border-radius:var(--radius-md); font-size:0.9rem;"><strong>Example:</strong> ${this.escapeHtml(q.ex)}</div>` : ''}
          ${!isCompleted ? `
            <div style="text-align:right; margin-top:1.5rem;">
              <button class="btn btn-sm btn-primary" onclick="App.markDailyLearned()">Mark as Done (+50 XP)</button>
            </div>
          ` : ''}
        </div>
      </div>
    `;
  },

  showDailyAnswer() {
    const el = document.getElementById('daily-answer');
    if (el) el.style.display = 'block';
  },

  markDailyLearned() {
    const saved = JSON.parse(localStorage.getItem('daily_challenge') || '{}');
    saved.status = 'completed';
    localStorage.setItem('daily_challenge', JSON.stringify(saved));

    // Update Streak
    let streak = parseInt(localStorage.getItem('thh_streak') || '0');
    streak++;
    localStorage.setItem('thh_streak', streak.toString());

    alert('Great job! 50 XP and 1 Day Streak added!');
    location.reload();
  },

  checkAuthStatus() {
    const user = Auth.getUser();
    const loginBtn = document.querySelector('a[href="login.html"].btn');

    if (loginBtn) {
      if (user) {
        const learned = JSON.parse(localStorage.getItem('thh_learned') || '[]').length;
        loginBtn.innerHTML = `
          <div style="display:flex; align-items:center; gap:0.5rem;">
            <span>${user.name || user.email.split('@')[0]}</span>
            <span style="font-size:0.75rem; background:var(--brand-primary); color:white; padding:1px 6px; border-radius:10px;">${learned} Learned</span>
          </div>
        `;
        loginBtn.href = "#";
        loginBtn.addEventListener('click', (e) => {
          e.preventDefault();
          if (confirm("Logout from Ram Technical Help?")) {
            Auth.logout();
            window.location.reload();
          }
        });
      }
    }

    // Admin Guard
    if (window.location.pathname.includes('admin.html') && !user) {
      const guard = document.getElementById('adminGuard');
      const panel = document.getElementById('panel');
      if (guard) guard.style.display = 'block';
      if (panel) panel.style.display = 'none';
    } else if (window.location.pathname.includes('admin.html') && user) {
      const guard = document.getElementById('adminGuard');
      const panel = document.getElementById('panel');
      if (guard) guard.style.display = 'none';
      if (panel) panel.style.display = 'block';
    }
  },

  setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    // Auto-add reveal class to common elements if not present, then observe
    const elementsToReveal = document.querySelectorAll('.card, .category-card, .hero h1, .hero p, .grid > *, .step, .reveal, .section-header');
    elementsToReveal.forEach(el => {
      if (!el.classList.contains('reveal')) {
        el.classList.add('reveal');
      }
      observer.observe(el);
    });
  },

  initTheme() {
    // Look for either the hardcoded toggle or the component-generated one
    let toggleBtn = document.getElementById('theme-toggle') || document.getElementById('theme-toggle-comp');

    if (!toggleBtn) {
      // Fallback: Create it if totally missing
      toggleBtn = document.createElement('button');
      toggleBtn.title = 'Toggle Dark Mode';
      toggleBtn.id = 'theme-toggle';
      toggleBtn.ariaLabel = 'Toggle Dark Mode';

      const nav = document.querySelector('.nav');
      if (nav) nav.appendChild(toggleBtn);
    }

    // Check saved preference
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    toggleBtn.innerHTML = savedTheme === 'dark' ? '☀️' : '🌓';

    toggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      toggleBtn.innerHTML = next === 'dark' ? '☀️' : '🌓';
    });
  },

  initScrollAnimations() {
    // Already handled by setupIntersectionObserver.
  },

  initScrollEffects() {
    // 1. Create Scroll Progress Bar
    const progContainer = document.createElement('div');
    progContainer.className = 'scroll-progress-container';
    progContainer.innerHTML = '<div class="scroll-progress-bar" id="scrollBar"></div>';
    document.body.prepend(progContainer);

    // 2. Create Back to Top Button
    const btt = document.createElement('div');
    btt.className = 'back-to-top';
    btt.id = 'backToTop';
    btt.innerHTML = '<i class="fas fa-chevron-up"></i>';
    document.body.appendChild(btt);

    btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    // 3. Scroll Listener
    const scrollBar = document.getElementById('scrollBar');
    window.addEventListener('scroll', () => {
      // Progress Bar
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      if (scrollBar) scrollBar.style.width = scrolled + "%";

      // Back to Top visibility
      if (winScroll > 400) {
        btt.classList.add('show');
      } else {
        btt.classList.remove('show');
      }

      // Social Pillar Minimizer
      const pillar = document.querySelector('.social-pillar');
      if (pillar) {
        if (winScroll > 100) {
          pillar.classList.add('scrolled');
        } else {
          pillar.classList.remove('scrolled');
        }
      }
    });
  },

  saveHistory(id, title) {
    if (!id || !title) return;
    let history = JSON.parse(localStorage.getItem('thh_history') || '[]');
    // Remove if exists to push to top
    history = history.filter(h => h.id !== id);
    history.unshift({ id, title, date: new Date().toISOString() });
    // Keep max 10
    if (history.length > 10) history.pop();
    localStorage.setItem('thh_history', JSON.stringify(history));
  },

  toggleBookmark(id, title) {
    let bookmarks = JSON.parse(localStorage.getItem('thh_bookmarks') || '[]');
    const index = bookmarks.findIndex(b => b.id === id);

    if (index > -1) {
      bookmarks.splice(index, 1);
      alert('Removed from bookmarks.');
    } else {
      bookmarks.push({ id, title, date: new Date().toISOString() });
      alert('Added to bookmarks!');
    }
    localStorage.setItem('thh_bookmarks', JSON.stringify(bookmarks));
    this.updateBookmarkButton(id);
  },
  updateBookmarkButton(id) {
    const btn = document.getElementById('btn-bookmark');
    if (!btn) return;

    const bookmarks = JSON.parse(localStorage.getItem('thh_bookmarks') || '[]');
    const isSaved = bookmarks.some(b => b.id === id);
    btn.textContent = isSaved ? '★ Saved' : '☆ Bookmark';
    btn.classList.toggle('btn-secondary', !isSaved);
    btn.style.background = isSaved ? 'var(--brand-primary)' : '';
    btn.style.color = isSaved ? 'white' : '';
  },

  initExamMode() {
    const listHeader = document.querySelector('.list-header');
    // Look for .qa-item OR details tags in the main content area
    const qaItems = document.querySelectorAll('.qa-item, .main-content details');
    if (!listHeader || qaItems.length === 0) return;

    const toolbar = document.createElement('div');
    toolbar.className = 'exam-toolbar';
    toolbar.style.marginTop = '1.5rem';

    toolbar.innerHTML = `
      <button class="btn btn-sm btn-secondary" id="toggle-answers">🙈 Hide All Answers</button>
      <button class="btn btn-sm btn-secondary" id="reset-exam">♻️ Reset Progress</button>
    `;

    listHeader.appendChild(toolbar);

    const toggleBtn = document.getElementById('toggle-answers');
    let hidden = false;

    toggleBtn.addEventListener('click', () => {
      hidden = !hidden;
      qaItems.forEach(item => {
        if (item.tagName === 'DETAILS') {
          item.open = !hidden;
        } else {
          const answer = item.querySelector('.qa-answer, .qa-content');
          if (answer) answer.style.display = hidden ? 'none' : 'block';
        }
      });
      toggleBtn.textContent = hidden ? '👁️ Show All Answers' : '🙈 Hide All Answers';
    });

    // Add "Mark as Learned" toggle for each QA item
    const learned = JSON.parse(localStorage.getItem('thh_learned') || '[]');

    qaItems.forEach(item => {
      // Find title: either inside summary or a header
      const title = item.querySelector('summary, h3, h4');
      if (!title) return;

      const qId = btoa(title.textContent).substring(0, 16);
      const isLearned = learned.includes(qId);

      const check = document.createElement('button');
      check.className = 'learned-btn';
      check.innerHTML = isLearned ? '✅' : '⚪';
      check.title = 'Mark as Learned';
      check.style.cssText = 'background:none; border:none; cursor:pointer; font-size: 1.2rem; margin-right: 0.5rem;';

      if (title.tagName === 'SUMMARY') {
        title.style.display = 'flex';
        title.style.alignItems = 'center';
        title.style.justifyContent = 'flex-start';
        title.prepend(check);
      } else {
        title.prepend(check);
      }

      if (isLearned) item.style.opacity = '0.6';

      check.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        const currentLearned = JSON.parse(localStorage.getItem('thh_learned') || '[]');
        if (currentLearned.includes(qId)) {
          const idx = currentLearned.indexOf(qId);
          currentLearned.splice(idx, 1);
          check.innerHTML = '⚪';
          item.style.opacity = '1';
        } else {
          currentLearned.push(qId);
          check.innerHTML = '✅';
          item.style.opacity = '0.6';
        }
        localStorage.setItem('thh_learned', JSON.stringify(currentLearned));
      });
    });

    document.getElementById('reset-exam').addEventListener('click', () => {
      if (confirm('Reset all "Learned" progress?')) {
        localStorage.removeItem('thh_learned');
        window.location.reload();
      }
    });
  },

  // Global Progress Sync Utilities
  markLearned(qid) {
    if (!qid) return;
    let learned = JSON.parse(localStorage.getItem('thh_learned') || '[]');
    if (!learned.includes(qid)) {
      learned.push(qid);
      localStorage.setItem('thh_learned', JSON.stringify(learned));
      this.updateHeaderProgress();
      return true;
    }
    return false;
  },

  isLearned(qid) {
    let learned = JSON.parse(localStorage.getItem('thh_learned') || '[]');
    return learned.includes(qid);
  },

  updateHeaderProgress() {
    const user = Auth.getUser();
    const loginLink = document.querySelector('a[href="login.html"].btn');
    if (user && loginLink) {
      const learned = JSON.parse(localStorage.getItem('thh_learned') || '[]').length;
      const countBadge = loginLink.querySelector('span:last-child');
      if (countBadge && countBadge.textContent.includes('Learned')) {
        countBadge.textContent = `${learned} Learned`;
      }
    }
  }
};

const Auth = {
  KEY: 'thh_session',
  USERS_KEY: 'thh_users',

  getUser() {
    try {
      return JSON.parse(localStorage.getItem(this.KEY));
    } catch { return null; }
  },

  getAllUsers() {
    try {
      return JSON.parse(localStorage.getItem(this.USERS_KEY) || '{}');
    } catch { return {}; }
  },

  login(email, password) {
    const users = this.getAllUsers();
    const user = users[email.toLowerCase()];

    if (user && user.password === password) {
      localStorage.setItem(this.KEY, JSON.stringify({
        email: user.email,
        name: user.name || email.split('@')[0]
      }));
      return { success: true };
    }
    return { success: false, message: 'Invalid email or password.' };
  },

  register(name, email, password) {
    const users = this.getAllUsers();
    const emailKey = email.toLowerCase();

    if (users[emailKey]) {
      return { success: false, message: 'User already exists.' };
    }

    users[emailKey] = { name, email, password };
    localStorage.setItem(this.USERS_KEY, JSON.stringify(users));

    // Auto login
    this.login(email, password);
    return { success: true };
  },

  logout() {
    localStorage.removeItem(this.KEY);
  }
};

const VideoPlayer = {
  init() {
    const mount = document.getElementById('videoMount');
    if (!mount) return;

    const params = new URLSearchParams(window.location.search);
    const ytId = params.get('yt');
    // Basic search on YouTube if no specific ID
    const title = document.getElementById('title')?.textContent || document.title;
    const query = encodeURIComponent(`${title} fix`);

    let content = '';

    if (ytId) {
      content = `
        <div class="iframe-wrap">
          <iframe src="https://www.youtube.com/embed/${ytId}" 
            title="Video Guide" 
            allowfullscreen>
          </iframe>
        </div>`;
    } else {
      content = `
        <div class="card text-center">
          <h3>Prefer a Video Guide?</h3>
          <p>Watch tutorials on YouTube for visual steps.</p>
          <a href="https://www.youtube.com/results?search_query=${query}" target="_blank" class="btn">
             Search "${title}" on YouTube
          </a>
        </div>
      `;
    }

    mount.innerHTML = `<div class="video-section mt-4">${content}</div>`;
  }
};

const Captcha = {
  instances: {},

  create(elementId) {
    const el = document.getElementById(elementId);
    if (!el) return null;

    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const id = 'captcha-' + Math.random().toString(36).substr(2, 9);

    this.instances[id] = num1 + num2;

    el.innerHTML = `
      <div class="captcha-wrapper" style="display:flex; align-items:center; gap:10px;">
        <span class="badge">Answer: ${num1} + ${num2} = ?</span>
        <input type="number" id="${id}" style="width:80px; padding: 5px;" required placeholder="Sum">
      </div>
    `;

    return id;
  },

  validate(id) {
    const input = document.getElementById(id);
    if (!input) return false;
    return parseInt(input.value) === this.instances[id];
  },

  initAll() {
    // Helper to auto-create if needed, though usually called by page script
  }
};

// Simple Store for Submissions (Demo)
const Store = {
  get(key, fallback = []) {
    return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback));
  },
  set(key, val) {
    localStorage.setItem(key, JSON.stringify(val));
  }
};
