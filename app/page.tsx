const projects = [
  {
    index: "01",
    title: "Snow On Ice 3.0",
    shortTitle: "Snow 3.0",
    type: "ERP e gestão de eventos",
    image: "/projects/snow-dashboard.png",
    alt: "Dashboard gerencial do Snow On Ice 3.0",
    description:
      "Sistema de gestão empresarial para eventos de pista de gelo, centralizando vendas, estoque, financeiro, clientes, caixa, eventos e relatórios.",
    problem: "Processos desconectados e pouca visibilidade operacional.",
    solution:
      "Módulos integrados compartilham os mesmos dados, automatizam movimentações e apoiam decisões com indicadores.",
    features: [
      "PDV, vendas, clientes e histórico comercial",
      "Controle de estoque, eventos e movimentações",
      "Caixa, receitas, despesas e relatórios gerenciais",
      "Autenticação, permissões e operação em evolução contínua",
    ],
    tags: ["React", "TypeScript", "Supabase", "PostgreSQL", "Capacitor"],
    featured: true,
  },
  {
    index: "02",
    title: "System Hunter",
    shortTitle: "System Hunter",
    type: "Produtividade gamificada",
    image: "/projects/system-hunter.png",
    alt: "Central de operações do System Hunter",
    description:
      "Aplicação de produtividade que transforma tarefas, metas e objetivos em missões, contratos, XP, energia, níveis e rank.",
    problem: "Metas abstratas e dificuldade de manter hábitos consistentes.",
    solution:
      "Uma jornada gamificada que torna pequenas ações mensuráveis, recompensadoras e visualmente claras.",
    features: [
      "Missões diárias, contratos e desafios personalizados",
      "XP, energia, níveis, rank e histórico de progresso",
      "Central de operações para acompanhar metas pendentes",
      "Base para versão social com grupos e desafios colaborativos",
    ],
    tags: ["React", "Vite", "JavaScript", "LocalStorage", "Vercel"],
    featured: true,
  },
  {
    index: "03",
    title: "Chamado Express 2.0",
    shortTitle: "Chamado Express",
    type: "Suporte e automação",
    image: "/projects/chamado-express.png",
    alt: "Interface escura do Chamado Express",
    description:
      "Ferramenta para agilizar e padronizar atendimentos técnicos, com atalhos personalizados e geração automática de resumos.",
    problem: "Registros demorados, respostas inconsistentes e informações incompletas.",
    solution:
      "Formulário adaptável, atalhos reutilizáveis e cópia automática do chamado formatado.",
    features: [
      "Classificação por erro, dúvida ou solicitação",
      "Atalhos personalizados para respostas recorrentes",
      "Resumo automático do atendimento para copiar e enviar",
      "Temas claro/escuro e preferências salvas no navegador",
    ],
    tags: ["HTML5", "CSS3", "JavaScript", "LocalStorage"],
    featured: false,
  },
  {
    index: "04",
    title: "CRM de Clientes",
    shortTitle: "CRM",
    type: "Relacionamento com clientes",
    image: "/projects/crm-clientes.png",
    alt: "Tela principal do CRM de Clientes",
    description:
      "CRM leve para centralizar contatos, acompanhamento pós-atendimento, solicitações de avaliação e métricas de satisfação.",
    problem: "Contatos dispersos e acompanhamento sem histórico claro.",
    solution:
      "Cadastro centralizado, mensagens padronizadas, integração com WhatsApp e indicadores de satisfação.",
    features: [
      "Cadastro de clientes, telefone, e-mail e técnico responsável",
      "Cópia rápida de contatos e mensagens para WhatsApp",
      "Solicitação padronizada de avaliações pós-atendimento",
      "Cálculo de médias e métricas de satisfação",
    ],
    tags: ["HTML5", "CSS3", "JavaScript", "WhatsApp"],
    featured: false,
  },
  {
    index: "05",
    title: "Landing Pages Profissionais",
    shortTitle: "Landing Pages",
    type: "Presença digital e conversão",
    image: "/projects/landing-pages.png",
    alt: "Landing page imobiliária profissional",
    description:
      "Páginas desenvolvidas sob medida para transmitir credibilidade, destacar diferenciais e transformar visitantes em clientes.",
    problem: "Marcas com mensagem pouco clara e baixa conversão de visitantes em contatos.",
    solution:
      "Design responsivo, conteúdo orientado à ação, formulários, WhatsApp, SEO e carregamento otimizado.",
    features: [
      "Estrutura visual personalizada para cada marca",
      "Seções institucionais, serviços, galeria e prova de valor",
      "Formulários, WhatsApp, e-mail e chamadas para ação",
      "SEO, performance e layout responsivo para mobile",
    ],
    tags: ["HTML5", "CSS3", "JavaScript", "SEO", "Responsivo"],
    featured: false,
  },
  {
    index: "06",
    title: "Omega ERP",
    shortTitle: "Omega ERP",
    type: "ERP SaaS multiempresa",
    image: "/projects/omega-erp.png",
    alt: "Dashboard executivo do Omega ERP",
    description:
      "ERP SaaS multiempresa para centralizar vendas, estoque, financeiro, PDV, relatórios e administração em uma plataforma única.",
    problem: "Informações espalhadas, retrabalho e pouca visão sobre a operação comercial.",
    solution:
      "Empresas independentes, permissões, auditoria, gestão comercial, financeiro, PDV e painel administrativo SaaS.",
    features: [
      "ERP SaaS multiempresa com dados separados por empresa",
      "Clientes, fornecedores, produtos, compras, vendas e PDV",
      "Financeiro, caixa, contas a pagar e contas a receber",
      "Painel SaaS, licenças, permissões, logs e auditoria",
    ],
    tags: ["SaaS", "Multiempresa", "PDV", "BrasilAPI", "Auditoria"],
    featured: true,
  },
  {
    index: "07",
    title: "Calculadora ICMS 2026",
    shortTitle: "Calculadora ICMS",
    type: "Ferramenta fiscal",
    image: "/projects/calculadora-icms.png",
    alt: "Calculadora ICMS 2026 com consulta entre Minas Gerais e Tocantins",
    description:
      "Ferramenta web para consultar alíquotas internas e interestaduais de ICMS entre todas as UFs do Brasil.",
    problem: "Consulta lenta, visualmente confusa e sujeita a erro em tabelas extensas.",
    solution:
      "Seleção simples de origem e destino, resultado imediato e matriz completa com destaque visual.",
    features: [
      "Consulta entre as 27 Unidades Federativas",
      "Alíquota interestadual e interna exibidas juntas",
      "Matriz completa com destaque da operação selecionada",
      "Modo claro/escuro e atualização sem recarregar a página",
    ],
    tags: ["JavaScript", "Fiscal", "Grid Layout", "Modo escuro"],
    featured: false,
  },
  {
    index: "08",
    title: "Ciot Lab",
    shortTitle: "Ciot Lab",
    type: "Transporte e pré-diagnóstico",
    image: "/projects/ciot-lab.png",
    alt: "Tela inicial do Ciot Lab",
    description:
      "Ferramenta interativa para orientar atendimentos sobre CIOT, RNTRC, TAC, ETC, CTC, Vale-Pedágio e Piso Mínimo.",
    problem: "Atendimentos baseados em interpretações soltas de regras técnicas.",
    solution:
      "Fluxo guiado de perguntas que organiza o cenário e entrega orientação clara para conferência.",
    features: [
      "Simulador guiado para operações de transporte",
      "Orientações sobre CIOT, RNTRC, Vale-Pedágio e Piso Mínimo",
      "Classificação entre TAC, ETC, CTC e frota própria",
      "Checklists, perguntas frequentes e modo claro/escuro",
    ],
    tags: ["HTML5", "CSS3", "JavaScript", "UX operacional"],
    featured: false,
  },
  {
    index: "09",
    title: "Oni",
    shortTitle: "Oni",
    type: "Projeto em desenvolvimento",
    image: null,
    alt: "",
    description:
      "Novo projeto da Omega Software em construção, ainda reservado para evolução de conceito, interface e produto.",
    problem: "Ideia em fase de lapidação.",
    solution: "Pesquisa, prototipação e desenvolvimento orientados por uso real.",
    features: [
      "Projeto autoral em fase de concepção",
      "Exploração de interface, proposta de valor e fluxo principal",
      "Protótipos orientados por uso real",
      "Evolução planejada dentro do ecossistema Omega",
    ],
    tags: ["Em breve", "Produto autoral", "Omega"],
    featured: false,
  },
];

