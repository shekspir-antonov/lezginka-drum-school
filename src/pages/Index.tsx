import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    direction: '',
    email: '',
    message: ''
  });

  const directions = [
    {
      title: 'Лезгинка',
      description: 'Традиционный танец с огненным характером',
      level: 'Начинающие',
      duration: '1.5 часа',
      price: '3500₽/мес',
      image: 'https://cdn.poehali.dev/projects/7b926d61-74ef-4f01-9d24-01c42a62c5a3/files/5766cbf7-a630-4991-9766-47fabeae4642.jpg'
    },
    {
      title: 'Кавказские барабаны',
      description: 'Ритмы гор в ваших руках',
      level: 'Начинающие',
      duration: '1.5 часа',
      price: '3500₽/мес',
      image: 'https://cdn.poehali.dev/projects/7b926d61-74ef-4f01-9d24-01c42a62c5a3/files/d2e5d6ed-28ae-4f3f-b24f-6add9ab9ecbf.jpg'
    },
    {
      title: 'Свадебная лезгинка',
      description: 'Грациозность и благородство',
      level: 'Начинающие',
      duration: '1 час',
      price: '3500₽/мес',
      image: 'https://cdn.poehali.dev/projects/7b926d61-74ef-4f01-9d24-01c42a62c5a3/files/16e2ed7a-3365-46f7-925c-63b91e7588d4.jpg'
    }
  ];

  const schedule = [
    { time: '12:00-13:30', direction: 'Кавказские барабаны', group: 'Начальная группа' },
    { time: '13:30-15:00', direction: 'Кавказские барабаны', group: 'Концертный состав' },
    { time: '15:00-16:30', direction: 'Семейная лезгинка', group: 'Детская группа' },
    { time: '16:30-18:00', direction: 'Семейная лезгинка', group: 'Взрослая группа' },
    { time: '18:00-19:00', direction: 'Свадебная лезгинка', group: 'Женская группа' },
    { time: '19:00-20:00', direction: 'Свадебная лезгинка', group: 'Мужская группа' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время'
    });
    setFormData({ name: '', phone: '', direction: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <header className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-6 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="Music" size={32} className="text-amber-200" />
              <h1 className="text-3xl font-bold">Кавказские танцы</h1>
            </div>
            <nav className="hidden md:flex gap-6">
              <a href="#directions" className="hover:text-amber-200 transition-colors">Направления</a>
              <a href="#schedule" className="hover:text-amber-200 transition-colors">Расписание</a>
              <a href="#contact" className="hover:text-amber-200 transition-colors">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      <section className="py-20 px-4 bg-gradient-to-br from-red-600 via-orange-600 to-amber-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Почувствуй дух гор
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
            Обучение кавказским танцам и игре на барабанах для детей и взрослых
          </p>
          <Button 
            size="lg" 
            className="bg-white text-red-600 hover:bg-amber-50 text-lg px-8 py-6 animate-scale-in"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Записаться на занятие
          </Button>
        </div>
      </section>

      <section id="directions" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Наши направления
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {directions.map((dir, idx) => (
              <Card key={idx} className="overflow-hidden hover-scale group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={dir.image} 
                    alt={dir.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold">{dir.title}</h3>
                    <p className="text-sm opacity-90">{dir.description}</p>
                  </div>
                </div>
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Icon name="Award" size={20} className="text-orange-600" />
                    <span>{dir.level}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Icon name="Clock" size={20} className="text-orange-600" />
                    <span>{dir.duration}</span>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t">
                    <span className="text-2xl font-bold text-red-600">{dir.price}</span>
                    <Button 
                      className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700"
                      onClick={() => {
                        setFormData({ ...formData, direction: dir.title });
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      Записаться
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="schedule" className="py-20 px-4 bg-amber-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Расписание занятий
          </h2>
          <Card>
            <CardContent className="p-0">
              {schedule.map((item, idx) => (
                <div 
                  key={idx}
                  className="flex items-center justify-between p-6 border-b last:border-b-0 hover:bg-amber-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-br from-red-600 to-orange-600 text-white px-4 py-3 rounded-lg font-bold">
                      {item.time}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-800">{item.direction}</h3>
                      <p className="text-gray-600">{item.group}</p>
                    </div>
                  </div>
                  <Icon name="ChevronRight" size={24} className="text-gray-400" />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Записаться на занятие
          </h2>
          <Card>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Ваше имя *
                  </label>
                  <Input
                    required
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Телефон *
                  </label>
                  <Input
                    required
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Направление
                  </label>
                  <Input
                    placeholder="Выберите направление"
                    value={formData.direction}
                    onChange={(e) => setFormData({ ...formData, direction: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="example@mail.ru"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">
                    Сообщение
                  </label>
                  <Textarea
                    placeholder="Ваш вопрос или пожелание"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-lg py-6"
                >
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Icon name="Music" size={24} className="text-orange-500" />
                Кавказские танцы
              </h3>
              <p className="text-gray-400">
                Профессиональная школа кавказских танцев и барабанов
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  +7 (999) 123-45-67
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  info@kavkazdance.ru
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="MapPin" size={18} />
                  Москва, ул. Примерная, 1
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Соцсети</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                  <Icon name="Youtube" size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2024 Школа кавказских танцев. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
