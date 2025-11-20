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
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время'
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-sm py-3 px-4 sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-red-600">
              <img 
                src="https://cdn.poehali.dev/files/b42a71b1-b412-49c4-a137-8a2dbb7f4f92.jpeg" 
                alt="Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="font-bold text-sm text-gray-900">Rhythmigor Shop</div>
              <div className="text-xs text-gray-600">Школа лезгинки и барабанов</div>
            </div>
          </div>
          <Button className="bg-red-600 hover:bg-red-700 text-white px-6">
            Главная
          </Button>
        </div>
      </header>

      <section className="bg-gradient-to-br from-red-700 via-red-600 to-orange-600 py-24 px-4">
        <div className="container mx-auto max-w-3xl text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Почувствуй<br />
            <span className="text-6xl md:text-7xl">Rhythms Rigor</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-95">
            Изучи лезгинку и кавказские барабаны с лучшими преподавателями.<br />
            Присоединяйся к нашему сообществу танца и музыки!
          </p>
          <div className="max-w-md mx-auto">
            <Input 
              placeholder="Имя и Фамилия"
              className="bg-white/95 text-gray-900 border-0 h-12"
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-gray-900">
            Направления обучения
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Подходящие занятия найдутся для каждого участника нашей школы
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: 'Лезгинка', badge: 'Начинающие', desc: 'Традиционный кавказский танец с динамичными движениями', time: '1 час 30 мин', slots: '15 мест', price: 'от 500₽' },
              { title: 'Кавказские барабаны', badge: 'Средний', desc: 'Обучение игре на традиционных кавказских барабанах', time: '1 час 30 мин', slots: '10 мест', price: 'от 500₽' },
              { title: 'Семейная лезгинка', badge: 'Начинающие', desc: 'Семейные занятия для детей и взрослых', time: '1 час 30 мин', slots: '20 мест', price: 'от 500₽' },
              { title: 'Индивидуальные занятия', badge: 'Начинающие', desc: 'Персональные уроки с профессиональным преподавателем', time: '1 час 30 мин', slots: '5 мест', price: 'от 500₽' }
            ].map((dir, idx) => (
              <div key={idx} className="bg-gradient-to-br from-red-600 to-red-700 text-white rounded-lg p-6 shadow-lg">
                <span className="inline-block bg-white text-red-600 text-xs font-bold px-3 py-1 rounded-full mb-3">
                  {dir.badge}
                </span>
                <h3 className="text-2xl font-bold mb-2">{dir.title}</h3>
                <p className="text-sm opacity-90 mb-4">{dir.desc}</p>
                <div className="flex items-center gap-4 text-sm mb-4 opacity-90">
                  <span>⏱ {dir.time}</span>
                  <span>👥 {dir.slots}</span>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-white/20">
                  <span className="text-2xl font-bold">{dir.price}</span>
                  <Button className="bg-white text-red-600 hover:bg-gray-100 font-bold">
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-gray-900">
            Расписание занятий
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Мы предоставляем возможность выбрать удобное расписание
          </p>

          <div className="space-y-8">
            {[
              { title: 'Кавказские барабаны', items: [
                { day: 'ПТ 20/12/2025', time: '12:00', name: 'Начальная группа' },
                { day: 'СБ 20/12/2025', time: '13:30-15:00', name: 'Концертный состав' }
              ]},
              { title: 'Семейная лезгинка', items: [
                { day: 'ПТ 20/12/2025', time: '15:00-16:30', name: 'Детская группа' },
                { day: 'СБ 20/12/2025', time: '16:30-18:00', name: 'Взрослая группа' }
              ]},
              { title: 'Свадебная лезгинка', items: [
                { day: 'ПТ 20/12/2025', time: '18:00-19:00', name: 'Женская группа' },
                { day: 'СБ 20/12/2025', time: '19:00-20:00', name: 'Мужская группа' }
              ]}
            ].map((section, idx) => (
              <div key={idx}>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{section.title}</h3>
                <div className="space-y-3">
                  {section.items.map((item, sidx) => (
                    <div key={sidx} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                        <div className="flex items-center gap-4">
                          <div className="text-sm text-gray-600">{item.day}</div>
                          <div className="text-sm font-semibold text-gray-900">{item.time}</div>
                        </div>
                        <div className="text-sm text-gray-700">{item.name}</div>
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
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Цены</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Абонемент на месяц', price: '3000₽', features: ['Посещение групповых занятий', 'Доступ к расписанию', '8 занятий в месяц'] },
              { title: 'Общее абонемент', price: '5500₽', popular: true, features: ['Посещение всех направлений', 'Приоритетная запись', 'Безлимитные занятия'] },
              { title: 'Индивидуальное обучение', price: '2500₽', features: ['Персональный подход', 'Гибкий график', 'Быстрый прогресс'] }
            ].map((price, idx) => (
              <div 
                key={idx} 
                className={`bg-white rounded-lg shadow-lg p-6 ${price.popular ? 'ring-2 ring-red-600' : ''}`}
              >
                {price.popular && (
                  <div className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                    Популярно
                  </div>
                )}
                <h3 className="text-xl font-bold mb-4 text-gray-900">{price.title}</h3>
                <div className="text-4xl font-bold text-red-600 mb-6">{price.price}</div>
                <ul className="space-y-3 mb-6">
                  {price.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-red-600">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className={`w-full ${price.popular ? 'bg-red-600 hover:bg-red-700' : 'bg-gray-900 hover:bg-gray-800'} text-white font-bold`}>
                  Выбрать тариф
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Галерея</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {Array(14).fill(0).map((_, idx) => (
              <div key={idx} className="aspect-square rounded-lg overflow-hidden bg-gray-200">
                <img 
                  src="https://cdn.poehali.dev/files/b42a71b1-b412-49c4-a137-8a2dbb7f4f92.jpeg" 
                  alt={`Фото ${idx + 1}`} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Контакты</h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="MapPin" className="text-red-500" size={20} />
                  <span className="font-bold">Адрес</span>
                </div>
                <p className="text-gray-300 ml-7">г. Москва, ул. Примерная, д. 1</p>
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="Phone" className="text-red-500" size={20} />
                  <span className="font-bold">Телефон</span>
                </div>
                <p className="text-gray-300 ml-7">+7 (999) 123-45-67</p>
                <p className="text-gray-300 ml-7">+7 (999) 765-43-21</p>
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="Mail" className="text-red-500" size={20} />
                  <span className="font-bold">Email</span>
                </div>
                <p className="text-gray-300 ml-7">info@rhythmigor.ru</p>
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="Clock" className="text-red-500" size={20} />
                  <span className="font-bold">Режим работы</span>
                </div>
                <p className="text-gray-300 ml-7">Пн-Вс: 10:00 - 22:00</p>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Записаться на занятие</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Имя"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                  required
                />
                <Input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                  required
                />
                <Textarea
                  placeholder="Сообщение"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 min-h-[100px]"
                />
                <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 font-bold">
                  Отправить заявку
                </Button>
              </form>
            </div>
          </div>

          <div className="bg-red-600 h-80 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <Icon name="MapPin" size={64} className="mx-auto mb-4 opacity-50" />
              <p className="text-xl">Карта</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-gray-400 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-white font-bold mb-4 text-lg">О школе</h4>
              <p className="text-sm leading-relaxed">
                Rhythmigor Shop — профессиональная школа лезгинки и кавказских барабанов в Москве
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4 text-lg">Навигация</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-red-500 transition">Главная</a></li>
                <li><a href="#" className="hover:text-red-500 transition">Направления</a></li>
                <li><a href="#" className="hover:text-red-500 transition">Расписание</a></li>
                <li><a href="#" className="hover:text-red-500 transition">Цены</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4 text-lg">Мы в соцсетях</h4>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition">
                  <Icon name="Youtube" size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-6 text-center text-sm">
            <p>© 2025 Rhythmigor Shop. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
