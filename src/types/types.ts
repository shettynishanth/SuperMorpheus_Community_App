// src/types/types.ts

export type Member = {
    id: number;
    name: string;
    role: string;
    focus: string;
    joinedDate: string;
    interests: string[];
  };
  
  
  export type NewMember = Omit<Member, 'id'>; 