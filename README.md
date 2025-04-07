# SuperMorpheus Community Member Directory

A responsive web application for managing and exploring community members, built with React and TypeScript.
🔗 **Live Site**: [https://super-morpheus-community-app.vercel.app/](https://super-morpheus-community-app.vercel.app/)
## Features

- Real-time member search by name
- Sorting (A-Z/Z-A)
- Member details toggle (join date/interests)
- Add new members with validation
- Fully responsive design

## Technologies

- **Framework**: [React](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: CSS Modules
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **State Management**: React Hooks

## 🛠️ Tech Stack

- **Framework**: [React](https://reactjs.org/)
- **Styling**: CSS Modules (`App.module.css`)
- **Language**: TypeScript (https://www.typescriptlang.org/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **State Management**: React Hooks
- **Folder Structure**:
  - `components/MemberList` – Displays list of community members
  - `components/AddMemberForm` – Form to add a new member
  - `hooks/useMembers` – Custom hook to manage member state
  - `App.tsx` – Main app component
  - `App.module.css` – Scoped styles for the app

## Installation
### 1. Clone the repository
  ```bash
    git clone https://github.com/your-username/supermorpheus-community-app.git
    cd supermorpheus-community-app

### 2. Install dependencies
    ```bash
    npm install

###3. Start the development server
   ```bash
  npm start
The app will run locally at http://localhost:3000


supermorpheus-community-app/
├── public/
│   ├── index.html
│   └── favicon.ico              
│
├── src/
│   ├── components/              
│   │   ├── MemberList/
│   │   │   ├── MemberList.tsx
│   │   │   └── MemberList.module.css
│   │   ├── MemberCard/
│   │   │   ├── MemberCard.tsx
│   │   │   └── MemberCard.module.css
│   │   ├── SortControls/
│   │   │   ├── SortControls.tsx
│   │   │   └── SortControls.module.css
│   │   ├── SearchBar/
│   │   │   ├── SearchBar.tsx
│   │   │   └── SearchBar.module.css
│   │   └── AddMemberForm/
│   │       ├── AddMemberForm.tsx
│   │       └── AddMemberForm.module.css
│
│   ├── hooks/                   
│   │   └── useMembers.ts
│
│   ├── types/                   
│   │   └── types.ts
│
│   ├── constants/               
│   │   └── mockMembers.ts
│
│   ├── App.tsx                 
│   ├── App.module.css          
│   ├── index.tsx                
│   └── react-app-env.d.ts       
│
├── .gitignore                   
├── package.json                 
├── tsconfig.json               
├── README.md                   
