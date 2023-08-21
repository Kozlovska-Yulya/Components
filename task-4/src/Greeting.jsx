// import React from 'react';

// const Greeting = (props) => {
//   const { firstName, lastName, birthDate } = props;

//   return (
//     <div className="greeting">
//       {`My name is ${firstName} ${lastName}. I am ${birthDate} years old`}
//     </div>
//   );
// };

// export default Greeting;

import React from 'react';

const Greeting = (props) => {
  const { firstName, lastName, birthDate } = props;

  // Создаем объект Date для текущей даты
  const currentDate = new Date();

  const birthDateTime = new Date(birthDate);

  const ageInMilliseconds = currentDate - birthDateTime;

  const ageInYears = Math.floor(
    ageInMilliseconds / (365 * 24 * 60 * 60 * 1000)
  );

  return (
    <div className="greeting">
      {`My name is ${firstName} ${lastName}. I am ${ageInYears} years old`}
    </div>
  );
};

export default Greeting;
