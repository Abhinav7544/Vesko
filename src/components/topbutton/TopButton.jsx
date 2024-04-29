import {useState, useEffect} from 'react'
import "./topbutton.scss"

export default function TopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      
      if (scrollPosition > window.innerHeight * 0.8) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };

  return (
    <div className={`top-button-container ${showButton ? 'show' : ''}`}>
      {showButton && (
        <button onClick={scrollToTop} className="top-button">
<svg width="50px" height="50px" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6V18M12 6L7 11M12 6L17 11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </button>
      )}
    </div>
  )
}