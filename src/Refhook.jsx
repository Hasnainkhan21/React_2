import React, { useRef } from 'react';

function Hook() {
  const countRef = useRef(0);

  const handleClick = () => {
    countRef.current += 1;
    console.log('Button clicked', countRef.current);
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default Hook;
