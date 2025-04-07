import React from 'react';
import MemberList from './components/MemberList/MemberList';
import styles from './App.module.css';

const App: React.FC = () => {
  const [menuActive, setMenuActive] = React.useState(false);

  const handleScrollToBottom = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>SuperMorpheus</div>

        <button
          className={styles.menuToggle}
          onClick={() => setMenuActive(!menuActive)}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>

        <ul className={`${styles.navLinks} ${menuActive ? styles.active : ''}`}>
          <li>
            <a href="#members" className={styles.navItem}>
              <span className={styles.text}>Members</span>
            </a>
          </li>
          <li>
            <a href="Addmember" className={styles.navItem} onClick={handleScrollToBottom}>
              <span className={styles.text}>Add Member</span>
            </a>
          </li>
        </ul>
      </nav>

      <section id="members">
        <MemberList />
      </section>
    </div>
  );
};

export default App;
