import { notFound } from "next/navigation";

const projects = [
  {
    slug: "snow-on-ice-3",
    index: "01",
    title: "Snow On Ice 3.0",
    type: "ERP e gestão de eventos",
    description:
      "Sistema de gestão empresarial para eventos de pista de gelo, centralizando vendas, estoque, financeiro, clientes, caixa, eventos e relatórios.",
    problem: "Processos desconectados, pouca visibilidade operacional e controles espalhados entre áreas da operação.",
    solution:
      "Uma central de gestão com módulos integrados, atualização automática de movimentações e indicadores para decisões mais rápidas.",
    image: "/projects/snow-dashboard.png",
    gallery: [
      { src: "/projects/gallery/snow-dashboard.png", label: "Dashboard gerencial" },
      { src: "/projects/gallery/snow-login.png", label: "Tela de login" },
    ],
    features: [
      "PDV, vendas, clientes e histórico comercial",
      "Controle de estoque, eventos e movimentações",
      "Caixa, receitas, despesas e relatórios gerenciais",
      "Autenticação, permissões e operação em evolução contínua",
    ],
    tags: ["React", "TypeScript", "Supabase", "PostgreSQL", "Capacitor"],
  },
  {
    slug: "system-hunter",
    index: "02",
    title: "System Hunter",
    type: "Produtividade gamificada",
    description:
      "Aplicação que transforma tarefas, metas e objetivos em missões, contratos, XP, energia, níveis e rank.",
    problem: "Metas abstratas e dificuldade de manter constância em hábitos, estudos e objetivos pessoais.",
    solution:
      "Uma experiência gamificada que transforma pequenas ações em progresso visível e recompensador.",
    image: "/projects/system-hunter.png",
    gallery: [
      { src: "/projects/system-hunter.png", label: "Central de operações" },
      { src: "/projects/gallery/system-hunter-perfil.png", label: "Perfil" },
      { src: "/projects/gallery/system-hunter-contratos.png", label: "Contratos" },
      { src: "/projects/gallery/system-hunter-missoes.png", label: "Missões" },
    ],
    features: [
      "Missões diárias, contratos e desafios personalizados",
      "XP, energia, níveis, rank e histórico de progresso",
      "Central de operações para acompanhar metas pendentes",
      "Base para versão social com grupos e desafios colaborativos",
    ],
    tags: ["React", "Vite", "JavaScript", "LocalStorage", "Vercel"],
  },
  {
    slug: "chamado-express",
    index: "03",
    title: "Chamado Express 2.0",
    type: "Suporte e automação",
    description:
      "Ferramenta para agilizar e padronizar atendimentos técnicos, com atalhos personalizados e geração automática de resumos.",
    problem: "Registros demorados, respostas inconsistentes e informações incompletas em atendimentos técnicos.",
    solution:
      "Um formulário adaptável com atalhos reutilizáveis e cópia automática do chamado formatado.",
    image: "/projects/chamado-express.png",
    gallery: [
      { src: "/projects/gallery/chamado-escuro.png", label: "Modo escuro" },
      { src: "/projects/gallery/chamado-claro.png", label: "Modo claro" },
      { src: "/projects/gallery/chamado-barra-lateral.png", label: "Atalhos" },
    ],
    features: [
      "Classificação por erro, dúvida ou solicitação",
      "Atalhos personalizados para respostas recorrentes",
      "Resumo automático do atendimento para copiar e enviar",
      "Temas claro/escuro e preferências salvas no navegador",
    ],
    tags: ["HTML5", "CSS3", "JavaScript", "LocalStorage"],
  },
  {
    slug: "crm-de-clientes",
    index: "04",
    title: "CRM de Clientes",
    type: "Relacionamento com clientes",
    description:
      "CRM leve para centralizar contatos, acompanhamento pós-atendimento, solicitações de avaliação e métricas de satisfação.",
    problem: "Contatos dispersos, retornos sem histórico e dificuldade de acompanhar avaliações de clientes.",
    solution:
      "Cadastro centralizado, mensagens padronizadas, integração com WhatsApp e indicadores de satisfação.",
    image: "/projects/crm-clientes.png",
    gallery: [
      { src: "/projects/crm-clientes.png", label: "Cadastro" },
      { src: "/projects/gallery/crm-painel.png", label: "Painel" },
      { src: "/projects/gallery/crm-calculo.png", label: "Métricas" },
    ],
    features: [
      "Cadastro de clientes, telefone, e-mail e técnico responsável",
      "Cópia rápida de contatos e mensagens para WhatsApp",
      "Solicitação padronizada de avaliações pós-atendimento",
      "Cálculo de médias e métricas de satisfação",
    ],
    tags: ["HTML5", "CSS3", "JavaScript", "WhatsApp"],
  },
  {
    slug: "landing-pages",
    index: "05",
    title: "Landing Pages Profissionais",
    type: "Presença digital e conversão",
    description:
      "Páginas sob medida para transmitir credibilidade, destacar diferenciais e transformar visitantes em clientes.",
    problem: "Marcas com mensagem pouco clara e baixa conversão de visitantes em contatos comerciais.",
    solution:
      "Design responsivo, conteúdo orientado à ação, formulários, WhatsApp, SEO e carregamento otimizado.",
    image: "/projects/landing-pages.png",
    gallery: [
      { src: "/projects/landing-pages.png", label: "Hero" },
      { src: "/projects/gallery/landing-sobre.png", label: "Sobre" },
      { src: "/projects/gallery/landing-contato.png", label: "Contato" },
    ],
    features: [
      "Estrutura visual personalizada para cada marca",
      "Seções institucionais, serviços, galeria e prova de valor",
      "Formulários, WhatsApp, e-mail e chamadas para ação",
      "SEO, performance e layout responsivo para mobile",
    ],
    tags: ["HTML5", "CSS3", "JavaScript", "SEO", "Responsivo"],
  },
  {
    slug: "omega-erp",
    index: "06",
    title: "Omega ERP",
    type: "ERP SaaS multiempresa",
    description:
      "ERP SaaS multiempresa para centralizar vendas, estoque, financeiro, PDV, relatórios e administração em uma plataforma única.",
    problem: "Informações espalhadas, retrabalho e pouca visão sobre a operação comercial.",
    solution:
      "Empresas independentes, permissões, auditoria, gestão comercial, financeiro, PDV e painel administrativo SaaS.",
    image: "/projects/omega-erp.png",
    gallery: [
      { src: "/projects/omega-erp.png", label: "Dashboard" },
      { src: "/projects/gallery/omega-vendas.png", label: "Vendas" },
      { src: "/projects/gallery/omega-financeiro.png", label: "Financeiro" },
      { src: "/projects/gallery/omega-painel-saas.png", label: "Painel SaaS" },
    ],
    features: [
      "ERP SaaS multiempresa com dados separados por empresa",
      "Clientes, fornecedores, produtos, compras, vendas e PDV",
      "Financeiro, caixa, contas a pagar e contas a receber",
      "Painel SaaS, licenças, permissões, logs e auditoria",
    ],
    tags: ["SaaS", "Multiempresa", "PDV", "BrasilAPI", "Auditoria"],
  },
  {
    slug: "calculadora-icms",
    index: "07",
    title: "Calculadora ICMS 2026",
    type: "Ferramenta fiscal",
    description:
      "Ferramenta web para consultar alíquotas internas e interestaduais de ICMS entre todas as UFs do Brasil.",
    problem: "Consulta lenta, visualmente confusa e sujeita a erro em tabelas extensas.",
    solution:
      "Seleção simples de origem e destino, resultado imediato e matriz completa com destaque visual.",
    image: "/projects/calculadora-icms.png",
    gallery: [
      { src: "/projects/calculadora-icms.png", label: "Consulta" },
      { src: "/projects/gallery/icms-claro.png", label: "Modo claro" },
      { src: "/projects/gallery/icms-escuro.png", label: "Modo escuro" },
      { src: "/projects/gallery/icms-tabela.png", label: "Matriz" },
    ],
    features: [
      "Consulta entre as 27 Unidades Federativas",
      "Alíquota interestadual e interna exibidas juntas",
      "Matriz completa com destaque da operação selecionada",
      "Modo claro/escuro e atualização sem recarregar a página",
    ],
    tags: ["JavaScript", "Fiscal", "Grid Layout", "Modo escuro"],
  },
  {
    slug: "ciot-lab",
    index: "08",
    title: "Ciot Lab",
    type: "Transporte e pré-diagnóstico",
    description:
      "Ferramenta interativa para orientar atendimentos sobre CIOT, RNTRC, TAC, ETC, CTC, Vale-Pedágio e Piso Mínimo.",
    problem: "Atendimentos baseados em interpretações soltas de regras técnicas.",
    solution:
      "Fluxo guiado de perguntas que organiza o cenário e entrega orientação clara para conferência.",
    image: "/projects/ciot-lab.png",
    gallery: [
      { src: "/projects/ciot-lab.png", label: "Início" },
      { src: "/projects/gallery/ciot-simulador.png", label: "Simulador" },
      { src: "/projects/gallery/ciot-escuro.png", label: "Modo escuro" },
      { src: "/projects/gallery/ciot-mobile.png", label: "Mobile" },
    ],
    features: [
      "Simulador guiado para operações de transporte",
      "Orientações sobre CIOT, RNTRC, Vale-Pedágio e Piso Mínimo",
      "Classificação entre TAC, ETC, CTC e frota própria",
      "Checklists, perguntas frequentes e modo claro/escuro",
    ],
    tags: ["HTML5", "CSS3", "JavaScript", "UX operacional"],
  },
  {
    slug: "oni",
    index: "09",
    title: "Oni",
    type: "Projeto em desenvolvimento",
    description:
      "Novo projeto da Omega Software em construção, ainda reservado para evolução de conceito, interface e produto.",
    problem: "Ideia em fase de lapidação.",
    solution: "Pesquisa, prototipação e desenvolvimento orientados por uso real.",
    image: null,
    gallery: [],
    features: [
      "Projeto autoral em fase de concepção",
      "Exploração de interface, proposta de valor e fluxo principal",
      "Protótipos orientados por uso real",
      "Evolução planejada dentro do ecossistema Omega",
    ],
    tags: ["Em breve", "Produto autoral", "Omega"],
  },
];

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) return {};

  return {
    title: `${project.title} | Omega Software`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  return (
    <main className="project-page">
      <header className="project-page-header">
        <a className="brand" href="/">
          <span className="brand-mark">Ω</span>
          <span><strong>OMEGA</strong><small>SOFTWARE</small></span>
        </a>
        <a className="project-back" href="/#projetos">Voltar ao portfólio</a>
      </header>

      <section className="project-hero">
        <div className="project-hero-copy">
          <p className="section-kicker">PROJETO {project.index}</p>
          <span>{project.type}</span>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          <div className="project-hero-actions">
            <a className="button button-primary" href="https://wa.me/5511946677094?text=Ol%C3%A1%2C%20vi%20um%20projeto%20no%20portf%C3%B3lio%20da%20Omega%20Software%20e%20quero%20conversar." target="_blank" rel="noreferrer">
              Quero algo parecido <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link" href="#galeria">Ver fotos <span aria-hidden="true">↓</span></a>
          </div>
        </div>

        <div className="project-hero-media">
          {project.image ? (
            <img src={project.image} alt={project.title} />
          ) : (
            <div className="project-detail-placeholder" aria-hidden="true">Ω</div>
          )}
        </div>
      </section>

      <section className="project-page-section project-page-split">
        <article>
          <small>Problema</small>
          <h2>O cenário antes da solução.</h2>
          <p>{project.problem}</p>
        </article>
        <article>
          <small>Solução</small>
          <h2>Como o projeto organiza a rotina.</h2>
          <p>{project.solution}</p>
        </article>
      </section>

      <section className="project-page-section" id="galeria">
        <div className="project-page-heading">
          <p className="section-kicker">GALERIA</p>
          <h2>Telas do projeto</h2>
        </div>
        {project.gallery.length > 0 ? (
          <div className="project-page-gallery">
            {project.gallery.map((item) => (
              <figure key={item.src}>
                <img src={item.src} alt={`${project.title}: ${item.label}`} />
                <figcaption>{item.label}</figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <div className="project-empty-gallery">Projeto em preparação visual.</div>
        )}
      </section>

      <section className="project-page-section project-resources">
        <div>
          <p className="section-kicker">RECURSOS</p>
          <h2>O que esse produto entrega.</h2>
        </div>
        <ul>
          {project.features.map((feature) => <li key={feature}>{feature}</li>)}
        </ul>
      </section>

      <section className="project-page-section project-stack">
        <p className="section-kicker">TECNOLOGIAS E ESCOPO</p>
        <div>
          {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
      </section>

      <section className="project-page-cta">
        <p className="section-kicker">QUER UM PROJETO NESSE NÍVEL?</p>
        <h2>Vamos adaptar essa lógica para o seu negócio.</h2>
        <a className="button button-primary button-large" href="https://wa.me/5511946677094?text=Ol%C3%A1%2C%20quero%20criar%20um%20projeto%20sob%20medida%20com%20a%20Omega%20Software." target="_blank" rel="noreferrer">
          Iniciar conversa <span aria-hidden="true">↗</span>
        </a>
      </section>
    </main>
  );
}
