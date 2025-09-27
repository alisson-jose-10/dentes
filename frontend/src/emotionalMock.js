// MÁQUINA DE CONVERSÃO EMOCIONAL - Mock Data
export const emotionalData = {
  // Hero Section - A Promessa Irrecusável
  hero: {
    title: "O Sorriso que Abre Portas.",
    subtitle: "A Confiança que Muda o Jogo.",
    description: "Descubra a tecnologia de branqueamento usada por celebridades para obter um sorriso visivelmente mais branco em dias, sem dor e sem sair de casa.",
    videoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330", // Será um vídeo em produção
    ctaMain: "QUERO O MEU SORRISO MAIS BRANCO",
    ctaSecondary: "VER TRANSFORMAÇÕES REAIS",
    socialProof: {
      rating: "4.9",
      reviews: "10.000+",
      magazines: ["Vogue", "GQ", "Elle", "Harper's Bazaar"]
    },
    price: {
      original: "€89.99",
      current: "€24.99",
      discount: "72% OFF",
      urgency: "Últimas 16 horas desta oferta"
    }
  },

  // Before/After - Prova Visual Chocante
  beforeAfter: {
    title: "Resultados Reais. Sem Filtros. Sem Desculpas.",
    subtitle: "Estas transformações aconteceram em apenas 7-14 dias",
    transformations: [
      {
        id: 1,
        name: "Sofia M.",
        age: 28,
        location: "Lisboa",
        before: "https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2",
        after: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
        improvement: "8 tons mais branco",
        timeframe: "12 dias",
        quote: "Nunca imaginei que podia ter tanta confiança num sorriso. Agora sorrio sem hesitar em qualquer situação.",
        socialImpact: "Recebi 3 convites para jantar só esta semana!"
      },
      {
        id: 2,
        name: "Pedro R.",
        age: 35,
        location: "Porto",
        before: "https://images.unsplash.com/photo-1653055645127-54ec96add7b5",
        after: "https://images.unsplash.com/photo-1758598303616-d48b6d3c284c",
        improvement: "6 tons mais branco", 
        timeframe: "9 dias",
        quote: "O meu sorriso era a minha maior insegurança. Agora é a minha maior arma de sedução.",
        socialImpact: "Promoção no trabalho 2 semanas depois!"
      },
      {
        id: 3,
        name: "Ana C.",
        age: 24,
        location: "Coimbra",
        before: "https://images.pexels.com/photos/3762453/pexels-photo-3762453.jpeg",
        after: "https://images.unsplash.com/photo-1611166819595-ac34987dfa57",
        improvement: "7 tons mais branco",
        timeframe: "14 dias",
        quote: "Deixei de esconder o meu sorriso nas fotos. Agora sou eu que tiro as selfies do grupo!",
        socialImpact: "Instagram explodiu com likes!"
      }
    ]
  },

  // A Ciência da Confiança
  science: {
    title: "Branqueamento Sem Dor é Possível. Eis a Ciência.",
    subtitle: "A tecnologia que revolucionou o branqueamento dentário mundial",
    points: [
      {
        icon: "Shield",
        title: "Fórmula PAP+",
        description: "A nossa tecnologia revolucionária que branqueia sem peróxido, o que significa ZERO sensibilidade ou danos no esmalte.",
        proof: "Testado clinicamente em 1.200 pessoas"
      },
      {
        icon: "Award", 
        title: "Aprovado por Dentistas",
        description: "Desenvolvido e testado para ser seguro e eficaz por dentistas especializados em estética oral.",
        proof: "Recomendado por 94% dos dentistas"
      },
      {
        icon: "Zap",
        title: "Resultados Rápidos",
        description: "A luz LED acelera o processo, entregando resultados visíveis desde as primeiras aplicações.",
        proof: "Resultados em 10 minutos diários"
      },
      {
        icon: "Heart",
        title: "Seguro para Uso Diário",
        description: "Sem químicos agressivos. Pode ser usado diariamente sem qualquer risco para a saúde oral.",
        proof: "0% de efeitos secundários reportados"
      }
    ]
  },

  // Kits da Transformação (Preços com Ancoragem)
  pricing: {
    title: "Escolha o Seu Arsenal para um Sorriso Perfeito",
    subtitle: "Cada kit foi desenhado para diferentes objetivos de transformação",
    packages: [
      {
        id: "essential",
        name: "Kit Essencial",
        description: "Para quem quer começar a transformação",
        originalPrice: "€89.99",
        currentPrice: "€34.99", 
        discount: "61% OFF",
        savings: "€55",
        includes: [
          "Kit HiSmile completo",
          "Gel branqueador (1 semana)",
          "Luz LED profissional",
          "Guia passo-a-passo"
        ],
        cta: "INICIAR TRANSFORMAÇÃO",
        popular: false
      },
      {
        id: "transformation",
        name: "Kit Transformação Total",
        description: "O preferido das celebridades",
        originalPrice: "€199.99",
        currentPrice: "€59.99",
        discount: "70% OFF", 
        savings: "€140",
        includes: [
          "Kit HiSmile completo",
          "Gel branqueador (4 semanas)",
          "Luz LED profissional premium",
          "V34 Colour Corrector",
          "Pasta de dentes branqueadora",
          "Suporte prioritário",
          "Garantia extended"
        ],
        cta: "QUERO TRANSFORMAÇÃO TOTAL",
        popular: true,
        badge: "MAIS POPULAR"
      },
      {
        id: "maintenance", 
        name: "Manutenção Anual",
        description: "Para manter o sorriso perfeito",
        originalPrice: "€299.99",
        currentPrice: "€89.99",
        discount: "70% OFF",
        savings: "€210", 
        includes: [
          "Kit HiSmile completo", 
          "Recargas para 12 meses",
          "Luz LED premium",
          "V34 Colour Corrector (x3)",
          "Pasta de dentes (x4)",
          "App de acompanhamento",
          "Consultoria personalizada"
        ],
        cta: "GARANTIR ANO COMPLETO", 
        popular: false
      }
    ]
  },

  // Mural de Sorrisos - Prova Social Massiva
  socialWall: {
    title: "Junte-se às +2 Milhões de Pessoas que Já Transformaram o Seu Sorriso",
    subtitle: "Veja o que acontece quando você para de esconder o seu sorriso",
    stats: {
      users: "2.1M+",
      countries: "47", 
      satisfaction: "98.7%",
      recommendations: "94%"
    },
    testimonials: [
      {
        id: 1,
        name: "Maria Santos",
        username: "@maria_style",
        followers: "45K",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
        text: "Gente, que transformação! Não consigo parar de sorrir 😍 #HiSmileResults",
        likes: 2847,
        platform: "instagram"
      },
      {
        id: 2, 
        name: "João Ferreira",
        username: "@joao.f",
        followers: "12K",
        image: "https://images.unsplash.com/photo-1758598303616-d48b6d3c284c",
        text: "O investimento que mudou a minha autoconfiança. Vale cada cêntimo! 💪",
        likes: 891,
        platform: "instagram"
      },
      {
        id: 3,
        name: "Catarina Lima", 
        username: "@cat_smile",
        followers: "89K",
        image: "https://images.unsplash.com/photo-1611166819595-ac34987dfa57",
        text: "Antes: escondia o sorriso. Agora: sou eu que tiro as fotos do grupo! 📸✨",
        likes: 5632,
        platform: "instagram"
      },
      {
        id: 4,
        name: "Ricardo Costa",
        username: "@ricardo_fit",
        followers: "23K", 
        image: "https://images.unsplash.com/photo-1653055645127-54ec96add7b5",
        text: "Resultado após 10 dias. Impressionante! 🔥 #AnteseDepois",
        likes: 1456,
        platform: "instagram"
      }
    ]
  },

  // FAQ Focada em Medos
  faq: [
    {
      question: "🤕 Isto vai doer? Tenho dentes sensíveis...",
      answer: "ZERO dor garantida! A nossa fórmula PAP+ foi especificamente desenvolvida para pessoas com dentes sensíveis. Ao contrário dos tratamentos com peróxido que causam dor insuportável, o HiSmile é completamente indolor. Mais de 50.000 pessoas com sensibilidade dentária já usaram sem qualquer desconforto.",
      category: "pain"
    },
    {
      question: "😰 E se não funcionar no meu caso? Já tentei tudo...",
      answer: "Percebemos a sua frustração. É por isso que oferecemos garantia de 60 dias INCONDICIONAL. Se não ficar satisfeito por QUALQUER razão, devolvemos 100% do seu dinheiro, sem perguntas. Temos 98.7% de taxa de satisfação porque o sistema FUNCIONA.",
      category: "efficacy"
    },
    {
      question: "🦷 Funciona em dentes com restaurações/coroas?", 
      answer: "Sim! O HiSmile é seguro para dentes com restaurações, coroas e facetas. Não danifica nem descolora trabalhos dentários existentes. Milhares de clientes com trabalhos dentários já obtiveram resultados incríveis.",
      category: "safety"
    },
    {
      question: "⏳ Quanto tempo demora? Preciso de resultados rápidos!",
      answer: "Resultados VISÍVEIS em 24-48 horas! O tratamento completo leva apenas 10 minutos por dia. Em 7 dias terá um sorriso transformado. Em 14 dias, um sorriso de celebridade. É o sistema de branqueamento mais rápido e eficaz do mundo.",
      category: "time"
    },
    {
      question: "💰 Porque está tão barato? Isto é real?",
      answer: "Esta é uma oferta especial de lançamento em Portugal. O preço normal é €89.99, mas queremos que experimente a nossa tecnologia. Esta oferta de 72% OFF é limitada às primeiras 500 unidades. Depois volta ao preço normal.",
      category: "price"
    },
    {
      question: "🏥 É seguro? Não vai estragar os meus dentes?",
      answer: "100% seguro e aprovado por dentistas. Ao contrário dos tratamentos agressivos, a nossa fórmula PAP+ fortalece o esmalte enquanto branqueia. Zero danos, zero riscos. Usado por mais de 2 milhões de pessoas sem um único caso de dano dentário.",
      category: "safety"
    }
  ],

  // SEÇÃO DEVASTADORA: BENEFÍCIOS ESPECÍFICOS DO PRODUTO
  productBenefits: {
    title: "Por Que V34 É o Produto Nº1 de Branqueamento Dental do Mundo",
    subtitle: "12 benefícios revolucionários que você não encontra em nenhum outro produto",
    benefits: [
      {
        icon: "Zap",
        title: "Resultados em 30 Minutos",
        description: "Enquanto outros levam semanas, V34 transforma seu sorriso em meia hora",
        impact: "10x mais rápido que a concorrência",
        color: "yellow",
        image: "https://images.unsplash.com/photo-1617812191081-2a24e3f30e45"
      },
      {
        icon: "Shield",
        title: "Zero Dor, Zero Sensibilidade",
        description: "Tecnologia PAP+ sem peróxido. Mesmo dentes sensíveis ficam confortáveis",
        impact: "100% livre de desconforto",
        color: "green",
        image: "https://images.unsplash.com/photo-1654373535457-383a0a4d00f9"
      },
      {
        icon: "Award",
        title: "Aprovado por Dentistas",
        description: "94% dos dentistas recomendam. Seguro e eficaz como tratamento de clínica",
        impact: "Validação profissional garantida",
        color: "blue",
        image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99"
      },
      {
        icon: "Home",
        title: "Conveniência Total em Casa",
        description: "Sem agendamentos, sem deslocamentos. Transformação no seu tempo",
        impact: "Economia de 15+ horas",
        color: "purple",
        image: "https://images.pexels.com/photos/3762408/pexels-photo-3762408.jpeg"
      },
      {
        icon: "DollarSign",
        title: "Economia de €2000+",
        description: "Mesmo resultado de clínicas que cobram €2500, por apenas €24.99",
        impact: "99% de economia real",
        color: "green",
        image: "https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2"
      },
      {
        icon: "Star",
        title: "8 Tons Mais Branco",
        description: "Maior branqueamento possível. Dentes de celebridade em casa",
        impact: "Máxima transformação garantida",
        color: "yellow",
        image: "https://images.unsplash.com/photo-1758710199830-a679965cdbf4"
      },
      {
        icon: "Clock",
        title: "Apenas 10min Por Dia",
        description: "Rotina simples que cabe na sua agenda. Sem complicações",
        impact: "Facilidade extrema de uso",
        color: "blue",
        image: "https://images.unsplash.com/photo-1758598303616-d48b6d3c284c"
      },
      {
        icon: "Heart",
        title: "Fortalece o Esmalte",
        description: "Não desgasta como outros métodos. Deixa dentes mais fortes",
        impact: "Proteção + branqueamento",
        color: "red",
        image: "https://images.pexels.com/photos/34020728/pexels-photo-34020728.jpeg"
      },
      {
        icon: "Users",
        title: "2.1M+ Clientes Satisfeitos",
        description: "Maior base de clientes felizes do mundo. Prova de eficácia",
        impact: "Confiança global comprovada",
        color: "purple",
        image: "https://images.pexels.com/photos/34001911/pexels-photo-34001911.jpeg"
      },
      {
        icon: "Sparkles",
        title: "Tecnologia Patenteada",
        description: "Fórmula exclusiva V34 que nenhum concorrente possui",
        impact: "Inovação única no mercado",
        color: "blue",
        image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd"
      },
      {
        icon: "RefreshCw",
        title: "Resultados Duradouros",
        description: "Branqueamento mantém por 6-12 meses com cuidados básicos",
        impact: "Investimento de longo prazo",
        color: "green",
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be"
      },
      {
        icon: "CheckCircle",
        title: "Garantia Incondicional",
        description: "60 dias para testar. Se não funcionar, dinheiro 100% de volta",
        impact: "Risco zero absoluto",
        color: "green",
        image: "https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2"
      }
    ]
  },

  // Urgency & Scarcity
  urgency: {
    stock: 47,
    totalStock: 500,
    recentOrders: 1.543,
    timeframe: "últimas 24 horas",
    offer: {
      hours: 15,
      minutes: 47,
      seconds: 32,
      message: "OFERTA ESPECIAL EXPIRA EM:"
    },
    notifications: [
      "🔥 Ana de Lisboa acabou de comprar o Kit Transformação!",
      "⚡ Restam apenas 47 unidades com desconto!",
      "📦 Pedro do Porto confirmou o pedido agora!",
      "🎯 87% do stock já foi vendido hoje!",
      "💎 Maria de Braga escolheu a Transformação Total!"
    ]
  },

  // CTAs Emocionais 
  ctas: {
    primary: [
      "QUERO O MEU SORRISO DE CELEBRIDADE",
      "SIM, QUERO MAIS CONFIANÇA", 
      "INICIAR A MINHA TRANSFORMAÇÃO",
      "PARAR DE ESCONDER O MEU SORRISO"
    ],
    secondary: [
      "Ver mais transformações",
      "Descobrir a ciência",
      "Ler depoimentos reais"
    ]
  }
};