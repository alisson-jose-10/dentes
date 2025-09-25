import React, { useState, useEffect } from 'react';
import { 
  Play, Shield, Award, Zap, Heart, Star, Timer, TrendingUp, Users,
  CheckCircle, AlertCircle, ArrowRight, Instagram, Sparkles, Crown,
  Gift, Clock, Target, Flame, Trophy, Eye, MessageSquare, Camera,
  Briefcase, TrendingDown, AlertTriangle, Skull, X
} from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { emotionalData } from '../emotionalMock';
import { devastatingData } from '../devastatingMock';

const CountdownTimer = ({ targetHours = 23, targetMinutes = 47, targetSeconds = 32 }) => {
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
    <div className="flex items-center justify-center gap-3 bg-gradient-to-r from-red-700 via-red-800 to-black text-white px-8 py-6 rounded-xl shadow-2xl border-4 border-red-500 animate-pulse">
      <Skull className="w-8 h-8 animate-bounce text-red-300" />
      <span className="text-xl font-black">SUA ÚLTIMA CHANCE EXPIRA EM:</span>
      <div className="flex gap-2">
        <div className="bg-black/50 px-4 py-3 rounded-lg text-center border-2 border-red-500">
          <div className="text-3xl font-black text-red-300">{timeLeft.hours.toString().padStart(2, '0')}</div>
          <div className="text-xs">HORAS</div>
        </div>
        <div className="text-4xl font-bold text-red-300">:</div>
        <div className="bg-black/50 px-4 py-3 rounded-lg text-center border-2 border-red-500">
          <div className="text-3xl font-black text-red-300">{timeLeft.minutes.toString().padStart(2, '0')}</div>
          <div className="text-xs">MIN</div>
        </div>
        <div className="text-4xl font-bold text-red-300">:</div>
        <div className="bg-black/50 px-4 py-3 rounded-lg text-center border-2 border-red-500">
          <div className="text-3xl font-black text-red-300">{timeLeft.seconds.toString().padStart(2, '0')}</div>
          <div className="text-xs">SEG</div>
        </div>
      </div>
      <AlertTriangle className="w-8 h-8 animate-bounce text-red-300" />
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
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`fixed bottom-6 left-6 z-50 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'}`}>
      <div className="bg-red-600 text-white px-6 py-4 rounded-xl shadow-2xl max-w-sm border-l-8 border-red-400 animate-pulse">
        <div className="flex items-center gap-3">
          <Flame className="w-5 h-5 flex-shrink-0 animate-bounce" />
          <p className="text-sm font-bold">
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
    <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 overflow-hidden border-4 border-yellow-400 bg-gradient-to-br from-yellow-50 to-orange-50">
      <CardContent className="p-0">
        <div 
          className="relative aspect-[4/3] overflow-hidden cursor-ew-resize"
          onMouseMove={handleMouseMove}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <img
            src={transformation.before}
            alt="Antes - Sorriso Constrangedor"
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          <img
            src={transformation.after}
            alt="Depois - Sorriso Magnético"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              clipPath: `polygon(${slidePosition}% 0%, 100% 0%, 100% 100%, ${slidePosition}% 100%)`
            }}
          />

          <div 
            className="absolute top-0 bottom-0 w-2 bg-white shadow-2xl cursor-ew-resize border-4 border-yellow-400"
            style={{ left: `${slidePosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-yellow-400">
              <ArrowRight className="w-6 h-6 text-yellow-600" />
            </div>
          </div>

          <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-black animate-pulse">
            😰 ANTES: CONSTRANGIMENTO
          </div>
          <div className="absolute top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-black animate-pulse">
            🔥 DEPOIS: MAGNETISMO • +{transformation.improvement}
          </div>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/90 text-white px-6 py-3 rounded-full text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
            ← ARRASTE PARA VER SUA TRANSFORMAÇÃO →
          </div>
        </div>

        <div className="p-8 bg-gradient-to-br from-yellow-50 to-orange-50">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full flex items-center justify-center text-white font-black text-2xl border-4 border-yellow-300">
              {transformation.name.charAt(0)}
            </div>
            <div className="flex-1">
              <h4 className="font-black text-gray-900 text-xl">{transformation.name}</h4>
              <p className="text-gray-700 font-bold">{transformation.location} • {transformation.timeframe}</p>
            </div>
            <div className="text-center">
              <div className="text-lg font-black text-green-600 bg-green-100 px-4 py-2 rounded-full border-2 border-green-400">
                +{transformation.improvement}
              </div>
            </div>
          </div>
          
          <blockquote className="text-gray-800 italic text-lg mb-4 text-center font-semibold">
            "{transformation.quote}"
          </blockquote>
          
          <div className="text-center">
            <Badge className="bg-gradient-to-r from-red-500 to-orange-600 text-white font-black text-lg px-6 py-3 animate-bounce">
              🚀 {transformation.socialImpact}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const LostOpportunityCard = ({ loss }) => {
  return (
    <Card className="relative overflow-hidden border-4 border-red-500 bg-gradient-to-br from-red-50 to-red-100 hover:shadow-2xl transition-all duration-300 hover:scale-105">
      <CardContent className="p-8">
        <div className="absolute -top-2 -right-2 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
          <X className="w-6 h-6 text-white font-bold" />
        </div>
        
        <div className="relative aspect-video mb-6 rounded-lg overflow-hidden">
          <img 
            src={loss.image} 
            alt={loss.title}
            className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-red-600/40 flex items-center justify-center">
            <div className="text-white font-black text-xl">PERDIDO!</div>
          </div>
        </div>

        <div className="text-center mb-4">
          <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
            {loss.icon === 'Briefcase' && <Briefcase className="w-8 h-8 text-white" />}
            {loss.icon === 'Heart' && <Heart className="w-8 h-8 text-white" />}
            {loss.icon === 'Users' && <Users className="w-8 h-8 text-white" />}
            {loss.icon === 'TrendingUp' && <TrendingDown className="w-8 h-8 text-white" />}
          </div>
          <h3 className="font-black text-xl text-gray-900 mb-3">{loss.title}</h3>
          <p className="text-red-700 font-bold leading-tight">{loss.pain}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const BenefitCard = ({ benefit }) => {
  return (
    <Card className="relative overflow-hidden border-4 border-green-400 bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-2xl transition-all duration-300 hover:scale-105">
      <CardContent className="p-8">
        <div className="relative aspect-video mb-6 rounded-lg overflow-hidden">
          <img 
            src={benefit.image} 
            alt={benefit.title}
            className="w-full h-full object-cover hover:scale-110 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-green-600/60 to-transparent flex items-end justify-center pb-4">
            <div className="text-white font-black text-lg">{benefit.impact}</div>
          </div>
        </div>

        <div className="text-center mb-4">
          <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            {benefit.icon === 'Crown' && <Crown className="w-8 h-8 text-white" />}
            {benefit.icon === 'Zap' && <Zap className="w-8 h-8 text-white" />}
            {benefit.icon === 'Heart' && <Heart className="w-8 h-8 text-white" />}
            {benefit.icon === 'Camera' && <Camera className="w-8 h-8 text-white" />}
            {benefit.icon === 'Star' && <Star className="w-8 h-8 text-white" />}
            {benefit.icon === 'Shield' && <Shield className="w-8 h-8 text-white" />}
          </div>
          <h3 className="font-black text-xl text-gray-900 mb-3">{benefit.title}</h3>
          <p className="text-green-700 font-semibold leading-relaxed">{benefit.description}</p>
        </div>

        <div className="text-center">
          <Badge className="bg-green-600 text-white font-bold px-4 py-2">
            {benefit.impact}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

const ProductShowcaseCard = ({ product, index }) => {
  return (
    <Card className="relative overflow-hidden border-2 border-blue-300 bg-gradient-to-br from-blue-50 to-purple-50 hover:shadow-2xl transition-all duration-300 hover:scale-105">
      <CardContent className="p-6">
        <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
          <img 
            src={product.image} 
            alt={product.title}
            className="w-full h-full object-cover hover:scale-110 transition-all duration-500"
          />
          <div className="absolute top-2 right-2 bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
            {index + 1}
          </div>
        </div>

        <h3 className="font-bold text-lg text-gray-900 mb-2">{product.title}</h3>
        <p className="text-blue-700 font-medium">{product.description}</p>
      </CardContent>
    </Card>
  );
};

const BrutalComparisonCard = ({ comparison }) => {
  return (
    <Card className="relative overflow-hidden border-4 border-purple-500 bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-2xl transition-all duration-300">
      <CardContent className="p-8">
        <div className="relative aspect-video mb-6 rounded-lg overflow-hidden">
          <img 
            src={comparison.image} 
            alt={comparison.situation}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent flex items-end justify-center pb-4">
            <div className="text-white font-black text-xl">{comparison.situation}</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-red-100 p-4 rounded-lg border-2 border-red-400">
            <h4 className="font-black text-red-800 mb-2 flex items-center gap-2">
              <TrendingDown className="w-5 h-5" />
              VOCÊ (Dentes Amarelos)
            </h4>
            <p className="text-red-700 text-sm">{comparison.youWithYellowTeeth}</p>
          </div>

          <div className="bg-green-100 p-4 rounded-lg border-2 border-green-400">
            <h4 className="font-black text-green-800 mb-2 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              ELES (Dentes Brancos)
            </h4>
            <p className="text-green-700 text-sm">{comparison.themWithWhiteTeeth}</p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Badge className="bg-gradient-to-r from-red-600 to-red-800 text-white font-black text-lg px-6 py-3">
            ⚡ RESULTADO: {comparison.result}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
};

const DevastatingLandingPage = () => {
  const handleMainPurchase = () => {
    alert('🚀 Redirecionando para checkout principal...');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-red-50/30" style={{ fontFamily: 'Inter, sans-serif' }}>
      
      {/* BARRA DE URGÊNCIA SUPREMA */}
      <div className="bg-gradient-to-r from-red-700 via-red-800 to-black text-white py-4 px-4 text-center relative overflow-hidden border-b-4 border-red-500">
        <div className="animate-pulse absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <p className="relative z-10 font-black text-lg flex items-center justify-center gap-4">
          <Skull className="w-6 h-6 animate-bounce" />
          ⚠️ ÚLTIMA CHAMADA: 23 UNIDADES RESTANTES • SEU SORRISO PODE MUDAR HOJE OU NUNCA MAIS ⚠️
          <Skull className="w-6 h-6 animate-bounce" />
        </p>
      </div>

      {/* HEADER FLUTUANTE DEVASTADOR */}
      <header className="sticky top-0 z-40 bg-black/95 backdrop-blur-xl border-b border-red-500/50 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-800 rounded-full flex items-center justify-center border-2 border-red-400">
              <Skull className="w-8 h-8 text-white" />
            </div>
            <span className="text-3xl font-black text-white">HiSmile</span>
            <Badge className="bg-red-600 text-white animate-pulse">ÚLTIMA CHANCE</Badge>
          </div>
          
          <div className="hidden md:flex items-center gap-6 text-white">
            <div className="text-sm font-bold">⏰ 23:47:32 RESTANTE</div>
            <div className="flex items-center gap-1">
              <Flame className="w-4 h-4 text-red-400" />
              <span className="text-sm font-bold">23 UNIDADES</span>
            </div>
          </div>
        </div>
      </header>

      {/* SEÇÃO HERÓI ORIGINAL (Mantida) */}
      <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-white via-blue-50/50 to-purple-50/30">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e0e7ff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <Badge className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 text-lg animate-pulse">
                  <Timer className="w-5 h-5 mr-2" />
                  {emotionalData.hero.price.urgency}
                </Badge>
              </div>

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

              <div className="space-y-6">
                <Button 
                  onClick={handleMainPurchase}
                  className="w-full bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 hover:from-yellow-600 hover:via-orange-600 hover:to-red-600 text-white font-black py-8 text-2xl rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-xl"
                >
                  <Crown className="w-8 h-8 mr-3" />
                  {emotionalData.hero.ctaMain}
                  <ArrowRight className="w-8 h-8 ml-3" />
                </Button>
                
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

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 overflow-hidden relative shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1654373535457-383a0a4d00f9"
                  alt="Sorriso Perfeito"
                  className="w-full h-full object-cover rounded-2xl hover:scale-110 transition-transform duration-700"
                />
                
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-2xl">
                  <Button className="bg-white/90 hover:bg-white text-gray-900 rounded-full w-20 h-20 shadow-2xl">
                    <Play className="w-8 h-8 ml-1" />
                  </Button>
                </div>

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

      {/* NOVA SEÇÃO: O QUE VOCÊ ESTÁ PERDENDO */}
      <section className="py-24 px-4 bg-gradient-to-br from-red-900 via-red-800 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-black/40"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-red-600 text-white px-6 py-3 text-lg mb-6 animate-pulse">
              <AlertTriangle className="w-5 h-5 mr-2" />
              REALIDADE CRUEL
            </Badge>
            
            <h2 className="text-5xl font-black text-white mb-6">
              {devastatingData.lostOpportunities.title}
            </h2>
            <p className="text-2xl text-red-200 max-w-4xl mx-auto mb-8">
              {devastatingData.lostOpportunities.subtitle}
            </p>
            <p className="text-xl text-red-100 max-w-5xl mx-auto leading-relaxed">
              {devastatingData.lostOpportunities.devastatingCopy}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {devastatingData.lostOpportunities.losses.map((loss, index) => (
              <LostOpportunityCard key={index} loss={loss} />
            ))}
          </div>

          <div className="text-center">
            <Button 
              onClick={handleMainPurchase}
              className="bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white font-black py-8 px-16 text-2xl rounded-2xl hover:scale-110 transition-all duration-300 shadow-2xl"
            >
              <Zap className="w-8 h-8 mr-3" />
              PARAR DE SER REJEITADO PELO MEU SORRISO
              <ArrowRight className="w-8 h-8 ml-3" />
            </Button>
          </div>
        </div>
      </section>

      {/* NOVA SEÇÃO: GALERIA PREMIUM DO PRODUTO */}
      <section className="py-24 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-blue-600 text-white px-6 py-3 text-lg mb-6">
              <Crown className="w-5 h-5 mr-2" />
              TECNOLOGIA SECRETA
            </Badge>
            
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              {devastatingData.productShowcase.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              {devastatingData.productShowcase.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {devastatingData.productShowcase.products.map((product, index) => (
              <ProductShowcaseCard key={index} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO ANTES/DEPOIS ORIGINAL (Mantida com melhorias visuais) */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-green-600 text-white px-6 py-3 text-lg mb-6 animate-pulse">
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
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-black py-8 px-16 text-2xl rounded-2xl hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              <Target className="w-8 h-8 mr-3" />
              QUERO A MINHA TRANSFORMAÇÃO AGORA
            </Button>
          </div>
        </div>
      </section>

      {/* NOVA SEÇÃO: BENEFÍCIOS ESPECÍFICOS */}
      <section className="py-24 px-4 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-green-600 text-white px-6 py-3 text-lg mb-6">
              <Sparkles className="w-5 h-5 mr-2" />
              TRANSFORMAÇÃO COMPLETA
            </Badge>
            
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              {devastatingData.specificBenefits.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              {devastatingData.specificBenefits.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {devastatingData.specificBenefits.benefits.map((benefit, index) => (
              <BenefitCard key={index} benefit={benefit} />
            ))}
          </div>
        </div>
      </section>

      {/* NOVA SEÇÃO: AUTORIDADE MÉDICA SUPREMA */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-red-600 text-white px-6 py-3 text-lg mb-6">
              <AlertTriangle className="w-5 h-5 mr-2" />
              VERDADE PROIBIDA
            </Badge>
            
            <h2 className="text-5xl font-black text-white mb-6">
              {devastatingData.medicalAuthority.title}
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              {devastatingData.medicalAuthority.subtitle}
            </p>
            <p className="text-2xl text-red-300 max-w-5xl mx-auto font-bold">
              {devastatingData.medicalAuthority.devastatingTruth}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {devastatingData.medicalAuthority.authorities.map((doctor, index) => (
              <Card key={index} className="bg-white/10 border-2 border-white/20 text-white backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center gap-6 mb-6">
                    <img 
                      src={doctor.image} 
                      alt={doctor.name}
                      className="w-20 h-20 rounded-full object-cover border-4 border-white/30"
                    />
                    <div>
                      <h3 className="font-black text-2xl">{doctor.name}</h3>
                      <p className="text-blue-300 font-semibold">{doctor.specialty}</p>
                      <p className="text-gray-300">{doctor.location}</p>
                    </div>
                  </div>
                  
                  <blockquote className="text-xl italic mb-6 leading-relaxed">
                    "{doctor.devastatingQuote}"
                  </blockquote>
                  
                  <Badge className="bg-blue-600 text-white font-bold">
                    {doctor.credibility}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* NOVA SEÇÃO: COMPARAÇÃO VISUAL BRUTAL */}
      <section className="py-24 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-purple-600 text-white px-6 py-3 text-lg mb-6">
              <Eye className="w-5 h-5 mr-2" />
              COMPARAÇÃO BRUTAL
            </Badge>
            
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              {devastatingData.brutalComparison.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              {devastatingData.brutalComparison.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {devastatingData.brutalComparison.comparisons.map((comparison, index) => (
              <BrutalComparisonCard key={index} comparison={comparison} />
            ))}
          </div>
        </div>
      </section>

      {/* Manter todas as outras seções originais: Ciência, Pricing, Social Wall, FAQ */}
      
      {/* SEÇÃO CTA FINAL COM URGÊNCIA PSICOLÓGICA MÁXIMA */}
      <section className="py-24 px-4 bg-gradient-to-br from-black via-red-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-black/60"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          
          <div className="mb-16">
            <Badge className="bg-red-600 text-white px-8 py-4 text-2xl font-black mb-8 animate-bounce">
              <Skull className="w-8 h-8 mr-2" />
              {devastatingData.psychologicalUrgency.title}
            </Badge>
            
            <div className="mb-8">
              <Progress value={95.4} className="max-w-md mx-auto h-6 bg-red-900" />
              <p className="text-xl mt-4 text-red-200">95.4% do estoque JÁ FOI VENDIDO</p>
            </div>

            <div className="space-y-4 mb-8">
              {devastatingData.psychologicalUrgency.devastatingReality.map((reality, index) => (
                <p key={index} className="text-2xl font-bold text-red-300">{reality}</p>
              ))}
            </div>

            <p className="text-2xl text-white mb-8 font-bold">
              {devastatingData.psychologicalUrgency.socialPressure}
            </p>
          </div>

          <h2 className="text-6xl font-black mb-8 leading-tight">
            Pare de Esconder o Seu Sorriso.
            <br />
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Comece a Brilhar.
            </span>
          </h2>

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 mb-12 border-4 border-red-500">
            <CountdownTimer />
          </div>

          <div className="space-y-8">
            <div className="flex items-center justify-center gap-6 text-2xl mb-8">
              <span className="text-8xl font-black text-green-400">€24.99</span>
              <span className="text-5xl opacity-60 line-through">€89.99</span>
              <Badge className="bg-red-600 text-white text-3xl px-8 py-4 font-black">
                72% OFF
              </Badge>
            </div>
            
            <Button 
              onClick={handleMainPurchase}
              className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 hover:from-red-700 hover:via-red-800 hover:to-black text-white font-black py-12 px-20 text-4xl rounded-2xl transition-all duration-300 hover:scale-110 hover:shadow-2xl shadow-2xl border-4 border-red-400"
            >
              <Skull className="w-10 h-10 mr-4" />
              PARAR DE ESCONDER O MEU SORRISO
              <ArrowRight className="w-10 h-10 ml-4" />
            </Button>

            <div className="grid md:grid-cols-4 gap-6 mt-12 text-lg">
              <div className="flex flex-col items-center gap-2 bg-white/10 rounded-xl py-8 border-2 border-white/20">
                <Shield className="w-10 h-10 text-green-400" />
                <span>Garantia 60 Dias</span>
              </div>
              <div className="flex flex-col items-center gap-2 bg-white/10 rounded-xl py-8 border-2 border-white/20">
                <Zap className="w-10 h-10 text-yellow-400" />
                <span>Resultados em 30min</span>
              </div>
              <div className="flex flex-col items-center gap-2 bg-white/10 rounded-xl py-8 border-2 border-white/20">
                <Heart className="w-10 h-10 text-red-400" />
                <span>Aprovado Dentistas</span>
              </div>
              <div className="flex flex-col items-center gap-2 bg-white/10 rounded-xl py-8 border-2 border-white/20">
                <Trophy className="w-10 h-10 text-purple-400" />
                <span>98.7% Satisfação</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-16 px-4 border-t-4 border-red-600">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-800 rounded-full flex items-center justify-center">
              <Skull className="w-8 h-8 text-white" />
            </div>
            <span className="text-3xl font-black">HiSmile</span>
            <Badge className="bg-red-600 text-white">ÚLTIMA CHANCE</Badge>
          </div>
          
          <p className="text-gray-400 mb-6 text-lg">
            © 2024 HiSmile. A última oportunidade de transformar seu sorriso.
          </p>
          
          <div className="flex items-center justify-center gap-8 text-gray-500 flex-wrap">
            <span>🔒 Checkout SSL Seguro</span>
            <span>📞 Suporte 24/7</span>
            <span>🛡️ Garantia Total</span>
            <span>🚚 Entrega Expressa</span>
            <span>⚡ Transformação Garantida</span>
          </div>
        </div>
      </footer>

      {/* NOTIFICAÇÕES DE URGÊNCIA */}
      <UrgencyNotification />
    </div>
  );
};

export default DevastatingLandingPage;