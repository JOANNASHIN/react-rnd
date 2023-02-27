import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isLogin, setIsLogin] = useState<Boolean>(false);

  return (
    <nav>
      <div>
        <Link to="/"></Link>
      </div>
    </nav>
  );
}

export default Navigation;