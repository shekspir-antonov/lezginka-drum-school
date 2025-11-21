import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

const WhatsAppButton = () => {
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

  const openWhatsApp = () => {
    const phone = '79217854233';
    const message = encodeURIComponent('Здравствуйте! Хочу записаться на занятия в школу "Ритмы Гор"');
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full w-14 h-14 md:w-16 md:h-16 flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 group"
      aria-label="Написать в WhatsApp"
    >
      <Icon name="MessageCircle" size={28} className="md:w-8 md:h-8" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></span>
      
      <span className="absolute right-full mr-3 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Записаться через WhatsApp
      </span>
    </button>
  );
};

export default WhatsAppButton;
