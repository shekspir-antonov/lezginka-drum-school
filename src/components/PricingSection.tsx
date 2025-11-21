import { Button } from '@/components/ui/button';

const PricingSection = () => {
  const scrollToContacts = () => {
    const element = document.getElementById('contacts');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="pricing" className="py-12 md:py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 text-gray-900" style={{ fontFamily: "'Montserrat', sans-serif" }}>Цены</h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {[
            { title: 'Лезгинка', price: '3500₽', period: '/ месяц', features: ['Групповые занятия', 'Профессиональные инструкторы', 'Все уровни подготовки'] },
            { title: 'Кавказские барабаны', price: '3500₽', period: '/ месяц', features: ['Изучение ритмов', 'Традиционная техника', 'Концертные выступления'] },
            { title: 'Свадебная лезгинка', price: '3500₽', period: '/ месяц', popular: true, features: ['Постановка танца', 'Индивидуальный подход', 'Подготовка к торжеству'] },
            { title: 'Индивидуальные занятия', price: '2500₽', period: '/ час', features: ['Персональный график', 'Быстрый результат', 'Любое направление'] }
          ].map((price, idx) => (
            <div key={idx} className={`bg-white rounded-2xl shadow-lg p-6 md:p-8 ${price.popular ? 'ring-4 ring-[#d04430] relative transform scale-105' : ''} hover:shadow-2xl transition-all`}>
              {price.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#e8812d] to-[#f39c12] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg" style={{ fontFamily: "'Montserrat', sans-serif" }}>Популярно</div>
              )}
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gray-900 mt-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>{price.title}</h3>
              <div className="mb-6 md:mb-8">
                <span className="text-4xl md:text-5xl font-bold text-[#d04430]" style={{ fontFamily: "'Montserrat', sans-serif" }}>{price.price}</span>
                <span className="text-gray-500 text-sm md:text-base ml-1">{price.period}</span>
              </div>
              <ul className="space-y-3 mb-6 md:mb-8">
                {price.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-start gap-2 text-sm md:text-base text-gray-700">
                    <span className="text-[#d04430] text-lg font-bold flex-shrink-0">✓</span>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                onClick={scrollToContacts}
                className={`w-full h-11 md:h-12 text-sm md:text-base font-bold ${price.popular ? 'bg-[#d04430] hover:bg-[#b83a28]' : 'bg-gray-900 hover:bg-gray-800'} text-white rounded-xl`} 
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Записаться
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
