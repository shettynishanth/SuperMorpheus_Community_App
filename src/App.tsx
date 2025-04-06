import React from 'react';
import MemberList from './components/MemberList/MemberList';
import AddMemberForm from './components/AddMemberForm/AddMemberForm';
import { useMembers } from './hooks/useMembers';
import styles from './App.module.css';
// import MemberCard from './components/MemberCard/MemberCard';

const App: React.FC = () => {
  const { addMember } = useMembers();

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>SuperMorpheus Community</h1>
      </header>
      
      <main className={styles.mainContent}>
        <MemberList />
      <AddMemberForm onAddMember={addMember} />

        
      </main>
    </div>
  );
};

export default App;
