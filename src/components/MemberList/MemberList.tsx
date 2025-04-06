import React from 'react';
import { useMembers } from '../../hooks/useMembers';
import MemberCard from '../MemberCard/MemberCard';
import SortControls from '../SortControls/SortControls';
import SearchBar from '../SearchBar/SearchBar';
import styles from './MemberList.module.css';
import { FiUsers } from 'react-icons/fi';
import AddMemberForm from '../AddMemberForm/AddMemberForm';
// import MemberCard from './components/MemberCard/MemberCard';

const MemberList: React.FC = () => {
  const { members, searchTerm, setSearchTerm, sortDirection, setSortDirection } = useMembers();
  const { addMember } = useMembers();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
      {FiUsers({ className: styles.headerIcon })}
        <h1 className={styles.title}>Community Member Directory</h1>
        <p className={styles.subtitle}>Discover and connect with community members</p>
      </div>

      <div className={styles.controls}>
        <div className={styles.searchWrapper}>
          <SearchBar 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className={styles.sortWrapper}>
          <SortControls 
            direction={sortDirection}
            onSortChange={setSortDirection}
          />
          
        </div>
        <AddMemberForm onAddMember={addMember} />

      </div>

      {members.length > 0 ? (
        <div className={styles.grid}>
          {members.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      ) : (
        <div className={styles.emptyState}>
          {FiUsers({ className: styles.headerIcon })}
          <h2 className={styles.emptyTitle}>No members found</h2>
          <p className={styles.emptyText}>Try adjusting your search or add a new member</p>
        </div>
      )}
    </div>
  );
};

export default MemberList;