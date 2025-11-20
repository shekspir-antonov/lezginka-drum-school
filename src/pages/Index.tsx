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
    <div className="min-h-screen bg-white font-['Open_Sans']">
      <header className="bg-white shadow-sm py-4 px-4 sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#c63c3c] flex items-center justify-center">
              <span className="text-white font-bold text-xl font-['Montserrat']">РГ</span>
            </div>
            <div>
              <div className="font-bold text-base text-gray-900 font-['Montserrat']">Ритмы Гор</div>
              <div className="text-xs text-gray-600">Школа лезгинки и кавказских барабанов</div>
            </div>
          </div>
          <Button className="bg-[#c63c3c] hover:bg-[#a83232] text-white px-6 font-['Montserrat']">
            Записаться
          </Button>
        </div>
      </header>

      <section className="relative bg-gradient-to-r from-[#c63c3c] to-[#d04a30] text-white py-32 px-4 overflow-hidden">
        <div className="container mx-auto text-center relative z-10 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-['Montserrat'] leading-tight">
            Почувствуй<br />
            <span className="text-6xl md:text-8xl">Ритмы Гор</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 opacity-95 leading-relaxed">
            Изучи лезгинку и кавказские барабаны с лучшими преподавателями.<br />
            Присоединяйся к нашему сообществу традиционной культуры!
          </p>
          <div className="max-w-lg mx-auto">
            <Input 
              placeholder="Введите ваше имя"
              className="bg-white text-gray-900 border-0 h-14 text-lg rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 font-['Montserrat']">
            Направления обучения
          </h2>
          <p className="text-center text-gray-600 text-lg mb-16">
            Выберите подходящее направление для себя или своих близких
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Лезгинка', badge: 'Начинающие', desc: 'Традиционный кавказский танец с энергичными движениями и богатой культурной историей', time: '1 час 30 мин', slots: '12 мест', price: 'от 500₽' },
              { title: 'Кавказские барабаны', badge: 'Средний', desc: 'Обучение игре на традиционных кавказских барабанах. Освойте древние ритмы гор', time: '1 час 30 мин', slots: '8 мест', price: 'от 500₽' },
              { title: 'Семейная лезгинка', badge: 'Начинающие', desc: 'Занятия для всей семьи. Танцуйте вместе с детьми и создавайте незабываемые моменты', time: '1 час 30 мин', slots: '16 мест', price: 'от 500₽' },
              { title: 'Индивидуальные занятия', badge: 'Начинающие', desc: 'Персональные уроки с мастером. Быстрое обучение в удобное для вас время', time: '1 час 30 мин', slots: '4 места', price: 'от 500₽' }
            ].map((dir, idx) => (
              <div key={idx} className="bg-gradient-to-br from-[#c63c3c] to-[#d04a30] text-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all">
                <span className="inline-block bg-white text-[#c63c3c] text-xs font-bold px-4 py-2 rounded-full mb-4 font-['Montserrat']">
                  {dir.badge}
                </span>
                <h3 className="text-3xl font-bold mb-3 font-['Montserrat']">{dir.title}</h3>
                <p className="text-base opacity-95 mb-6 leading-relaxed">{dir.desc}</p>
                <div className="flex items-center gap-6 text-sm mb-6 opacity-90">
                  <span className="flex items-center gap-2"><Icon name="Clock" size={18} />{dir.time}</span>
                  <span className="flex items-center gap-2"><Icon name="Users" size={18} />{dir.slots}</span>
                </div>
                <div className="flex items-center justify-between pt-6 border-t border-white/30">
                  <span className="text-3xl font-bold font-['Montserrat']">{dir.price}</span>
                  <Button className="bg-white text-[#c63c3c] hover:bg-gray-100 font-bold font-['Montserrat'] px-6 py-2">
                    Узнать больше
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 font-['Montserrat']">
            Расписание занятий
          </h2>
          <p className="text-center text-gray-600 text-lg mb-16">
            Выбирайте удобное время для занятий
          </p>

          <div className="space-y-12">
            {[
              { title: 'Кавказские барабаны', items: [{ day: 'ПТ 20/12/2024', time: '12:00', name: 'Начальная группа' }, { day: 'СБ 21/12/2024', time: '13:30-15:00', name: 'Концертный состав' }]},
              { title: 'Семейная лезгинка', items: [{ day: 'ПТ 20/12/2024', time: '15:00-16:30', name: 'Детская группа' }, { day: 'СБ 21/12/2024', time: '16:30-18:00', name: 'Взрослая группа' }]},
              { title: 'Свадебная лезгинка', items: [{ day: 'ПТ 20/12/2024', time: '18:00-19:00', name: 'Женская группа' }, { day: 'СБ 21/12/2024', time: '19:00-20:00', name: 'Мужская группа' }]}
            ].map((section, idx) => (
              <div key={idx}>
                <h3 className="text-2xl font-bold mb-6 text-gray-900 font-['Montserrat']">{section.title}</h3>
                <div className="space-y-4">
                  {section.items.map((item, sidx) => (
                    <div key={sidx} className="bg-gray-50 border-l-4 border-[#c63c3c] rounded-lg p-5 hover:shadow-md transition-all">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                        <div className="flex items-center gap-6">
                          <div className="text-sm font-semibold text-gray-600 min-w-[110px]">{item.day}</div>
                          <div className="text-base font-bold text-[#c63c3c] font-['Montserrat']">{item.time}</div>
                        </div>
                        <div className="text-base text-gray-700 font-medium">{item.name}</div>
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
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 font-['Montserrat']">Цены</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Абонемент на месяц', price: '3000₽', features: ['8 занятий в месяц', 'Доступ к групповым занятиям', 'Учебные материалы включены', 'Сертификат по окончании курса'] },
              { title: 'Общее абонемент', price: '5500₽', popular: true, features: ['Безлимитный доступ', 'Все направления обучения', 'Приоритетная запись', 'Участие в мастер-классах', 'Скидки на мероприятия'] },
              { title: 'Индивидуальное обучение', price: '2500₽', features: ['Персональный подход', 'Гибкое расписание', 'Быстрое достижение результата', 'Индивидуальная программа'] }
            ].map((price, idx) => (
              <div key={idx} className={`bg-white rounded-2xl shadow-xl p-8 ${price.popular ? 'ring-4 ring-[#c63c3c] relative transform scale-105' : ''}`}>
                {price.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-bold px-6 py-2 rounded-full shadow-lg font-['Montserrat']">
                    Популярно
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-6 text-gray-900 font-['Montserrat'] mt-2">{price.title}</h3>
                <div className="text-5xl font-bold text-[#c63c3c] mb-8 font-['Montserrat']">{price.price}</div>
                <ul className="space-y-4 mb-8">
                  {price.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start gap-3 text-base text-gray-700">
                      <span className="text-[#c63c3c] text-xl font-bold">✓</span>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className={`w-full h-12 text-base font-bold font-['Montserrat'] ${price.popular ? 'bg-[#c63c3c] hover:bg-[#a83232]' : 'bg-gray-900 hover:bg-gray-800'} text-white rounded-lg`}>
                  Выбрать тариф
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 font-['Montserrat']">Галерея</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array(14).fill(0).map((_, idx) => (
              <div key={idx} className="aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <Icon name="Image" size={48} className="text-gray-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-['Montserrat']">Контакты</h2>
          
          <div className="grid md:grid-cols-2 gap-16 mb-16">
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#c63c3c] rounded-full flex items-center justify-center">
                    <Icon name="MapPin" className="text-white" size={20} />
                  </div>
                  <span className="font-bold text-lg font-['Montserrat']">Адрес</span>
                </div>
                <p className="text-gray-300 text-base ml-13 leading-relaxed">г. Санкт-Петербург, Невский проспект, д. 123</p>
              </div>
              
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#c63c3c] rounded-full flex items-center justify-center">
                    <Icon name="Phone" className="text-white" size={20} />
                  </div>
                  <span className="font-bold text-lg font-['Montserrat']">Телефон</span>
                </div>
                <p className="text-gray-300 text-base ml-13">+7 (812) 123-45-67</p>
                <p className="text-gray-300 text-base ml-13">+7 (812) 765-43-21</p>
              </div>
              
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#c63c3c] rounded-full flex items-center justify-center">
                    <Icon name="Mail" className="text-white" size={20} />
                  </div>
                  <span className="font-bold text-lg font-['Montserrat']">Email</span>
                </div>
                <p className="text-gray-300 text-base ml-13">info@ritmygor.ru</p>
              </div>
              
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-[#c63c3c] rounded-full flex items-center justify-center">
                    <Icon name="Clock" className="text-white" size={20} />
                  </div>
                  <span className="font-bold text-lg font-['Montserrat']">Режим работы</span>
                </div>
                <p className="text-gray-300 text-base ml-13">Понедельник - Воскресенье</p>
                <p className="text-gray-300 text-base ml-13">10:00 - 22:00</p>
              </div>
            </div>

            <div className="bg-gray-800 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 font-['Montserrat']">Записаться на занятие</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <Input
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 h-12 rounded-lg"
                  required
                />
                <Input
                  type="email"
                  placeholder="Ваш email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 h-12 rounded-lg"
                  required
                />
                <Textarea
                  placeholder="Ваше сообщение"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 min-h-[120px] rounded-lg"
                />
                <Button type="submit" className="w-full bg-[#c63c3c] hover:bg-[#a83232] h-12 text-base font-bold font-['Montserrat'] rounded-lg">
                  Отправить заявку
                </Button>
              </form>
            </div>
          </div>

          <div className="bg-[#c63c3c] h-96 rounded-2xl flex items-center justify-center shadow-xl">
            <div className="text-center">
              <Icon name="MapPin" size={80} className="mx-auto mb-6 opacity-40" />
              <p className="text-2xl font-['Montserrat'] font-semibold">Карта расположения</p>
              <p className="text-base opacity-80 mt-2">г. Санкт-Петербург, Невский проспект, д. 123</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-gray-400 py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h4 className="text-white font-bold mb-5 text-xl font-['Montserrat']">О школе</h4>
              <p className="text-base leading-relaxed">
                Ритмы Гор — профессиональная школа лезгинки и кавказских барабанов в Санкт-Петербурге. 
                Мы сохраняем и передаём традиции кавказской культуры.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-5 text-xl font-['Montserrat']">Навигация</h4>
              <ul className="space-y-3 text-base">
                <li><a href="#" className="hover:text-[#c63c3c] transition-colors">Главная</a></li>
                <li><a href="#" className="hover:text-[#c63c3c] transition-colors">Направления</a></li>
                <li><a href="#" className="hover:text-[#c63c3c] transition-colors">Расписание</a></li>
                <li><a href="#" className="hover:text-[#c63c3c] transition-colors">Цены</a></li>
                <li><a href="#" className="hover:text-[#c63c3c] transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-5 text-xl font-['Montserrat']">Мы в соцсетях</h4>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#c63c3c] transition-colors">
                  <Icon name="Facebook" size={22} />
                </a>
                <a href="#" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#c63c3c] transition-colors">
                  <Icon name="Instagram" size={22} />
                </a>
                <a href="#" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#c63c3c] transition-colors">
                  <Icon name="Youtube" size={22} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-base">© 2024 Ритмы Гор. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
