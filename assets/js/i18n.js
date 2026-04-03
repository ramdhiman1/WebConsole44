/**
 * i18n.js - Internationalization Manager
 * Professional JSON-based translation system for Ram Technical Help.
 */

const I18n = {
    currentLang: localStorage.getItem('site_lang') || 'en',
    
    // Supported Languages
    languages: [
        { code: 'en', name: 'English', flag: '🇺🇸' },
        { code: 'hi', name: 'Hindi', flag: '🇮🇳' },
        { code: 'ta', name: 'Tamil', flag: '🇮🇳' },
        { code: 'mr', name: 'Marathi', flag: '🇮🇳' },
        { code: 'zh', name: 'Chinese', flag: '🇨🇳' },
        { code: 'ja', name: 'Japanese', flag: '🇯🇵' },
        { code: 'pt', name: 'Portuguese', flag: '🇵🇹' },
        { code: 'de', name: 'German', flag: '🇩🇪' },
        { code: 'fr', name: 'French', flag: '🇫🇷' },
        { code: 'es', name: 'Spanish', flag: '🇪🇸' }
    ],

    translations: {}, // Cache for loaded translations

    async init() {
        // Add indicator to body for styling
        document.documentElement.lang = this.currentLang;
        
        // Initial translation trigger
        await this.setLanguage(this.currentLang);
        
        // Add listener for dynamic injection of components
        document.addEventListener('domChanged', () => this.applyTranslations());
    },

    async setLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('site_lang', lang);
        document.documentElement.lang = lang;

        // In a real environment, we'd fetch individual JSON files
        // For this demo/scalable setup, we'll provide the UI keys
        if (!this.translations[lang]) {
            this.translations[lang] = await this.fetchTranslations(lang);
        }

        this.applyTranslations();
        
        // Custom event for other components
        document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
    },

    async fetchTranslations(lang) {
        // Simulation of fetching translations/en.json, translations/hi.json, etc.
        // For professional use, we'd use fetch(`/translations/${lang}.json`)
        
        const langData = {
            'en': {
                'nav_home': 'Home',
                'nav_learn': 'Learn',
                'nav_practice': 'Practice Lab',
                'nav_interview': 'Interview Prep',
                'nav_resources': 'Resources',
                'hero_title': 'Guiding Your QA Excellence',
                'hero_desc': 'World-class training modules for Manual, Automation, and AI-driven testing. Land your dream tech job today.',
                'btn_start': 'Start Learning',
                'btn_practice': 'Practice Lab',
                'btn_mock': 'Mock Interview'
            },
            'hi': {
                'nav_home': 'होम',
                'nav_learn': 'सीखें',
                'nav_practice': 'प्रैक्टिस लैब',
                'nav_interview': 'इंटरव्यू तैयारी',
                'nav_resources': 'संसाधन',
                'hero_title': 'आपकी QA उत्कृष्टता का मार्ग',
                'hero_desc': 'मैनुअल, ऑटोमेशन और AI-आधारित टेस्टिंग के लिए विश्व स्तरीय प्रशिक्षण मॉड्यूल। आज ही अपनी ड्रीम जॉब पाएं।',
                'btn_start': 'सीखना शुरू करें',
                'btn_practice': 'प्रैक्टिस लैब',
                'btn_mock': 'मॉक इंटरव्यू'
            },
            'es': {
               'nav_home': 'Inicio',
               'nav_learn': 'Aprender',
               'nav_practice': 'Lab de Práctica',
               'nav_interview': 'Prep Entrevista',
               'nav_resources': 'Recursos',
               'hero_title': 'Guiando su Excelencia en QA',
               'hero_desc': 'Módulos de entrenamiento de clase mundial para pruebas manuales, automatización e IA. Logre el trabajo de sus sueños hoy.',
               'btn_start': 'Empezar a Aprender',
               'btn_practice': 'Lab de Práctica',
               'btn_mock': 'Entrevista Simulada'
            }
            // Add other languages as needed...
        };

        return langData[lang] || langData['en'];
    },

    applyTranslations() {
        const trans = this.translations[this.currentLang];
        if (!trans) return;

        // 1. Translate elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (trans[key]) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = trans[key];
                } else {
                    el.textContent = trans[key];
                }
            }
        });

        // 2. Fallback: Automatic translation for large blocks using a Professional Translator Service integration
        // Here we can integrate Microsoft/Google Translate API for the content parts
        // to fulfill the "entire website content instantly" requirement for a scalable blog site.
        if (this.currentLang !== 'en') {
            this.enableAutoTranslation(this.currentLang);
        } else {
            this.disableAutoTranslation();
        }
    },

    enableAutoTranslation(lang) {
        // Integrate professional Widget for seamless whole-page conversion
        // This satisfies "entire website instantly" without layout breaks
        if (!window.google || !window.google.translate) {
            const script = document.createElement('script');
            script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
            document.body.appendChild(script);
            
            window.googleTranslateElementInit = () => {
                new google.translate.TranslateElement({
                    pageLanguage: 'en',
                    includedLanguages: this.languages.map(l => l.code).join(','),
                    layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                    autoDisplay: false,
                }, 'google_translate_element');
                
                // Trigger translation after a delay
                setTimeout(() => this.triggerGoogleTranslate(lang), 500);
            };
        } else {
            this.triggerGoogleTranslate(lang);
        }
    },

    triggerGoogleTranslate(lang) {
        const combo = document.querySelector('.goog-te-combo');
        if (combo) {
            combo.value = lang;
            combo.dispatchEvent(new Event('change'));
        }
    },

    disableAutoTranslation() {
        // Clear google translate frames/styles if possible
        const iframe = document.querySelector('.goog-te-banner-frame');
        if (iframe) iframe.style.display = 'none';
        document.body.style.top = '0';
    }
};

// Initialize
document.addEventListener('DOMContentLoaded', () => I18n.init());
