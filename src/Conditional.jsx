import React, { useState } from 'react';

function Conditional() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  let content;
  if (isLoggedIn) {
   
    content = (
      <button
        className="px-6 py-2 bg-black text-amber-50 rounded-lg hover:bg-amber-500 transition-colors duration-300"
        onClick={handleLogout}
      >
        Logout
      </button>
    );
  } else {
   
    content = (
      <button
        className="px-6 py-2 bg-black text-amber-50 rounded-lg hover:bg-amber-500 transition-colors duration-300"
        onClick={handleLogin}
      >
        Login
      </button>
    );
  }

  return (
    <div className="flex justify-center items-center h-screen">
      {content}
    </div>
  );
}

export default Conditional;
