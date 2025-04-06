import React from 'react';
import {
  FaUser,
  FaBriefcase,
  FaBullseye,
  FaCalendarAlt,
  FaTags
} from 'react-icons/fa';
import { Member } from '../../types/types';
import styles from './MemberCard.module.css';

interface MemberCardProps {
  member: Member;
}

const MemberCard: React.FC<MemberCardProps> = ({ member }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.avatar}>
          {FaUser({ className: styles.avatarIcon })}
        </div>
        <div className={styles.headerContent}>
          <h3 className={styles.name}>{member.name}</h3>
          <div className={styles.role}>
            {FaBriefcase({ className: styles.roleIcon })}
            <span>{member.role}</span>
          </div>
        </div>
      </div>

      <div className={styles.mainContent}>
        <div className={styles.focus}>
          {FaBullseye({ className: styles.focusIcon })}
          <span>{member.focus}</span>
        </div>

        <div className={`${styles.details} ${styles.visible}`}>
          <div className={styles.detailItem}>
            {FaCalendarAlt({ className: styles.detailIcon })}
            <span className={styles.detailLabel}>Joined:</span>
            <span className={styles.detailValue}>
              {new Date(member.joinedDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
          </div>

          <div className={styles.detailItem}>
            {FaTags({ className: styles.detailIcon })}
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
  );
};

export default MemberCard;
