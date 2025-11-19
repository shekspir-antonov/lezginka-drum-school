import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const directions = [
    {
      title: 'Лезгинка',
      description: 'Традиционный кавказский танец с энергичными движениями',
      icon: 'Flame',
      price: 'от 3000₽'
    },
    {
      title: 'Кавказские барабаны',
      description: 'Обучение игре на традиционных барабанах',
      icon: 'Music',
      price: 'от 3500₽'
    },
    {
      title: 'Детские группы',
      description: 'Танцы и барабаны для детей от 5 лет',
      icon: 'Users',
      price: 'от 2500₽'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время'
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center">
                <Icon name="Music" size={32} className="text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-orange-600">Ритмы Гор</h1>
                <p className="text-sm text-gray-600">Школа лезгинки и кавказских барабанов</p>
              </div>
            </div>
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden"
            >
              <Icon name="Menu" size={28} />
            </button>
            <nav className="hidden md:flex gap-6 text-gray-700">
              <a href="#directions" className="hover:text-orange-600 transition-colors">Направления</a>
              <a href="#about" className="hover:text-orange-600 transition-colors">О нас</a>
              <a href="#contact" className="hover:text-orange-600 transition-colors">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="md:hidden bg-white border-b shadow-lg">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a href="#directions" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-orange-600">Направления</a>
            <a href="#about" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-orange-600">О нас</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="text-gray-700 hover:text-orange-600">Контакты</a>
          </nav>
        </div>
      )}

      <section className="relative py-24 px-4 bg-gradient-to-br from-red-600 via-orange-600 to-orange-500 text-white overflow-hidden">
        <div className="absolute top-10 right-10 opacity-20">
          <Icon name="Music" size={120} />
        </div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Почувствуй<br />
            <span className="text-white drop-shadow-lg" style={{ 
              textShadow: '2px 2px 0px rgba(0,0,0,0.2), 4px 4px 0px rgba(0,0,0,0.1)',
              letterSpacing: '2px'
            }}>Ритмы Гор</span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Изучай традиционные кавказские танцы и барабаны с профессиональными мастерами
          </p>
          <Button 
            size="lg" 
            className="bg-white text-orange-600 hover:bg-orange-50 text-lg px-8 py-6 font-bold"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Icon name="Play" size={20} className="mr-2" />
            Начать обучение
          </Button>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full">
            <path fill="#ffffff" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      <section id="directions" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Направления</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Выберите направление, которое вам интересно
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {directions.map((dir, idx) => (
              <Card key={idx} className="hover-scale border-2 hover:border-orange-500 transition-all">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name={dir.icon as any} size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{dir.title}</h3>
                  <p className="text-gray-600 mb-4">{dir.description}</p>
                  <p className="text-xl font-bold text-orange-600">{dir.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold mb-6">О школе</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            «Ритмы Гор» — это профессиональная школа кавказских танцев и барабанов. 
            Мы обучаем детей и взрослых традиционным танцам и музыке Кавказа.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Наши опытные преподаватели помогут вам освоить технику танца, 
            почувствовать ритм и энергию кавказской культуры.
          </p>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-4">Записаться на занятие</h2>
          <p className="text-center text-gray-600 mb-8">
            Оставьте заявку, и мы свяжемся с вами
          </p>
          <Card>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя</label>
                  <Input
                    required
                    placeholder="Введите имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <Input
                    required
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение (необязательно)</label>
                  <Textarea
                    placeholder="Напишите, что вас интересует"
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

      <div className="fixed bottom-6 right-6 z-50">
        <a 
          href="https://wa.me/79999999999" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors animate-scale-in"
        >
          <Icon name="MessageCircle" size={32} className="text-white" />
        </a>
      </div>

      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-xl font-bold text-orange-500 mb-2">Ритмы Гор</h3>
          <p className="text-gray-400">Школа лезгинки и кавказских барабанов</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
