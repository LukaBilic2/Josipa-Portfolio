import { useRef, useState, useEffect } from 'react';
import './Chair.css';

const Chair = ({ quotes = [] }) => {
  const containerRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState(4);
  const [activeDirection, setActiveDirection] = useState(null);

  useEffect(() => {
    const updateVisibleItems = () => {
      if (window.innerWidth < 600) {
        setVisibleItems(1);
      } else if (window.innerWidth < 900) {
        setVisibleItems(2);
      } else {
        setVisibleItems(4);
      }
    };

    updateVisibleItems();
    window.addEventListener('resize', updateVisibleItems);
    return () => window.removeEventListener('resize', updateVisibleItems);
  }, []);

  const scrollByGroup = (direction) => {
    setActiveDirection(direction);
    const container = containerRef.current;
    if (!container) return;

    const box = container.querySelector('.chair-box');
    if (!box) return;

    const boxWidth = box.offsetWidth + 16; // 16px to include margin
    const totalVisible = visibleItems;
    const scrollAmount = boxWidth * totalVisible;

    const currentScrollLeft = container.scrollLeft;
    const currentPage = Math.round(currentScrollLeft / scrollAmount);
    const nextPage = direction === 'left' ? currentPage - 1 : currentPage + 1;

    container.scrollTo({
      left: nextPage * scrollAmount,
      behavior: 'smooth',
    });
  };

  // Drag-to-scroll logic
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    const handlePointerDown = (e) => {
      isDown = true;
      container.classList.add('chair-grabbing');

      // 🔥 Disable smooth scrolling during drag
      container.style.scrollBehavior = 'auto';

      startX = e.clientX;
      scrollLeft = container.scrollLeft;
    };

    const handlePointerMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.clientX;
      const walk = x - startX;
      container.scrollLeft = scrollLeft - walk;
    };

    const handlePointerUp = () => {
      isDown = false;
      container.classList.remove('chair-grabbing');

      // ✅ Re-enable smooth scrolling after drag
      container.style.scrollBehavior = 'smooth';
    };

    container.addEventListener('pointerdown', handlePointerDown);
    container.addEventListener('pointermove', handlePointerMove);
    container.addEventListener('pointerup', handlePointerUp);
    container.addEventListener('pointerleave', handlePointerUp);

    return () => {
      container.removeEventListener('pointerdown', handlePointerDown);
      container.removeEventListener('pointermove', handlePointerMove);
      container.removeEventListener('pointerup', handlePointerUp);
      container.removeEventListener('pointerleave', handlePointerUp);
    };
  }, []);

  return (
    <div className="chair-wrapper">
      <div className="chair-inner">
        <div className="chair-container" ref={containerRef}>
          {quotes.map((item, index) => (
            <div className="chair-box" key={index}>
              <span className="chair-quote-icon">“</span>
              <h3 className="chair-title">{item.title}</h3>
              <p className="chair-description">{item.description}</p>
              {/* <p className="chair-quote">{item.quote}</p> */}
            </div>
          ))}
        </div>
        <div className="chair-controls">
          <button
            onClick={() => scrollByGroup('left')}
            className={`chair-arrow ${activeDirection === 'left' ? 'active' : 'inactive'}`}
          >
            &#8592;
          </button>
          <button
            onClick={() => scrollByGroup('right')}
            className={`chair-arrow ${activeDirection === 'right' ? 'active' : 'inactive'}`}
          >
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chair;
