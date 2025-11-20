import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';

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
      <Header />
      <HeroSection />

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
            Стоимость занятий
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Выбирайте подходящий тариф для себя
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {prices.map((price, idx) => (
              <Card key={idx} className={price.popular ? 'border-2 border-red-600 shadow-lg' : ''}>
                <CardContent className="p-6">
                  {price.popular && (
                    <div className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                      ПОПУЛЯРНЫЙ
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{price.title}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-red-600">{price.price}</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {price.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${price.popular ? 'bg-red-600 hover:bg-red-700 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-800'}`}>
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

      <div className="fixed bottom-6 right-6 z-40">
        <a
          href="https://wa.me/79991234567"
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
        >
          <Icon name="MessageCircle" size={32} className="text-white" />
        </a>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
