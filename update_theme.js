const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'assets', 'css', 'styles.css');
let css = fs.readFileSync(file, 'utf8');

// Replace the :root block completely
const rootRegex = /:root\s*\{[\s\S]*?\/\*\s*---\s*AdSense Specific\s*---\s*\*\/[\s\S]*?\}/i;
const newRoot = `:root {
  /* --- Modern SaaS Premium Brand Palette - Deep Blue, Violet, Neon Cyan --- */
  --brand-primary: #1E3A8A; /* Deep Blue / Indigo */
  --brand-secondary: #7C3AED; /* Purple / Violet */
  --brand-accent: #22D3EE; /* Cyan / Neon Blue */
  --brand-gradient: linear-gradient(135deg, #1E3A8A 0%, #7C3AED 50%, #22D3EE 100%);
  --brand-gradient-hover: linear-gradient(135deg, #1e40af 0%, #6d28d9 50%, #06b6d4 100%);

  /* --- Backgrounds & Surfaces --- */
  --bg-body: #F8FAFC;
  --bg-surface: #ffffff;
  --bg-surface-alt: #f1f5f9;
  --bg-glass: rgba(255, 255, 255, 0.85);
  --bg-glass-heavy: rgba(255, 255, 255, 0.95);

  /* --- Typography Colors --- */
  --text-main: #0F172A;
  --text-muted: #475569;
  --text-light: #94a3b8;
  --text-on-brand: #ffffff;

  /* --- Borders --- */
  --border-light: rgba(30, 58, 138, 0.1);
  --border-color: rgba(30, 58, 138, 0.2);

  /* --- Status Colors --- */
  --success: #10b981;
  --warning: #f59e0b;
  --danger: #ef4444;

  /* --- Category Colors --- */
  --col-performance: #7C3AED;
  --col-virus: #ef4444;
  --col-hardware: #f59e0b;
  --col-software: #1E3A8A;
  --col-network: #10b981;
  --col-data: #22D3EE;
  --col-battery: #eab308;
  --col-app: #7C3AED;
  --col-ai: #1E3A8A;
  --col-system: #64748b;
  --col-connectivity: #22D3EE;

  /* --- UI Dimensions & Spacing --- */
  --container-width: 1200px;
  --header-height: 5rem;
  --radius-sm: 0.5rem;
  --radius-md: 0.75rem;
  --radius-lg: 1.25rem;
  --radius-xl: 1.75rem;
  --radius-full: 9999px;

  /* --- Effects & Shadows --- */
  --shadow-xs: 0 1px 2px 0 rgb(30 58 138 / 0.05); /* Soft Blue Tint */
  --shadow-sm: 0 4px 6px -1px rgb(30 58 138 / 0.1), 0 2px 4px -2px rgb(30 58 138 / 0.1);
  --shadow-md: 0 10px 15px -3px rgb(30 58 138 / 0.15), 0 4px 6px -4px rgb(30 58 138 / 0.15);
  --shadow-lg: 0 25px 50px -12px rgb(30 58 138 / 0.25);
  --shadow-xl: 0 35px 60px -15px rgb(124 58 237 / 0.3); /* Purple Glow */
  --shadow-brand: 0 15px 35px -10px rgba(124, 58, 237, 0.5);
  --shadow-glow: 0 0 25px rgba(34, 211, 238, 0.5); /* Neon glow */
  --backdrop-blur: 20px;
  --transition-slow: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  --transition-base: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  --transition-fast: all 0.2s ease;
  --transition-theme: background-color 0.4s ease, color 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;
  --font-sans: 'Poppins', 'Inter', system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;

  /* --- AdSense Specific --- */
  --ad-bg: rgba(30, 58, 138, 0.02);
  --ad-border: rgba(30, 58, 138, 0.08);
}`;
css = css.replace(rootRegex, newRoot);

// Ensure Poppins font is imported at the top
if (!css.includes('family=Poppins')) {
    css = "@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');\n" + css;
}

// Ensure [data-theme='dark'] is explicitly defined or updated
const darkRegex = /\[data-theme="dark"\]\s*\{[\s\S]*?\}/i;
const darkRoot = `[data-theme="dark"] {
  --bg-body: #0F172A;
  --bg-surface: #1e293b;
  --bg-surface-alt: #334155;
  --bg-glass: rgba(15, 23, 42, 0.85);
  --bg-glass-heavy: rgba(15, 23, 42, 0.95);
  --text-main: #f8fafc;
  --text-muted: #cbd5e1;
  --text-light: #94a3b8;
  --border-light: rgba(255,255,255,0.1);
  --border-color: rgba(255,255,255,0.2);
  --shadow-xs: 0 1px 2px 0 rgba(0,0,0, 0.3);
  --shadow-sm: 0 4px 6px -1px rgba(0,0,0, 0.4);
  --shadow-md: 0 10px 15px -3px rgba(0,0,0, 0.5);
  --shadow-lg: 0 25px 50px -12px rgba(0,0,0, 0.6);
  --shadow-brand: 0 15px 35px -10px rgba(34, 211, 238, 0.3);
  --shadow-glow: 0 0 25px rgba(34, 211, 238, 0.3);
}`;

if (darkRegex.test(css)) {
    css = css.replace(darkRegex, darkRoot);
} else {
    // Insert after :root block
    css = css.replace(newRoot, newRoot + "\n\n" + darkRoot);
}

// Enhance buttons globally for hover glow & transitions
css = css.replace(/\.btn\s*\{[\s\S]*?\}/g, `.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-full);
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
  border: none;
  font-family: var(--font-sans);
  text-decoration: none;
}`);

css = css.replace(/\.btn-primary\s*\{[\s\S]*?\}/g, `.btn-primary {
  background: var(--brand-gradient);
  color: var(--text-on-brand);
  box-shadow: 0 4px 15px rgba(124, 58, 237, 0.3);
}`);

css = css.replace(/\.btn-primary:hover\s*\{[\s\S]*?\}/g, `.btn-primary:hover {
  background: var(--brand-gradient-hover);
  transform: translateY(-3px) scale(1.02);
  box-shadow: var(--shadow-brand);
}`);

// Injecting card hover effect update
const cardRegex = /\.card:hover\s*\{[\s\S]*?\}/i;
if(cardRegex.test(css)) {
    css = css.replace(cardRegex, `.card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-xl);
  border-color: rgba(34, 211, 238, 0.3);
}`);
}

fs.writeFileSync(file, css);
console.log("Theme successfully updated!");
