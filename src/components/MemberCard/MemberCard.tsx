import React, { useState } from 'react';
import { 
  FiUser, FiBriefcase, FiTarget, FiCalendar, 
  FiTag, FiChevronDown, FiChevronUp 
} from 'react-icons/fi';
import { Member } from '../../types/types';
import styles from './MemberCard.module.css';

interface MemberCardProps {
  member: Member;
}

const MemberCard: React.FC<MemberCardProps> = ({ member }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.avatar}>
          {FiUser({ className: styles.avatarIcon })}
        </div>
        <div className={styles.headerContent}>
          <h3 className={styles.name}>{member.name}</h3>
          <div className={styles.role}>
            {FiBriefcase({ className: styles.roleIcon })}
            <span>{member.role}</span>
          </div>
        </div>
      </div>

      <div className={styles.mainContent}>
        <div className={styles.focus}>
          {FiTarget({ className: styles.focusIcon })}
          <span>{member.focus}</span>
        </div>

        <button 
          className={styles.toggleButton}
          onClick={() => setShowDetails(!showDetails)}
          aria-expanded={showDetails}
        >
          <span>{showDetails ? 'Hide Details' : 'View Details'}</span>
          {showDetails ? FiChevronUp({}) : FiChevronDown({})}
        </button>

        <div className={`${styles.details} ${showDetails ? styles.visible : ''}`}>
          <div className={styles.detailItem}>
            {FiCalendar({ className: styles.detailIcon })}
            <div className={styles.detailContent}>
              <span className={styles.detailLabel}>Joined:</span>
              <span className={styles.detailValue}>
                {new Date(member.joinedDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>
          </div>
          
          <div className={styles.detailItem}>
            {FiTag({ className: styles.detailIcon })}
            <div className={styles.detailContent}>
              <span className={styles.detailLabel}>Interests:</span>
              <div className={styles.tags}>
                {member.interests.map((interest, index) => (
                  <span key={index} className={styles.tag}>
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
