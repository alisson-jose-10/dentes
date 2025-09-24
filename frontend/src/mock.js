// Enhanced mock data for V34 Whitening Strips Landing Page - World-class conversion focused
export const mockData = {
  // Hero section data
  hero: {
    headline: "TRANSFORMAÇÃO DENTAL",
    subheadline: "EM APENAS 30 MINUTOS",
    description: "Tecnologia revolucionária V34 que branqueia dentes instantaneamente. Resultados clínicos comprovados por 60.000+ clientes satisfeitos.",
    price: {
      original: "$35.00",
      current: "$4.99",
      savings: "86% OFF",
      perApplication: "$0.35 por aplicação"
    },
    urgency: {
      stockLeft: 23,
      totalOrders: 1247,
      timeLeft: "23:47:32",
      message: "OFERTA EXPIRA HOJE ÀS 23:59"
    },
    benefits: [
      "✨ Resultados visíveis em 30 minutos",
      "🔬 Tecnologia científica V34 patenteada", 
      "💯 100% seguro - sem peróxido",
      "🛡️ Garantia incondicional de 60 dias"
    ],
    productImages: [
      "https://images.unsplash.com/photo-1660300110666-9ff243d1328a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHx0ZWV0aCUyMHdoaXRlbmluZyUyMHN0cmlwc3xlbnwwfHx8fDE3NTg3NDY1NTJ8MA&ixlib=rb-4.1.0&q=85",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHw0fHxwcm9kdWN0JTIwcGhvdG9ncmFwaHl8ZW58MHx8fHwxNzU4NzQ2NTU3fDA&ixlib=rb-4.1.0&q=85",
      "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwcGhvdG9ncmFwaHl8ZW58MHx8fHwxNzU4NzQ2NTU3fDA&ixlib=rb-4.1.0&q=85"
    ]
  },

  // Scientific proof section
  scientificProof: {
    title: "COMPROVAÇÃO CIENTÍFICA IRREFUTÁVEL",
    subtitle: "Estudo duplo-cego com 60 participantes • Universidade de Harvard",
    results: [
      { 
        percentage: "100%", 
        description: "melhoram 2+ tons instantaneamente",
        progress: 100,
        icon: "TrendingUp"
      },
      { 
        percentage: "96%", 
        description: "mantêm resultados após 24h",
        progress: 96,
        icon: "Clock"
      },
      { 
        percentage: "0%", 
        description: "relataram dor ou sensibilidade",
        progress: 0,
        icon: "Shield"
      },
      { 
        percentage: "8.3x", 
        description: "mais eficaz que concorrentes",
        progress: 83,
        icon: "Award"
      }
    ],
    methodology: "Metodologia: Avaliação VITA Bleachguide 3D-MASTER®, grupo controle com placebo, medição fotométrica calibrada."
  },

  // Before/After transformations
  transformations: [
    {
      id: 1,
      name: "Marina S.",
      age: 28,
      location: "São Paulo, SP",
      beforeImage: "https://images.unsplash.com/photo-1694364596437-904741b3335f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHw0fHx0ZWV0aCUyMHdoaXRlbmluZyUyMHN0cmlwc3xlbnwwfHx8fDE3NTg3NDY1NTJ8MA&ixlib=rb-4.1.0&q=85",
      afterImage: "https://images.pexels.com/photos/6627537/pexels-photo-6627537.jpeg",
      improvement: "6 tons mais branco",
      timeframe: "30 minutos",
      testimonial: "Não acreditei quando vi o resultado. Meus dentes ficaram incrivelmente brancos em apenas meia hora!"
    },
    {
      id: 2,
      name: "Carlos M.",
      age: 34,
      location: "Rio de Janeiro, RJ", 
      beforeImage: "https://images.unsplash.com/photo-1694364596437-904741b3335f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHw0fHx0ZWV0aCUyMHdoaXRlbmluZyUyMHN0cmlwc3xlbnwwfHx8fDE3NTg3NDY1NTJ8MA&ixlib=rb-4.1.0&q=85",
      afterImage: "https://images.pexels.com/photos/6627537/pexels-photo-6627537.jpeg",
      improvement: "7 tons mais branco",
      timeframe: "30 minutos",
      testimonial: "Resultado impressionante! Agora sorrio com total confiança em reuniões importantes."
    },
    {
      id: 3,
      name: "Ana L.",
      age: 31,
      location: "Brasília, DF",
      beforeImage: "https://images.unsplash.com/photo-1694364596437-904741b3335f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHw0fHx0ZWV0aCUyMHdoaXRlbmluZyUyMHN0cmlwc3xlbnwwfHx8fDE3NTg3NDY1NTJ8MA&ixlib=rb-4.1.0&q=85",
      afterImage: "https://images.pexels.com/photos/6627537/pexels-photo-6627537.jpeg",
      improvement: "5 tons mais branco",
      timeframe: "30 minutos", 
      testimonial: "Melhor investimento que já fiz! Por esse preço, é praticamente um roubo."
    }
  ],

  // Enhanced testimonials with video-style
  testimonials: [
    {
      id: 1,
      name: "Dr. Roberto Silva",
      credentials: "Dentista • CRO-SP 45.678",
      location: "São Paulo, SP",
      rating: 5,
      text: "Como dentista com 15 anos de experiência, posso afirmar: V34 é a revolução do branqueamento dental. Tecnologia superior, resultados instantâneos e zero sensibilidade.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      type: "professional",
      verified: true,
      highlight: "RECOMENDAÇÃO PROFISSIONAL"
    },
    {
      id: 2,
      name: "Camila Rodrigues",
      age: 29,
      location: "Influencer • 2.3M seguidores",
      rating: 5,
      text: "Gente, eu PRECISO contar pra vocês! Testei o V34 e o resultado foi SURREAL. Em 30 minutos meus dentes ficaram 6 tons mais brancos. Estou chocada!",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5c5?w=150&h=150&fit=crop&crop=face",
      type: "influencer",
      socialProof: "2.847 curtidas • 312 comentários",
      highlight: "INFLUENCER VERIFICADA"
    },
    {
      id: 3,
      name: "José Santos",
      age: 42,
      location: "Empresário • Belo Horizonte, MG",
      rating: 5,
      text: "Precisava branquear os dentes para uma apresentação importante. O V34 me salvou! Resultado profissional em casa, em apenas 30 minutos.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face", 
      type: "customer",
      purchaseDate: "Há 3 dias",
      highlight: "COMPRA VERIFICADA"
    },
    {
      id: 4,
      name: "Dra. Patricia Lima",
      credentials: "Odontologista Estética • CRO-RJ 23.456",
      location: "Rio de Janeiro, RJ",
      rating: 5,
      text: "Recomendo V34 para todos os meus pacientes. É seguro, eficaz e oferece resultados que costumavam exigir tratamentos caros no consultório.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
      type: "professional",
      verified: true,
      highlight: "ESPECIALISTA EM ESTÉTICA"
    }
  ],

  // Social proof numbers
  socialProof: {
    customers: "60.000+",
    rating: "4.9",
    reviews: "12.847",
    recentOrders: "1.247",
    timeframe: "últimas 24 horas",
    countries: "12",
    satisfaction: "98.7%"
  },

  // Risk reversal
  riskReversal: {
    guarantee: "60",
    guaranteeText: "dias para testar sem risco",
    benefits: [
      "🔒 Checkout 256-bit SSL seguro",
      "📞 Suporte 24/7 em português", 
      "🚚 Frete grátis + entrega expressa",
      "💳 Parcelamento em até 12x",
      "🛡️ Garantia incondicional total",
      "⚡ Ativação instantânea"
    ]
  },

  // Comparison table
  comparison: {
    title: "COMPARAÇÃO: V34 vs CONCORRENTES",
    subtitle: "Veja por que o V34 é superior a outros métodos de branqueamento",
    items: [
      {
        feature: "Tempo para resultados",
        v34: "30 minutos",
        competitor1: "2-4 semanas",
        competitor2: "2-6 meses",
        advantage: true
      },
      {
        feature: "Segurança (sem peróxido)",
        v34: "✅ 100% seguro",
        competitor1: "❌ Peróxido agressivo", 
        competitor2: "❌ Químicos abrasivos",
        advantage: true
      },
      {
        feature: "Preço por tratamento",
        v34: "$4.99",
        competitor1: "$299",
        competitor2: "$1.200",
        advantage: true
      },
      {
        feature: "Aprovação profissional",
        v34: "✅ Recomendado por dentistas",
        competitor1: "⚠️ Uso controverso",
        competitor2: "❌ Não recomendado",
        advantage: true
      }
    ]
  },

  // FAQ enhanced
  faq: [
    {
      question: "⚡ Quanto tempo demora para ver os primeiros resultados?",
      answer: "Os resultados são INSTANTÂNEOS! Você verá dentes visivelmente mais brancos em apenas 30 minutos. Nossa tecnologia V34 funciona imediatamente através da correção óptica de cor.",
      category: "results"
    },
    {
      question: "🛡️ É realmente seguro? Não vai danificar meus dentes?",
      answer: "100% SEGURO! Ao contrário de outros produtos, o V34 não contém peróxido ou químicos abrasivos. Nossa fórmula foi testada em laboratório e aprovada por dentistas.",
      category: "safety"
    },
    {
      question: "💰 Por que o preço está tão baixo? É realmente eficaz?",
      answer: "Esta é uma OFERTA LIMITADA de lançamento! Normalmente vendemos por $35, mas queremos que você experimente nossa tecnologia revolucionária. O desconto de 86% é válido apenas para as primeiras 500 unidades.",
      category: "pricing"
    },
    {
      question: "📦 Posso devolver se não funcionar?",
      answer: "RISCO ZERO! Oferecemos garantia incondicional de 60 dias. Se não ficar 100% satisfeito, devolvemos todo seu dinheiro, sem perguntas.",
      category: "guarantee"
    },
    {
      question: "🚀 Como funciona a tecnologia V34?",
      answer: "O V34 utiliza correção de cor óptica avançada. As moléculas roxas neutralizam tons amarelos dos dentes, criando uma aparência instantaneamente mais branca. É como um filtro de beleza, mas para seus dentes!",
      category: "technology"
    }
  ],

  // Urgency indicators
  urgency: {
    popup: {
      show: true,
      messages: [
        "⚡ Maria de São Paulo acabou de comprar!",
        "🔥 Restam apenas 23 unidades!",
        "⏰ Oferta expira em 23:47:32",
        "📦 Carlos do Rio fez seu pedido agora!",
        "🎯 Meta de hoje: 89% atingida!"
      ]
    },
    inventory: {
      total: 500,
      sold: 477,
      remaining: 23,
      percentage: 95.4
    }
  }
};