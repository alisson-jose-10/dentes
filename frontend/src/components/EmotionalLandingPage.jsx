import React, { useState, useEffect } from 'react';
import { 
  Play, Shield, Award, Zap, Heart, Star, Timer, TrendingUp, Users,
  CheckCircle, AlertCircle, ArrowRight, Instagram, Sparkles, Crown,
  Gift, Clock, Target, Flame, Trophy, Eye, MessageSquare
} from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { emotionalData } from '../emotionalMock';

const CountdownTimer = ({ targetHours = 15, targetMinutes = 47, targetSeconds = 32 }) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: targetHours,
    minutes: targetMinutes,
    seconds: targetSeconds
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
    <div className="flex items-center justify-center gap-3 bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white px-8 py-5 rounded-xl shadow-2xl">
      <Timer className="w-6 h-6 animate-pulse" />
      <span className="text-lg font-bold">OFERTA ESPECIAL EXPIRA EM:</span>
      <div className="flex gap-2">
        <div className="bg-black/30 px-3 py-2 rounded-lg text-center">
          <div className="text-2xl font-black">{timeLeft.hours.toString().padStart(2, '0')}</div>
          <div className="text-xs">HORAS</div>
        </div>
        <div className="text-3xl font-bold">:</div>
        <div className="bg-black/30 px-3 py-2 rounded-lg text-center">
          <div className="text-2xl font-black">{timeLeft.minutes.toString().padStart(2, '0')}</div>
          <div className="text-xs">MIN</div>
        </div>
        <div className="text-3xl font-bold">:</div>
        <div className="bg-black/30 px-3 py-2 rounded-lg text-center">
          <div className="text-2xl font-black">{timeLeft.seconds.toString().padStart(2, '0')}</div>
          <div className="text-xs">SEG</div>
        </div>
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
        setCurrentMessage(prev => (prev + 1) % emotionalData.urgency.notifications.length);
        setIsVisible(true);
      }, 300);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`fixed bottom-6 left-6 z-50 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'}`}>
      <div className="bg-green-600 text-white px-5 py-4 rounded-xl shadow-2xl max-w-sm border-l-4 border-green-400">
        <div className="flex items-center gap-3">
          <CheckCircle className="w-5 h-5 flex-shrink-0 animate-pulse" />
          <p className="text-sm font-semibold">
            {emotionalData.urgency.notifications[currentMessage]}
          </p>
        </div>
      </div>
    </div>
  );
};

