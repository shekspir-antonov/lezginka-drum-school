import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Спасибо за заявку!',
      description: 'Мы свяжемся с вами в ближайшее время'
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Open Sans', sans-serif" }}>
      <header className="bg-white shadow-sm py-4 px-4 sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between max-w-7xl">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#d04430] to-[#e8812d] flex items-center justify-center">
              <span className="text-white font-bold text-xl" style={{ fontFamily: "'Montserrat', sans-serif" }}>РГ</span>
            </div>
            <div>
              <div className="font-bold text-base text-gray-900" style={{ fontFamily: "'Montserrat', sans-serif" }}>Ритмы Гор</div>
              <div className="text-xs text-gray-600">Школа лезгинки и кавказских барабанов</div>
            </div>
          </div>
          <Button className="bg-[#d04430] hover:bg-[#b83a28] text-white px-6 font-medium" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Записаться
          </Button>
        </div>
      </header>

      <section className="relative bg-gradient-to-br from-[#d04430] via-[#d04430] to-[#e8812d] text-white py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)`
          }}></div>
        </div>
        <div className="container mx-auto text-center relative z-10 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Почувствуй<br />
            <span className="text-6xl md:text-8xl">Ритмы Гор</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 opacity-95 leading-relaxed max-w-3xl mx-auto">
            Изучи лезгинку и кавказские барабаны с лучшими преподавателями.<br />
            Присоединяйся к нашему сообществу традиционной культуры!
          </p>
          <div className="max-w-lg mx-auto">
            <Input 
              placeholder="Введите ваше имя"
              className="bg-white text-gray-900 border-0 h-14 text-lg rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Направления обучения
          </h2>
          <p className="text-center text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
            Выберите подходящее направление для себя или своих близких
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {[
              { title: 'Лезгинка', badge: 'Начинающие', desc: 'Традиционный кавказский танец с энергичными движениями и богатой культурной историей', time: '1.5 часа', students: '12 мест', price: 'от 3500₽' },
              { title: 'Кавказские барабаны', badge: 'Средний', desc: 'Обучение игре на традиционных кавказских барабанах. Освойте древние ритмы гор', time: '1.5 часа', students: '8 мест', price: 'от 3500₽' },
              { title: 'Семейная лезгинка', badge: 'Начинающие', desc: 'Занятия для всей семьи. Танцуйте вместе с детьми и создавайте незабываемые моменты', time: '1 час', students: '16 мест', price: 'от 3500₽' },
              { title: 'Индивидуальные занятия', badge: 'Любой уровень', desc: 'Персональные уроки с мастером. Быстрое обучение в удобное для вас время', time: '1 час', students: '1 место', price: 'от 2500₽' }
            ].map((dir, idx) => (
              <div key={idx} className="bg-gradient-to-br from-[#d04430] to-[#e8812d] text-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
                <span className="inline-block bg-white text-[#d04430] text-xs font-bold px-4 py-2 rounded-full mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  {dir.badge}
                </span>
                <h3 className="text-3xl font-bold mb-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>{dir.title}</h3>
                <p className="text-base opacity-95 mb-6 leading-relaxed">{dir.desc}</p>
                <div className="flex items-center gap-6 text-sm mb-6 opacity-90">
                  <span className="flex items-center gap-2"><Icon name="Clock" size={18} />{dir.time}</span>
                  <span className="flex items-center gap-2"><Icon name="Users" size={18} />{dir.students}</span>
                </div>
                <div className="flex items-center justify-between pt-6 border-t border-white/30">
                  <span className="text-3xl font-bold" style={{ fontFamily: "'Montserrat', sans-serif" }}>{dir.price}</span>
                  <Button className="bg-white text-[#d04430] hover:bg-gray-100 font-bold px-6 py-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>Узнать больше</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Расписание занятий
          </h2>
          <p className="text-center text-gray-600 text-lg mb-16">Выбирайте удобное время для занятий</p>

          <div className="space-y-12">
            {[
              { title: 'Кавказские барабаны', items: [{ day: 'Пятница', date: '20.12.2024', time: '12:00', group: 'Начальная группа' }, { day: 'Суббота', date: '21.12.2024', time: '13:30-15:00', group: 'Концертный состав' }]},
              { title: 'Семейная лезгинка', items: [{ day: 'Пятница', date: '20.12.2024', time: '15:00-16:30', group: 'Детская группа' }, { day: 'Суббота', date: '21.12.2024', time: '16:30-18:00', group: 'Взрослая группа' }]},
              { title: 'Свадебная лезгинка', items: [{ day: 'Пятница', date: '20.12.2024', time: '18:00-19:00', group: 'Женская группа' }, { day: 'Суббота', date: '21.12.2024', time: '19:00-20:00', group: 'Мужская группа' }]}
            ].map((section, idx) => (
              <div key={idx}>
                <h3 className="text-2xl font-bold mb-6 text-gray-900" style={{ fontFamily: "'Montserrat', sans-serif" }}>{section.title}</h3>
                <div className="space-y-4">
                  {section.items.map((item, sidx) => (
                    <div key={sidx} className="bg-gray-50 border-l-4 border-[#d04430] rounded-lg p-5 hover:shadow-md transition-all">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                        <div className="flex items-center gap-6">
                          <div className="text-sm font-semibold text-gray-600 min-w-[140px]">{item.day} {item.date}</div>
                          <div className="text-base font-bold text-[#d04430]" style={{ fontFamily: "'Montserrat', sans-serif" }}>{item.time}</div>
                        </div>
                        <div className="text-base text-gray-700 font-medium">{item.group}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900" style={{ fontFamily: "'Montserrat', sans-serif" }}>Цены</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Абонемент на месяц', price: '3000₽', period: '/ месяц', features: ['8 занятий в месяц', 'Доступ к групповым занятиям', 'Учебные материалы включены', 'Сертификат по окончании курса'] },
              { title: 'Общий абонемент', price: '5500₽', period: '/ месяц', popular: true, features: ['Безлимитный доступ', 'Все направления обучения', 'Приоритетная запись на занятия', 'Участие в мастер-классах', 'Скидки на мероприятия'] },
              { title: 'Индивидуальное обучение', price: '2500₽', period: '/ занятие', features: ['Персональный подход', 'Гибкое расписание', 'Быстрое достижение результата', 'Индивидуальная программа'] }
            ].map((price, idx) => (
              <div key={idx} className={`bg-white rounded-2xl shadow-xl p-8 ${price.popular ? 'ring-4 ring-[#d04430] relative transform scale-105' : ''} hover:shadow-2xl transition-all`}>
                {price.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#e8812d] to-[#f39c12] text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg" style={{ fontFamily: "'Montserrat', sans-serif" }}>Популярно</div>
                )}
                <h3 className="text-2xl font-bold mb-6 text-gray-900 mt-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>{price.title}</h3>
                <div className="mb-8">
                  <span className="text-5xl font-bold text-[#d04430]" style={{ fontFamily: "'Montserrat', sans-serif" }}>{price.price}</span>
                  <span className="text-gray-500 text-lg ml-1">{price.period}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {price.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start gap-3 text-base text-gray-700">
                      <span className="text-[#d04430] text-xl font-bold flex-shrink-0">✓</span>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className={`w-full h-12 text-base font-bold ${price.popular ? 'bg-[#d04430] hover:bg-[#b83a28]' : 'bg-gray-900 hover:bg-gray-800'} text-white rounded-xl`} style={{ fontFamily: "'Montserrat', sans-serif" }}>Выбрать тариф</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900" style={{ fontFamily: "'Montserrat', sans-serif" }}>Галерея</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array(12).fill(0).map((_, idx) => (
              <div key={idx} className="aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
                <div className="w-full h-full bg-gradient-to-br from-[#d04430] to-[#e8812d] opacity-20"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{ fontFamily: "'Montserrat', sans-serif" }}>Контакты</h2>
          
          <div className="grid md:grid-cols-2 gap-16 mb-16">
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#d04430] rounded-full flex items-center justify-center"><Icon name="MapPin" className="text-white" size={20} /></div>
                  <span className="font-bold text-lg" style={{ fontFamily: "'Montserrat', sans-serif" }}>Адрес</span>
                </div>
                <p className="text-gray-300 text-base ml-13 leading-relaxed">г. Санкт-Петербург, Невский проспект, д. 123</p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#d04430] rounded-full flex items-center justify-center"><Icon name="Phone" className="text-white" size={20} /></div>
                  <span className="font-bold text-lg" style={{ fontFamily: "'Montserrat', sans-serif" }}>Телефон</span>
                </div>
                <p className="text-gray-300 text-base ml-13">+7 (812) 123-45-67</p>
                <p className="text-gray-300 text-base ml-13">+7 (921) 765-43-21</p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#d04430] rounded-full flex items-center justify-center"><Icon name="Mail" className="text-white" size={20} /></div>
                  <span className="font-bold text-lg" style={{ fontFamily: "'Montserrat', sans-serif" }}>Email</span>
                </div>
                <p className="text-gray-300 text-base ml-13">info@ritmygor.ru</p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#d04430] rounded-full flex items-center justify-center"><Icon name="Clock" className="text-white" size={20} /></div>
                  <span className="font-bold text-lg" style={{ fontFamily: "'Montserrat', sans-serif" }}>Режим работы</span>
                </div>
                <p className="text-gray-300 text-base ml-13">Понедельник - Воскресенье</p>
                <p className="text-gray-300 text-base ml-13">10:00 - 22:00</p>
              </div>
            </div>

            <div className="bg-gray-800 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>Записаться на занятие</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <Input placeholder="Ваше имя" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 h-12 rounded-lg" required />
                <Input type="email" placeholder="Ваш email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 h-12 rounded-lg" required />
                <Textarea placeholder="Ваше сообщение" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 min-h-[120px] rounded-lg" />
                <Button type="submit" className="w-full bg-[#d04430] hover:bg-[#b83a28] h-12 text-base font-bold rounded-lg" style={{ fontFamily: "'Montserrat', sans-serif" }}>Отправить заявку</Button>
              </form>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#d04430] to-[#e8812d] h-96 rounded-2xl flex items-center justify-center shadow-xl">
            <div className="text-center">
              <Icon name="MapPin" size={80} className="mx-auto mb-6 opacity-40" />
              <p className="text-2xl font-semibold mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>Карта расположения</p>
              <p className="text-base opacity-80">г. Санкт-Петербург, Невский проспект, д. 123</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-gray-400 py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h4 className="text-white font-bold mb-5 text-xl" style={{ fontFamily: "'Montserrat', sans-serif" }}>О школе</h4>
              <p className="text-base leading-relaxed">Ритмы Гор — профессиональная школа лезгинки и кавказских барабанов в Санкт-Петербурге. Мы сохраняем и передаём традиции кавказской культуры.</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-5 text-xl" style={{ fontFamily: "'Montserrat', sans-serif" }}>Навигация</h4>
              <ul className="space-y-3 text-base">
                <li><a href="#" className="hover:text-[#d04430] transition-colors">Главная</a></li>
                <li><a href="#" className="hover:text-[#d04430] transition-colors">Направления</a></li>
                <li><a href="#" className="hover:text-[#d04430] transition-colors">Расписание</a></li>
                <li><a href="#" className="hover:text-[#d04430] transition-colors">Цены</a></li>
                <li><a href="#" className="hover:text-[#d04430] transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-5 text-xl" style={{ fontFamily: "'Montserrat', sans-serif" }}>Мы в соцсетях</h4>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#d04430] transition-colors"><Icon name="Facebook" size={22} /></a>
                <a href="#" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#d04430] transition-colors"><Icon name="Instagram" size={22} /></a>
                <a href="#" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#d04430] transition-colors"><Icon name="Youtube" size={22} /></a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center"><p className="text-base">© 2024 Ритмы Гор. Все права защищены.</p></div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
