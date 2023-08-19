import React from 'react';

const Greeting = (props) => {
  const { firstName, lastName, birthDate } = props;

  return (
    <div className="greeting">
      {`My name is ${firstName} ${lastName}. I am ${birthDate} years old`}
    </div>
  );
};

export default Greeting;
