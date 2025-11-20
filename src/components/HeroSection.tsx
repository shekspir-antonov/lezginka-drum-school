import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
    <section className="relative px-6 bg-gradient-to-r from-[#A0451E] via-[#C4693D] to-[#D8914A] text-white overflow-hidden" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
      {/* Кавказский орнамент слева */}
      <div className="absolute top-0 left-0 w-32 h-full opacity-20" style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 10 L50 30 L70 30 L55 42 L60 62 L40 50 L20 62 L25 42 L10 30 L30 30 Z' fill='white'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat-y',
        backgroundSize: '80px 80px'
      }} />
      
      {/* Кавказский орнамент справа */}
      <div className="absolute top-0 right-0 w-32 h-full opacity-20" style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 10 L50 30 L70 30 L55 42 L60 62 L40 50 L20 62 L25 42 L10 30 L30 30 Z' fill='white'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat-y',
        backgroundSize: '80px 80px'
      }} />
      
      {/* Орнамент сверху */}
      <div className="absolute top-0 left-0 right-0 h-24 opacity-30" style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='40' viewBox='0 0 120 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 20 Q30 0 60 20 T120 20' stroke='white' fill='none' stroke-width='2'/%3E%3Ccircle cx='60' cy='20' r='8' fill='white'/%3E%3Ccircle cx='30' cy='10' r='5' fill='white'/%3E%3Ccircle cx='90' cy='10' r='5' fill='white'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat-x',
        backgroundPosition: 'center top'
      }} />
      
      {/* Орнамент снизу */}
      <div className="absolute bottom-0 left-0 right-0 h-24 opacity-30" style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='40' viewBox='0 0 120 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 20 Q30 40 60 20 T120 20' stroke='white' fill='none' stroke-width='2'/%3E%3Ccircle cx='60' cy='20' r='8' fill='white'/%3E%3Ccircle cx='30' cy='30' r='5' fill='white'/%3E%3Ccircle cx='90' cy='30' r='5' fill='white'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat-x',
        backgroundPosition: 'center bottom'
      }} />
      
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