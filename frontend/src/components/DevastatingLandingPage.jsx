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
    <div className="bg-gradient-to-r from-red-700 via-red-800 to-black text-white px-3 sm:px-6 py-4 sm:py-6 rounded-lg sm:rounded-xl shadow-2xl border-2 sm:border-4 border-red-500 animate-pulse">
      {/* Mobile Layout */}
      <div className="block sm:hidden">
        <div className="text-center mb-3">
          <div className="flex items-center justify-center gap-1 mb-2">
            <Skull className="w-4 h-4 animate-bounce text-red-300" />
            <span className="text-xs font-black">EXPIRA EM:</span>
            <AlertTriangle className="w-4 h-4 animate-bounce text-red-300" />
          </div>
        </div>
        <div className="flex justify-center gap-1">
          <div className="bg-black/50 px-2 py-2 rounded border border-red-500 text-center min-w-[50px]">
            <div className="text-lg font-black text-red-300">{timeLeft.hours.toString().padStart(2, '0')}</div>
            <div className="text-[10px]">H</div>
          </div>
          <div className="text-lg font-bold text-red-300 self-center">:</div>
          <div className="bg-black/50 px-2 py-2 rounded border border-red-500 text-center min-w-[50px]">
            <div className="text-lg font-black text-red-300">{timeLeft.minutes.toString().padStart(2, '0')}</div>
            <div className="text-[10px]">M</div>
          </div>
          <div className="text-lg font-bold text-red-300 self-center">:</div>
          <div className="bg-black/50 px-2 py-2 rounded border border-red-500 text-center min-w-[50px]">
            <div className="text-lg font-black text-red-300">{timeLeft.seconds.toString().padStart(2, '0')}</div>
            <div className="text-[10px]">S</div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden sm:flex items-center justify-center gap-3">
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
    </div>
  );
};

