import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
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
  );
};

export default Footer;
