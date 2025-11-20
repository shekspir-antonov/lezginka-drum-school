import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
    <section className="relative px-6 bg-gradient-to-r from-[#A0451E] via-[#C4693D] to-[#D8914A] text-white overflow-hidden" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
      <div className="absolute top-12 left-16 opacity-40">
        <Icon name="Music2" size={48} className="text-white" />
      </div>
      
      <div className="container mx-auto text-center relative z-10">
        <h2 style={{ fontSize: '80px', fontWeight: 700, marginBottom: '15px', lineHeight: '1' }}>
          Почувствуй
        </h2>
        <h3 
          style={{ 
            fontSize: '96px',
            fontWeight: 900,
            WebkitTextStroke: '4px white',
            color: 'transparent',
            letterSpacing: '0.02em',
            marginBottom: '35px',
            lineHeight: '0.95'
          }}
        >
          Ритмы Гор
        </h3>
        <p style={{ fontSize: '26px', marginBottom: '50px', lineHeight: '1.5', maxWidth: '950px', margin: '0 auto 50px', fontWeight: 400 }}>
          Изучай традиционные кавказские танцы и барабаны с<br/>профессиональными мастерами
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <Button 
            className="bg-[#E8812D] hover:bg-[#D67226] text-white rounded-lg flex items-center gap-3"
            style={{ padding: '18px 40px', fontSize: '17px', fontWeight: 500 }}
          >
            <Icon name="Play" size={20} />
            Начать обучение
          </Button>
          <Button 
            className="bg-white hover:bg-gray-50 text-[#D04430] rounded-lg flex items-center gap-3"
            style={{ padding: '18px 40px', fontSize: '17px', fontWeight: 500 }}
          >
            <Icon name="Phone" size={20} />
            Связаться
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;