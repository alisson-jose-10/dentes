import React, { useState, useEffect } from 'react';
import { 
  Clock, Shield, Award, RefreshCw, Star, ChevronDown, ChevronRight,
  TrendingUp, Users, CheckCircle, AlertCircle, Play, ArrowRight,
  Zap, Heart, Trophy, Target, Timer, Sparkles
} from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { mockData } from '../mock';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 47, 
    seconds: 32
  });

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
    <div className="flex justify-center items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-4 rounded-lg">
      <Timer className="w-5 h-5" />
      <span className="text-sm font-bold">OFERTA EXPIRA EM:</span>
      <div className="flex gap-1 font-mono text-lg font-bold">
        <span className="bg-black/20 px-2 py-1 rounded">{timeLeft.hours.toString().padStart(2, '0')}</span>:
        <span className="bg-black/20 px-2 py-1 rounded">{timeLeft.minutes.toString().padStart(2, '0')}</span>:
        <span className="bg-black/20 px-2 py-1 rounded">{timeLeft.seconds.toString().padStart(2, '0')}</span>
      </div>
    </div>
  );
};

const UrgencyNotification = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentMessage(prev => (prev + 1) % mockData.urgency.popup.messages.length);
        setIsVisible(true);
      }, 300);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`fixed bottom-4 left-4 z-50 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
      <div className="bg-green-600 text-white px-4 py-3 rounded-lg shadow-lg max-w-sm">
        <div className="flex items-center gap-2">
          <CheckCircle className="w-4 h-4 flex-shrink-0" />
          <p className="text-sm font-medium">
            {mockData.urgency.popup.messages[currentMessage]}
          </p>
        </div>
      </div>
    </div>
  );
};

const ProductShowcase = () => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="relative">
      {/* Main product image */}
      <div className="aspect-square bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 mb-6 overflow-hidden">
        <img 
          src={mockData.hero.productImages[activeImage]}
          alt="V34 Whitening Strips"
          className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
        />
        {/* Stock indicator badge */}
        <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
          RESTAM {mockData.urgency.inventory.remaining}
        </div>
        {/* Guarantee badge */}
        <div className="absolute bottom-4 left-4 bg-green-600 text-white px-3 py-2 rounded-lg text-xs font-bold">
          <Shield className="w-4 h-4 inline mr-1" />
          GARANTIA 60 DIAS
        </div>
      </div>

      {/* Product thumbnails */}
      <div className="flex gap-3 justify-center">
        {mockData.hero.productImages.map((image, index) => (
          <button
            key={index}
            onClick={() => setActiveImage(index)}
            className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
              activeImage === index ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <img src={image} alt={`Produto ${index + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
};

const BeforeAfterSlider = ({ transformation }) => {
  const [isAfter, setIsAfter] = useState(false);

  return (
    <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
      <CardContent className="p-0">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={isAfter ? transformation.afterImage : transformation.beforeImage}
            alt={isAfter ? "Depois" : "Antes"}
            className="w-full h-full object-cover transition-all duration-700"
          />
          
          {/* Toggle button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Button
              onClick={() => setIsAfter(!isAfter)}
              className="bg-white/90 hover:bg-white text-black border-2 border-black/10 rounded-full px-6 py-2 font-bold text-sm shadow-lg"
            >
              {isAfter ? '← VER ANTES' : 'VER DEPOIS →'}
            </Button>
          </div>

          {/* Results indicator */}
          <div className="absolute top-4 left-4 bg-gradient-to-r from-green-600 to-green-700 text-white px-3 py-1 rounded-full text-sm font-bold">
            +{transformation.improvement}
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
              {transformation.name.charAt(0)}
            </div>
            <div>
              <h4 className="font-bold text-gray-900">{transformation.name}</h4>
              <p className="text-sm text-gray-600">{transformation.location}</p>
            </div>
            <div className="ml-auto text-right">
              <div className="text-sm font-bold text-green-600">{transformation.improvement}</div>
              <div className="text-xs text-gray-500">{transformation.timeframe}</div>
            </div>
          </div>
          <p className="text-gray-700 text-sm italic">"{transformation.testimonial}"</p>
        </div>
      </CardContent>
    </Card>
  );
};

