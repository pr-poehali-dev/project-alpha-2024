import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CharityMap from "@/components/CharityMap";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Спасибо за ваше обращение!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const videos = [
    {
      title: "Игрушка",
      description: "Их первый в жизни взмах крыльев — подарить свою самую любимую игрушку",
      thumbnail: "https://cdn.poehali.dev/projects/20769f67-e432-40b6-9875-0f2ed0ef918a/files/522d5851-bb78-4f45-aa3e-57a20770a890.jpg"
    },
    {
      title: "Пирог",
      description: "Скромный знак внимания напомнил одинокой соседке, что о ней помнят.",
      thumbnail: "https://cdn.poehali.dev/projects/20769f67-e432-40b6-9875-0f2ed0ef918a/files/737c4ac4-4df6-421f-81f5-074237b902de.jpg"
    },
    {
      title: "Прогулка",
      description: "Совсем немного времени равны вечности счастья для того, кто в нём нуждается.",
      thumbnail: "https://cdn.poehali.dev/projects/20769f67-e432-40b6-9875-0f2ed0ef918a/files/6417480e-ef2a-41fc-a274-7121a5e3d27d.jpg"
    },
    {
      title: "Письмо",
      description: "Письма поддержки, которые согревают сердца пожилых людей",
      thumbnail: "https://cdn.poehali.dev/projects/20769f67-e432-40b6-9875-0f2ed0ef918a/files/33b70f98-450b-488e-bacd-0a542076fd47.jpg"
    },
    {
      title: "Навык",
      description: "Он дарил вторую жизнь велосипедам, а детям — настоящее детство.",
      thumbnail: "https://cdn.poehali.dev/projects/20769f67-e432-40b6-9875-0f2ed0ef918a/files/fe4dda7d-6035-4830-903d-d2cb3c3f34f3.jpg"
    }
  ];

  const benefits = [
    {
      icon: "Heart",
      title: "Прозрачность",
      description: "Каждое пожертвование отслеживается и документируется. Вы видите, куда идут ваши средства."
    },
    {
      icon: "Users",
      title: "Сообщество",
      description: "Присоединяйтесь к тысячам людей, которые уже меняют мир к лучшему вместе с нами."
    },
    {
      icon: "Shield",
      title: "Надежность",
      description: "Мы работаем с 2010 года и имеем все необходимые лицензии и сертификаты."
    },
    {
      icon: "Sparkles",
      title: "Реальные результаты",
      description: "За время работы мы помогли более 50,000 семьям получить необходимую поддержку."
    }
  ];

  const testimonials = [
    {
      name: "Анна Петрова",
      text: "Благодаря вашей помощи мы смогли обеспечить детей всем необходимым. Спасибо за вашу доброту!",
      image: "https://cdn.poehali.dev/projects/20769f67-e432-40b6-9875-0f2ed0ef918a/files/62e5ae39-7c29-451d-af86-d2b744feb71f.jpg"
    },
    {
      name: "Михаил Сидоров",
      text: "Профессиональный подход и искренняя забота о людях. Рад, что есть такие организации!",
      image: "https://cdn.poehali.dev/projects/20769f67-e432-40b6-9875-0f2ed0ef918a/files/2ae172da-61f4-40a8-a054-9d8d9c029f18.jpg"
    },
    {
      name: "Елена Иванова",
      text: "Ваша организация изменила нашу жизнь. Мы получили не только материальную помощь, но и моральную поддержку.",
      image: "https://cdn.poehali.dev/projects/20769f67-e432-40b6-9875-0f2ed0ef918a/files/2e23c88c-160f-4daf-8ef5-3351c3f08206.jpg"
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url('https://cdn.poehali.dev/projects/20769f67-e432-40b6-9875-0f2ed0ef918a/files/966999f6-b6f5-472c-b4af-73f66412d5b5.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
              Эффект бабочки
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Благотворительный медиапроект о силе малых дел. Благотворительность не измеряется суммами, а начинается с готовности сделать свой, даже самый скромный, «взмах крыльев»
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 transition-all transform hover:scale-105"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Icon name="Heart" className="mr-2" size={24} />
                Взмахнуть крылом
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-6 border-2 transition-all transform hover:scale-105"
                onClick={() => document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-secondary/5 via-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Истории добра</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Видеоролики о реальных историях помощи и поддержки
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {videos.map((video, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl cursor-pointer group">
                      <CardContent className="p-0">
                        <div className="relative aspect-video overflow-hidden rounded-t-lg bg-gradient-to-br from-primary/20 to-secondary/20">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                              <Icon name="Play" size={32} className="text-white ml-1" />
                            </div>
                          </div>
                          <img 
                            src={video.thumbnail} 
                            alt={video.title}
                            className="w-full h-full object-cover opacity-50"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold mb-2">{video.title}</h3>
                          <p className="text-muted-foreground text-sm">{video.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0 -translate-x-1/2" />
              <CarouselNext className="right-0 translate-x-1/2" />
            </Carousel>
          </div>
        </div>
      </section>



      <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Отзывы благодарных людей</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Истории тех, кому мы смогли помочь
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="border-2 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-bold text-lg">{testimonial.name}</h4>
                      <div className="flex text-primary">
                        {[...Array(5)].map((_, i) => (
                          <Icon key={i} name="Star" size={16} fill="currentColor" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-secondary/5 via-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши организации в Санкт-Петербурге</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Интерактивная карта благотворительных организаций города
            </p>
          </div>
          <CharityMap />
        </div>
      </section>

      <section 
        id="contact" 
        className="py-20 bg-background relative overflow-hidden"
      >
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url('https://cdn.poehali.dev/projects/20769f67-e432-40b6-9875-0f2ed0ef918a/files/bcf513cb-292b-4283-bd69-71ac3aa27075.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
              <p className="text-xl text-muted-foreground">
                Готовы сделать первый шаг? Напишите нам, и мы расскажем, как вы можете помочь
              </p>
            </div>

            <Card className="border-2 shadow-2xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2">
                      Ваше имя
                    </label>
                    <Input
                      id="name"
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="text-lg p-6"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="ivan@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="text-lg p-6"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2">
                      Сообщение
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Расскажите, как вы хотите помочь или что вас интересует..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="text-lg p-4"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full text-lg py-6 bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 transition-all transform hover:scale-105"
                  >
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center gap-6 mb-6">
            <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.162 18.994c.609 0 .858-.406.851-.915-.031-1.917.714-2.949 2.059-1.604 1.488 1.488 1.796 2.519 3.603 2.519h3.2c.808 0 1.125-.26 1.125-.668 0-.863-1.302-2.233-2.326-3.258-1.024-1.025-1.319-1.319-.882-2.326.619-1.424 2.326-4.421 2.326-5.748 0-.407-.274-.667-.881-.667h-3.2c-.808 0-.891.292-1.169.948-.398.935-1.476 3.513-2.489 3.513-.388 0-.775-.194-.775-.775v-3.686c0-.808-.194-1-.969-1h-4.8c-.388 0-.582.291-.582.484 0 .679.969.775.969 2.163v3.423c0 .808-.142.969-.388.969-.775 0-2.489-3.104-3.2-6.477-.194-.808-.388-1.169-1.196-1.169h-3.2c-.969 0-1.162.291-1.162.948 0 .871 2.326 7.548 5.168 11.453 1.894 2.617 4.573 4.034 7.007 4.034z"/>
              </svg>
            </Button>
            <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
              <Icon name="Send" size={24} />
            </Button>
            <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
              <Icon name="MessageCircle" size={24} />
            </Button>
          </div>
          <p className="text-muted-foreground">
            © 2024 Благотворительный фонд. Вместе мы делаем мир лучше.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;