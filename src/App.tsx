import React from 'react';
import MemberList from './components/MemberList/MemberList';
import AddMemberForm from './components/AddMemberForm/AddMemberForm';
import { useMembers } from './hooks/useMembers';
import styles from './App.module.css';

const App: React.FC = () => {
  const { addMember } = useMembers();
  const [menuActive, setMenuActive] = React.useState(false);

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
          <li><a href="#members" className={styles.active}>Members</a></li>
          <li><a href="#add-member">Add Member</a></li>
          
        </ul>
      </nav>

     

{/*       <main className={styles.mainContent}> */}
        <section id="members">
          <MemberList />
        </section>
{/*         <section id="add-member"> */}
          <AddMemberForm onAddMember={addMember} />
{/*         </section> */}
{/*       </main> */}
    </div>
  );
};

export default App;
