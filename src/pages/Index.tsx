import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время'
    });
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white py-3 px-4 shadow-sm">
        <div className="container mx-auto flex items-center justify-between max-w-6xl">
          <div className="flex items-center gap-2">
            <img 
              src="https://cdn.poehali.dev/files/b42a71b1-b412-49c4-a137-8a2dbb7f4f92.jpeg"
              alt="Logo"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <div className="text-sm font-semibold text-gray-900">Rhythmigo Shop</div>
              <div className="text-xs text-gray-500">Школа лезгинка & барабаны</div>
            </div>
          </div>
          <Button size="sm" className="bg-[#c1392b] hover:bg-[#a02f21] text-white text-xs px-4">
            Главная
          </Button>
        </div>
      </header>

      <section className="bg-gradient-to-br from-[#c1392b] via-[#d35230] to-[#e8812d] text-white py-20 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Почувствуй<br />
            <span className="text-5xl md:text-6xl">Rhythms Rigor</span>
          </h1>
          <p className="text-base mb-6 opacity-90">
            Изучи лезгинку и кавказские барабаны с лучшими преподавателями.<br />
            Присоединяйся к нашему сообществу традиций и ритмов!
          </p>
          <div className="max-w-md mx-auto">
            <Input 
              placeholder="Имя и Фамилия"
              className="bg-white text-gray-900 h-10 text-sm"
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-2 text-gray-900">
            Направления обучения
          </h2>
          <p className="text-center text-gray-600 text-sm mb-10">
            Наши программы обучения рассчитаны для каждого участника нашей школы
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: 'Лезгинка', badge: 'Начинающие', desc: 'Традиционный кавказский танец', time: '1 час 30 мин', slots: '15 мест', price: 'от 500₽' },
              { title: 'Кавказские барабаны', badge: 'Средний', desc: 'Обучение игре на кавказских барабанах', time: '1 час 30 мин', slots: '10 мест', price: 'от 500₽' },
              { title: 'Семейная лезгинка', badge: 'Начинающие', desc: 'Групповые занятия для всей семьи', time: '1 час 30 мин', slots: '20 мест', price: 'от 500₽' },
              { title: 'Индивидуальные занятия', badge: 'Начинающие', desc: 'Персональный подход и обучение', time: '1 час 30 мин', slots: '5 мест', price: 'от 500₽' }
            ].map((dir, idx) => (
              <div key={idx} className="bg-gradient-to-br from-[#c1392b] to-[#d35230] text-white rounded-lg p-5">
                <span className="inline-block bg-white text-[#c1392b] text-xs font-bold px-3 py-1 rounded-full mb-3">
                  {dir.badge}
                </span>
                <h3 className="text-xl font-bold mb-2">{dir.title}</h3>
                <p className="text-sm opacity-90 mb-4">{dir.desc}</p>
                <div className="flex items-center gap-4 text-xs mb-4 opacity-80">
                  <span>⏱ {dir.time}</span>
                  <span>👥 {dir.slots}</span>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-white/20">
                  <span className="text-2xl font-bold">{dir.price}</span>
                  <Button size="sm" className="bg-white text-[#c1392b] hover:bg-gray-100 font-bold text-xs px-4">
                    Узнать
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-2 text-gray-900">
            Расписание занятий
          </h2>
          <p className="text-center text-gray-600 text-sm mb-10">
            Мы предлагаем гибкое расписание для вашего удобства
          </p>

          <div className="space-y-8">
            {[
              { title: 'Кавказские барабаны', items: [{ day: 'ПТ 20/12/2024', time: '12:00', name: 'Начальная группа' }, { day: 'СБ 21/12/2024', time: '13:30-15:00', name: 'Концертный состав' }]},
              { title: 'Семейная лезгинка', items: [{ day: 'ПТ 20/12/2024', time: '15:00-16:30', name: 'Детская группа' }, { day: 'СБ 21/12/2024', time: '16:30-18:00', name: 'Взрослая группа' }]},
              { title: 'Свадебная лезгинка', items: [{ day: 'ПТ 20/12/2024', time: '18:00-19:00', name: 'Женская группа' }, { day: 'СБ 21/12/2024', time: '19:00-20:00', name: 'Мужская группа' }]}
            ].map((section, idx) => (
              <div key={idx}>
                <h3 className="text-lg font-bold mb-3 text-gray-900">{section.title}</h3>
                <div className="space-y-2">
                  {section.items.map((item, sidx) => (
                    <div key={sidx} className="bg-gray-50 border-l-2 border-[#c1392b] rounded p-3">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-gray-600 font-medium">{item.day}</span>
                          <span className="text-sm font-bold text-[#c1392b]">{item.time}</span>
                        </div>
                        <span className="text-sm text-gray-700">{item.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Цены</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Абонемент на месяц', price: '3000₽', features: ['8 занятий', 'Групповые занятия', 'Все материалы'] },
              { title: 'Общее абонемент', price: '5500₽', popular: true, features: ['Безлимит', 'Все направления', 'Приоритет'] },
              { title: 'Индивидуальное обучение', price: '2500₽', features: ['Личный подход', 'Гибкий график', 'Быстрый результат'] }
            ].map((price, idx) => (
              <div key={idx} className={`bg-white rounded-lg shadow-md p-6 ${price.popular ? 'ring-2 ring-orange-500' : ''}`}>
                {price.popular && (
                  <div className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-3">
                    Популярно
                  </div>
                )}
                <h3 className="text-lg font-bold mb-3 text-gray-900">{price.title}</h3>
                <div className="text-3xl font-bold text-[#c1392b] mb-5">{price.price}</div>
                <ul className="space-y-2 mb-6">
                  {price.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-[#c1392b]">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className={`w-full text-sm ${price.popular ? 'bg-[#c1392b] hover:bg-[#a02f21]' : 'bg-gray-900 hover:bg-gray-800'} text-white`}>
                  Выбрать тариф
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">Галерея</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {Array(14).fill(0).map((_, idx) => (
              <div key={idx} className="aspect-square rounded-lg overflow-hidden bg-gray-200">
                <img 
                  src="https://cdn.poehali.dev/files/b42a71b1-b412-49c4-a137-8a2dbb7f4f92.jpeg"
                  alt={`Галерея ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12">Контакты</h2>
          
          <div className="grid md:grid-cols-2 gap-10 mb-12">
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Icon name="MapPin" className="text-[#c1392b]" size={18} />
                  <span className="font-semibold text-sm">Адрес</span>
                </div>
                <p className="text-gray-300 text-sm ml-6">г. Санкт-Петербург, ул. Примерная, д. 1</p>
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Icon name="Phone" className="text-[#c1392b]" size={18} />
                  <span className="font-semibold text-sm">Телефон</span>
                </div>
                <p className="text-gray-300 text-sm ml-6">+7 (999) 123-45-67</p>
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Icon name="Mail" className="text-[#c1392b]" size={18} />
                  <span className="font-semibold text-sm">Email</span>
                </div>
                <p className="text-gray-300 text-sm ml-6">info@rhythmigor.ru</p>
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Icon name="Clock" className="text-[#c1392b]" size={18} />
                  <span className="font-semibold text-sm">Режим работы</span>
                </div>
                <p className="text-gray-300 text-sm ml-6">Пн-Вс: 10:00 - 22:00</p>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4">Записаться на занятие</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Имя"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 h-10 text-sm"
                  required
                />
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 h-10 text-sm"
                  required
                />
                <Textarea
                  placeholder="Сообщение"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 min-h-[80px] text-sm"
                />
                <Button type="submit" className="w-full bg-[#c1392b] hover:bg-[#a02f21] text-sm">
                  Отправить заявку
                </Button>
              </form>
            </div>
          </div>

          <div className="bg-[#c1392b] h-64 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Icon name="MapPin" size={60} className="mx-auto mb-3 opacity-40" />
              <p className="text-lg font-semibold">Карта</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-gray-400 py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-white font-bold mb-3 text-base">О школе</h4>
              <p className="text-sm">
                Rhythmigo Shop — школа лезгинки и кавказских барабанов в Санкт-Петербурге
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-3 text-base">Навигация</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-[#c1392b]">Главная</a></li>
                <li><a href="#" className="hover:text-[#c1392b]">Направления</a></li>
                <li><a href="#" className="hover:text-[#c1392b]">Расписание</a></li>
                <li><a href="#" className="hover:text-[#c1392b]">Цены</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-3 text-base">Мы в соцсетях</h4>
              <div className="flex gap-3">
                <a href="#" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#c1392b]">
                  <Icon name="Facebook" size={18} />
                </a>
                <a href="#" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#c1392b]">
                  <Icon name="Instagram" size={18} />
                </a>
                <a href="#" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#c1392b]">
                  <Icon name="Youtube" size={18} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-6 text-center text-sm">
            <p>© 2025 Rhythmigo Shop. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
