import React from 'react';
import * as Fa6Icons from 'react-icons/fa6';
import styles from './SortControls.module.css';

interface SortControlsProps {
  direction: 'asc' | 'desc';
  onSortChange: (direction: 'asc' | 'desc') => void;
}

const SortControls: React.FC<SortControlsProps> = ({ direction, onSortChange }) => {
  const DownAZ = Fa6Icons.FaArrowDownAZ as React.ElementType;
  const UpZA = Fa6Icons.FaArrowUpZA as React.ElementType;

  return (
    <div className={styles.container}>
      <button
        className={`${styles.button} ${direction === 'asc' ? styles.active : ''}`}
        onClick={() => onSortChange('asc')}
        aria-pressed={direction === 'asc'}
      >
        <DownAZ className={styles.icon} />
        A → Z
      </button>
      <button
        className={`${styles.button} ${direction === 'desc' ? styles.active : ''}`}
        onClick={() => onSortChange('desc')}
        aria-pressed={direction === 'desc'}
      >
        <UpZA className={styles.icon} />
        Z → A
      </button>
    </div>
  );
};

export default SortControls;
