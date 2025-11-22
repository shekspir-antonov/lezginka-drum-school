import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  const scrollToContacts = () => {
    const element = document.getElementById('contacts');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@700;800&display=swap');
        
        @keyframes pulse-sync {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.1); opacity: 1; }
        }
        .pulse-icon { animation: pulse-sync 2s ease-in-out infinite; }
      `}} />
      
      <section id="hero" className="relative text-white overflow-hidden px-4 py-[50px]" style={{ 
        paddingTop: '12vh', 
        paddingBottom: '12vh',
        background: 'linear-gradient(135deg, #a72c1a 0%, #d35400 50%, #a72c1a 100%)'
      }}>
        <Icon name="Music" size={48} className="absolute top-8 left-4 md:top-12 md:left-12 opacity-40" />
        <Icon name="Music2" size={64} className="absolute bottom-8 right-4 md:bottom-12 md:right-12 opacity-30" />
        
        <div className="container mx-auto text-center relative z-10 max-w-5xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold md:mb-6 leading-tight text-white my-0 py-0" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Почувствуй
          </h1>
          <h2 className="text-5xl md:text-7xl font-bold md:mb-10 leading-none pulse-icon px-4 my-[18px]" style={{ 
            fontFamily: "'Montserrat', sans-serif",
            color: '#e67e22',
            WebkitTextStroke: '4px white',
            textStroke: '4px white',
            paintOrder: 'stroke fill'
          }}>
            Ритмы Гор
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 leading-relaxed max-w-4xl mx-auto px-4" style={{ fontFamily: "'Open Sans', sans-serif" }}>
            Изучай традиционные кавказские танцы и барабаны с профессиональными мастерами
          </p>
          <div className="flex flex-col items-center justify-center gap-4 max-w-3xl mx-auto px-4">
            <Button 
              onClick={scrollToContacts}
              className="bg-[#e67e22] hover:bg-[#d35400] text-white font-semibold px-8 md:px-10 py-5 md:py-6 text-base md:text-lg rounded-lg shadow-lg flex items-center gap-3 w-full sm:w-auto" 
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <Icon name="Play" size={22} />
              Начать обучение
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;