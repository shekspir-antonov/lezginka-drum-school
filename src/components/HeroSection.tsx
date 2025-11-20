import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pulse-sync {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.1); opacity: 1; }
        }
        .pulse-icon { animation: pulse-sync 2s ease-in-out infinite; }
      `}} />
      
      <section id="hero" className="relative bg-gradient-to-br from-[#b8341e] via-[#c1392b] to-[#d35400] text-white py-32 px-4 overflow-hidden">
        <Icon name="Music" size={64} className="absolute top-12 left-12 opacity-70 pulse-icon" />
        
        <div className="container mx-auto text-center relative z-10 max-w-5xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-3 leading-tight text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Почувствуй
          </h1>
          <h2 className="text-6xl md:text-8xl font-black mb-8 leading-none pulse-icon" style={{ 
            fontFamily: "'Montserrat', sans-serif",
            color: '#fbbf24',
            WebkitTextStroke: '2px #78350f',
            textStroke: '2px #78350f',
            letterSpacing: '0.02em',
            textShadow: '4px 4px 0px rgba(0,0,0,0.3)'
          }}>
            Ритмы Гор
          </h2>
          <p className="text-xl md:text-2xl mb-10 opacity-95 leading-relaxed max-w-3xl mx-auto">
            Изучай традиционные кавказские танцы и барабаны с<br />
            профессиональными мастерами
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-3xl mx-auto">
            <Button className="bg-[#e67e22] hover:bg-[#d35400] text-white font-bold px-8 py-6 text-lg rounded-xl shadow-xl flex items-center gap-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              <Icon name="Play" size={20} />
              Начать обучение
            </Button>
            <Input 
              placeholder=""
              className="bg-white text-gray-900 border-0 h-14 text-lg rounded-xl shadow-xl flex-1 max-w-md"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;