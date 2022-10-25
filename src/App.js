import { useEffect, useRef } from 'react';
import './App.css';
import canimg from './assets/cans.png'
import gsap, {Power2} from 'gsap';
import {FaShoppingBag} from 'react-icons/fa';

function App() {
  const canRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.from(canRef.current, {
      duration: 1,
      opacity: 0,
      y: -500,
    });

    gsap.from(titleRef.current, {
      duration: 1,
      opacity: 0,
      x: -800,
      ease: Power2.easeOut,
    })

  }, [])

  return (
    <div className="App">
      <div className="navcontainer">
        <div className="nav">
        <h1 className='logo'>fresh⁰⁰</h1>
        <FaShoppingBag className='bag' />
        </div>
      </div>
      <div className='title'>
        <div ref={titleRef}>
        <h1>Deneme</h1>
        <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <img src={canimg} alt="" ref={canRef} />
      </div>
    </div>
  );
}

export default App;
