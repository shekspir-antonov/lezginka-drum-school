import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-white border-b sticky top-0 z-50 px-0 mx-0 py-0 my-0">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="https://cdn.poehali.dev/files/7ba66c70-52d0-4d8a-9219-ff546a78df7e.png" 
              alt="Ритмы Гор"
              className="h-20 md:h-24 lg:h-28 cursor-pointer transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_8px_16px_rgba(234,88,12,0.4)] py-0 px-[15px]"
            />
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-base text-gray-700">
            <a href="#directions" className="hover:text-orange-600 transition-colors">Направления</a>
            <a href="#schedule" className="hover:text-orange-600 transition-colors">Расписание</a>
            <a href="#prices" className="hover:text-orange-600 transition-colors">Цены</a>
            <a href="#gallery" className="hover:text-orange-600 transition-colors">Галерея</a>
            <a href="#contact" className="hover:text-orange-600 transition-colors">Контакты</a>
          </nav>

          <Button className="bg-red-600 hover:bg-red-700 text-white px-8">
            Записаться
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;