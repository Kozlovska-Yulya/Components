import React from 'react';
import Profile from './Profile';

const App = () => {
  const userData = {
    firstName: 'James',
    lastName: 'Bond',
    birthDate: '1991-01-17T11:11:11.819Z',
    birthPlace: 'London',
  };

  return (
    <Profile
      firstName={userData.firstName}
      lastName={userData.lastName}
      birthDate={userData.birthDate}
      birthPlace={userData.birthPlace}
    />
  );
};

export default App;