const StickyMobileCTA = ({ onClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling 500px
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 bg-white shadow-2xl border-t-4 border-red-500 sm:hidden">
      <Button 
        onClick={onClick}
        className="w-full bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white font-black py-4 text-base rounded-xl shadow-2xl min-h-[60px] animate-pulse"
      >
        <Crown className="w-5 h-5 mr-2" />
        GARANTIR AGORA - €24.99
        <ArrowRight className="w-5 h-5 ml-2" />
      </Button>
      <div className="text-center mt-2">
        <span className="text-xs text-gray-600">⏰ Restam 23 unidades • 72% OFF</span>
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
    <Card className="relative overflow-hidden border-2 sm:border-4 border-red-500 bg-gradient-to-br from-red-50 to-red-100 hover:shadow-2xl transition-all duration-300 hover:scale-105">
      <CardContent className="p-4 sm:p-8">
        <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-8 h-8 sm:w-12 sm:h-12 bg-red-600 rounded-full flex items-center justify-center">
          <X className="w-4 h-4 sm:w-6 sm:h-6 text-white font-bold" />
        </div>
        
        <div className="relative aspect-video mb-4 sm:mb-6 rounded-lg overflow-hidden">
          <img 
            src={loss.image} 
            alt={loss.title}
            className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-red-600/40 flex items-center justify-center">
            <div className="text-white font-black text-lg sm:text-xl">PERDIDO!</div>
          </div>
        </div>

        <div className="text-center mb-4">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
            {loss.icon === 'Briefcase' && <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-white" />}
            {loss.icon === 'Heart' && <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-white" />}
            {loss.icon === 'Users' && <Users className="w-6 h-6 sm:w-8 sm:h-8 text-white" />}
            {loss.icon === 'TrendingUp' && <TrendingDown className="w-6 h-6 sm:w-8 sm:h-8 text-white" />}
          </div>
          <h3 className="font-black text-lg sm:text-xl text-gray-900 mb-2 sm:mb-3">{loss.title}</h3>
          <p className="text-red-700 font-bold leading-tight text-sm sm:text-base">{loss.pain}</p>
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
      <div className="bg-gradient-to-r from-red-700 via-red-800 to-black text-white py-2 sm:py-4 px-2 sm:px-4 text-center relative overflow-hidden border-b-2 sm:border-b-4 border-red-500">
        <div className="animate-pulse absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <p className="relative z-10 font-black text-sm sm:text-lg flex items-center justify-center gap-2 sm:gap-4">
          <Skull className="w-4 h-4 sm:w-6 sm:h-6 animate-bounce flex-shrink-0" />
          <span className="text-xs sm:text-base">⚠️ ÚLTIMA CHAMADA: 23 UNIDADES • HOJE OU NUNCA ⚠️</span>
          <Skull className="w-4 h-4 sm:w-6 sm:h-6 animate-bounce flex-shrink-0" />
        </p>
      </div>

      {/* HEADER FLUTUANTE MOBILE-OPTIMIZED */}
      <header className="sticky top-0 z-40 bg-black/95 backdrop-blur-xl border-b border-red-500/50 shadow-2xl">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 py-2 sm:py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-r from-red-600 to-red-800 rounded-full flex items-center justify-center border border-red-400">
              <Skull className="w-4 h-4 sm:w-8 sm:h-8 text-white" />
            </div>
            <span className="text-lg sm:text-3xl font-black text-white">HiSmile</span>
            <Badge className="bg-red-600 text-white animate-pulse text-xs sm:text-sm px-1 sm:px-2 py-1">ÚLTIMA CHANCE</Badge>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-6 text-white">
            <div className="text-xs sm:text-sm font-bold">⏰ <span className="hidden sm:inline">23:47:32 RESTANTE</span><span className="sm:hidden">23h</span></div>
            <div className="flex items-center gap-1">
              <Flame className="w-3 h-3 sm:w-4 sm:h-4 text-red-400" />
              <span className="text-xs sm:text-sm font-bold">23</span>
            </div>
          </div>
        </div>
      </header>

      {/* SEÇÃO HERÓI ORIGINAL MOBILE-OPTIMIZED */}
      <section className="py-8 sm:py-20 px-3 sm:px-4 relative overflow-hidden bg-gradient-to-br from-white via-blue-50/50 to-purple-50/30">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e0e7ff' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-center">
            
            {/* Mobile-First Text Content */}
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
              <div className="flex items-center gap-2 sm:gap-4">
                <Badge className="bg-gradient-to-r from-red-600 to-red-700 text-white px-3 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg animate-pulse">
                  <Timer className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                  <span className="text-xs sm:text-base">Últimas 16 horas</span>
                </Badge>
              </div>

              {/* Mobile-optimized headline */}
              <div>
                <h1 className="text-3xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-tight mb-4">
                  <span className="block">O Sorriso que</span>
                  <span className="block">Abre Portas.</span>
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent block">
                    A Confiança que
                  </span>
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent block">
                    Muda o Jogo.
                  </span>
                </h1>
                
                <p className="text-lg sm:text-2xl text-gray-700 leading-relaxed font-medium">
                  Descubra a tecnologia de branqueamento usada por celebridades para obter um sorriso visivelmente mais branco em dias, sem dor e sem sair de casa.
                </p>
              </div>

              {/* Mobile-optimized pricing */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 sm:p-8 rounded-xl sm:rounded-2xl border-2 border-green-200 shadow-xl">
                <div className="text-center mb-4 sm:mb-6">
                  <div className="flex items-center justify-center gap-2 sm:gap-4 mb-3">
                    <span className="text-4xl sm:text-6xl font-black text-green-600">€24.99</span>
                    <div className="text-center">
                      <span className="text-xl sm:text-3xl text-gray-500 line-through block">€89.99</span>
                      <Badge className="bg-red-600 text-white text-sm sm:text-xl px-2 sm:px-4 py-1 sm:py-2 mt-1 sm:mt-2">
                        72% OFF
                      </Badge>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 font-semibold">Poupa €65 hoje • Sem taxas escondidas</p>
                </div>
                
                <CountdownTimer />
              </div>

              {/* Mobile-optimized CTAs */}
              <div className="space-y-4 sm:space-y-6">
                <Button 
                  onClick={handleMainPurchase}
                  className="w-full bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 hover:from-yellow-600 hover:via-orange-600 hover:to-red-600 text-white font-black py-6 sm:py-8 text-lg sm:text-2xl rounded-xl sm:rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-xl min-h-[60px] sm:min-h-[80px]"
                >
                  <Crown className="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3" />
                  QUERO O MEU SORRISO MAIS BRANCO
                  <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 ml-2 sm:ml-3" />
                </Button>
                
                {/* Mobile trust indicators */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-center text-xs sm:text-sm">
                  <div className="flex flex-row sm:flex-col items-center justify-center gap-2 sm:gap-1 bg-white p-3 rounded-lg border">
                    <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 flex-shrink-0" />
                    <span className="font-semibold">Garantia 60 Dias</span>
                  </div>
                  <div className="flex flex-row sm:flex-col items-center justify-center gap-2 sm:gap-1 bg-white p-3 rounded-lg border">
                    <Award className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 flex-shrink-0" />
                    <span className="font-semibold">Aprovado Dentistas</span>
                  </div>
                  <div className="flex flex-row sm:flex-col items-center justify-center gap-2 sm:gap-1 bg-white p-3 rounded-lg border">
                    <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 flex-shrink-0" />
                    <span className="font-semibold">98.7% Satisfação</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile-optimized product showcase */}
            <div className="relative order-1 lg:order-2">
              <div className="aspect-square bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl sm:rounded-3xl p-6 sm:p-12 overflow-hidden relative shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1654373535457-383a0a4d00f9"
                  alt="Sorriso Perfeito"
                  className="w-full h-full object-cover rounded-xl sm:rounded-2xl hover:scale-110 transition-transform duration-700"
                />
                
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-xl sm:rounded-2xl">
                  <Button className="bg-white/90 hover:bg-white text-gray-900 rounded-full w-16 h-16 sm:w-20 sm:h-20 shadow-2xl">
                    <Play className="w-6 h-6 sm:w-8 sm:h-8 ml-1" />
                  </Button>
                </div>

                {/* Mobile-optimized floating stats */}
                <div className="absolute top-3 sm:top-6 right-3 sm:right-6 bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl px-2 sm:px-4 py-2 sm:py-3 shadow-lg">
                  <div className="text-center">
                    <div className="text-lg sm:text-2xl font-black text-green-600">2.1M+</div>
                    <div className="text-[10px] sm:text-xs text-gray-600">Sorrisos Transformados</div>
                  </div>
                </div>

                <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl px-2 sm:px-4 py-2 sm:py-3 shadow-lg">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="font-bold text-gray-900 text-xs sm:text-sm">4.9/5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NOVA SEÇÃO: O QUE VOCÊ ESTÁ PERDENDO - MOBILE OPTIMIZED */}
      <section className="py-12 sm:py-24 px-3 sm:px-4 bg-gradient-to-br from-red-900 via-red-800 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-black/40"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-8 sm:mb-16">
            <Badge className="bg-red-600 text-white px-3 sm:px-6 py-2 sm:py-3 text-sm sm:text-lg mb-4 sm:mb-6 animate-pulse">
              <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
              REALIDADE CRUEL
            </Badge>
            
            <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 sm:mb-6 leading-tight">
              PARE. Olhe o Que Você Está<br className="sm:hidden" /> Perdendo TODOS OS DIAS
            </h2>
            <p className="text-lg sm:text-2xl text-red-200 max-w-4xl mx-auto mb-4 sm:mb-8">
              Cada dia que passa com dentes amarelos é uma oportunidade perdida para sempre
            </p>
            <p className="text-base sm:text-xl text-red-100 max-w-5xl mx-auto leading-relaxed">
              Enquanto você lê isto, alguém com um sorriso radiante está conseguindo o emprego que você queria, a pessoa que você desejava, o respeito que você merecia. O seu sorriso amarelo está SABOTANDO sua vida sem você perceber.
            </p>
          </div>

          {/* Mobile: Stack cards vertically, Desktop: Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-16">
            {devastatingData.lostOpportunities.losses.map((loss, index) => (
              <LostOpportunityCard key={index} loss={loss} />
            ))}
          </div>

          <div className="text-center">
            <Button 
              onClick={handleMainPurchase}
              className="w-full sm:w-auto bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white font-black py-6 sm:py-8 px-8 sm:px-16 text-lg sm:text-2xl rounded-xl sm:rounded-2xl hover:scale-110 transition-all duration-300 shadow-2xl min-h-[60px]"
            >
              <Zap className="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3" />
              <span className="text-sm sm:text-base">PARAR DE SER REJEITADO PELO MEU SORRISO</span>
              <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 ml-2 sm:ml-3" />
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