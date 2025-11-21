import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
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
      
      <section id="hero" className="relative bg-gradient-to-r from-[#a72c1a] via-[#d35400] to-[#e67e22] text-white py-32 px-4 overflow-hidden">
        <Icon name="Music" size={64} className="absolute top-12 left-12 opacity-40" />
        <Icon name="Music2" size={80} className="absolute bottom-12 right-12 opacity-30" />
        
        <div className="container mx-auto text-center relative z-10 max-w-5xl">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Почувствуй
          </h1>
          <h2 className="text-6xl md:text-8xl font-bold mb-10 leading-none pulse-icon" style={{ 
            fontFamily: "'Montserrat', sans-serif",
            color: '#e67e22',
            WebkitTextStroke: '6px white',
            textStroke: '6px white',
            paintOrder: 'stroke fill'
          }}>
            Ритмы Гор
          </h2>
          <p className="text-xl md:text-2xl mb-12 leading-relaxed max-w-4xl mx-auto" style={{ fontFamily: "'Open Sans', sans-serif" }}>
            Изучай традиционные кавказские танцы и барабаны с<br />
            профессиональными мастерами
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-3xl mx-auto">
            <Button className="bg-[#e67e22] hover:bg-[#d35400] text-white font-semibold px-10 py-6 text-lg rounded-lg shadow-lg flex items-center gap-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              <Icon name="Play" size={22} />
              Начать обучение
            </Button>
            <Input 
              placeholder=""
              className="bg-white text-gray-900 border-0 h-14 text-lg rounded-lg shadow-lg flex-1 max-w-md"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;