const TestimonialCard = ({ testimonial }) => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
    ));
  };

  return (
    <Card className="relative overflow-hidden border-2 hover:border-blue-300 transition-all duration-300 hover:shadow-xl">
      <CardContent className="p-6">
        {/* Verification badge */}
        {testimonial.verified && (
          <Badge className="absolute top-4 right-4 bg-blue-600 text-white">
            <CheckCircle className="w-3 h-3 mr-1" />
            VERIFICADO
          </Badge>
        )}

        <div className="flex items-center gap-4 mb-4">
          <img 
            src={testimonial.image} 
            alt={testimonial.name}
            className="w-16 h-16 rounded-full object-cover border-3 border-blue-200"
          />
          <div className="flex-1">
            <div className="font-bold text-gray-900">{testimonial.name}</div>
            <div className="text-sm text-gray-600">{testimonial.credentials || testimonial.location}</div>
            {testimonial.highlight && (
              <div className="text-xs font-bold text-blue-600 mt-1">{testimonial.highlight}</div>
            )}
          </div>
        </div>

        <div className="flex gap-1 mb-4">
          {renderStars(testimonial.rating)}
        </div>

        <blockquote className="text-gray-700 leading-relaxed mb-4">
          "{testimonial.text}"
        </blockquote>

        {testimonial.socialProof && (
          <div className="text-xs text-gray-500 border-t pt-3">
            {testimonial.socialProof}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const LandingPage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % mockData.testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handlePurchase = () => {
    // Enhanced purchase tracking
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'purchase_intent',
      'value': 4.99,
      'currency': 'USD'
    });
    alert('🚀 Redirecionando para checkout ultra-seguro...');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white" style={{ fontFamily: 'Inter, sans-serif' }}>
      
      {/* Urgency Top Bar */}
      <div className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white py-3 px-4 text-center relative overflow-hidden">
        <div className="animate-pulse absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <p className="relative z-10 font-bold text-sm md:text-base">
          🔥 OFERTA HISTÓRICA: {mockData.urgency.inventory.remaining} de {mockData.urgency.inventory.total} unidades • 
          <span className="ml-2 bg-white/20 px-2 py-1 rounded"> {mockData.urgency.inventory.percentage}% VENDIDO</span>
        </p>
      </div>

      {/* Floating Header */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-lg border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">HiSmile V34</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <div className="flex items-center gap-1">
              <Shield className="w-4 h-4 text-green-600" />
              <span className="text-gray-600">Garantia 60 dias</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-gray-600">{mockData.socialProof.rating}/5 • {mockData.socialProof.reviews} avaliações</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Enhanced */}
      <section className="py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/30"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Copy */}
            <div className="space-y-8">
              
              {/* Social proof banner */}
              <div className="flex items-center gap-4 text-sm">
                <div className="flex -space-x-2">
                  {[1,2,3,4,5].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div className="text-gray-600">
                  <span className="font-bold text-gray-900">{mockData.socialProof.customers}</span> clientes satisfeitos
                </div>
              </div>

              {/* Main headline */}
              <div>
                <Badge className="bg-gradient-to-r from-red-600 to-red-700 text-white mb-4 px-4 py-2">
                  ⚡ ÚLTIMA CHANCE - {mockData.hero.price.savings}
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
                  {mockData.hero.headline}
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {mockData.hero.subheadline}
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mt-6 leading-relaxed">
                  {mockData.hero.description}
                </p>
              </div>

              {/* Pricing */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-200">
                <div className="flex items-end gap-4 mb-2">
                  <span className="text-5xl font-black text-green-600">{mockData.hero.price.current}</span>
                  <span className="text-2xl text-gray-500 line-through mb-2">{mockData.hero.price.original}</span>
                  <Badge className="bg-red-600 text-white text-lg px-3 py-1 mb-2">
                    {mockData.hero.price.savings}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600">{mockData.hero.price.perApplication} • Oferta válida hoje</p>
                
                <CountdownTimer />
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-1 gap-3">
                {mockData.hero.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3 bg-white p-3 rounded-lg border border-gray-200">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="space-y-4">
                <Button 
                  onClick={handlePurchase}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  GARANTIR AGORA - APENAS {mockData.hero.price.current}
                </Button>
                
                <div className="grid grid-cols-3 gap-2 text-xs text-center">
                  <div className="flex items-center justify-center gap-1">
                    <Shield className="w-3 h-3 text-green-600" />
                    <span>Checkout Seguro</span>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <RefreshCw className="w-3 h-3 text-blue-600" />
                    <span>60 Dias Garantia</span>
                  </div>
                  <div className="flex items-center justify-center gap-1">
                    <Heart className="w-3 h-3 text-red-600" />
                    <span>{mockData.socialProof.satisfaction} Satisfação</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column - Product Showcase */}
            <div className="lg:order-last">
              <ProductShowcase />
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Strip */}
      <section className="py-8 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{mockData.socialProof.customers}</div>
              <div className="text-sm text-gray-600">Clientes Ativos</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="text-2xl font-bold text-gray-900">{mockData.socialProof.rating}</span>
              </div>
              <div className="text-sm text-gray-600">{mockData.socialProof.reviews} avaliações</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{mockData.socialProof.recentOrders}</div>
              <div className="text-sm text-gray-600">Pedidos hoje</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{mockData.socialProof.satisfaction}</div>
              <div className="text-sm text-gray-600">Taxa de satisfação</div>
            </div>
          </div>
        </div>
      </section>

      {/* Scientific Proof Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-blue-600 text-white mb-4 px-4 py-2">
              <Award className="w-4 h-4 mr-2" />
              VALIDAÇÃO CIENTÍFICA
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{mockData.scientificProof.title}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{mockData.scientificProof.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mockData.scientificProof.results.map((result, index) => (
              <Card key={index} className="relative overflow-hidden border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    {result.icon === 'TrendingUp' && <TrendingUp className="w-8 h-8 text-white" />}
                    {result.icon === 'Clock' && <Clock className="w-8 h-8 text-white" />}
                    {result.icon === 'Shield' && <Shield className="w-8 h-8 text-white" />}
                    {result.icon === 'Award' && <Award className="w-8 h-8 text-white" />}
                  </div>
                  <div className="text-4xl font-black text-gray-900 mb-2">{result.percentage}</div>
                  <Progress value={result.progress} className="mb-4 h-2" />
                  <p className="text-gray-600 text-sm leading-relaxed">{result.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500 max-w-2xl mx-auto">{mockData.scientificProof.methodology}</p>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-green-600 text-white mb-4 px-4 py-2">
              <Target className="w-4 h-4 mr-2" />
              RESULTADOS REAIS
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Transformações em 30 Minutos</h2>
            <p className="text-lg text-gray-600">Veja o que nossos clientes alcançaram com o V34</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockData.transformations.map((transformation) => (
              <BeforeAfterSlider key={transformation.id} transformation={transformation} />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{mockData.comparison.title}</h2>
            <p className="text-lg text-gray-600">{mockData.comparison.subtitle}</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-xl overflow-hidden">
              <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-bold">Característica</th>
                  <th className="px-6 py-4 text-center font-bold bg-yellow-400/20">
                    <div className="flex items-center justify-center gap-2">
                      <Trophy className="w-5 h-5" />
                      V34 Strips
                    </div>
                  </th>
                  <th className="px-6 py-4 text-center font-bold">Concorrente A</th>
                  <th className="px-6 py-4 text-center font-bold">Concorrente B</th>
                </tr>
              </thead>
              <tbody>
                {mockData.comparison.items.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4 font-medium text-gray-900">{item.feature}</td>
                    <td className="px-6 py-4 text-center bg-green-50 font-bold text-green-700">{item.v34}</td>
                    <td className="px-6 py-4 text-center text-gray-600">{item.competitor1}</td>
                    <td className="px-6 py-4 text-center text-gray-600">{item.competitor2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Depoimentos Verificados</h2>
            <p className="text-lg text-gray-600">O que especialistas e clientes dizem sobre o V34</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
            {mockData.testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Perguntas Frequentes</h2>
            <p className="text-lg text-gray-600">Tudo o que você precisa saber sobre o V34</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {mockData.faq.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white border-2 border-gray-200 rounded-lg px-6 hover:border-blue-300 transition-colors">
                <AccordionTrigger className="text-left text-gray-900 font-semibold hover:no-underline py-6">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          
          {/* Stock indicator */}
          <div className="mb-8">
            <div className="bg-red-600 text-white px-6 py-3 rounded-full inline-flex items-center gap-2 font-bold">
              <AlertCircle className="w-5 h-5" />
              ÚLTIMAS {mockData.urgency.inventory.remaining} UNIDADES EM ESTOQUE
            </div>
            <div className="mt-4">
              <Progress value={mockData.urgency.inventory.percentage} className="max-w-md mx-auto h-3" />
              <p className="text-sm mt-2 opacity-80">{mockData.urgency.inventory.percentage}% do estoque já foi vendido</p>
            </div>
          </div>

          <h2 className="text-5xl font-black mb-6">
            Não Perca Esta Oportunidade Única
          </h2>
          <p className="text-xl mb-8 opacity-90">
            86% de desconto + garantia de 60 dias. Esta oferta histórica expira hoje às 23:59h.
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <CountdownTimer />
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-center gap-4 text-lg">
              <span className="text-6xl font-black">{mockData.hero.price.current}</span>
              <span className="text-3xl opacity-60 line-through">{mockData.hero.price.original}</span>
            </div>
            
            <Button 
              onClick={handlePurchase}
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-black py-8 px-12 text-2xl rounded-2xl transition-all duration-300 hover:scale-110 hover:shadow-2xl"
            >
              <Sparkles className="w-6 h-6 mr-3" />
              GARANTIR MINHA TRANSFORMAÇÃO
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>

            <div className="grid md:grid-cols-4 gap-4 mt-8 text-sm">
              {mockData.riskReversal.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center justify-center gap-2 bg-white/10 rounded-lg py-3">
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-blue-400" />
            <span className="text-2xl font-bold">HiSmile V34</span>
          </div>
          <p className="text-gray-400 mb-4">
            © 2024 HiSmile V34. Todos os direitos reservados.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
            <span>🔒 Checkout SSL Seguro</span>
            <span>📞 Suporte 24/7</span>
            <span>🛡️ Garantia 60 Dias</span>
          </div>
        </div>
      </footer>

      {/* Urgency Notifications */}
      <UrgencyNotification />

    </div>
  );
};

export default LandingPage;