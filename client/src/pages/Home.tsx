import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Download, TrendingUp, Zap, Users, Award, ChevronRight, Check, Linkedin, Instagram, Mail, MessageCircle, X } from "lucide-react";
import { useState, useEffect } from "react";

/**
 * Design Philosophy: Neo-Brutalism meets Swiss Design
 * - Bold typography with Poppins headings
 * - Asymmetric layouts with floating cards
 * - Deep navy blue primary with vibrant yellow accents
 * - Data visualization aesthetic throughout
 */

export default function Home() {
  const [activeChapter, setActiveChapter] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<{title: string, image: string} | null>(null);
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };
    
    if (selectedImage) {
      document.addEventListener('keydown', handleEscape);
      // Prevenir scroll quando modal estiver aberto
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  const chapters = [
    { id: 1, title: "Fundamentos", subtitle: "Começando do Zero", icon: "📚", parts: ["Introdução ao Power BI", "Primeiros Passos", "Conectando aos Dados", "Primeiro Dashboard"] },
    { id: 2, title: "Intermediário", subtitle: "Transformando Dados", icon: "🔧", parts: ["Power Query Editor", "Transformações Avançadas", "Modelagem de Dados", "Tabelas Calculadas"] },
    { id: 3, title: "DAX", subtitle: "A Linguagem do Power BI", icon: "⚡", parts: ["Introdução ao DAX", "Contextos", "CALCULATE", "Time Intelligence", "DAX Avançado"] },
    { id: 4, title: "Visualizações", subtitle: "Design Profissional", icon: "🎨", parts: ["Design de Dashboards", "Interatividade", "Tooltips Dinâmicos", "Custom Visuals"] },
    { id: 5, title: "Performance", subtitle: "Otimização", icon: "🚀", parts: ["Otimizando Modelos", "Query Folding", "Otimização de DAX"] },
    { id: 6, title: "Recursos Ocultos", subtitle: "Truques Exclusivos", icon: "💎", parts: ["Funcionalidades Secretas", "Copilot e IA", "Power Query Avançado"] },
    { id: 7, title: "Colaboração", subtitle: "Publicação", icon: "🌐", parts: ["Power BI Service", "Segurança e RLS", "Agendamento"] },
    { id: 8, title: "Casos Práticos", subtitle: "Projetos Reais", icon: "💼", parts: ["Dashboard de Vendas", "Dashboard Financeiro", "Dashboard de RH"] },
  ];

  const features = [
    { icon: <BookOpen className="w-6 h-6" />, title: "30 Capítulos Completos", description: "Do básico ao avançado com progressão estruturada" },
    { icon: <Zap className="w-6 h-6" />, title: "Dicas Exclusivas", description: "Truques que cursos normais não ensinam" },
    { icon: <TrendingUp className="w-6 h-6" />, title: "Exemplos Práticos", description: "Projetos reais de vendas, finanças e RH" },
    { icon: <Award className="w-6 h-6" />, title: "Ilustrações Profissionais", description: "Diagramas e infográficos detalhados" },
  ];

  const dashboardExamples = [
    { title: "Web Traffic Analytics", image: "/images/SGlV4VJm0FM9.jpg" },
    { title: "Sales Performance", image: "/images/069dgyYdW9RM.png" },
    { title: "Financial Overview", image: "/images/Y0NM0ZawdMiS.png" },
    { title: "Marketing Dashboard", image: "/images/WH6AAxRbEWLb.png" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Asymmetric Split Layout */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'url(/images/cover_illustration.png)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        </div>
        
        <div className="container relative py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fadeInUp">
              <div className="flex flex-col gap-2">
                <Badge className="bg-accent text-accent-foreground text-sm px-4 py-2 w-fit animate-pulse">
                  Ebook Completo
                </Badge>
                <p className="text-sm text-primary-foreground/80 italic">
                  ✍️ Por <span className="font-semibold text-accent">Renan Torres</span> - Especialista em Power BI
                </p>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Power BI:<br />
                <span className="text-accent">Do Iniciante</span><br />
                ao Avançado
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
                Domine a ferramenta de Business Intelligence mais poderosa do mercado com exemplos práticos, dicas exclusivas e ilustrações profissionais.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 shadow-2xl hover:scale-105 transition-transform"
                  onClick={() => window.open('https://pay.kiwify.com.br/ExGuMty', '_blank')}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Comprar Agora
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-6"
                  onClick={() => {
                    document.getElementById('conteudo-ebook')?.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }}
                >
                  <BookOpen className="mr-2 h-5 w-5" />
                  Ver Conteúdo
                </Button>
              </div>
            </div>
            
            <div className="relative hidden md:block animate-fadeInRight">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-accent transform rotate-2 hover:rotate-0 transition-transform duration-300">
                <img src="/images/cover_illustration.png" alt="Power BI Dashboard Illustration" className="w-full h-auto" />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>

        {/* Diagonal Bottom Edge */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-background" style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0 100%)' }} />
      </section>

      {/* Features Section - Floating Cards */}
      <section className="py-20 -mt-12 relative z-10">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <Card key={idx} className="border-2 hover:border-primary hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Chapters Section - Structured Grid */}
      <section id="conteudo-ebook" className="py-20 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Conteúdo do Ebook</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              8 partes estruturadas com 30 capítulos completos para levar você do zero ao profissional
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {chapters.map((chapter) => (
              <Card 
                key={chapter.id} 
                className={`border-2 transition-all duration-300 cursor-pointer hover:shadow-xl ${
                  activeChapter === chapter.id ? 'border-primary shadow-lg' : 'border-border hover:border-primary/50'
                }`}
                onClick={() => setActiveChapter(activeChapter === chapter.id ? null : chapter.id)}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="text-5xl">{chapter.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="mb-2">Parte {chapter.id}</Badge>
                        <ChevronRight className={`w-5 h-5 transition-transform ${activeChapter === chapter.id ? 'rotate-90' : ''}`} />
                      </div>
                      <CardTitle className="text-2xl mb-1">{chapter.title}</CardTitle>
                      <CardDescription className="text-base">{chapter.subtitle}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                {activeChapter === chapter.id && (
                  <CardContent className="pt-0 animate-fadeIn">
                    <div className="border-t pt-4 space-y-2">
                      {chapter.parts.map((part, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Check className="w-4 h-4 text-accent" />
                          <span>{part}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Examples Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Exemplos de Dashboards</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Aprenda a criar dashboards profissionais como estes
              <br />
              <span className="text-sm text-muted-foreground/70">✨ Clique nas imagens para ampliar</span>
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dashboardExamples.map((example, idx) => (
              <div 
                key={idx} 
                className="group relative overflow-hidden rounded-xl border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-xl cursor-pointer"
                onClick={() => setSelectedImage(example)}
              >
                <img src={example.image} alt={example.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-primary-foreground font-semibold">{example.title}</p>
                </div>
                {/* Ícone de expandir */}
                <div className="absolute top-2 right-2 bg-white/90 text-primary rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 21l-6-6m6 6v-4.8m0 4.8h-4.8"/>
                    <path d="M3 16.2V21m0 0h4.8M3 21l6-6"/>
                    <path d="M21 7.8V3m0 0h-4.8M21 3l-6 6"/>
                    <path d="M3 7.8V3m0 0h4.8M3 3l6 6"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Concepts Section - Visual Diagrams */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Conceitos Fundamentais Ilustrados</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Diagramas profissionais para facilitar o aprendizado
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden border-2 hover:border-primary transition-all hover:shadow-xl">
              <img src="/images/data_connection_diagram.png" alt="Data Connection Workflow" className="w-full h-64 object-contain bg-white p-6" />
              <CardHeader>
                <CardTitle className="text-xl">Conexão de Dados</CardTitle>
                <CardDescription>Entenda como o Power BI se conecta a múltiplas fontes de dados</CardDescription>
              </CardHeader>
            </Card>

            <Card className="overflow-hidden border-2 hover:border-primary transition-all hover:shadow-xl">
              <img src="/images/star_schema.png" alt="Star Schema" className="w-full h-64 object-contain bg-white p-6" />
              <CardHeader>
                <CardTitle className="text-xl">Star Schema</CardTitle>
                <CardDescription>Aprenda a modelar dados com o padrão mais eficiente</CardDescription>
              </CardHeader>
            </Card>

            <Card className="overflow-hidden border-2 hover:border-primary transition-all hover:shadow-xl">
              <img src="/images/dax_concept.png" alt="DAX Concept" className="w-full h-64 object-contain bg-primary/5 p-6" />
              <CardHeader>
                <CardTitle className="text-xl">Linguagem DAX</CardTitle>
                <CardDescription>Domine a linguagem de fórmulas do Power BI</CardDescription>
              </CardHeader>
            </Card>

            <Card className="overflow-hidden border-2 hover:border-primary transition-all hover:shadow-xl">
              <img src="/images/performance_optimization.png" alt="Performance Optimization" className="w-full h-64 object-contain bg-white p-6" />
              <CardHeader>
                <CardTitle className="text-xl">Otimização de Performance</CardTitle>
                <CardDescription>Técnicas para dashboards rápidos e eficientes</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section - Bold and Direct */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold">
            Pronto para Dominar o Power BI?
          </h2>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Baixe agora o ebook completo e comece sua jornada do iniciante ao avançado com exemplos práticos e dicas que farão a diferença na sua carreira.
          </p>
          <Button 
            size="lg" 
            className="bg-accent text-accent-foreground hover:bg-accent/90 text-xl px-12 py-8 shadow-2xl hover:scale-105 transition-transform"
            onClick={() => window.open('https://pay.kiwify.com.br/ExGuMty', '_blank')}
          >
            <Download className="mr-3 h-6 w-6" />
            Comprar Agora - R$67,00
          </Button>
          <p className="text-sm text-primary-foreground/80">
            ✓ 250+ páginas  ✓ 30 exercícios com gabarito  ✓ 9 planilhas de dados  ✓ Acesso vitalício
          </p>
        </div>
      </section>

      {/* Seção Sobre o Autor */}
      <section className="py-16 bg-gradient-to-b from-background to-secondary/30">
        <div className="container max-w-4xl">
          <div className="bg-card border-2 border-border rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Você pode adicionar uma foto circular aqui */}
              <div className="w-32 h-32 rounded-full bg-primary/10 border-4 border-primary flex items-center justify-center shrink-0">
                <span className="text-5xl font-bold text-primary">
                  <img 
                  src="/images/Renan Torres.JPG" 
                  alt="Renan Torres" 
                  className="w-32 h-32 rounded-full object-cover border-4 border-primary"
                />
                </span>
              </div>
              
              <div className="flex-1 text-center md:text-left space-y-4">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    Renan Torres
                  </h3>
                  <p className="text-lg text-primary font-semibold">
                    Especialista em Power BI e Business Intelligence
                  </p>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  Com anos de experiência em análise de dados e Business Intelligence, 
                  Renan Torres desenvolveu este ebook completo para compartilhar seu 
                  conhecimento e ajudar profissionais a dominarem o Power BI do zero 
                  ao avançado.
                </p>
                
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <Badge variant="secondary" className="px-3 py-1">
                    💼 6+ anos de XP
                  </Badge>
                  <Badge variant="secondary" className="px-3 py-1">
                    📊 Power BI Enthusiast
                  </Badge>
                  <Badge variant="secondary" className="px-3 py-1">
                    🎓 Apaixonado por Tecnologia e Dados
                  </Badge>
                </div>
                <div className="flex gap-4 justify-center">
                  <a 
                    href="https://linkedin.com/in/renan-torres-121a06106/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#0077B5] text-white hover:bg-[#006399] flex items-center justify-center transition-all hover:scale-110"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                  href="https://instagram.com/renantorres07" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white hover:opacity-90 flex items-center justify-center transition-all hover:scale-110"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="mailto:nantorres0@gmail.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-accent text-accent-foreground hover:opacity-90 flex items-center justify-center transition-all hover:scale-110"
                >
                  <Mail className="w-5 h-5" />
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-secondary/50 border-t">
        <div className="container text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-2xl font-bold">
            <TrendingUp className="w-8 h-8 text-primary" />
            <span>Power BI Mastery</span>
          </div>
          <p className="text-muted-foreground">
            Ebook completo criado para ajudar profissionais a dominar o Power BI
          </p>
          
          {/* Créditos do Autor */}
          <div className="pt-4 border-t border-border/50">
            <p className="text-base font-medium text-foreground mb-1">
              ✨ Escrito e Desenvolvido por 
              <span className="text-primary font-bold"> Renan Torres</span>
            </p>
            <p className="text-sm text-muted-foreground">
              Especialista em Power BI e Business Intelligence
            </p>
          </div>
          
          <p className="text-sm text-muted-foreground pt-2">
            © 2026 Power BI Ebook. Todos os direitos reservados.
          </p>
        </div>
      </footer>
      <a
        href="https://wa.me/5512991717064?text=Olá! Tenho interesse no ebook de Power BI"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-50 animate-pulse"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
      {/* Modal de Imagem Expandida */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 w-12 h-12 bg-white text-primary rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all hover:scale-110 shadow-2xl"
            onClick={() => setSelectedImage(null)}
            aria-label="Fechar"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div 
            className="relative max-w-7xl max-h-[90vh] animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImage.image} 
              alt={selectedImage.title}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="mt-4 text-center">
              <p className="text-white text-xl font-semibold bg-black/50 rounded-lg px-6 py-3 inline-block">
                {selectedImage.title}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Seção de Garantia adicionada acima do Footer
// Adicione este código antes do Footer no componente Home
