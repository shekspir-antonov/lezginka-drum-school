import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-24 md:right-28 z-50 bg-[#e67e22] hover:bg-[#d35400] text-white rounded-full w-14 h-14 md:w-16 md:h-16 flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-[0_10px_30px_rgba(230,126,34,0.5)]"
      aria-label="Наверх"
    >
      <Icon name="ArrowUp" size={28} className="md:w-8 md:h-8" />
    </button>
  );
};

export default ScrollToTopButton;
