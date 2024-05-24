import { useState } from 'react';
import './App.css';
import useFetch from './hooks/useFetch';
import DesktopApp from './components/DesktopApp/DesktopApp';
import MobileApp from './components/MobileApp/MobileApp';
import { useMediaQuery } from 'react-responsive'


function App() {
  // Media query
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })

  // State for the user list
  const { data } = useFetch("https://jsonplaceholder.typicode.com/users");

  // State for selected user
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="app">
      {
        isDesktopOrLaptop ? 
        <DesktopApp users={data} 
          selectedUser={selectedUser} 
          onUserSelected={(user) => setSelectedUser(user)}/> : 
        <MobileApp users={data} 
          selectedUser={selectedUser} 
          onUserSelected={(user) => setSelectedUser(user)}/>
      }
    </div>
  );
}

export default App;
