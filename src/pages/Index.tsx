import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navigation = [
    { id: 'home', label: 'О НАС' },
    { id: 'news', label: 'НОВОСТИ И СОБЫТИЯ' },
    { id: 'programs', label: 'ПРОГРАММЫ И ОРГАНИЗАЦИЯ ОБУЧЕНИЯ' },
    { id: 'partnership', label: 'СОЦИАЛЬНОЕ ПАРТНЕРСТВО' },
    { id: 'partners', label: 'ПАРТНЕРЫ И ПРОЕКТЫ' },
    { id: 'contacts', label: 'КОНТАКТЫ' }
  ];

  const benefits = [
    {
      icon: 'Scale',
      title: 'Соответствие законодательству РФ',
      description: '(лицензия, аккредитация, согласование программ, регистрация документов ФИС ФРДО)'
    },
    {
      icon: 'Users',
      title: 'Образовательные программы реализуются профессорско-преподавательским составом и экспертами-практиками',
      description: ''
    },
    {
      icon: 'Presentation',
      title: 'Современные образовательные технологии',
      description: ''
    }
  ];

  const programs = [
    {
      title: 'Профессиональная переподготовка',
      duration: '256-512 часов',
      format: 'Очное + дистанционное',
      icon: 'GraduationCap',
      description: 'Полноценное обучение с получением диплома установленного образца',
      features: ['Диплом государственного образца', 'Практические занятия', 'Стажировка на производстве']
    },
    {
      title: 'Повышение квалификации',
      duration: '72-144 часа',
      format: 'Онлайн + офлайн',
      icon: 'BookOpen',
      description: 'Актуализация знаний по специальности и получение новых компетенций',
      features: ['Удостоверение о повышении квалификации', 'Гибкий график', 'Современные методики']
    },
    {
      title: 'Краткосрочные курсы',
      duration: '16-40 часов',
      format: 'Интенсивное обучение',
      icon: 'Zap',
      description: 'Быстрое освоение конкретных навыков и технологий',
      features: ['Сертификат участника', 'Узкая специализация', 'Практические кейсы']
    },
    {
      title: 'Индивидуальное обучение',
      duration: 'По запросу',
      format: 'Персональный подход',
      icon: 'User',
      description: 'Обучение под конкретные задачи вашей организации',
      features: ['Индивидуальная программа', 'Гибкое расписание', 'Тьюторское сопровождение']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <header className="bg-primary text-primary-foreground shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <Icon name="GraduationCap" size={28} className="text-primary" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider opacity-90">Корпоративный университет</div>
              <div className="text-2xl font-extrabold">ИЗОЛЯТОР</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-right mr-4">
              <div className="text-xs opacity-80">ГРУППА КОМПАНИЙ</div>
              <div className="text-xl font-bold">ИЗОЛЯТОР</div>
            </div>
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <Icon name="Star" size={24} className="text-primary" />
            </div>
          </div>
        </div>
        
        <nav className="bg-[#2563eb] border-t border-white/10">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between overflow-x-auto">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`px-4 py-4 text-xs font-semibold uppercase tracking-wide whitespace-nowrap transition-all hover:bg-white/10 ${
                    activeSection === item.id ? 'bg-white/20 border-b-2 border-white' : ''
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16 bg-white p-8 rounded-lg shadow-md animate-fade-in">
          <p className="text-lg leading-relaxed text-foreground/80 mb-8">
            <span className="font-bold">ГРУППА КОМПАНИЙ «ИЗОЛЯТОР»</span> ЯВЛЯЕТСЯ ОДНИМ ИЗ КРУПНЕЙШИХ МИРОВЫХ И ЕДИНСТВЕННЫМ ОТЕЧЕСТВЕННЫМ 
            ПРОИЗВОДИТЕЛЕМ ВЫСОКОВОЛЬТНЫХ ВВОДОВ С БОЛЕЕ ЧЕМ 125-ЛЕТНЕЙ ИСТОРИЕЙ. СЕГОДНЯ «ИЗОЛЯТОР» — ЭТО 
            СОВРЕМЕННЫЙ ПРОИЗВОДСТВЕННЫЙ КОМПЛЕКС, ВЫПУСКАЮЩИЙ ВВОДЫ ПОСТОЯННОГО И ПЕРЕМЕННОГО ТОКА НА КЛАССЫ 
            НАПРЯЖЕНИЯ ОТ 12 ДО 1200 КВ.
          </p>
        </section>

        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-xl transition-shadow duration-300 animate-fade-in border-l-4 border-l-primary">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Target" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary">Почему мы?</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Программы обучения, разработанные в Корпоративном университете "ИЗОЛЯТОР", помогают нашим партнерам снизить 
                риски ошибок при эксплуатации высоковольтного и кабельного оборудования, а также помогают специалистам на 
                местах получать нужные компетенции для правильной работы с продукцией.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow duration-300 animate-fade-in border-l-4 border-l-accent" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="BookOpen" size={24} className="text-accent" />
                </div>
                <h3 className="text-xl font-bold text-accent">Формат обучения:</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Мы выстраиваем многоформатный подход в образовательной деятельности: очное обучение на базе нашей 
                Компании, выезд преподавателя к Заказчику, электронный контент, точечное обучение, индивидуальная 
                поддержка в формате тьюторского сопровождения. В конечном счете все это позволяет слушателям развиваться 
                целенаправленно и персонифицированно.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow duration-300 animate-fade-in border-l-4 border-l-secondary" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Trophy" size={24} className="text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-secondary">Ваши прямые выгоды:</h3>
              </div>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                  <span>Соответствие законодательству РФ</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                  <span>Профессорско-преподавательский состав и эксперты-практики</span>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Check" size={16} className="text-secondary mt-0.5 flex-shrink-0" />
                  <span>Современные образовательные технологии</span>
                </li>
              </ul>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Ваши прямые выгоды:</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Icon name={benefit.icon} size={32} className="text-white" />
                </div>
                <h3 className="text-sm font-semibold text-center mb-2 min-h-[60px] flex items-center justify-center">
                  {benefit.title}
                </h3>
                {benefit.description && (
                  <p className="text-xs text-muted-foreground text-center">{benefit.description}</p>
                )}
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Программы обучения</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите подходящий формат обучения для развития компетенций вашей команды
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {programs.map((program, index) => (
              <Card key={index} className="p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-t-primary animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Icon name={program.icon} size={28} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">{program.title}</h3>
                    <div className="flex flex-wrap gap-3 mb-3">
                      <span className="inline-flex items-center gap-1 text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium">
                        <Icon name="Clock" size={14} />
                        {program.duration}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs bg-accent/10 text-accent px-3 py-1 rounded-full font-medium">
                        <Icon name="Laptop" size={14} />
                        {program.format}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {program.description}
                </p>
                <div className="space-y-2 mb-6">
                  {program.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon name="Check" size={12} className="text-primary" />
                      </div>
                      <span className="text-foreground/80">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full" variant="outline">
                  <Icon name="Info" size={16} className="mr-2" />
                  Подробнее
                </Button>
              </Card>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-primary to-accent text-white p-12 rounded-2xl shadow-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы начать обучение?</h2>
          <p className="text-lg mb-8 opacity-90">
            Программы обучения помогут вашей команде получить необходимые компетенции
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6 hover:scale-105 transition-transform">
            <Icon name="Send" size={20} className="mr-2" />
            ПОДАТЬ ЗАЯВКУ
          </Button>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground mt-20 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-80">
            © 2025 Корпоративный университет ИЗОЛЯТОР. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;