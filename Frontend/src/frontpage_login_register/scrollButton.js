import React from "react";
import {FiArrowUp} from "react-icons/fi";
import { useState} from "react";


//yritin tehä hienoa scroll back up nappulaa mutta ei tämä vielä oikeen onnistu

const ScrollButton = () =>{
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = window.pageYOffset;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
    };

    const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
          /* you can also use 'auto' behaviour
             in place of 'smooth' */
        });
      };

      window.addEventListener('scroll', toggleVisible);
  
  return (
    <button>
     <FiArrowUp onClick={scrollToTop} 
     style={{display: visible ? 'inline' : 'none'}} />
    </button>
  );
}
export default ScrollButton;