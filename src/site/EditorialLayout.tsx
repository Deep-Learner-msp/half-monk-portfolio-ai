import { createContext, useContext, type ReactNode } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { EMAIL, GITHUB, LINKEDIN } from '@/content/profile';
import { useTheme, type Theme } from './theme';
import { useScrolled } from './useScrolled';
import '@/styles/editorial.css';

const ThemeCtx = createContext<Theme>('dark');
export const useReadingTheme = () => useContext(ThemeCtx);

const NAV: [string, string][] = [
  ['Writing', '/writing'],
  ['Papers', '/papers'],
  ['Research', '/research'],
  ['About', '/about'],
];

/** Shell for the reading pages: serif wordmark, primary nav, theme toggle, quiet footer. */
export function EditorialLayout({ children }: { children: ReactNode }) {
  const { theme, toggle } = useTheme();
  const scrolled = useScrolled();
  return (
    <ThemeCtx.Provider value={theme}>
      <div className="ed" data-theme={theme}>
        <div className="ed-frame">
          <div className={'ed-bar' + (scrolled ? ' is-solid' : '')}>
          <header className="ed-header">
            <Link to="/" className="ed-brand">
              MSP Raja
            </Link>
            <nav aria-label="Primary" className="ed-nav">
              {NAV.map(([label, to]) => (
                <NavLink key={to} to={to} className={({ isActive }) => 'ed-nav-link' + (isActive ? ' is-active' : '')}>
                  {label}
                </NavLink>
              ))}
              <button
                type="button"
                className="ed-theme"
                onClick={toggle}
                aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
              >
                {theme === 'dark' ? 'Light' : 'Dark'}
              </button>
            </nav>
          </header>
          </div>

          {children}

          <footer className="ed-footer">
            <div className="ed-fade-rule" />
            <div className="ed-footer-row">
              <p className="ed-footer-line">Best reached by email. I reply in writing.</p>
              <div className="ed-footer-links">
                <a href={'mailto:' + EMAIL}>Email</a>
                <a href={LINKEDIN} target="_blank" rel="noopener me">
                  LinkedIn
                </a>
                <a href={GITHUB} target="_blank" rel="noopener me">
                  GitHub
                </a>
                <a href="/rss.xml">RSS</a>
              </div>
            </div>
            <p className="ed-copy">© {new Date().getFullYear()} MSP Raja</p>
          </footer>
        </div>
      </div>
    </ThemeCtx.Provider>
  );
}
