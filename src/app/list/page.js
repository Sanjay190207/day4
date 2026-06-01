import List from "@/component/List";

const styles = {
  main: {
    maxWidth: '1400px',
    margin: '0 auto',
    width: '100%',
  },
  hero: {
    textAlign: 'center',
    marginBottom: '48px',
  },
  title: {
    fontSize: '48px',
    fontWeight: '800',
    color: '#1e3c72',
    marginBottom: '12px',
    lineHeight: '1.2',
  },
  description: {
    fontSize: '18px',
    color: '#7f8c8d',
    fontWeight: '400',
  },
};

export default function ListPage() {
  return (
    <main style={styles.main}>
      <div style={styles.hero}>
        <h1 style={styles.title}>Your Task Dashboard</h1>
        <p style={styles.description}>View and manage all your tasks in one place</p>
      </div>
      <List/>
    </main>
  );
}
