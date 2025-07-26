import React, { useState } from 'react'
import Home1 from './Home1';
import Home2 from './Home2';

const Home = () => {
    // const leftButton = false;
    const [leftButton,setLeftButton] = useState(false);
  return (
    <div className="bg-white w-full max-h-screen relative">

        {leftButton?<Home1/>:<Home2 leftButton={leftButton} setLeftButton={setLeftButton}/>}
      
    </div>
  );
}

export default Home