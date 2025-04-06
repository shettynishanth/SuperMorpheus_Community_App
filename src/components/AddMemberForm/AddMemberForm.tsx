import React, { useState } from 'react';
import { NewMember } from '../../types/types';
import styles from './AddMemberForm.module.css';

interface AddMemberFormProps {
  onAddMember: (member: NewMember) => void;
}

const AddMemberForm: React.FC<AddMemberFormProps> = ({ onAddMember }) => {
  const [formData, setFormData] = useState<NewMember>({
    name: '',
    role: '',
    focus: '',
    joinedDate: '',
    interests: []
  });
  const [interestInput, setInterestInput] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      alert('Please enter a name');
      return;
    }
    onAddMember(formData);
    setFormData({
      name: '',
      role: '',
      focus: '',
      joinedDate: '',
      interests: []
    });
    setInterestInput('');
    setShowForm(false);
  };

  const handleInterestKeyPress = (e: React.KeyboardEvent) => {
    if (['Enter', ','].includes(e.key)) {
      e.preventDefault();
      const newInterest = interestInput.trim();
      if (newInterest && !formData.interests.includes(newInterest)) {
        setFormData(prev => ({
          ...prev,
          interests: [...prev.interests, newInterest]
        }));
        setInterestInput('');
      }
    }
  };

  const removeInterest = (interestToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.filter(i => i !== interestToRemove)
    }));
  };

  return (
    <div className={styles.container}>
      <button 
        className={styles.toggleButton}
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? 'Cancel' : '+ Add New Member'}
      </button>

      {showForm && (
        <form onSubmit={handleSubmit} className={styles.form}>
          <h2 className={styles.formTitle}>Add Member Details</h2>

          <div className={styles.formGroup}>
            <label htmlFor="name">Name *</label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="role">Role</label>
            <input
              id="role"
              type="text"
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="focus">Contribution Focus</label>
            <input
              id="focus"
              type="text"
              value={formData.focus}
              onChange={(e) => setFormData({ ...formData, focus: e.target.value })}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="joinedDate">Joined Date</label>
            <input
              id="joinedDate"
              type="date"
              value={formData.joinedDate}
              onChange={(e) => setFormData({ ...formData, joinedDate: e.target.value })}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="interests">Areas of Interest</label>
            <input
              id="interests"
              type="text"
              value={interestInput}
              onChange={(e) => setInterestInput(e.target.value)}
              onKeyDown={handleInterestKeyPress}
              placeholder="Type and press Enter or comma"
            />
            <div className={styles.tags}>
              {formData.interests.map((interest, index) => (
                <span key={index} className={styles.tag}>
                  {interest}
                  <button
                    type="button"
                    className={styles.removeTag}
                    onClick={() => removeInterest(interest)}
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>

          <button type="submit" className={styles.submitButton}>
            ✅ Add Member
          </button>
        </form>
      )}
    </div>
  );
};

export default AddMemberForm;