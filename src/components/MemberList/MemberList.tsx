// MemberList.tsx
import React, { useState } from 'react';
import { useMembers } from '../../hooks/useMembers';
import MemberCard from '../MemberCard/MemberCard';
import SortControls from '../SortControls/SortControls';
import SearchBar from '../SearchBar/SearchBar';
import styles from './MemberList.module.css';
import { FiUsers } from 'react-icons/fi';
import AddMemberForm from '../AddMemberForm/AddMemberForm';
import { NewMember, Member } from '../../types/types';

const MemberList: React.FC = () => {
  const { members, searchTerm, setSearchTerm, sortDirection, setSortDirection } = useMembers();
  const [allMembers, setAllMembers] = useState<Member[]>(members);

  const addMember = (newMember: NewMember) => {
    const newId = allMembers.length > 0 ? Math.max(...allMembers.map(m => m.id)) + 1 : 1;
    const memberWithId: Member = { id: newId, ...newMember };
    setAllMembers([...allMembers, memberWithId]);
  };

  const filteredMembers = allMembers.filter((member) =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedMembers = [...filteredMembers].sort((a, b) => {
    if (sortDirection === 'asc') return a.name.localeCompare(b.name);
    if (sortDirection === 'desc') return b.name.localeCompare(a.name);
    return 0;
  });

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
        
      </div>

      {sortedMembers.length > 0 ? (
        <div className={styles.grid}>
          {sortedMembers.map((member) => (
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
      <AddMemberForm onAddMember={addMember} />
    </div>
  );
};

export default MemberList;
