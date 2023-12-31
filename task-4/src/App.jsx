import React from 'react';
import Greeting from './Greeting';

const App = () => {
  const user = {
    firstName: 'John',
    lastName: 'Doe',
    birthDate: new Date(),
  };

  return (
    <div>
      <Greeting
        firstName={user.firstName}
        lastName={user.lastName}
        birthDate={user.birthDate}
      />
    </div>
  );
};

export default App;
