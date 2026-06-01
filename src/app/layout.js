import Link from "next/link";
import "./globals.css";

const layoutStyles = {
  navbar: {
    background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  navbarContainer: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 30px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '80px',
  },
  navbarBrand: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    color: 'white',
    fontWeight: '600',
    fontSize: '24px',
    letterSpacing: '-0.5px',
  },
  brandIcon: {
    fontSize: '32px',
  },
  navbarNav: {
    display: 'flex',
    gap: '40px',
  },
  navLink: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontWeight: '500',
    fontSize: '16px',
    padding: '10px 16px',
    borderRadius: '8px',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    position: 'relative',
  },
  mainContent: {
    minHeight: 'calc(100vh - 160px)',
    padding: '60px 30px',
  },
  footer: {
    background: '#1e3c72',
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
    padding: '30px',
    fontSize: '14px',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
  },
};

export const metadata = {
  title: "List App - Professional Task Management",
  description: "A professional task management application to organize and manage your items efficiently",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <header style={layoutStyles.navbar}>
          <div style={layoutStyles.navbarContainer}>
            <div style={layoutStyles.navbarBrand}>
              <span style={layoutStyles.brandIcon}>✓</span>
              <span>TaskList Pro</span>
            </div>
            <nav style={layoutStyles.navbarNav}>
              <Link href="/" style={layoutStyles.navLink}>
                Home
              </Link>
              <Link href="/list" style={layoutStyles.navLink}>
                List
              </Link>
            </nav>F
          </div>
        </header>
        
        <main style={layoutStyles.mainContent}>
          {children}
        </main>

        <footer style={layoutStyles.footer}>
          <p>&copy; 2026 TaskList Pro. Crafted for productivity.</p>
        </footer>
      </body>
    </html>
  );
}
