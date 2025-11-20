import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
    <section className="relative px-6 bg-gradient-to-br from-[#A0351F] via-[#C85A35] to-[#D4793D] text-white overflow-hidden py-[60px]">
      <div className="absolute top-12 left-16 opacity-50">
        <Icon name="Music" size={40} className="text-white" />
      </div>
      
      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-6xl md:text-7xl mb-6 font-extrabold">
          Почувствуй
        </h2>
        <h3 
          className="md:text-8xl lg:text-9xl font-black mb-12 animate-pulse text-center text-6xl"
          style={{ 
            WebkitTextStroke: '3px white',
            color: 'transparent',
            letterSpacing: '0.05em'
          }}
        >
          Ритмы Гор
        </h3>
        <p className="text-xl md:text-2xl mb-16 max-w-4xl mx-auto leading-relaxed">
          Изучай традиционные кавказские танцы и барабаны с<br/>профессиональными мастерами
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-5 max-w-xl mx-auto">
          <Button 
            size="lg" 
            className="bg-[#E8812D] hover:bg-[#D4721F] text-white px-12 py-7 text-lg font-semibold rounded-md flex items-center gap-3 shadow-lg"
          >
            <Icon name="Play" size={22} />
            Начать обучение
          </Button>
          <Button 
            size="lg" 
            className="bg-white hover:bg-gray-100 text-[#C85A35] px-12 py-7 text-lg font-semibold rounded-md flex items-center gap-3 shadow-lg"
          >
            <Icon name="Phone" size={22} />
            Связаться
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;