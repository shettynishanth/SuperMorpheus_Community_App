// AddMemberForm.tsx
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
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      alert('Please enter a name');
      return;
    }
    setShowConfirmation(true);
  };

  const confirmSubmission = () => {
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
    setShowConfirmation(false);
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
            📝 Add Member
          </button>
        </form>
      )}

      {showConfirmation && (
        <div className={styles.confirmationOverlay}>
          <div className={styles.confirmationModal}>
            <div className={styles.confirmationHeader}>
              <h3>Confirm Submission</h3>
            </div>
            <div className={styles.confirmationBody}>
              <p>Are you sure you want to add <strong>{formData.name}</strong> to the member directory?</p>
              <div className={styles.confirmationDetails}>
                <p><strong>Role:</strong> {formData.role || '-'}</p>
                <p><strong>Focus:</strong> {formData.focus || '-'}</p>
                <p><strong>Joined Date:</strong> {formData.joinedDate || '-'}</p>
                <p><strong>Interests:</strong> {formData.interests.join(', ') || '-'}</p>
              </div>
            </div>
            <div className={styles.confirmationActions}>
              <button 
                className={styles.confirmButton}
                onClick={confirmSubmission}
              >
                ✅ Confirm
              </button>
              <button 
                className={styles.cancelButton}
                onClick={() => setShowConfirmation(false)}
              >
                ❌ Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddMemberForm;
