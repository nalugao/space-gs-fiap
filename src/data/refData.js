const SECTIONS_PT = [
  {
    id: "detritos",
    label: "01 — Detritos Espaciais",
    title: "População de Detritos em Órbita",
    intro:
      "Os números sobre detritos espaciais mudam a cada relatório anual. Os dados abaixo são os mais recentes disponíveis, com fontes primárias de agências espaciais e organismos internacionais.",
    articles: [
      {
        id: "esa-env-2025",
        tag: "ESA · 2025",
        title: "ESA Space Environment Report 2025",
        summary:
          "Relatório anual mais completo sobre a população de detritos em órbita. Confirma ~40.000 objetos rastreados por redes de vigilância espacial, dos quais ~11.000 são payloads ativos. Utiliza o modelo MASTER-8 (referência agosto/2024) para estimar mais de 1,2 milhão de objetos entre 1 cm e 10 cm, e ~140 milhões de objetos entre 1 mm e 1 cm.",
        stats: [
          { value: "~40.000", label: "objetos rastreados em órbita" },
          { value: "~11.000", label: "payloads ativos" },
          { value: ">1,2 mi", label: "objetos entre 1 cm e 10 cm (MASTER-8)" },
        ],
        source: "ESA Space Safety — esa.int",
        url: "https://www.esa.int/Space_Safety/Space_Debris/ESA_Space_Environment_Report_2025",
        correction: null,
      },
      {
        id: "esa-about",
        tag: "ESA · Contínuo",
        title: "About Space Debris — ESA Space Safety",
        summary:
          "Página de referência da ESA sobre detritos espaciais. Explica as faixas de tamanho, riscos e metodologia de rastreamento. Os fragmentos menores que 10 cm não são individualmente rastreados — sua população é estimada por modelos estatísticos e experimentos de impacto.",
        stats: [],
        source: "ESA — esa.int/Space_Safety/Space_Debris/About_space_debris",
        url: "https://www.esa.int/Space_Safety/Space_Debris/About_space_debris",
        correction: {
          errado: '"500K objetos maiores que 1 cm"',
          correto: '">1,2 milhão de objetos entre 1 cm e 10 cm" (ESA/MASTER-8, 2025)',
        },
      },
      {
        id: "nasa-odpo",
        tag: "NASA · Contínuo",
        title: "NASA Orbital Debris Program Office — FAQ",
        summary:
          "Fonte primária para a velocidade média de colisão em LEO. A NASA Orbital Debris Program Office afirma que a velocidade média de impacto entre objetos em órbita é de aproximadamente 10 km/s. Os objetos individualmente orbitam a 7–8 km/s, o equivalente a ~28.000 km/h — dado que frequentemente gera confusão de unidades nos pitches.",
        stats: [
          { value: "~10 km/s", label: "velocidade média de colisão em LEO" },
          { value: "7–8 km/s", label: "velocidade orbital dos objetos" },
          { value: "~28.000 km/h", label: "equivalente em km/h (≠ km/s)" },
        ],
        source: "NASA ODPO — orbitaldebris.jsc.nasa.gov",
        url: "https://orbitaldebris.jsc.nasa.gov/faq/",
        correction: {
          errado: '"28 km/s de velocidade média de impacto"',
          correto:
            '"~10 km/s de velocidade de colisão; objetos orbitam a ~28.000 km/h (não km/s)"',
        },
      },
      {
        id: "iadc-2025",
        tag: "UNOOSA/IADC · 2025",
        title: "IADC Report on the Status of the Space Debris Environment",
        summary:
          "Relatório do Inter-Agency Space Debris Coordination Committee (IADC), organismo que reúne NASA, ESA, JAXA, Roscosmos e outras agências. Publicado via UNOOSA, é a referência intergovernamental padrão para estatísticas de detritos.",
        stats: [],
        source: "UNOOSA — unoosa.org",
        url: "https://www.unoosa.org/res/oosadoc/data/documents/2025/aac_105c_12025crp/aac_105c_12025crp_10_0_html/AC105_C1_2025_CRP10E.pdf",
        correction: null,
      },
      {
        id: "kessler-1978",
        tag: "NASA · 1978",
        title:
          "Kessler & Cour-Palais — Collision Frequency of Artificial Satellites: The Creation of a Debris Belt",
        summary:
          "Artigo fundacional publicado no Journal of Geophysical Research em junho de 1978. Donald J. Kessler e Burton G. Cour-Palais demonstraram matematicamente que colisões entre objetos em LEO poderiam gerar fragmentos mais rápido do que o decaimento atmosférico os remove, tornando o processo autossustentável (cascata colisional). O termo 'síndrome de Kessler' foi cunhado por John Gabbard (NORAD) — não pelo próprio Kessler.",
        stats: [
          { value: "1978", label: "ano da publicação original" },
          { value: "J. Geophys. Res.", label: "periódico de publicação" },
        ],
        source: "Journal of Geophysical Research, Vol. 83, No. A6",
        url: "https://doi.org/10.1029/JA083iA06p02637",
        correction: null,
      },
    ],
  },
  {
    id: "mercado",
    label: "02 — Mercado & Financeiro",
    title: "Seguro Espacial e Custos Operacionais",
    intro:
      "Os dados financeiros do mercado espacial são frequentemente distorcidos por relatórios de baixa qualidade. Abaixo estão apenas fontes primárias de corretores especializados e operadoras do setor.",
    articles: [
      {
        id: "seradata-2025",
        tag: "Seradata / Slingshot Aerospace · 2025",
        title: "Global Space Insurance Market — Annual Review",
        summary:
          "A Seradata (adquirida pela Slingshot Aerospace) é a principal base de dados do mercado de seguro espacial, usada por corretores como Marsh, Gallagher e Willis. Em 2024, o mercado gerou ~US$ 580 milhões em prêmios brutos contra US$ 210,8 milhões em sinistros. Em 2023, ano recorde negativo, os prêmios foram ~US$ 557 milhões contra US$ 995 milhões em sinistros — perda líquida de US$ 438 milhões.",
        stats: [
          { value: "~$580M", label: "prêmios brutos anuais (2024)" },
          { value: "$210,8M", label: "sinistros pagos (2024)" },
          { value: "~300", label: "satélites segurados (de ~10.000 em órbita)" },
        ],
        source: "Seradata/Slingshot via SatNews — satnews.com (ago. 2025)",
        url: "https://satnews.com/2025/08/17/space-insurance-promising-start-to-the-year-marred-only-by-methanesat-claim/",
        correction: {
          errado: '"mercado de seguro espacial de bilhões de dólares"',
          correto: '"~US$ 550–600 milhões em prêmios brutos anuais" (Seradata, fonte primária)',
        },
      },
      {
        id: "gallagher-q4",
        tag: "Gallagher Specialty · Q4 2025",
        title: "Space Market Update Q4 2025 — Plane Talking",
        summary:
          "Relatório trimestral do corretor especialista Gallagher Specialty. Confirma a ordem de grandeza do mercado de prêmios e projeta rentabilidade positiva para seguradoras em 2025 graças a sinistros historicamente baixos. Corrobora os dados da Seradata sobre concentração de apólices em satélites GEO de alto valor.",
        stats: [],
        source: "Gallagher Specialty — specialty.ajg.com",
        url: "https://specialty.ajg.com/plane-talking/space-market-update-q4-2025",
        correction: null,
      },
      {
        id: "spacex-rideshare",
        tag: "SpaceX · 2026",
        title: "SpaceX Transporter — Rideshare Pricing (2026)",
        summary:
          "O programa SpaceX Transporter serve órbita heliossíncrona (SSO) via Falcon 9. O preço foi revisado múltiplas vezes: US$ 5.000/kg (2019) → US$ 5.500/kg (out. 2022) → US$ 6.000/kg (2024) → US$ 7.000/kg (2026, a partir do Transporter-16). Para LEO com outras inclinações, a SpaceX opera o programa Bandwagon com preços negociados.",
        stats: [
          { value: "$7.000/kg", label: "preço atual SSO (Transporter-16+, 2026)" },
          { value: "$5.500/kg", label: "preço histórico (out. 2022) — dado do projeto" },
          { value: "~$1,4M", label: "custo estimado de lançamento para nave-mãe de 200 kg" },
        ],
        source: "SpaceX Rideshare + New Space Economy (fev. 2026)",
        url: "https://newspaceeconomy.ca/2026/02/27/satellite-ridesharing-market-analysis-2026/",
        correction: {
          errado: '"US$ 5.500/kg para LEO"',
          correto: '"US$ 7.000/kg para SSO (2026); programa Bandwagon para LEO inclinada"',
        },
      },
      {
        id: "cubesat-cost",
        tag: "NanoAvionics · Contínuo",
        title: "How Much Do CubeSats and SmallSats Cost?",
        summary:
          "Guia de referência da fabricante NanoAvionics. A faixa de US$ 200K–500K para um CubeSat 12U comercial (excluindo lançamento) é validada pela indústria. O custo varia fortemente conforme payload, redundância e missão. CubeSats estudantis custam de US$ 10K a US$ 50K; plataformas comerciais com missões críticas podem ultrapassar US$ 1 milhão.",
        stats: [
          { value: "$200K–$500K", label: "faixa para 12U comercial (construção)" },
          { value: "+ $84K–$540K", label: "custo de lançamento rideshare (separado)" },
        ],
        source: "NanoAvionics — nanoavionics.com",
        url: "https://nanoavionics.com/blog/how-much-do-cubesats-and-smallsats-cost/",
        correction: null,
      },
    ],
  },
  {
    id: "programas",
    label: "03 — Agências & Programas",
    title: "NASA, ESA e Financiamento Governamental",
    intro:
      "Os programas governamentais de remoção ativa de detritos (ADR) são reais e financiados. Abaixo estão os programas confirmados com links para fontes primárias.",
    articles: [
      {
        id: "nasa-sbir",
        tag: "NASA · 2025",
        title: "NASA SBIR/STTR — Active Debris Removal Technologies",
        summary:
          "O programa SBIR (Small Business Innovation Research) da NASA investe ~US$ 180 milhões/ano em pequenas empresas dos EUA (< 500 funcionários). Existe um subtópico explícito para 'Active Debris Removal Technologies'. Phase I: até US$ 150.000 (6 meses). Phase II: até US$ 850.000 (24 meses). Phase III: financiamento externo sem limite definido.",
        stats: [
          { value: "~$180M/ano", label: "investimento anual total NASA SBIR" },
          { value: "$150K", label: "Phase I (teto por projeto)" },
          { value: "$850K", label: "Phase II (teto por projeto)" },
        ],
        source: "NASA SBIR/STTR — sbir.gsfc.nasa.gov",
        url: "https://sbir.gsfc.nasa.gov/content/active-debris-removal-technologies",
        correction: null,
      },
      {
        id: "nasa-sspicy",
        tag: "NASA · 2024",
        title: "NASA SSPICY — Orbital Debris Inspection Mission (Starfish Space)",
        summary:
          "Exemplo real de financiamento NASA para remoção de detritos via SBIR Phase III. A Starfish Space recebeu contrato de US$ 15 milhões para a missão SSPICY — demonstração de aproximação e inspeção de satélite defunto. Prova que a NASA financia missões privadas de ADR por meio do SBIR.",
        stats: [{ value: "$15M", label: "contrato Phase III (Starfish Space)" }],
        source: "NASA Ames — nasa.gov",
        url: "https://www.nasa.gov/centers-and-facilities/ames/getting-sspicy-nasa-funds-orbital-debris-inspection-mission/",
        correction: null,
      },
      {
        id: "esa-adrios",
        tag: "ESA · 2025",
        title: "ESA Space Safety Programme — Boost in Funding (CM25)",
        summary:
          "No Conselho Ministerial de novembro de 2025 (CM25), os Estados-membros da ESA aprovaram €955 milhões para o Space Safety Programme nos próximos três anos — 30% acima do solicitado. O programa inclui o ADRIOS (Active Debris Removal/In-Orbit Servicing) como 'Cornerstone', com novas missões CAT (interface de docking padronizada) e RISE (mission extender GEO) aprovadas.",
        stats: [
          { value: "€955M", label: "orçamento aprovado para 3 anos (CM25, 2025)" },
          { value: "+30%", label: "acima do orçamento solicitado" },
        ],
        source: "ESA Space Safety — esa.int",
        url: "https://www.esa.int/Space_Safety/Boost_in_funding_expands_Space_Safety_programme",
        correction: null,
      },
    ],
  },
  {
    id: "tecnologia",
    label: "04 — Tecnologia",
    title: "Espuma Expansível e Projetos de ADR",
    intro:
      "A tecnologia de polímero expansível para remoção de detritos tem embasamento científico real, embora em baixo nível de maturidade tecnológica (TRL). Abaixo estão os projetos de ADR em operação e pesquisa.",
    articles: [
      {
        id: "esa-foam-study",
        tag: "ESA ACT · 2011",
        title:
          "Active Removal of Space Debris — Expanding Foam Application (Universidade de Pisa / ESA ACT)",
        summary:
          "Estudo patrocinado pela Equipe de Conceitos Avançados da ESA (ACT). Pesquisadores da Universidade de Pisa (J. Olympio e L. Summerer) desenvolveram um modelo de expansão de espuma polimérica baseado na equação de Rayleigh-Plesset. A proposta consiste em criar uma 'bola de espuma' ao redor do detrito, aumentando a razão área/massa e o arrasto atmosférico para induzir a reentrada — sem necessidade de docking físico, tolerando alvos em rotação ou tombamento.",
        stats: [
          { value: "TRL 2–3", label: "nível de maturidade tecnológica estimado" },
          { value: "≤1 tonelada", label: "massa de alvo viável pelo modelo" },
        ],
        source: "ESA ACT — esa.int/gsp/ACT",
        url: "https://www.esa.int/gsp/ACT/doc/ARI/ARI%20Study%20Report/ACT-RPT-MAD-ARI-10-6411-Pisa-Active_Removal_of_Space_Debris-Foam.pdf",
        correction: null,
      },
      {
        id: "bologna-redemption",
        tag: "Univ. Bologna / ESA REXUS · 2013",
        title: "REDEMPTION — Polyurethane Foam Experiment (ESA REXUS Programme)",
        summary:
          "Experimento do Space Robotics Group da Universidade de Bologna no programa de foguetes de sondagem ESA REXUS. Testou espuma de poliuretano de dois componentes em ambiente de microgravidade. O experimento I-FOAM testou polímeros com memória de forma na missão STS-134 do ônibus espacial (2011). Confirma a viabilidade física do conceito, mas a tecnologia permanece em fase de pesquisa.",
        stats: [],
        source: "ADS/Harvard — ui.adsabs.harvard.edu",
        url: "https://ui.adsabs.harvard.edu/abs/2013ESASP.723E.169R/abstract",
        correction: null,
      },
      {
        id: "clearspace1",
        tag: "ESA / ClearSpace SA · 2020–2028",
        title: "ClearSpace-1 — Primeira Missão Dedicada a Remoção de Detritos",
        summary:
          "Contrato de €86 milhões entre a ESA e a startup suíça ClearSpace SA (spin-off da EPFL), assinado em novembro de 2020. Alvo original: adaptador VESPA (112 kg) de 2013. Em abril de 2024, o alvo foi alterado para o satélite PROBA-1 (95 kg). Usa braços robóticos para captura. Lançamento previsto para ~2028 (datas anteriores de 2025 não foram cumpridas). É a principal referência de mercado para missões ADR comerciais.",
        stats: [
          { value: "€86M", label: "contrato ESA–ClearSpace SA" },
          { value: "~2028", label: "lançamento previsto (atualizado)" },
          { value: "95 kg", label: "massa do alvo atual (PROBA-1)" },
        ],
        source: "ESA — esa.int/Space_Safety/ClearSpace-1",
        url: "https://www.esa.int/Space_Safety/ClearSpace-1",
        correction: null,
      },
      {
        id: "removedebris",
        tag: "Univ. Surrey · 2018–2019",
        title: "RemoveDEBRIS — Primeira Demonstração de Captura em Órbita",
        summary:
          "Missão financiada pela União Europeia (programa FP7), liderada pela Universidade de Surrey. Primeira missão a demonstrar captura de detrito em órbita com rede (2018) e arpão (fevereiro de 2019, disparado a 20 m/s a 20 metros do alvo). Estabeleceu o precedente tecnológico para missões de captura ativa. Publicado em Acta Astronautica / ScienceDirect.",
        stats: [
          { value: "2018", label: "primeira captura por rede em órbita" },
          { value: "20 m/s", label: "velocidade de disparo do arpão" },
        ],
        source: "ScienceDirect — doi.org/10.1016/j.actaastro.2019.09.020",
        url: "https://www.sciencedirect.com/science/article/abs/pii/S0094576519312512",
        correction: null,
      },
      {
        id: "astroscale",
        tag: "Astroscale · 2021–2024",
        title: "Astroscale ELSA-d e ADRAS-J — Captura Magnética e Inspeção",
        summary:
          "ELSA-d (2021): demonstração de captura magnética entre um 'servicer' e um satélite-cliente equipado com placa de docking. ADRAS-J (2024): primeira aproximação e inspeção de um estágio de foguete real não cooperativo (H-IIA F15, em órbita desde 2009) — marco histórico em ADR. O serviço comercial ELSA-M está planejado para remover satélites OneWeb em fim de vida.",
        stats: [{ value: "2024", label: "primeira inspeção de detrito não cooperativo (ADRAS-J)" }],
        source: "Astroscale — astroscale.com/en/missions",
        url: "https://www.astroscale.com/en/missions/elsa-d",
        correction: null,
      },
    ],
  },
];

