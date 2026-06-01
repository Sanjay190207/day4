import List from "@/component/List";

export default function Home() {
  return (
    <main style={styles.main}>
      <div style={styles.hero}>
        <h1 style={styles.title}>Stay Organized, Stay Productive</h1>
        <p style={styles.description}>Manage your tasks efficiently with our intuitive task management system</p>
        <div style={styles.buttonGroup}>
          <a href="/list" style={styles.ctaButton}>Get Started →</a>
        </div>
      </div>
      
      <div style={styles.featuresContainer}>
        <h2 style={styles.featuresTitle}>Why Choose TaskList Pro?</h2>
        <div style={styles.features}>
          <div style={styles.feature}>
            <div style={styles.featureIcon}>⚡</div>
            <h3 style={styles.featureTitle}>Lightning Fast</h3>
            <p style={styles.featureText}>Instantly add and manage tasks</p>
          </div>
          <div style={styles.feature}>
            <div style={styles.featureIcon}>🎯</div>
            <h3 style={styles.featureTitle}>Simple & Clean</h3>
            <p style={styles.featureText}>Intuitive interface designed for you</p>
          </div>
          <div style={styles.feature}>
            <div style={styles.featureIcon}>🔒</div>
            <h3 style={styles.featureTitle}>Reliable</h3>
            <p style={styles.featureText}>Your tasks, always available</p>
          </div>
        </div>
      </div>

      <List/>
    </main>
  );
}

const styles = {
  main: {
    maxWidth: '1400px',
    margin: '0 auto',
    width: '100%',
  },
  hero: {
    textAlign: 'center',
    marginBottom: '80px',
    animation: 'fadeInDown 0.8s ease-out',
  },
  title: {
    fontSize: '56px',
    fontWeight: '800',
    color: '#1e3c72',
    marginBottom: '16px',
    lineHeight: '1.2',
    letterSpacing: '-1px',
  },
  description: {
    fontSize: '20px',
    color: '#7f8c8d',
    fontWeight: '400',
    marginBottom: '32px',
    maxWidth: '600px',
    margin: '0 auto 32px auto',
  },
  buttonGroup: {
    display: 'flex',
    gap: '16px',
    justifyContent: 'center',
  },
  ctaButton: {
    padding: '14px 36px',
    background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
    color: 'white',
    borderRadius: '10px',
    fontWeight: '600',
    fontSize: '16px',
    textDecoration: 'none',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 4px 15px rgba(30, 60, 114, 0.3)',
    display: 'inline-block',
  },
  featuresContainer: {
    marginBottom: '80px',
    padding: '60px 40px',
    background: 'linear-gradient(135deg, #f8f9fa 0%, #e8ecf1 100%)',
    borderRadius: '16px',
  },
  featuresTitle: {
    fontSize: '36px',
    fontWeight: '700',
    color: '#1e3c72',
    marginBottom: '48px',
    textAlign: 'center',
  },
  features: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '32px',
  },
  feature: {
    background: 'white',
    padding: '32px 24px',
    borderRadius: '12px',
    textAlign: 'center',
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
  },
  featureIcon: {
    fontSize: '48px',
    marginBottom: '16px',
  },
  featureTitle: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#1e3c72',
    marginBottom: '8px',
  },
  featureText: {
    fontSize: '14px',
    color: '#7f8c8d',
  },
};
