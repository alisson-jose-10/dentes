import React, { useState, useEffect } from 'react';
import { Clock, Shield, Award, RefreshCw, Star, ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Badge } from './ui/badge';
import { mockData } from '../mock';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(mockData.scarcity.timeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-4 justify-center">
      <div className="text-center">
        <div className="text-2xl font-bold text-[#333333] bg-[#f6f5e8] px-3 py-2">
          {timeLeft.hours.toString().padStart(2, '0')}
        </div>
        <div className="text-xs text-[#666666]">HORAS</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold text-[#333333] bg-[#f6f5e8] px-3 py-2">
          {timeLeft.minutes.toString().padStart(2, '0')}
        </div>
        <div className="text-xs text-[#666666]">MIN</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold text-[#333333] bg-[#f6f5e8] px-3 py-2">
          {timeLeft.seconds.toString().padStart(2, '0')}
        </div>
        <div className="text-xs text-[#666666]">SEG</div>
      </div>
    </div>
  );
};

const TestimonialCard = ({ testimonial }) => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < rating ? 'fill-[#333333] text-[#333333]' : 'text-[#bcbbb4]'}`} />
    ));
  };

  return (
    <Card className="bg-[#fffef2] border-[#bcbbb4] hover:shadow-lg transition-all duration-200">
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <img 
            src={testimonial.image} 
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <div className="font-medium text-[#333333]">{testimonial.name}</div>
            <div className="text-sm text-[#666666]">{testimonial.location}</div>
            {testimonial.profession && (
              <Badge variant="outline" className="text-xs">
                {testimonial.profession}
              </Badge>
            )}
          </div>
        </div>
        <div className="flex gap-1 mb-3">
          {renderStars(testimonial.rating)}
        </div>
        <p className="text-[#333333] text-sm leading-relaxed">"{testimonial.text}"</p>
      </CardContent>
    </Card>
  );
};

const FeatureCard = ({ feature }) => {
  const IconComponent = {
    Clock, Shield, Award, RefreshCw
  }[feature.icon];

  return (
    <Card className="bg-[#fffef2] border-[#bcbbb4] text-center hover:transform hover:-translate-y-1 transition-all duration-200">
      <CardContent className="p-6">
        <div className="mx-auto w-16 h-16 bg-[#f6f5e8] rounded-full flex items-center justify-center mb-4">
          <IconComponent className="w-8 h-8 text-[#333333]" />
        </div>
        <h3 className="font-medium text-[#333333] mb-2">{feature.title}</h3>
        <p className="text-sm text-[#666666]">{feature.description}</p>
      </CardContent>
    </Card>
  );
};

const LandingPage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => 
        (prev + 1) % mockData.testimonials.length
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePurchase = () => {
    // Mock purchase action - will be connected to backend later
    alert('Redirecionando para checkout seguro...');
  };

  const scrollToOffer = () => {
    document.getElementById('offer-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#fffef2]" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Urgency Bar */}
      <div className="bg-[#333333] text-[#fffef2] py-2 px-4 text-center text-sm font-medium">
        🔥 OFERTA RELÂMPAGO: Apenas {mockData.scarcity.stockLeft} unidades restantes - 86% OFF
      </div>

      {/* Header */}
      <header className="bg-[#fffef2] border-b border-[#bcbbb4] py-5 px-8 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-xl font-medium text-[#333333]">HiSmile V34</div>
          <div className="flex items-center gap-6">
            <span className="text-sm text-[#666666]">Garantia de 30 dias</span>
            <span className="text-sm text-[#666666]">Frete grátis</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-[#333333] text-[#fffef2] mb-6">
                ÚLTIMA CHANCE - 86% DESCONTO
              </Badge>
              
              <h1 className="text-4xl lg:text-5xl font-normal leading-tight text-[#333333] mb-6">
                {mockData.hero.title}
              </h1>
              
              <p className="text-xl text-[#666666] mb-8 leading-relaxed">
                {mockData.hero.subtitle}
              </p>

              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl font-bold text-[#333333]">{mockData.hero.price.current}</span>
                  <span className="text-xl text-[#666666] line-through">{mockData.hero.price.original}</span>
                  <Badge variant="destructive" className="bg-[#ba3e2b] text-[#fffef2]">
                    {mockData.hero.price.savings}
                  </Badge>
                </div>
                <p className="text-sm text-[#666666]">Oferta válida apenas hoje</p>
              </div>

              <div className="mb-8">
                <p className="text-sm font-medium text-[#333333] mb-4">{mockData.hero.urgency}</p>
                <CountdownTimer />
              </div>

              <ul className="space-y-3 mb-8">
                {mockData.hero.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3 text-[#333333]">
                    <div className="w-5 h-5 bg-[#333333] rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-[#fffef2] rounded-full"></div>
                    </div>
                    {benefit}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handlePurchase}
                  className="bg-transparent border border-[#333333] text-[#333333] hover:bg-[#333333] hover:text-[#fffef2] px-8 py-6 text-base font-bold min-w-[210px] h-[60px] transition-all duration-200"
                  style={{ borderRadius: '0px' }}
                >
                  GARANTIR MINHA OFERTA
                </Button>
                <Button 
                  variant="ghost"
                  onClick={scrollToOffer}
                  className="text-[#333333] hover:bg-[#f6f5e8] px-6 py-6 text-base"
                >
                  Ver mais detalhes <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
              </div>

              <p className="text-xs text-[#666666] mt-4">
                ✅ Checkout 100% seguro • ✅ Garantia de 30 dias • ✅ Frete grátis
              </p>
            </div>

            <div className="lg:order-first">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&h=600&fit=crop"
                  alt="V34 Whitening Strips"
                  className="w-full max-w-md mx-auto"
                />
                <div className="absolute -top-4 -right-4 bg-[#ba3e2b] text-[#fffef2] px-4 py-2 font-bold text-sm">
                  ÚLTIMAS {mockData.scarcity.stockLeft}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Strip */}
      <section className="bg-[#f6f5e8] py-8 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#666666] mb-4">👥 {mockData.scarcity.recentSales} pessoas compraram nas últimas 24 horas</p>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-[#333333] text-[#333333]" />
                ))}
              </div>
            ))}
            <span className="text-[#333333] font-medium">4.9/5 • 2.847 avaliações</span>
          </div>
        </div>
      </section>

      {/* Clinical Results */}
      <section className="py-20 px-8" id="offer-section">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-normal text-[#333333] mb-6">{mockData.clinicalResults.title}</h2>
            <p className="text-[#666666] text-lg max-w-2xl mx-auto">
              Estudo científico com {mockData.clinicalResults.participants} participantes comprova eficácia em apenas {mockData.clinicalResults.timeframe}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mockData.clinicalResults.results.map((result, index) => (
              <Card key={index} className="text-center bg-[#fffef2] border-[#bcbbb4]">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-[#333333] mb-2">{result.stat}</div>
                  <p className="text-[#666666] text-sm">{result.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-8 bg-[#f6f5e8]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-normal text-center text-[#333333] mb-16">
            Por Que Escolher V34 Whitening Strips?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mockData.features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-normal text-center text-[#333333] mb-16">
            O Que Nossos Clientes Dizem
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockData.testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-8 bg-[#f6f5e8]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-normal text-center text-[#333333] mb-16">
            Perguntas Frequentes
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {mockData.faq.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-[#fffef2] border-[#bcbbb4] px-6">
                <AccordionTrigger className="text-[#333333] font-medium hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#666666]">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-8 bg-[#333333] text-[#fffef2]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-normal mb-6">
            Últimas {mockData.scarcity.stockLeft} Unidades
          </h2>
          <p className="text-xl text-[#bcbbb4] mb-8">
            Esta oferta de 86% OFF não será repetida. Garante a sua agora!
          </p>
          
          <div className="mb-8">
            <CountdownTimer />
          </div>

          <div className="mb-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-5xl font-bold">{mockData.hero.price.current}</span>
              <span className="text-2xl text-[#bcbbb4] line-through">{mockData.hero.price.original}</span>
            </div>
            <p className="text-[#bcbbb4]">Em até 12x sem juros no cartão</p>
          </div>

          <Button 
            onClick={handlePurchase}
            className="bg-[#fffef2] border border-[#fffef2] text-[#333333] hover:bg-transparent hover:text-[#fffef2] px-12 py-8 text-xl font-bold min-w-[300px] h-[80px] transition-all duration-200"
            style={{ borderRadius: '0px' }}
          >
            GARANTIR AGORA - 86% OFF
          </Button>

          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
            <div>✅ {mockData.trustSignals.moneyBackGuarantee}</div>
            <div>✅ {mockData.trustSignals.freeShipping}</div>
            <div>✅ {mockData.trustSignals.secureCheckout}</div>
            <div>✅ {mockData.trustSignals.customerSupport}</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#fffef2] border-t border-[#bcbbb4] py-12 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#666666] text-sm mb-4">
            © 2024 HiSmile V34. Todos os direitos reservados.
          </p>
          <p className="text-[#bcbbb4] text-xs">
            Este site é seguro e protegido por SSL. Seus dados estão seguros conosco.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;