const SECTIONS_EN = [
  {
    id: "detritos",
    label: "01 — Space Debris",
    title: "Orbital Debris Population",
    intro:
      "Space debris numbers change with each annual report. The data below is the most recent available, based on primary sources from space agencies and international organizations.",
    articles: [
      {
        id: "esa-env-2025",
        tag: "ESA · 2025",
        title: "ESA Space Environment Report 2025",
        summary:
          "The most complete annual report on the orbital debris population. It confirms ~40,000 objects tracked by space surveillance networks, of which ~11,000 are active payloads. It uses the MASTER-8 model, with August 2024 as reference, to estimate more than 1.2 million objects between 1 cm and 10 cm, and ~140 million objects between 1 mm and 1 cm.",
        stats: [
          { value: "~40,000", label: "tracked objects in orbit" },
          { value: "~11,000", label: "active payloads" },
          { value: ">1.2M", label: "objects between 1 cm and 10 cm, MASTER-8" },
        ],
        source: "ESA Space Safety — esa.int",
        url: "https://www.esa.int/Space_Safety/Space_Debris/ESA_Space_Environment_Report_2025",
        correction: null,
      },
      {
        id: "esa-about",
        tag: "ESA · Continuous",
        title: "About Space Debris — ESA Space Safety",
        summary:
          "ESA reference page about space debris. It explains size ranges, risks and tracking methodology. Fragments smaller than 10 cm are not individually tracked — their population is estimated using statistical models and impact experiments.",
        stats: [],
        source: "ESA — esa.int/Space_Safety/Space_Debris/About_space_debris",
        url: "https://www.esa.int/Space_Safety/Space_Debris/About_space_debris",
        correction: {
          errado: '"500K objects larger than 1 cm"',
          correto:
            '">1.2 million objects between 1 cm and 10 cm" (ESA/MASTER-8, 2025)',
        },
      },
      {
        id: "nasa-odpo",
        tag: "NASA · Continuous",
        title: "NASA Orbital Debris Program Office — FAQ",
        summary:
          "Primary source for the average collision speed in LEO. NASA's Orbital Debris Program Office states that the average impact speed between objects in orbit is approximately 10 km/s. Individual objects orbit at 7–8 km/s, equivalent to ~28,000 km/h — a number that often causes unit confusion in pitches.",
        stats: [
          { value: "~10 km/s", label: "average collision speed in LEO" },
          { value: "7–8 km/s", label: "orbital speed of objects" },
          { value: "~28,000 km/h", label: "equivalent in km/h, not km/s" },
        ],
        source: "NASA ODPO — orbitaldebris.jsc.nasa.gov",
        url: "https://orbitaldebris.jsc.nasa.gov/faq/",
        correction: {
          errado: '"28 km/s average impact speed"',
          correto:
            '"~10 km/s collision speed; objects orbit at ~28,000 km/h, not km/s"',
        },
      },
      {
        id: "iadc-2025",
        tag: "UNOOSA/IADC · 2025",
        title: "IADC Report on the Status of the Space Debris Environment",
        summary:
          "Report from the Inter-Agency Space Debris Coordination Committee (IADC), an organization that brings together NASA, ESA, JAXA, Roscosmos and other agencies. Published through UNOOSA, it is the standard intergovernmental reference for debris statistics.",
        stats: [],
        source: "UNOOSA — unoosa.org",
        url: "https://www.unoosa.org/res/oosadoc/data/documents/2025/aac_105c_12025crp/aac_105c_12025crp_10_0_html/AC105_C1_2025_CRP10E.pdf",
        correction: null,
      },
      {
        id: "kessler-1978",
        tag: "NASA · 1978",
        title:
          "Kessler & Cour-Palais — Collision Frequency of Artificial Satellites: The Creation of a Debris Belt",
        summary:
          "Foundational paper published in the Journal of Geophysical Research in June 1978. Donald J. Kessler and Burton G. Cour-Palais mathematically demonstrated that collisions between objects in LEO could generate fragments faster than atmospheric decay removes them, making the process self-sustaining, also known as a collisional cascade. The term 'Kessler syndrome' was coined by John Gabbard from NORAD — not by Kessler himself.",
        stats: [
          { value: "1978", label: "year of original publication" },
          { value: "J. Geophys. Res.", label: "publication journal" },
        ],
        source: "Journal of Geophysical Research, Vol. 83, No. A6",
        url: "https://doi.org/10.1029/JA083iA06p02637",
        correction: null,
      },
    ],
  },
  {
    id: "mercado",
    label: "02 — Market & Finance",
    title: "Space Insurance and Operational Costs",
    intro:
      "Financial data from the space market is often distorted by low-quality reports. Below are only primary sources from specialized brokers and industry operators.",
    articles: [
      {
        id: "seradata-2025",
        tag: "Seradata / Slingshot Aerospace · 2025",
        title: "Global Space Insurance Market — Annual Review",
        summary:
          "Seradata, acquired by Slingshot Aerospace, is the leading database for the space insurance market, used by brokers such as Marsh, Gallagher and Willis. In 2024, the market generated ~US$ 580 million in gross premiums against US$ 210.8 million in claims. In 2023, a negative record year, premiums were ~US$ 557 million against US$ 995 million in claims — a net loss of US$ 438 million.",
        stats: [
          { value: "~$580M", label: "annual gross premiums, 2024" },
          { value: "$210.8M", label: "claims paid, 2024" },
          { value: "~300", label: "insured satellites, out of ~10,000 in orbit" },
        ],
        source: "Seradata/Slingshot via SatNews — satnews.com, Aug. 2025",
        url: "https://satnews.com/2025/08/17/space-insurance-promising-start-to-the-year-marred-only-by-methanesat-claim/",
        correction: {
          errado: '"space insurance market worth billions of dollars"',
          correto:
            '"~US$ 550–600 million in annual gross premiums" (Seradata, primary source)',
        },
      },
      {
        id: "gallagher-q4",
        tag: "Gallagher Specialty · Q4 2025",
        title: "Space Market Update Q4 2025 — Plane Talking",
        summary:
          "Quarterly report from specialized broker Gallagher Specialty. It confirms the market premium order of magnitude and projects positive profitability for insurers in 2025 due to historically low claims. It supports Seradata's data on policy concentration in high-value GEO satellites.",
        stats: [],
        source: "Gallagher Specialty — specialty.ajg.com",
        url: "https://specialty.ajg.com/plane-talking/space-market-update-q4-2025",
        correction: null,
      },
      {
        id: "spacex-rideshare",
        tag: "SpaceX · 2026",
        title: "SpaceX Transporter — Rideshare Pricing, 2026",
        summary:
          "The SpaceX Transporter program serves sun-synchronous orbit (SSO) through Falcon 9. Pricing has been revised several times: US$ 5,000/kg in 2019, US$ 5,500/kg in Oct. 2022, US$ 6,000/kg in 2024 and US$ 7,000/kg in 2026, starting with Transporter-16. For LEO with other inclinations, SpaceX operates the Bandwagon program with negotiated pricing.",
        stats: [
          { value: "$7,000/kg", label: "current SSO price, Transporter-16+, 2026" },
          { value: "$5,500/kg", label: "historical price, Oct. 2022 — project data" },
          { value: "~$1.4M", label: "estimated launch cost for a 200 kg carrier" },
        ],
        source: "SpaceX Rideshare + New Space Economy, Feb. 2026",
        url: "https://newspaceeconomy.ca/2026/02/27/satellite-ridesharing-market-analysis-2026/",
        correction: {
          errado: '"US$ 5,500/kg for LEO"',
          correto:
            '"US$ 7,000/kg for SSO, 2026; Bandwagon program for inclined LEO"',
        },
      },
      {
        id: "cubesat-cost",
        tag: "NanoAvionics · Continuous",
        title: "How Much Do CubeSats and SmallSats Cost?",
        summary:
          "Reference guide from manufacturer NanoAvionics. The US$ 200K–500K range for a commercial 12U CubeSat, excluding launch, is validated by the industry. Cost varies heavily depending on payload, redundancy and mission. Student CubeSats cost from US$ 10K to US$ 50K; commercial platforms for critical missions can exceed US$ 1 million.",
        stats: [
          { value: "$200K–$500K", label: "range for commercial 12U construction" },
          { value: "+ $84K–$540K", label: "rideshare launch cost, separate" },
        ],
        source: "NanoAvionics — nanoavionics.com",
        url: "https://nanoavionics.com/blog/how-much-do-cubesats-and-smallsats-cost/",
        correction: null,
      },
    ],
  },
  {
    id: "programas",
    label: "03 — Agencies & Programs",
    title: "NASA, ESA and Government Funding",
    intro:
      "Government programs for active debris removal (ADR) are real and funded. Below are confirmed programs with links to primary sources.",
    articles: [
      {
        id: "nasa-sbir",
        tag: "NASA · 2025",
        title: "NASA SBIR/STTR — Active Debris Removal Technologies",
        summary:
          "NASA's SBIR program, Small Business Innovation Research, invests ~US$ 180 million per year in small U.S. companies with fewer than 500 employees. There is an explicit subtopic for 'Active Debris Removal Technologies'. Phase I: up to US$ 150,000 for 6 months. Phase II: up to US$ 850,000 for 24 months. Phase III: external funding with no defined limit.",
        stats: [
          { value: "~$180M/year", label: "total annual NASA SBIR investment" },
          { value: "$150K", label: "Phase I, project cap" },
          { value: "$850K", label: "Phase II, project cap" },
        ],
        source: "NASA SBIR/STTR — sbir.gsfc.nasa.gov",
        url: "https://sbir.gsfc.nasa.gov/content/active-debris-removal-technologies",
        correction: null,
      },
      {
        id: "nasa-sspicy",
        tag: "NASA · 2024",
        title: "NASA SSPICY — Orbital Debris Inspection Mission, Starfish Space",
        summary:
          "Real example of NASA funding for debris removal through SBIR Phase III. Starfish Space received a US$ 15 million contract for the SSPICY mission — a demonstration of rendezvous and inspection of a defunct satellite. It proves that NASA funds private ADR missions through SBIR.",
        stats: [{ value: "$15M", label: "Phase III contract, Starfish Space" }],
        source: "NASA Ames — nasa.gov",
        url: "https://www.nasa.gov/centers-and-facilities/ames/getting-sspicy-nasa-funds-orbital-debris-inspection-mission/",
        correction: null,
      },
      {
        id: "esa-adrios",
        tag: "ESA · 2025",
        title: "ESA Space Safety Programme — Boost in Funding, CM25",
        summary:
          "At the Ministerial Council in November 2025 (CM25), ESA Member States approved €955 million for the Space Safety Programme over the next three years — 30% above the requested amount. The program includes ADRIOS, Active Debris Removal/In-Orbit Servicing, as a cornerstone, with new CAT missions, standardized docking interface, and RISE, GEO mission extender, approved.",
        stats: [
          { value: "€955M", label: "approved budget for 3 years, CM25, 2025" },
          { value: "+30%", label: "above the requested budget" },
        ],
        source: "ESA Space Safety — esa.int",
        url: "https://www.esa.int/Space_Safety/Boost_in_funding_expands_Space_Safety_programme",
        correction: null,
      },
    ],
  },
  {
    id: "tecnologia",
    label: "04 — Technology",
    title: "Expanding Foam and ADR Projects",
    intro:
      "Expandable polymer technology for debris removal has real scientific grounding, although at a low technology readiness level (TRL). Below are ADR projects in operation and research.",
    articles: [
      {
        id: "esa-foam-study",
        tag: "ESA ACT · 2011",
        title:
          "Active Removal of Space Debris — Expanding Foam Application, University of Pisa / ESA ACT",
        summary:
          "Study sponsored by ESA's Advanced Concepts Team (ACT). Researchers from the University of Pisa, J. Olympio and L. Summerer, developed a polymer foam expansion model based on the Rayleigh-Plesset equation. The proposal consists of creating a 'foam ball' around the debris, increasing the area-to-mass ratio and atmospheric drag to induce reentry — without requiring physical docking, while tolerating rotating or tumbling targets.",
        stats: [
          { value: "TRL 2–3", label: "estimated technology readiness level" },
          { value: "≤1 ton", label: "target mass viable under the model" },
        ],
        source: "ESA ACT — esa.int/gsp/ACT",
        url: "https://www.esa.int/gsp/ACT/doc/ARI/ARI%20Study%20Report/ACT-RPT-MAD-ARI-10-6411-Pisa-Active_Removal_of_Space_Debris-Foam.pdf",
        correction: null,
      },
      {
        id: "bologna-redemption",
        tag: "Univ. Bologna / ESA REXUS · 2013",
        title: "REDEMPTION — Polyurethane Foam Experiment, ESA REXUS Programme",
        summary:
          "Experiment by the Space Robotics Group at the University of Bologna within the ESA REXUS sounding rocket program. It tested two-component polyurethane foam in a microgravity environment. The I-FOAM experiment tested shape-memory polymers during the STS-134 Space Shuttle mission in 2011. It confirms the physical feasibility of the concept, but the technology remains in the research phase.",
        stats: [],
        source: "ADS/Harvard — ui.adsabs.harvard.edu",
        url: "https://ui.adsabs.harvard.edu/abs/2013ESASP.723E.169R/abstract",
        correction: null,
      },
      {
        id: "clearspace1",
        tag: "ESA / ClearSpace SA · 2020–2028",
        title: "ClearSpace-1 — First Dedicated Debris Removal Mission",
        summary:
          "€86 million contract between ESA and the Swiss startup ClearSpace SA, a spin-off from EPFL, signed in November 2020. Original target: VESPA adapter, 112 kg, from 2013. In April 2024, the target was changed to the PROBA-1 satellite, 95 kg. It uses robotic arms for capture. Launch is expected around 2028, as previous 2025 dates were not met. It is the main market reference for commercial ADR missions.",
        stats: [
          { value: "€86M", label: "ESA–ClearSpace SA contract" },
          { value: "~2028", label: "expected launch, updated" },
          { value: "95 kg", label: "current target mass, PROBA-1" },
        ],
        source: "ESA — esa.int/Space_Safety/ClearSpace-1",
        url: "https://www.esa.int/Space_Safety/ClearSpace-1",
        correction: null,
      },
      {
        id: "removedebris",
        tag: "Univ. Surrey · 2018–2019",
        title: "RemoveDEBRIS — First In-Orbit Capture Demonstration",
        summary:
          "Mission funded by the European Union through the FP7 program and led by the University of Surrey. It was the first mission to demonstrate debris capture in orbit using a net in 2018 and a harpoon in February 2019, fired at 20 m/s from 20 meters away from the target. It established the technological precedent for active capture missions. Published in Acta Astronautica / ScienceDirect.",
        stats: [
          { value: "2018", label: "first net capture in orbit" },
          { value: "20 m/s", label: "harpoon firing speed" },
        ],
        source: "ScienceDirect — doi.org/10.1016/j.actaastro.2019.09.020",
        url: "https://www.sciencedirect.com/science/article/abs/pii/S0094576519312512",
        correction: null,
      },
      {
        id: "astroscale",
        tag: "Astroscale · 2021–2024",
        title: "Astroscale ELSA-d and ADRAS-J — Magnetic Capture and Inspection",
        summary:
          "ELSA-d, 2021: magnetic capture demonstration between a servicer and a client satellite equipped with a docking plate. ADRAS-J, 2024: first rendezvous and inspection of a real non-cooperative rocket stage, H-IIA F15, in orbit since 2009 — a historic milestone in ADR. The commercial ELSA-M service is planned to remove OneWeb satellites at end of life.",
        stats: [
          {
            value: "2024",
            label: "first inspection of non-cooperative debris, ADRAS-J",
          },
        ],
        source: "Astroscale — astroscale.com/en/missions",
        url: "https://www.astroscale.com/en/missions/elsa-d",
        correction: null,
      },
    ],
  },
];

export function getSections(language = "PT") {
  return language === "EN" ? SECTIONS_EN : SECTIONS_PT;
}
