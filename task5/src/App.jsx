import React from 'react';
import Profile from './Profile';

const userData = {
  firstName: 'James',
  lastName: 'Bond',
  birthDate: '1991-01-17T11:11:11.819Z',
  birthPlace: 'London',
};

const App = () => {
  return (
    <div>
      <Profile
        firstName={userData.firstName}
        lastName={userData.lastName}
        birthDate={userData.birthDate}
        birthPlace={userData.birthPlace}
      />
    </div>
  );
};

export default App;
