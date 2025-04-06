import { useState } from 'react';
import { Member, NewMember } from '../types/types';
import { initialMembers } from '../constants/mockMembers';

export const useMembers = () => {
  const [members, setMembers] = useState<Member[]>(initialMembers);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  
  const addMember = (newMember: NewMember) => {
    const memberWithId: Member = {
      ...newMember,
      id: Math.max(0, ...members.map(m => m.id)) + 1,
    };
    setMembers(prev => [...prev, memberWithId]);
  };

  
  const filteredMembers = members.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedMembers = [...filteredMembers].sort((a, b) => {
    return sortDirection === 'asc' 
      ? a.name.localeCompare(b.name) 
      : b.name.localeCompare(a.name);
  });

  return {
    members: sortedMembers,
    addMember,
    searchTerm,
    setSearchTerm,
    sortDirection,
    setSortDirection,
  };
};