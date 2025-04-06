import React from 'react';
import { FiSearch, FiX } from 'react-icons/fi';
import type { IconBaseProps } from 'react-icons';
import styles from './SearchBar.module.css';

const SearchIcon = FiSearch as unknown as React.FC<IconBaseProps>;
const ClearIcon = FiX as unknown as React.FC<IconBaseProps>;

interface SearchBarProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClear?: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, onClear }) => {
  return (
    <div className={styles.searchBarContainer}>
      <div className={styles.searchWrapper}>
        <div className={styles.searchIcon}>
          <SearchIcon />
        </div>
        <input
          type="text"
          placeholder="Search members by name, role, or focus..."
          value={value}
          onChange={onChange}
          className={styles.searchInput}
          aria-label="Search community members"
        />
        {value && (
          <button 
            className={styles.clearButton}
            onClick={onClear}
            aria-label="Clear search"
          >
            <ClearIcon />
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
