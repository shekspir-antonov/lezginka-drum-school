import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
    <section className="relative py-32 px-6 bg-gradient-to-r from-[#8B2519] via-[#B8421F] to-[#D2691E] text-white overflow-hidden">
      <div className="absolute top-8 left-12 opacity-40">
        <Icon name="Music" size={48} className="text-white" />
      </div>
      <div className="absolute bottom-12 right-16 opacity-40">
        <Icon name="Sparkles" size={48} className="text-white" />
      </div>
      
      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold mb-4">
          Почувствуй
        </h2>
        <h3 
          className="text-7xl md:text-8xl font-black mb-10"
          style={{ 
            WebkitTextStroke: '3px white',
            color: 'transparent',
            letterSpacing: '0.02em'
          }}
        >
          Ритмы Гор
        </h3>
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
          Изучай традиционные кавказские танцы и барабаны с<br/>профессиональными мастерами
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
          <Button 
            size="lg" 
            className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-7 text-lg font-semibold rounded-md flex items-center gap-2"
          >
            <Icon name="Play" size={20} />
            Начать обучение
          </Button>
          <Input 
            placeholder="" 
            className="bg-white text-gray-800 py-7 md:flex-1 border-0 rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
