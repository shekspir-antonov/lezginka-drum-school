import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const DirectionsSection = () => {
  const scrollToContacts = () => {
    const element = document.getElementById('contacts');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="directions" className="py-12 md:py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 md:mb-4 text-gray-900" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          Направления обучения
        </h2>
        <p className="text-center text-gray-600 text-base md:text-lg mb-12 md:mb-16 max-w-2xl mx-auto">
          Выберите подходящее направление для себя или своих близких
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {[
            { title: 'Лезгинка', badge: 'Начинающие', desc: 'Традиционный танец с огненным характером', time: '1.5 часа', price: '3500₽/мес' },
            { title: 'Кавказские барабаны', badge: 'Начинающие', desc: 'Ритмы гор в ваших руках', time: '1.5 часа', price: '3500₽/мес' },
            { title: 'Свадебная лезгинка', badge: 'Начинающие', desc: 'Грациозность и благородство', time: '1 час', price: '3500₽/мес' },
            { title: 'Индивидуальные занятия', badge: 'Начинающие', desc: 'Персональный подход к каждому', time: '1 час', price: '2500₽/час' }
          ].map((dir, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
              <div className="bg-gradient-to-r from-[#c1392b] to-[#e67e22] p-5 md:p-6 relative">
                <span className="absolute top-3 md:top-4 right-3 md:right-4 bg-white text-[#c1392b] text-xs font-bold px-3 md:px-4 py-1 md:py-1.5 rounded-full" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  {dir.badge}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>{dir.title}</h3>
                <p className="text-white text-sm md:text-base opacity-95">{dir.desc}</p>
              </div>
              <div className="p-5 md:p-6">
                <div className="flex items-center gap-2 text-gray-600 mb-6">
                  <Icon name="Clock" size={18} className="text-gray-400" />
                  <span className="text-sm">{dir.time}</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl md:text-3xl font-bold text-[#c1392b]" style={{ fontFamily: "'Montserrat', sans-serif" }}>{dir.price}</span>
                </div>
                <Button 
                  onClick={scrollToContacts}
                  className="w-full bg-[#b52c1f] hover:bg-[#962419] text-white font-bold py-3 rounded-lg text-sm md:text-base" 
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Записаться на занятие →
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DirectionsSection;