const BeforeAfterInteractiveSlider = ({ transformation }) => {
  const [slidePosition, setSlidePosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const position = ((e.clientX - rect.left) / rect.width) * 100;
    setSlidePosition(Math.max(0, Math.min(100, position)));
  };

  return (
    <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border-2 border-gray-200 hover:border-blue-400">
      <CardContent className="p-0">
        <div 
          className="relative aspect-[4/3] overflow-hidden cursor-ew-resize"
          onMouseMove={handleMouseMove}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {/* Before Image */}
          <img
            src={transformation.before}
            alt="Antes"
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* After Image with clip path */}
          <img
            src={transformation.after}
            alt="Depois"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              clipPath: `polygon(${slidePosition}% 0%, 100% 0%, 100% 100%, ${slidePosition}% 100%)`
            }}
          />

          {/* Slider Line */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize"
            style={{ left: `${slidePosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            </div>
          </div>

          {/* Labels */}
          <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-bold">
            ANTES
          </div>
          <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
            DEPOIS • +{transformation.improvement}
          </div>

          {/* Instruction */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 px-4 py-2 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            ← Arraste para ver a transformação →
          </div>
        </div>

        <div className="p-6 bg-gradient-to-br from-gray-50 to-white">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
              {transformation.name.charAt(0)}
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-gray-900 text-lg">{transformation.name}</h4>
              <p className="text-gray-600">{transformation.location} • {transformation.timeframe}</p>
            </div>
            <div className="text-center">
              <div className="text-sm font-bold text-green-600 bg-green-100 px-3 py-1 rounded-full">
                {transformation.improvement}
              </div>
            </div>
          </div>
          
          <blockquote className="text-gray-700 italic mb-3 text-center">
            "{transformation.quote}"
          </blockquote>
          
          <div className="text-center">
            <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold">
              🔥 {transformation.socialImpact}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const PricingCard = ({ package: pkg, isPopular = false }) => {
  const handlePurchase = () => {
    alert(`🚀 Redirecionando para checkout: ${pkg.name}`);
  };

  return (
    <Card className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
      isPopular ? 'border-4 border-gradient-to-r from-yellow-400 to-orange-500 bg-gradient-to-br from-yellow-50 to-orange-50' : 'border-2 border-gray-200 hover:border-blue-400'
    }`}>
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <Badge className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-4 py-2 text-sm font-bold">
            <Crown className="w-4 h-4 mr-1" />
            {pkg.badge}
          </Badge>
        </div>
      )}

      <CardContent className="p-8">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
          <p className="text-gray-600 mb-4">{pkg.description}</p>
          
          <div className="mb-4">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-4xl font-black text-green-600">{pkg.currentPrice}</span>
              <span className="text-xl text-gray-500 line-through">{pkg.originalPrice}</span>
            </div>
            <Badge className="bg-red-600 text-white text-lg px-3 py-1">
              {pkg.discount}
            </Badge>
            <p className="text-sm text-green-600 font-semibold mt-2">
              Poupa {pkg.savings}
            </p>
          </div>
        </div>

        <ul className="space-y-3 mb-8">
          {pkg.includes.map((item, index) => (
            <li key={index} className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>

        <Button 
          onClick={handlePurchase}
          className={`w-full py-4 text-lg font-bold rounded-xl transition-all duration-300 ${
            isPopular 
              ? 'bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white shadow-xl hover:shadow-2xl hover:scale-105' 
              : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white hover:scale-105'
          }`}
        >
          <Sparkles className="w-5 h-5 mr-2" />
          {pkg.cta}
        </Button>
      </CardContent>
    </Card>
  );
};

const SocialTestimonialCard = ({ testimonial }) => {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <img 
            src={testimonial.image} 
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover border-2 border-pink-300"
          />
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="font-bold text-gray-900">{testimonial.name}</span>
              <Instagram className="w-4 h-4 text-pink-500" />
            </div>
            <p className="text-sm text-gray-600">{testimonial.username} • {testimonial.followers} seguidores</p>
          </div>
        </div>

        <p className="text-gray-800 mb-4 leading-relaxed">
          {testimonial.text}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Heart className="w-4 h-4 fill-red-500 text-red-500" />
              <span>{testimonial.likes.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <MessageSquare className="w-4 h-4" />
              <span>Ver no Instagram</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const EmotionalLandingPage = () => {
  const handleMainPurchase = () => {
    alert('🚀 Redirecionando para checkout principal...');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30" style={{ fontFamily: 'Inter, sans-serif' }}>
      
      {/* BARRA DE URGÊNCIA EMOCIONAL */}
      <div className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 text-white py-3 px-4 text-center relative overflow-hidden">
        <div className="animate-pulse absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <p className="relative z-10 font-bold text-sm md:text-base flex items-center justify-center gap-2">
          <Flame className="w-5 h-5" />
          ÚLTIMAS {emotionalData.urgency.stock} UNIDADES • 72% OFF • {emotionalData.urgency.recentOrders} PESSOAS COMPRARAM HOJE
          <Flame className="w-5 h-5" />
        </p>
      </div>

      {/* HEADER FLUTUANTE */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-black text-gray-900">HiSmile</span>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            {emotionalData.hero.socialProof.magazines.map((magazine, index) => (
              <div key={index} className="text-sm font-semibold text-gray-600 opacity-70">
                {magazine}
              </div>
            ))}
            <div className="flex items-center gap-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm font-bold text-gray-700">
                {emotionalData.hero.socialProof.rating}/5 • {emotionalData.hero.socialProof.reviews} avaliações
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* SEÇÃO HERÓI - A PROMESSA IRRECUSÁVEL */}
      <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-white via-blue-50/50 to-purple-50/30">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e0e7ff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Coluna Esquerda - Copy Emocional */}
            <div className="space-y-8">
              
              {/* Badge de Urgência */}
              <div className="flex items-center gap-4">
                <Badge className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 text-lg animate-pulse">
                  <Timer className="w-5 h-5 mr-2" />
                  {emotionalData.hero.price.urgency}
                </Badge>
              </div>

              {/* Headline Emocional */}
              <div>
                <h1 className="text-6xl lg:text-7xl font-black text-gray-900 leading-tight mb-4">
                  {emotionalData.hero.title}
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {emotionalData.hero.subtitle}
                  </span>
                </h1>
                
                <p className="text-2xl text-gray-700 leading-relaxed font-medium">
                  {emotionalData.hero.description}
                </p>
              </div>

              {/* Preço com Impacto */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl border-2 border-green-200 shadow-xl">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-4 mb-3">
                    <span className="text-6xl font-black text-green-600">{emotionalData.hero.price.current}</span>
                    <div className="text-center">
                      <span className="text-3xl text-gray-500 line-through block">{emotionalData.hero.price.original}</span>
                      <Badge className="bg-red-600 text-white text-xl px-4 py-2 mt-2">
                        {emotionalData.hero.price.discount}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-gray-600 font-semibold">Poupa €65 hoje • Sem taxas escondidas</p>
                </div>
                
                <CountdownTimer />
              </div>

              {/* CTA Principal */}
              <div className="space-y-6">
                <Button 
                  onClick={handleMainPurchase}
                  className="w-full bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 hover:from-yellow-600 hover:via-orange-600 hover:to-red-600 text-white font-black py-8 text-2xl rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-xl"
                >
                  <Crown className="w-8 h-8 mr-3" />
                  {emotionalData.hero.ctaMain}
                  <ArrowRight className="w-8 h-8 ml-3" />
                </Button>
                
                <Button 
                  variant="outline"
                  className="w-full border-2 border-gray-400 text-gray-700 hover:bg-gray-50 py-4 text-lg font-semibold rounded-xl"
                >
                  {emotionalData.hero.ctaSecondary}
                </Button>

                {/* Trust Indicators */}
                <div className="grid grid-cols-3 gap-4 text-center text-sm">
                  <div className="flex flex-col items-center">
                    <Shield className="w-6 h-6 text-green-600 mb-1" />
                    <span className="font-semibold">Garantia 60 Dias</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Award className="w-6 h-6 text-blue-600 mb-1" />
                    <span className="font-semibold">Aprovado Dentistas</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Heart className="w-6 h-6 text-red-600 mb-1" />
                    <span className="font-semibold">98.7% Satisfação</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Coluna Direita - Hero Visual */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 overflow-hidden relative shadow-2xl">
                {/* Hero Image */}
                <img 
                  src={emotionalData.hero.videoUrl}
                  alt="Sorriso Perfeito"
                  className="w-full h-full object-cover rounded-2xl hover:scale-110 transition-transform duration-700"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-2xl">
                  <Button className="bg-white/90 hover:bg-white text-gray-900 rounded-full w-20 h-20 shadow-2xl">
                    <Play className="w-8 h-8 ml-1" />
                  </Button>
                </div>

                {/* Floating Stats */}
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-black text-green-600">2.1M+</div>
                    <div className="text-xs text-gray-600">Sorrisos Transformados</div>
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="font-bold text-gray-900">4.9/5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO ANTES/DEPOIS INTERATIVA */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 text-lg mb-6">
              <Eye className="w-5 h-5 mr-2" />
              PROVA VISUAL IRREFUTÁVEL
            </Badge>
            
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              {emotionalData.beforeAfter.title}
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {emotionalData.beforeAfter.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {emotionalData.beforeAfter.transformations.map((transformation) => (
              <BeforeAfterInteractiveSlider key={transformation.id} transformation={transformation} />
            ))}
          </div>

          <div className="text-center">
            <Button 
              onClick={handleMainPurchase}
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-6 px-12 text-xl rounded-xl hover:scale-105 transition-all duration-300"
            >
              <Target className="w-6 h-6 mr-3" />
              QUERO A MINHA TRANSFORMAÇÃO
            </Button>
          </div>
        </div>
      </section>

      {/* SEÇÃO CIÊNCIA DA CONFIANÇA */}
      <section className="py-24 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-blue-600 text-white px-6 py-3 text-lg mb-6">
              <Award className="w-5 h-5 mr-2" />
              TECNOLOGIA REVOLUCIONÁRIA
            </Badge>
            
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              {emotionalData.science.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {emotionalData.science.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {emotionalData.science.points.map((point, index) => (
              <Card key={index} className="text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-blue-400">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    {point.icon === 'Shield' && <Shield className="w-10 h-10 text-white" />}
                    {point.icon === 'Award' && <Award className="w-10 h-10 text-white" />}
                    {point.icon === 'Zap' && <Zap className="w-10 h-10 text-white" />}
                    {point.icon === 'Heart' && <Heart className="w-10 h-10 text-white" />}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{point.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{point.description}</p>
                  
                  <Badge className="bg-green-100 text-green-800 text-sm font-semibold">
                    ✓ {point.proof}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO KITS DE TRANSFORMAÇÃO */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-6 py-3 text-lg mb-6">
              <Gift className="w-5 h-5 mr-2" />
              OFERTAS LIMITADAS
            </Badge>
            
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              {emotionalData.pricing.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {emotionalData.pricing.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {emotionalData.pricing.packages.map((pkg) => (
              <PricingCard key={pkg.id} package={pkg} isPopular={pkg.popular} />
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-600 mb-4">
              <Clock className="w-5 h-5 inline mr-2" />
              Estas ofertas expiram em {emotionalData.urgency.offer.hours} horas
            </p>
            <Badge className="bg-red-600 text-white px-6 py-3">
              Restam apenas {emotionalData.urgency.stock} unidades com desconto
            </Badge>
          </div>
        </div>
      </section>

      {/* MURAL DE SORRISOS - PROVA SOCIAL MASSIVA */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-pink-500 to-rose-600 text-white px-6 py-3 text-lg mb-6">
              <Users className="w-5 h-5 mr-2" />
              COMUNIDADE HISMILE
            </Badge>
            
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              {emotionalData.socialWall.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
              {emotionalData.socialWall.subtitle}
            </p>

            {/* Stats */}
            <div className="grid md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-4xl font-black text-blue-600">{emotionalData.socialWall.stats.users}</div>
                <div className="text-gray-600">Utilizadores Ativos</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-green-600">{emotionalData.socialWall.stats.countries}</div>
                <div className="text-gray-600">Países</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-purple-600">{emotionalData.socialWall.stats.satisfaction}</div>
                <div className="text-gray-600">Taxa Satisfação</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-orange-600">{emotionalData.socialWall.stats.recommendations}</div>
                <div className="text-gray-600">Recomendam</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {emotionalData.socialWall.testimonials.map((testimonial) => (
              <SocialTestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ FOCADA EM MEDOS */}
      <section className="py-24 px-4 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              As Suas Maiores Preocupações, Respondidas
            </h2>
            <p className="text-xl text-gray-600">
              Sabemos que tem dúvidas. Aqui estão as respostas honestas.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {emotionalData.faq.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="bg-white border-2 border-gray-200 rounded-xl px-8 hover:border-blue-400 transition-colors shadow-sm"
              >
                <AccordionTrigger className="text-left text-gray-900 font-bold hover:no-underline py-8 text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-8 text-lg leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA FINAL - ULTIMA CHANCE */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          
          <div className="mb-12">
            <Badge className="bg-red-600 text-white px-8 py-4 text-xl font-bold mb-8">
              <AlertCircle className="w-6 h-6 mr-2" />
              ÚLTIMA OPORTUNIDADE • {emotionalData.urgency.stock} UNIDADES RESTANTES
            </Badge>
            
            <div className="mb-8">
              <Progress value={((emotionalData.urgency.totalStock - emotionalData.urgency.stock) / emotionalData.urgency.totalStock) * 100} className="max-w-md mx-auto h-4" />
              <p className="text-lg mt-4 opacity-80">
                {Math.round(((emotionalData.urgency.totalStock - emotionalData.urgency.stock) / emotionalData.urgency.totalStock) * 100)}% do stock já foi vendido
              </p>
            </div>
          </div>

          <h2 className="text-6xl font-black mb-8 leading-tight">
            Pare de Esconder o Seu Sorriso.
            <br />
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Comece a Brilhar.
            </span>
          </h2>
          
          <p className="text-2xl mb-12 opacity-90 leading-relaxed max-w-3xl mx-auto">
            Esta é a sua chance de ter o sorriso que sempre desejou. 72% de desconto + garantia total de 60 dias. 
            Esta oferta histórica expira em poucas horas.
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 mb-12">
            <CountdownTimer />
          </div>

          <div className="space-y-8">
            <div className="flex items-center justify-center gap-6 text-2xl mb-8">
              <span className="text-7xl font-black text-green-400">{emotionalData.hero.price.current}</span>
              <span className="text-4xl opacity-60 line-through">{emotionalData.hero.price.original}</span>
              <Badge className="bg-red-600 text-white text-2xl px-6 py-3">
                {emotionalData.hero.price.discount}
              </Badge>
            </div>
            
            <Button 
              onClick={handleMainPurchase}
              className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 hover:from-yellow-600 hover:via-orange-600 hover:to-red-600 text-white font-black py-10 px-16 text-3xl rounded-2xl transition-all duration-300 hover:scale-110 hover:shadow-2xl shadow-2xl"
            >
              <Crown className="w-8 h-8 mr-4" />
              PARAR DE ESCONDER O MEU SORRISO
              <ArrowRight className="w-8 h-8 ml-4" />
            </Button>

            <div className="grid md:grid-cols-4 gap-6 mt-12 text-lg">
              <div className="flex flex-col items-center gap-2 bg-white/10 rounded-xl py-6">
                <Shield className="w-8 h-8 text-green-400" />
                <span>Garantia 60 Dias</span>
              </div>
              <div className="flex flex-col items-center gap-2 bg-white/10 rounded-xl py-6">
                <Zap className="w-8 h-8 text-yellow-400" />
                <span>Resultados em 10min</span>
              </div>
              <div className="flex flex-col items-center gap-2 bg-white/10 rounded-xl py-6">
                <Heart className="w-8 h-8 text-red-400" />
                <span>Aprovado Dentistas</span>
              </div>
              <div className="flex flex-col items-center gap-2 bg-white/10 rounded-xl py-6">
                <Trophy className="w-8 h-8 text-purple-400" />
                <span>98.7% Satisfação</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <span className="text-3xl font-black">HiSmile</span>
          </div>
          
          <p className="text-gray-400 mb-6 text-lg">
            © 2024 HiSmile. Transformando sorrisos em todo o mundo.
          </p>
          
          <div className="flex items-center justify-center gap-8 text-gray-500 flex-wrap">
            <span>🔒 Checkout SSL Seguro</span>
            <span>📞 Suporte 24/7</span>
            <span>🛡️ Garantia Total</span>
            <span>🚚 Entrega Rápida</span>
          </div>
        </div>
      </footer>

      {/* NOTIFICAÇÕES DE URGÊNCIA */}
      <UrgencyNotification />
    </div>
  );
};

export default EmotionalLandingPage;