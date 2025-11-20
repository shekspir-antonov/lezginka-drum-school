import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    direction: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время'
    });
    setFormData({ name: '', phone: '', direction: '' });
  };

  const directions = [
    {
      title: 'Лезгинка',
      subtitle: 'Традиционный танец с огненным характером',
      level: 'Начинающие',
      duration: '1.5 часа',
      price: '3500₽/мес'
    },
    {
      title: 'Кавказские барабаны',
      subtitle: 'Ритмы гор в ваших руках',
      level: 'Начинающие',
      duration: '1.5 часа',
      price: '3500₽/мес'
    },
    {
      title: 'Семейная лезгинка',
      subtitle: 'Танцы для всей семьи',
      level: 'Начинающие',
      duration: '1 час',
      price: '3500₽/мес'
    },
    {
      title: 'Индивидуальные занятия',
      subtitle: 'Персональный подход к каждому',
      level: 'Любой уровень',
      duration: '1 час',
      price: '2500₽/час'
    }
  ];

  const schedule = {
    drums: [
      { time: '12:00-13:30', group: 'Начальная группа' },
      { time: '13:30-15:00', group: 'Концертный состав' }
    ],
    family: [
      { time: '15:00-16:30', group: 'Детская группа' },
      { time: '16:30-18:00', group: 'Взрослая группа' }
    ],
    wedding: [
      { time: '18:00-19:00', group: 'Женская группа' },
      { time: '19:00-20:00', group: 'Мужская группа' }
    ]
  };

  const prices = [
    {
      title: 'Абонемент на месяц',
      price: '3500₽',
      features: ['8 занятий в месяц', 'Групповые занятия', 'Все материалы включены']
    },
    {
      title: 'Общее абонемент',
      price: '5000₽',
      features: ['12 занятий в месяц', 'Групповые занятия', 'Доступ к мастер-классам'],
      popular: true
    },
    {
      title: 'Индивидуальное обучение',
      price: '2500₽',
      features: ['Персональный подход', 'Гибкое расписание', 'Быстрый прогресс']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b sticky top-0 z-50 px-0 mx-0 py-0 my-0">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img 
                src="https://cdn.poehali.dev/files/7ba66c70-52d0-4d8a-9219-ff546a78df7e.png" 
                alt="Ритмы Гор"
                className="h-20 md:h-24 lg:h-28 cursor-pointer transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_8px_16px_rgba(234,88,12,0.4)] px-0.5 py-2.5"
              />
            </div>
            
            <nav className="hidden md:flex items-center gap-8 text-base text-gray-700">
              <a href="#directions" className="hover:text-orange-600 transition-colors">Направления</a>
              <a href="#schedule" className="hover:text-orange-600 transition-colors">Расписание</a>
              <a href="#achievements" className="hover:text-orange-600 transition-colors">Достижения</a>
              <a href="#teachers" className="hover:text-orange-600 transition-colors">Преподаватели</a>
              <a href="#gallery" className="hover:text-orange-600 transition-colors">Галерея</a>
              <a href="#contact" className="hover:text-orange-600 transition-colors">Контакты</a>
            </nav>

            <Button className="bg-red-600 hover:bg-red-700 text-white px-8">
              Записаться
            </Button>
          </div>
        </div>
      </header>

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

      <section id="directions" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-3 text-gray-900">
            Направления обучения
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Подходящие занятия найдутся для каждого участника нашей школы
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {directions.map((dir, idx) => (
              <Card key={idx} className="bg-gradient-to-br from-red-600 to-red-700 text-white overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{dir.title}</h3>
                  <p className="text-white/90 mb-4 text-sm">{dir.subtitle}</p>
                  
                  <div className="flex items-center gap-4 mb-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Icon name="Award" size={16} />
                      <span>{dir.level}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Clock" size={16} />
                      <span>{dir.duration}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-white/20">
                    <span className="text-2xl font-bold">{dir.price}</span>
                    <Button className="bg-white text-red-600 hover:bg-gray-100">
                      Записаться
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="schedule" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-3 text-gray-900">
            Расписание занятий
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Выбирайте удобное для вас время
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Кавказские барабаны</h3>
              <div className="space-y-3">
                {schedule.drums.map((item, idx) => (
                  <Card key={idx}>
                    <CardContent className="p-4 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="bg-red-100 text-red-600 px-4 py-2 rounded font-semibold">
                          {item.time}
                        </div>
                        <span className="text-gray-700">{item.group}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Семейная лезгинка</h3>
              <div className="space-y-3">
                {schedule.family.map((item, idx) => (
                  <Card key={idx}>
                    <CardContent className="p-4 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="bg-red-100 text-red-600 px-4 py-2 rounded font-semibold">
                          {item.time}
                        </div>
                        <span className="text-gray-700">{item.group}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Свадебная лезгинка</h3>
              <div className="space-y-3">
                {schedule.wedding.map((item, idx) => (
                  <Card key={idx}>
                    <CardContent className="p-4 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="bg-red-100 text-red-600 px-4 py-2 rounded font-semibold">
                          {item.time}
                        </div>
                        <span className="text-gray-700">{item.group}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-3 text-gray-900">
            Цены
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Для каждого клиента найдется удобный вариант абонемента
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {prices.map((price, idx) => (
              <Card key={idx} className={price.popular ? 'border-2 border-orange-500 shadow-xl' : ''}>
                <CardContent className="p-8 text-center">
                  {price.popular && (
                    <div className="bg-orange-500 text-white text-sm font-bold py-1 px-4 rounded-full inline-block mb-4">
                      Популярный
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{price.title}</h3>
                  <div className="text-4xl font-bold text-red-600 mb-6">{price.price}</div>
                  <ul className="space-y-3 mb-6">
                    {price.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-600">
                        <Icon name="Check" size={18} className="text-green-600" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                    Выбрать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-3 text-gray-900">
            Галерея
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Наши лучшие моменты, запечатленные в фото и видео
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {[
              'https://cdn.poehali.dev/projects/7b926d61-74ef-4f01-9d24-01c42a62c5a3/files/5766cbf7-a630-4991-9766-47fabeae4642.jpg',
              'https://cdn.poehali.dev/projects/7b926d61-74ef-4f01-9d24-01c42a62c5a3/files/d2e5d6ed-28ae-4f3f-b24f-6add9ab9ecbf.jpg',
              'https://cdn.poehali.dev/projects/7b926d61-74ef-4f01-9d24-01c42a62c5a3/files/16e2ed7a-3365-46f7-925c-63b91e7588d4.jpg',
              'https://cdn.poehali.dev/projects/7b926d61-74ef-4f01-9d24-01c42a62c5a3/files/5766cbf7-a630-4991-9766-47fabeae4642.jpg',
              'https://cdn.poehali.dev/projects/7b926d61-74ef-4f01-9d24-01c42a62c5a3/files/d2e5d6ed-28ae-4f3f-b24f-6add9ab9ecbf.jpg',
              'https://cdn.poehali.dev/projects/7b926d61-74ef-4f01-9d24-01c42a62c5a3/files/16e2ed7a-3365-46f7-925c-63b91e7588d4.jpg',
              'https://cdn.poehali.dev/projects/7b926d61-74ef-4f01-9d24-01c42a62c5a3/files/5766cbf7-a630-4991-9766-47fabeae4642.jpg',
              'https://cdn.poehali.dev/projects/7b926d61-74ef-4f01-9d24-01c42a62c5a3/files/d2e5d6ed-28ae-4f3f-b24f-6add9ab9ecbf.jpg',
              'https://cdn.poehali.dev/projects/7b926d61-74ef-4f01-9d24-01c42a62c5a3/files/16e2ed7a-3365-46f7-925c-63b91e7588d4.jpg',
              'https://cdn.poehali.dev/projects/7b926d61-74ef-4f01-9d24-01c42a62c5a3/files/5766cbf7-a630-4991-9766-47fabeae4642.jpg',
              'https://cdn.poehali.dev/projects/7b926d61-74ef-4f01-9d24-01c42a62c5a3/files/d2e5d6ed-28ae-4f3f-b24f-6add9ab9ecbf.jpg',
              'https://cdn.poehali.dev/projects/7b926d61-74ef-4f01-9d24-01c42a62c5a3/files/16e2ed7a-3365-46f7-925c-63b91e7588d4.jpg'
            ].map((img, idx) => (
              <div key={idx} className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer">
                <img 
                  src={img} 
                  alt={`Галерея ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-3 text-gray-900">
            Контакты
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Приглашаем в нашу школу находиться на получение подробной информации
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Адрес</h3>
                  <p className="text-gray-600">Санкт-Петербург, ул. Примерная, д. 1</p>
                  <p className="text-gray-600">Метро "Площадь Восстания"</p>
                  <Button className="mt-3 bg-red-600 hover:bg-red-700 text-white">
                    Открыть на карте
                  </Button>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Телефон</h3>
                  <p className="text-gray-600">+7 (999) 123-45-67</p>
                  <p className="text-gray-600 text-sm">С 10:00 до 21:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email</h3>
                  <p className="text-gray-600">info@ritmygor.ru</p>
                  <p className="text-gray-600 text-sm">Ответим в течение дня</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">График</h3>
                  <p className="text-gray-600">Ежедневно с 10:00 до 22:00</p>
                  <p className="text-gray-600 text-sm">Суббота и воскресенье с 09:00</p>
                </div>
              </div>
            </div>

            <div>
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Записаться на занятие</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Имя</label>
                      <Input
                        required
                        placeholder="Ваше имя"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Телефон</label>
                      <Input
                        required
                        type="tel"
                        placeholder="+7 (___) ___-__-__"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Направление</label>
                      <select 
                        className="w-full border rounded-md p-2"
                        value={formData.direction}
                        onChange={(e) => setFormData({ ...formData, direction: e.target.value })}
                      >
                        <option value="">Выберите направление</option>
                        <option value="lezginka">Лезгинка</option>
                        <option value="drums">Кавказские барабаны</option>
                        <option value="family">Семейная лезгинка</option>
                        <option value="individual">Индивидуальные занятия</option>
                      </select>
                    </div>
                    <Button 
                      type="submit"
                      className="w-full bg-red-600 hover:bg-red-700 text-white py-6"
                    >
                      Записаться на занятие
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="mt-6 rounded-lg overflow-hidden h-64">
                <iframe 
                  src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=1234567890"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="fixed bottom-8 right-8 z-50">
        <a 
          href="https://wa.me/79999999999" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600"
        >
          <Icon name="MessageCircle" size={32} className="text-white" />
        </a>
      </div>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <img 
                src="https://cdn.poehali.dev/files/7ba66c70-52d0-4d8a-9219-ff546a78df7e.png" 
                alt="Ритмы Гор"
                className="h-14 mb-4 brightness-200"
              />
              <p className="text-gray-400 text-sm">
                Приобщайтесь к традиционным кавказским танцам и музыке вместе с профессиональными мастерами. 
                Занятия для детей и взрослых.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Направления</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#directions" className="hover:text-orange-500 transition-colors">Лезгинка</a></li>
                <li><a href="#directions" className="hover:text-orange-500 transition-colors">Кавказские барабаны</a></li>
                <li><a href="#directions" className="hover:text-orange-500 transition-colors">Семейная лезгинка</a></li>
                <li><a href="#directions" className="hover:text-orange-500 transition-colors">Индивидуальные занятия</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (999) 123-45-67</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@ritmygor.ru</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  <span>Санкт-Петербург, ул. Примерная, д. 1</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
            <p>© 2025 Ритмы Гор. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;