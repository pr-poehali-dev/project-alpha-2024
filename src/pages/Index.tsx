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
      thumbnail: "https://cdn.poehali.dev/projects/20769f67-e432-40b6-9875-0f2ed0ef918a/files/bcf513cb-292b-4283-bd69-71ac3aa27075.jpg"
    },
    {
      title: "Пирог",
      description: "Скромный знак внимания напомнил одинокой соседке, что о ней помнят.",
      thumbnail: "https://cdn.poehali.dev/projects/20769f67-e432-40b6-9875-0f2ed0ef918a/files/bcf513cb-292b-4283-bd69-71ac3aa27075.jpg"
    },
    {
      title: "Прогулка",
      description: "Совсем немного времени равны вечности счастья для того, кто в нём нуждается.",
      thumbnail: "https://cdn.poehali.dev/projects/20769f67-e432-40b6-9875-0f2ed0ef918a/files/bcf513cb-292b-4283-bd69-71ac3aa27075.jpg"
    },
    {
      title: "Письмо",
      description: "Письма поддержки, которые согревают сердца пожилых людей",
      thumbnail: "https://cdn.poehali.dev/projects/20769f67-e432-40b6-9875-0f2ed0ef918a/files/bcf513cb-292b-4283-bd69-71ac3aa27075.jpg"
    },
    {
      title: "Навык",
      description: "Он дарил вторую жизнь велосипедам, а детям — настоящее детство.",
      thumbnail: "https://cdn.poehali.dev/projects/20769f67-e432-40b6-9875-0f2ed0ef918a/files/bcf513cb-292b-4283-bd69-71ac3aa27075.jpg"
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
      image: "https://cdn.poehali.dev/projects/20769f67-e432-40b6-9875-0f2ed0ef918a/files/32267c09-35c5-426d-b7ae-725f960e2323.jpg"
    },
    {
      name: "Михаил Сидоров",
      text: "Профессиональный подход и искренняя забота о людях. Рад, что есть такие организации!",
      image: "https://cdn.poehali.dev/projects/20769f67-e432-40b6-9875-0f2ed0ef918a/files/32267c09-35c5-426d-b7ae-725f960e2323.jpg"
    },
    {
      name: "Елена Иванова",
      text: "Ваша организация изменила нашу жизнь. Мы получили не только материальную помощь, но и моральную поддержку.",
      image: "https://cdn.poehali.dev/projects/20769f67-e432-40b6-9875-0f2ed0ef918a/files/32267c09-35c5-426d-b7ae-725f960e2323.jpg"
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
              Вместе меняем мир к лучшему
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Каждое доброе дело начинается с желания помочь. Присоединяйтесь к нам и станьте частью большой перемены.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 transition-all transform hover:scale-105"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Icon name="Heart" className="mr-2" size={24} />
                Помочь сейчас
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

      <section id="benefits" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мы создали экосистему доверия и прозрачности для эффективной благотворительности
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="border-2 hover:border-primary transition-all duration-300 transform hover:scale-105 hover:shadow-xl animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary via-secondary to-accent">
                    <Icon name={benefit.icon as any} size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
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
              <Icon name="Facebook" size={24} />
            </Button>
            <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
              <Icon name="Instagram" size={24} />
            </Button>
            <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
              <Icon name="Twitter" size={24} />
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