const capabilities = [
  {
    number: "01",
    title: "Sistemas sob medida",
    text: "Mapeamento de rotina, desenho de fluxos, regras de negócio e produtos que organizam operações reais.",
    tech: "React · TypeScript · Supabase · SQL",
  },
  {
    number: "02",
    title: "Ferramentas operacionais",
    text: "Automação de tarefas repetitivas, formulários inteligentes, consultas técnicas e painéis de apoio à decisão.",
    tech: "JavaScript · APIs · LocalStorage · Vercel",
  },
  {
    number: "03",
    title: "Experiências web",
    text: "Landing pages, interfaces responsivas, jornadas comerciais e páginas pensadas para clareza e conversão.",
    tech: "HTML · CSS · SEO · UX",
  },
  {
    number: "04",
    title: "Evolução contínua",
    text: "Produtos criados para amadurecer com o uso, recebendo novos módulos, integrações e melhorias conforme o negócio cresce.",
    tech: "SaaS · ERP · Dados · Integrações",
  },
];

const processSteps = [
  "Mapeamento do problema, usuários, dados e pontos críticos da operação.",
  "Protótipo funcional com fluxo, interface, módulos e regras essenciais.",
  "Desenvolvimento por etapas, com validações frequentes e foco no uso real.",
  "Publicação, ajustes, suporte e evolução conforme novas necessidades aparecem.",
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Omega Software, início">
          <span className="brand-mark">Ω</span>
          <span>
            <strong>OMEGA</strong>
            <small>SOFTWARE</small>
          </span>
        </a>

        <nav aria-label="Navegação principal">
          <a href="#projetos">Projetos</a>
          <a href="#detalhes">Detalhes</a>
          <a href="#processo">Processo</a>
          <a href="#tecnologias">Tecnologias</a>
          <a href="#contato">Contato</a>
        </nav>

        <a className="header-cta" href="https://wa.me/5511946677094" target="_blank" rel="noreferrer">
          WhatsApp <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-glow hero-glow-cyan" aria-hidden="true" />
        <div className="hero-glow hero-glow-violet" aria-hidden="true" />

        <div className="hero-copy">
          <p className="eyebrow">
            <span /> Sistemas · Software · Impacto
          </p>
          <h1>
            Ideias transformadas em <em>soluções digitais.</em>
          </h1>
          <p className="hero-text">
            Desenvolvimento de sistemas de gestão, automações, ferramentas operacionais e aplicações web
            pensadas para simplificar processos e gerar resultados.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projetos">
              Conhecer projetos <span aria-hidden="true">↓</span>
            </a>
            <a className="text-link" href="mailto:luckbrj.dev@gmail.com">
              luckbrj.dev@gmail.com <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="availability">
            <span className="status-dot" />
            Disponível para novos projetos
            <span className="availability-place">Interior de SP · Brasil</span>
          </div>
        </div>

        <div className="hero-panel" aria-label="Resumo do portfólio">
          <div className="panel-top">
            <span className="panel-dots"><i /><i /><i /></span>
            <span>omega_portfolio.ts</span>
            <span>ready</span>
          </div>
          <div className="panel-feature">
            <img src="/projects/omega-erp.png" alt="Dashboard do Omega ERP" />
          </div>
          <div className="panel-metrics">
            <div><strong>09</strong><span>projetos mapeados</span></div>
            <div><strong>04</strong><span>frentes de atuação</span></div>
            <div className="metric-wide"><strong>100%</strong><span>foco em problemas reais</span></div>
          </div>
          <div className="panel-status">
            <span>main*</span><span>UTF-8</span><span>Next.js</span><span>✓ Vercel</span>
          </div>
        </div>
      </section>

      <section className="section products-section" id="projetos">
        <div className="section-heading">
          <div>
            <p className="section-kicker">PORTFÓLIO / 01—09</p>
            <h2>Projetos criados a partir de necessidades práticas.</h2>
          </div>
          <p>
            Sistemas, ferramentas e páginas construídas para resolver rotinas específicas, reduzir atrito
            e transformar ideias em produtos utilizáveis.
          </p>
        </div>

        <div className="products-grid">
          {projects.map((project) => (
            <article className={`product-card ${project.featured ? "featured" : ""}`} key={project.title}>
              <div className="product-card-top">
                <span>{project.index}</span>
                <span className="product-type">{project.type}</span>
              </div>
              {project.image ? (
                <div className="product-image">
                  <img src={project.image} alt={project.alt} loading="lazy" />
                </div>
              ) : (
                <div className="product-symbol" aria-hidden="true">Ω</div>
              )}
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul aria-label={`Tecnologias de ${project.title}`}>
                {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
              <a className="product-detail-link" href={`#projeto-${project.index}`}>
                Ver detalhes <span aria-hidden="true">↓</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section project-details-section" id="detalhes">
        <div className="section-heading">
          <div>
            <p className="section-kicker">DETALHES DOS PROJETOS</p>
            <h2>Um espaço próprio para entender cada produto.</h2>
          </div>
          <p>
            A vitrine mostra o conjunto. Aqui cada projeto ganha contexto: para quem foi pensado,
            qual problema resolve e quais recursos sustentam a experiência.
          </p>
        </div>

        <div className="project-detail-list">
          {projects.map((project) => (
            <article className="project-detail" id={`projeto-${project.index}`} key={`${project.title}-detail`}>
              <div className="project-detail-media">
                {project.image ? (
                  <img src={project.image} alt={project.alt} loading="lazy" />
                ) : (
                  <div className="project-detail-placeholder" aria-hidden="true">Ω</div>
                )}
              </div>
              <div className="project-detail-content">
                <div className="project-detail-top">
                  <span>{project.index}</span>
                  <span>{project.type}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-detail-split">
                  <div>
                    <small>Problema</small>
                    <strong>{project.problem}</strong>
                  </div>
                  <div>
                    <small>Solução</small>
                    <strong>{project.solution}</strong>
                  </div>
                </div>
                <div className="project-feature-block">
                  <small>Recursos principais</small>
                  <ul>
                    {project.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="project-detail-tags" aria-label={`Tecnologias e recursos de ${project.title}`}>
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section cases-section">
        <div className="section-heading light-heading">
          <div>
            <p className="section-kicker">PROBLEMA → SOLUÇÃO</p>
            <h2>O código entra depois que o contexto fica claro.</h2>
          </div>
          <p>
            Cada projeto foi descrito pela dor que motivou a criação e pela forma como o produto organiza
            a rotina na prática.
          </p>
        </div>

        <div className="case-list">
          {projects.filter((project) => project.index !== "09").map((project) => (
            <article className="case-study" key={project.title}>
              <div className="case-number">CASE_{project.index}</div>
              <div className="case-main">
                <span>{project.type}</span>
                <h3>{project.shortTitle}</h3>
                <p>{project.description}</p>
              </div>
              <div className="case-flow">
                <div><small>DESAFIO</small><strong>{project.problem}</strong></div>
                <span aria-hidden="true">→</span>
                <div><small>SOLUÇÃO</small><strong>{project.solution}</strong></div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section tech-section" id="tecnologias">
        <div className="section-heading">
          <div>
            <p className="section-kicker">TECNOLOGIA COM PROPÓSITO</p>
            <h2>A stack certa é a que sustenta a solução.</h2>
          </div>
          <p>
            A tecnologia aparece como ferramenta para organizar dados, reduzir retrabalho e permitir que
            cada produto continue evoluindo.
          </p>
        </div>

        <div className="capabilities-grid">
          {capabilities.map((item) => (
            <article key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <strong>{item.tech}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="process-section" id="processo">
        <div className="process-copy">
          <p className="section-kicker">PROCESSO</p>
          <h2>Do briefing à publicação, com decisões próximas da operação.</h2>
          <p>
            O processo muda conforme o projeto, mas a lógica permanece: entender o cenário, organizar a
            solução, construir por etapas e evoluir com o uso.
          </p>
        </div>
        <ol className="process-list">
          {processSteps.map((step, index) => (
            <li key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="manifesto">
        <p className="section-kicker">SOBRE</p>
        <blockquote>
          “Cada projeto nasce da observação de uma necessidade prática e evolui para uma solução organizada,
          acessível e preparada para crescer.”
        </blockquote>
        <div className="manifesto-meta">
          <span>LUIZ AURORA</span>
          <span>Estudante de Análise e Desenvolvimento de Sistemas · Omega Software</span>
        </div>
      </section>

      <section className="contact-section" id="contato">
        <div className="contact-glow" aria-hidden="true" />
        <p className="section-kicker">TEM UM PROBLEMA PARA RESOLVER?</p>
        <h2>Vamos construir a solução.</h2>
        <p>
          Conte o cenário, o que precisa funcionar e onde está o maior atrito. A conversa começa pelo
          problema, não por uma lista de tecnologias.
        </p>
        <div className="contact-actions">
          <a className="button button-primary button-large" href="mailto:luckbrj.dev@gmail.com?subject=Novo projeto - Omega Software">
            Enviar e-mail <span aria-hidden="true">↗</span>
          </a>
          <a className="button button-secondary button-large" href="https://wa.me/5511946677094" target="_blank" rel="noreferrer">
            Falar no WhatsApp <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="contact-links">
          <a href="mailto:luckbrj.dev@gmail.com">E-mail <span>↗</span></a>
          <a href="https://github.com/LuckbrjDev" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
          <a href="https://omegasoft.vercel.app" target="_blank" rel="noreferrer">Omega Software <span>↗</span></a>
        </div>
      </section>

      <footer>
        <a className="brand" href="#inicio">
          <span className="brand-mark">Ω</span>
          <span><strong>OMEGA</strong><small>SOFTWARE</small></span>
        </a>
        <p>© 2026 Omega Software. Todos os direitos reservados.</p>
        <a href="#inicio">Voltar ao topo ↑</a>
      </footer>
    </main>
  );
}
