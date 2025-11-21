const ScheduleSection = () => {
  const scrollToContacts = () => {
    const element = document.getElementById('contacts');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="schedule" className="py-12 md:py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 md:mb-4 text-gray-900" style={{ fontFamily: "'Montserrat', sans-serif" }}>
          Расписание занятий
        </h2>
        <p className="text-center text-gray-600 text-base md:text-lg mb-12 md:mb-16">Выбирайте удобное время для занятий</p>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="bg-gradient-to-br from-[#f8f9fa] to-white border-2 border-[#e67e22] rounded-2xl p-6 md:p-8 shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#d04430] text-center" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Суббота
            </h3>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-4 md:p-5 shadow-md border-l-4 border-[#d04430]">
                <h4 className="font-bold text-lg md:text-xl text-gray-900 mb-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Кавказские барабаны
                </h4>
                <div className="space-y-2 text-sm md:text-base text-gray-700">
                  <div className="flex justify-between items-center">
                    <span>12:00-13:30</span>
                    <span className="text-[#d04430] font-semibold">Начальная группа</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>13:30-15:00</span>
                    <span className="text-[#d04430] font-semibold">Концертный состав</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 md:p-5 shadow-md border-l-4 border-[#e67e22]">
                <h4 className="font-bold text-lg md:text-xl text-gray-900 mb-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Семейная лезгинка
                </h4>
                <div className="space-y-2 text-sm md:text-base text-gray-700">
                  <div className="flex justify-between items-center">
                    <span>15:00-16:30</span>
                    <span className="text-[#e67e22] font-semibold">Детская группа</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>16:30-18:00</span>
                    <span className="text-[#e67e22] font-semibold">Взрослая группа</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 md:p-5 shadow-md border-l-4 border-[#f39c12]">
                <h4 className="font-bold text-lg md:text-xl text-gray-900 mb-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Свадебная лезгинка
                </h4>
                <div className="space-y-2 text-sm md:text-base text-gray-700">
                  <div className="flex justify-between items-center">
                    <span>18:00-19:00</span>
                    <span className="text-[#f39c12] font-semibold">Женская группа</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>19:00-20:00</span>
                    <span className="text-[#f39c12] font-semibold">Мужская группа</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#f8f9fa] to-white border-2 border-[#e67e22] rounded-2xl p-6 md:p-8 shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#d04430] text-center" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Воскресенье
            </h3>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-4 md:p-5 shadow-md border-l-4 border-[#d04430]">
                <h4 className="font-bold text-lg md:text-xl text-gray-900 mb-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Кавказские барабаны
                </h4>
                <div className="space-y-2 text-sm md:text-base text-gray-700">
                  <div className="flex justify-between items-center">
                    <span>12:00-13:30</span>
                    <span className="text-[#d04430] font-semibold">Начальная группа</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>13:30-15:00</span>
                    <span className="text-[#d04430] font-semibold">Концертный состав</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 md:p-5 shadow-md border-l-4 border-[#e67e22]">
                <h4 className="font-bold text-lg md:text-xl text-gray-900 mb-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Семейная лезгинка
                </h4>
                <div className="space-y-2 text-sm md:text-base text-gray-700">
                  <div className="flex justify-between items-center">
                    <span>15:00-16:30</span>
                    <span className="text-[#e67e22] font-semibold">Детская группа</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>16:30-18:00</span>
                    <span className="text-[#e67e22] font-semibold">Взрослая группа</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 md:p-5 shadow-md border-l-4 border-[#f39c12]">
                <h4 className="font-bold text-lg md:text-xl text-gray-900 mb-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Свадебная лезгинка
                </h4>
                <div className="space-y-2 text-sm md:text-base text-gray-700">
                  <div className="flex justify-between items-center">
                    <span>18:00-19:00</span>
                    <span className="text-[#f39c12] font-semibold">Женская группа</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>19:00-20:00</span>
                    <span className="text-[#f39c12] font-semibold">Мужская группа</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
