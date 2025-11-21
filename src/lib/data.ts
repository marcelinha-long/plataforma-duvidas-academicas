// Dados de exemplo para a plataforma educacional
import { Book, Page, Question } from './types';

export const books: Book[] = [
  // Saúde
  {
    id: '1',
    title: 'Semiologia Médica',
    author: 'Porto & Porto',
    edition: '8ª Edição',
    isbn: '978-8527734608',
    area: 'Medicina'
  },
  {
    id: '2',
    title: 'Enfermagem Clínica Prática',
    author: 'Brunner & Suddarth',
    edition: '14ª Edição',
    isbn: '978-8527733847',
    area: 'Enfermagem'
  },
  {
    id: '3',
    title: 'Farmacologia Básica e Clínica',
    author: 'Katzung',
    edition: '13ª Edição',
    isbn: '978-8580555912',
    area: 'Farmácia'
  },
  {
    id: '4',
    title: 'Saúde Pública e Epidemiologia',
    author: 'Rouquayrol & Silva',
    edition: '13ª Edição',
    isbn: '978-8527733540',
    area: 'Saúde Pública'
  },
  // Administração e Gestão
  {
    id: '5',
    title: 'Administração Estratégica',
    author: 'Michael Porter',
    edition: '5ª Edição',
    isbn: '978-8535290462',
    area: 'Administração / Gestão'
  },
  {
    id: '6',
    title: 'Gestão de Pessoas',
    author: 'Chiavenato',
    edition: '4ª Edição',
    isbn: '978-8535277340',
    area: 'Recursos Humanos'
  },
  // Economia e Finanças
  {
    id: '7',
    title: 'Princípios de Economia',
    author: 'Mankiw',
    edition: '8ª Edição',
    isbn: '978-8522127030',
    area: 'Economia'
  },
  {
    id: '8',
    title: 'Finanças Corporativas',
    author: 'Ross, Westerfield & Jaffe',
    edition: '10ª Edição',
    isbn: '978-8580555417',
    area: 'Finanças'
  },
  // Engenharias
  {
    id: '9',
    title: 'Fundamentos de Engenharia Civil',
    author: 'Yazigi',
    edition: '3ª Edição',
    isbn: '978-8576051527',
    area: 'Engenharia Civil'
  },
  {
    id: '10',
    title: 'Mecânica dos Fluidos',
    author: 'Fox & McDonald',
    edition: '9ª Edição',
    isbn: '978-8521634102',
    area: 'Engenharia Mecânica'
  },
  {
    id: '11',
    title: 'Circuitos Elétricos',
    author: 'Nilsson & Riedel',
    edition: '10ª Edição',
    isbn: '978-8543020402',
    area: 'Engenharia Elétrica'
  },
  {
    id: '12',
    title: 'Engenharia de Software',
    author: 'Sommerville',
    edition: '10ª Edição',
    isbn: '978-8543024974',
    area: 'Engenharia de Software'
  },
  // Computação e TI
  {
    id: '13',
    title: 'Algoritmos e Estruturas de Dados',
    author: 'Cormen et al.',
    edition: '3ª Edição',
    isbn: '978-8535236996',
    area: 'Computação / Ciência da Computação'
  },
  {
    id: '14',
    title: 'Inteligência Artificial Moderna',
    author: 'Russell & Norvig',
    edition: '4ª Edição',
    isbn: '978-8535283686',
    area: 'Inteligência Artificial'
  },
  {
    id: '15',
    title: 'Data Science para Negócios',
    author: 'Provost & Fawcett',
    edition: '2ª Edição',
    isbn: '978-8576089728',
    area: 'Big Data / Data Science'
  },
  // Educação e Psicologia
  {
    id: '16',
    title: 'Pedagogia da Autonomia',
    author: 'Paulo Freire',
    edition: '25ª Edição',
    isbn: '978-8577531639',
    area: 'Educação / Pedagogia'
  },
  {
    id: '17',
    title: 'Psicologia do Desenvolvimento',
    author: 'Papalia & Feldman',
    edition: '12ª Edição',
    isbn: '978-8580555929',
    area: 'Psicologia'
  },
  {
    id: '18',
    title: 'Psicopedagogia Clínica',
    author: 'Weiss',
    edition: '14ª Edição',
    isbn: '978-8573079449',
    area: 'Psicopedagogia'
  },
  {
    id: '19',
    title: 'Neurociência Cognitiva',
    author: 'Gazzaniga',
    edition: '5ª Edição',
    isbn: '978-8582714584',
    area: 'Neurociência'
  },
  // Direito
  {
    id: '20',
    title: 'Direito Constitucional',
    author: 'Alexandre de Moraes',
    edition: '38ª Edição',
    isbn: '978-8597026450',
    area: 'Direito'
  },
  {
    id: '21',
    title: 'Direito Ambiental Brasileiro',
    author: 'Paulo Affonso Leme Machado',
    edition: '28ª Edição',
    isbn: '978-8530989736',
    area: 'Direito Ambiental'
  },
  // Ciências Biológicas e Exatas
  {
    id: '22',
    title: 'Biologia Molecular da Célula',
    author: 'Alberts et al.',
    edition: '6ª Edição',
    isbn: '978-8582714065',
    area: 'Biologia / Ciências Biológicas'
  },
  {
    id: '23',
    title: 'Química Geral',
    author: 'Atkins & Jones',
    edition: '5ª Edição',
    isbn: '978-8540701694',
    area: 'Química / Física'
  },
  // Comunicação e Marketing
  {
    id: '24',
    title: 'Teorias da Comunicação',
    author: 'Mauro Wolf',
    edition: '6ª Edição',
    isbn: '978-8572441438',
    area: 'Comunicação / Jornalismo'
  },
  {
    id: '25',
    title: 'Marketing 5.0',
    author: 'Philip Kotler',
    edition: '1ª Edição',
    isbn: '978-8543110486',
    area: 'Marketing'
  },
  // Relações Internacionais e Gestão Pública
  {
    id: '26',
    title: 'Relações Internacionais Contemporâneas',
    author: 'Pecequilo',
    edition: '5ª Edição',
    isbn: '978-8532653109',
    area: 'Relações Internacionais'
  },
  {
    id: '27',
    title: 'Administração Pública',
    author: 'Paludo',
    edition: '7ª Edição',
    isbn: '978-8530982447',
    area: 'Gestão Pública'
  },
  // Sustentabilidade e Design
  {
    id: '28',
    title: 'Sustentabilidade e Desenvolvimento',
    author: 'Sachs',
    edition: '3ª Edição',
    isbn: '978-8575593462',
    area: 'Sustentabilidade'
  },
  {
    id: '29',
    title: 'Design Thinking',
    author: 'Tim Brown',
    edition: '2ª Edição',
    isbn: '978-8535241686',
    area: 'Design'
  },
  {
    id: '30',
    title: 'Arquitetura e Urbanismo Sustentável',
    author: 'Romero',
    edition: '4ª Edição',
    isbn: '978-8570619457',
    area: 'Arquitetura e Urbanismo'
  }
];

export const pages: Page[] = [
  // Medicina
  { id: 'p1', bookId: '1', pageNumber: 245, theme: 'Exame Físico do Abdômen', summary: 'Descrição dos sinais clínicos na avaliação abdominal, incluindo manobras específicas para detecção de patologias.' },
  { id: 'p2', bookId: '1', pageNumber: 312, theme: 'Ausculta Cardíaca', summary: 'Técnicas de ausculta cardíaca e identificação de sopros e bulhas anormais.' },
  
  // Enfermagem
  { id: 'p3', bookId: '2', pageNumber: 178, theme: 'Ausculta Pulmonar', summary: 'Metodologia para ausculta pulmonar e identificação de ruídos adventícios.' },
  { id: 'p4', bookId: '2', pageNumber: 423, theme: 'Cuidados com Feridas', summary: 'Protocolos de limpeza, curativos e avaliação de cicatrização de feridas.' },
  
  // Farmácia
  { id: 'p5', bookId: '3', pageNumber: 89, theme: 'Receptores Farmacológicos', summary: 'Conceitos de agonistas, antagonistas e mecanismos de ação em receptores celulares.' },
  { id: 'p6', bookId: '3', pageNumber: 156, theme: 'Farmacocinética', summary: 'Processos de absorção, distribuição, metabolismo e excreção de fármacos.' },
  
  // Saúde Pública
  { id: 'p7', bookId: '4', pageNumber: 67, theme: 'Epidemiologia Descritiva', summary: 'Métodos de análise de distribuição de doenças em populações.' },
  { id: 'p8', bookId: '4', pageNumber: 134, theme: 'Vigilância Sanitária', summary: 'Sistemas de monitoramento e controle de riscos à saúde pública.' },
  
  // Administração / Gestão
  { id: 'p9', bookId: '5', pageNumber: 78, theme: 'Análise SWOT', summary: 'Ferramenta de planejamento estratégico para análise de forças, fraquezas, oportunidades e ameaças.' },
  { id: 'p10', bookId: '5', pageNumber: 145, theme: 'Vantagem Competitiva', summary: 'Estratégias para diferenciação e liderança em custos no mercado.' },
  
  // Recursos Humanos
  { id: 'p11', bookId: '6', pageNumber: 92, theme: 'Recrutamento e Seleção', summary: 'Processos e técnicas para atração e escolha de talentos.' },
  { id: 'p12', bookId: '6', pageNumber: 201, theme: 'Gestão de Desempenho', summary: 'Metodologias de avaliação e desenvolvimento de colaboradores.' },
  
  // Economia
  { id: 'p13', bookId: '7', pageNumber: 56, theme: 'Oferta e Demanda', summary: 'Princípios básicos de formação de preços em mercados competitivos.' },
  { id: 'p14', bookId: '7', pageNumber: 189, theme: 'Política Monetária', summary: 'Instrumentos de controle da inflação e estabilização econômica.' },
  
  // Finanças
  { id: 'p15', bookId: '8', pageNumber: 112, theme: 'Valor Presente Líquido', summary: 'Método de avaliação de investimentos considerando o valor do dinheiro no tempo.' },
  { id: 'p16', bookId: '8', pageNumber: 234, theme: 'Estrutura de Capital', summary: 'Decisões sobre financiamento através de capital próprio ou de terceiros.' },
  
  // Engenharia Civil
  { id: 'p17', bookId: '9', pageNumber: 89, theme: 'Fundações', summary: 'Tipos de fundações e critérios de escolha conforme características do solo.' },
  { id: 'p18', bookId: '9', pageNumber: 167, theme: 'Estruturas de Concreto', summary: 'Dimensionamento e execução de elementos estruturais em concreto armado.' },
  
  // Engenharia Mecânica
  { id: 'p19', bookId: '10', pageNumber: 123, theme: 'Equação de Bernoulli', summary: 'Princípio de conservação de energia em escoamento de fluidos.' },
  { id: 'p20', bookId: '10', pageNumber: 278, theme: 'Perda de Carga', summary: 'Cálculo de perdas de pressão em tubulações e sistemas hidráulicos.' },
  
  // Engenharia Elétrica
  { id: 'p21', bookId: '11', pageNumber: 45, theme: 'Lei de Ohm', summary: 'Relação fundamental entre tensão, corrente e resistência em circuitos elétricos.' },
  { id: 'p22', bookId: '11', pageNumber: 198, theme: 'Circuitos CA', summary: 'Análise de circuitos em corrente alternada com fasores e impedância.' },
  
  // Engenharia de Software
  { id: 'p23', bookId: '12', pageNumber: 67, theme: 'Metodologias Ágeis', summary: 'Princípios e práticas de desenvolvimento ágil de software.' },
  { id: 'p24', bookId: '12', pageNumber: 145, theme: 'Padrões de Projeto', summary: 'Soluções reutilizáveis para problemas comuns em design de software.' },
  
  // Computação
  { id: 'p25', bookId: '13', pageNumber: 89, theme: 'Complexidade Algorítmica', summary: 'Análise de eficiência temporal e espacial de algoritmos.' },
  { id: 'p26', bookId: '13', pageNumber: 234, theme: 'Árvores Binárias', summary: 'Estruturas de dados hierárquicas e operações de busca, inserção e remoção.' },
  
  // Inteligência Artificial
  { id: 'p27', bookId: '14', pageNumber: 112, theme: 'Aprendizado de Máquina', summary: 'Algoritmos supervisionados e não supervisionados para reconhecimento de padrões.' },
  { id: 'p28', bookId: '14', pageNumber: 289, theme: 'Redes Neurais', summary: 'Arquiteturas de redes neurais artificiais e backpropagation.' },
  
  // Big Data / Data Science
  { id: 'p29', bookId: '15', pageNumber: 78, theme: 'Mineração de Dados', summary: 'Técnicas de descoberta de padrões em grandes volumes de dados.' },
  { id: 'p30', bookId: '15', pageNumber: 156, theme: 'Análise Preditiva', summary: 'Modelos estatísticos para previsão de comportamentos e tendências.' },
  
  // Educação / Pedagogia
  { id: 'p31', bookId: '16', pageNumber: 34, theme: 'Autonomia do Educando', summary: 'Princípios de educação libertadora e desenvolvimento da consciência crítica.' },
  { id: 'p32', bookId: '16', pageNumber: 67, theme: 'Ensinar não é Transferir', summary: 'Reflexões sobre o papel do educador como facilitador da construção do conhecimento.' },
  
  // Psicologia
  { id: 'p33', bookId: '17', pageNumber: 123, theme: 'Desenvolvimento Cognitivo', summary: 'Teorias de Piaget sobre estágios do desenvolvimento infantil.' },
  { id: 'p34', bookId: '17', pageNumber: 245, theme: 'Adolescência', summary: 'Transformações físicas, cognitivas e socioemocionais na adolescência.' },
  
  // Psicopedagogia
  { id: 'p35', bookId: '18', pageNumber: 89, theme: 'Diagnóstico Psicopedagógico', summary: 'Instrumentos e procedimentos para avaliação de dificuldades de aprendizagem.' },
  { id: 'p36', bookId: '18', pageNumber: 167, theme: 'Intervenção Psicopedagógica', summary: 'Estratégias terapêuticas para superação de obstáculos no processo de aprendizagem.' },
  
  // Neurociência
  { id: 'p37', bookId: '19', pageNumber: 145, theme: 'Plasticidade Neural', summary: 'Capacidade do cérebro de reorganizar conexões sinápticas em resposta a experiências.' },
  { id: 'p38', bookId: '19', pageNumber: 278, theme: 'Memória e Aprendizagem', summary: 'Bases neurobiológicas dos processos de consolidação e recuperação de memórias.' },
  
  // Direito
  { id: 'p39', bookId: '20', pageNumber: 56, theme: 'Direitos Fundamentais', summary: 'Princípios constitucionais de dignidade humana, liberdade e igualdade.' },
  { id: 'p40', bookId: '20', pageNumber: 189, theme: 'Controle de Constitucionalidade', summary: 'Mecanismos de fiscalização da conformidade das leis com a Constituição.' },
  
  // Direito Ambiental
  { id: 'p41', bookId: '21', pageNumber: 78, theme: 'Princípios do Direito Ambiental', summary: 'Prevenção, precaução, poluidor-pagador e desenvolvimento sustentável.' },
  { id: 'p42', bookId: '21', pageNumber: 234, theme: 'Licenciamento Ambiental', summary: 'Procedimentos administrativos para autorização de atividades potencialmente poluidoras.' },
  
  // Biologia
  { id: 'p43', bookId: '22', pageNumber: 123, theme: 'Replicação do DNA', summary: 'Mecanismos moleculares de duplicação semiconservativa do material genético.' },
  { id: 'p44', bookId: '22', pageNumber: 289, theme: 'Expressão Gênica', summary: 'Processos de transcrição e tradução na síntese de proteínas.' },
  
  // Química / Física
  { id: 'p45', bookId: '23', pageNumber: 67, theme: 'Ligações Químicas', summary: 'Tipos de ligações: iônica, covalente e metálica, e suas propriedades.' },
  { id: 'p46', bookId: '23', pageNumber: 178, theme: 'Termodinâmica', summary: 'Leis da termodinâmica e conceitos de entalpia, entropia e energia livre.' },
  
  // Comunicação / Jornalismo
  { id: 'p47', bookId: '24', pageNumber: 89, theme: 'Teoria da Comunicação de Massa', summary: 'Modelos de comunicação e efeitos dos meios de comunicação na sociedade.' },
  { id: 'p48', bookId: '24', pageNumber: 156, theme: 'Agenda Setting', summary: 'Influência da mídia na definição de temas relevantes para o debate público.' },
  
  // Marketing
  { id: 'p49', bookId: '25', pageNumber: 45, theme: 'Marketing Digital', summary: 'Estratégias de marketing em plataformas digitais e redes sociais.' },
  { id: 'p50', bookId: '25', pageNumber: 134, theme: 'Comportamento do Consumidor', summary: 'Fatores psicológicos, sociais e culturais que influenciam decisões de compra.' },
  
  // Relações Internacionais
  { id: 'p51', bookId: '26', pageNumber: 78, theme: 'Teoria Realista', summary: 'Perspectiva das relações internacionais centrada no poder e interesse nacional.' },
  { id: 'p52', bookId: '26', pageNumber: 189, theme: 'Organizações Internacionais', summary: 'Papel da ONU, OMC e outras instituições na governança global.' },
  
  // Gestão Pública
  { id: 'p53', bookId: '27', pageNumber: 67, theme: 'Princípios da Administração Pública', summary: 'Legalidade, impessoalidade, moralidade, publicidade e eficiência.' },
  { id: 'p54', bookId: '27', pageNumber: 145, theme: 'Orçamento Público', summary: 'Elaboração, execução e controle do orçamento governamental.' },
  
  // Sustentabilidade
  { id: 'p55', bookId: '28', pageNumber: 56, theme: 'Desenvolvimento Sustentável', summary: 'Equilíbrio entre crescimento econômico, justiça social e preservação ambiental.' },
  { id: 'p56', bookId: '28', pageNumber: 123, theme: 'Economia Circular', summary: 'Modelo econômico de redução, reutilização e reciclagem de recursos.' },
  
  // Design
  { id: 'p57', bookId: '29', pageNumber: 34, theme: 'Processo de Design Thinking', summary: 'Etapas de empatia, definição, ideação, prototipagem e teste.' },
  { id: 'p58', bookId: '29', pageNumber: 89, theme: 'Design Centrado no Usuário', summary: 'Metodologias para criar soluções focadas nas necessidades dos usuários.' },
  
  // Arquitetura e Urbanismo
  { id: 'p59', bookId: '30', pageNumber: 78, theme: 'Planejamento Urbano Sustentável', summary: 'Princípios de mobilidade, densidade e uso misto do solo.' },
  { id: 'p60', bookId: '30', pageNumber: 167, theme: 'Arquitetura Bioclimática', summary: 'Estratégias de projeto para conforto térmico e eficiência energética.' }
];

export const questions: Question[] = [
  // Medicina (2 perguntas)
  {
    id: 'q1',
    question: 'O que é o sinal de Murphy e como é realizado?',
    pageId: 'p1',
    answer: 'O sinal de Murphy é uma manobra semiológica utilizada para avaliar a presença de colecistite aguda. É realizado através da palpação profunda do hipocôndrio direito durante a inspiração profunda do paciente. O sinal é considerado positivo quando o paciente interrompe bruscamente a inspiração devido à dor intensa, indicando possível inflamação da vesícula biliar.',
    revealed: false
  },
  {
    id: 'q2',
    question: 'Quais são as principais bulhas cardíacas e onde são melhor auscultadas?',
    pageId: 'p2',
    answer: 'As principais bulhas cardíacas são B1 e B2. A B1 (primeira bulha) corresponde ao fechamento das valvas mitral e tricúspide, sendo melhor auscultada no foco mitral (ápice cardíaco). A B2 (segunda bulha) corresponde ao fechamento das valvas aórtica e pulmonar, sendo melhor auscultada nos focos aórtico e pulmonar (base do coração). Bulhas adicionais (B3 e B4) podem indicar patologias específicas.',
    revealed: false
  },
  
  // Enfermagem (2 perguntas)
  {
    id: 'q3',
    question: 'Como realizar corretamente a ausculta pulmonar?',
    pageId: 'p3',
    answer: 'A ausculta pulmonar deve ser realizada com o paciente sentado ou em decúbito dorsal, em ambiente silencioso. O estetoscópio deve ser posicionado diretamente sobre a pele, seguindo uma sequência sistemática: ápices, campos médios e bases pulmonares, comparando sempre os lados direito e esquerdo. O paciente deve respirar profundamente pela boca. Sons normais incluem murmúrio vesicular. Sons anormais (adventícios) incluem sibilos, roncos, estertores crepitantes e atrito pleural.',
    revealed: false
  },
  {
    id: 'q4',
    question: 'Quais são os princípios básicos para limpeza de feridas?',
    pageId: 'p4',
    answer: 'Os princípios básicos incluem: 1) Lavar as mãos e usar equipamentos de proteção individual; 2) Limpar a ferida com soro fisiológico 0,9% em jato, do centro para as bordas; 3) Remover tecidos desvitalizados quando indicado; 4) Avaliar sinais de infecção (rubor, calor, edema, dor, secreção purulenta); 5) Escolher cobertura adequada ao tipo de ferida; 6) Documentar características da ferida (tamanho, profundidade, aspecto). Evitar uso de antissépticos que possam prejudicar a cicatrização.',
    revealed: false
  },
  
  // Farmácia (2 perguntas)
  {
    id: 'q5',
    question: 'Qual a diferença entre agonista e antagonista farmacológico?',
    pageId: 'p5',
    answer: 'Agonista é uma substância que se liga a um receptor e produz uma resposta biológica (ativa o receptor), imitando a ação do ligante natural. Pode ser total (produz resposta máxima) ou parcial (produz resposta submáxima). Antagonista é uma substância que se liga ao receptor mas não produz resposta, bloqueando a ação de agonistas. Pode ser competitivo (compete pelo mesmo sítio de ligação) ou não-competitivo (liga-se em local diferente, alterando a conformação do receptor).',
    revealed: false
  },
  {
    id: 'q6',
    question: 'O que é biodisponibilidade de um fármaco?',
    pageId: 'p6',
    answer: 'Biodisponibilidade é a fração (porcentagem) de uma dose administrada de fármaco que atinge a circulação sistêmica de forma inalterada. Por definição, um fármaco administrado por via intravenosa tem biodisponibilidade de 100%. Para outras vias (oral, intramuscular, subcutânea), a biodisponibilidade pode ser menor devido a fatores como metabolismo de primeira passagem, absorção incompleta, ou degradação no trato gastrointestinal. Este conceito é fundamental para determinar doses terapêuticas adequadas.',
    revealed: false
  },
  
  // Saúde Pública (2 perguntas)
  {
    id: 'q7',
    question: 'O que é epidemiologia descritiva e quais suas principais variáveis?',
    pageId: 'p7',
    answer: 'Epidemiologia descritiva é o ramo que estuda a distribuição de doenças e agravos à saúde em populações, respondendo às perguntas: quem adoece? onde? quando? As principais variáveis são: pessoa (idade, sexo, raça, ocupação), lugar (distribuição geográfica, área urbana/rural) e tempo (tendências temporais, sazonalidade, epidemias). Essas informações são fundamentais para identificar grupos de risco, planejar ações de saúde e formular hipóteses sobre fatores causais.',
    revealed: false
  },
  {
    id: 'q8',
    question: 'Qual o papel da vigilância sanitária na saúde pública?',
    pageId: 'p8',
    answer: 'A vigilância sanitária atua na prevenção e controle de riscos à saúde relacionados a produtos, serviços e ambientes. Suas ações incluem: fiscalização de estabelecimentos de saúde, indústrias de alimentos e medicamentos; controle de qualidade de produtos; inspeção sanitária; licenciamento de atividades; investigação de surtos e eventos adversos; educação sanitária. O objetivo é proteger a população de riscos sanitários, garantindo a qualidade e segurança de produtos e serviços que impactam a saúde coletiva.',
    revealed: false
  },
  
  // Administração / Gestão (2 perguntas)
  {
    id: 'q9',
    question: 'Como realizar uma análise SWOT eficaz?',
    pageId: 'p9',
    answer: 'A análise SWOT examina fatores internos (Forças e Fraquezas) e externos (Oportunidades e Ameaças). Forças: recursos e capacidades que conferem vantagem competitiva. Fraquezas: limitações que prejudicam o desempenho. Oportunidades: condições externas favoráveis a serem exploradas. Ameaças: fatores externos que podem prejudicar a organização. Para ser eficaz: 1) Envolva diferentes stakeholders; 2) Seja específico e realista; 3) Priorize os fatores mais relevantes; 4) Desenvolva estratégias que maximizem forças e oportunidades, minimizem fraquezas e neutralizem ameaças.',
    revealed: false
  },
  {
    id: 'q10',
    question: 'Quais são as estratégias genéricas de Porter para vantagem competitiva?',
    pageId: 'p10',
    answer: 'Michael Porter propõe três estratégias genéricas: 1) Liderança em custos: produzir com custos mais baixos que concorrentes, permitindo preços competitivos ou maiores margens. Requer eficiência operacional e economias de escala. 2) Diferenciação: oferecer produtos/serviços únicos e valorizados pelos clientes, permitindo preços premium. Foco em qualidade, inovação, marca ou atendimento. 3) Enfoque (nicho): concentrar-se em segmento específico do mercado, aplicando liderança em custos ou diferenciação nesse nicho. A escolha depende dos recursos da empresa e características do mercado.',
    revealed: false
  },
  
  // Recursos Humanos (2 perguntas)
  {
    id: 'q11',
    question: 'Quais são as etapas do processo de recrutamento e seleção?',
    pageId: 'p11',
    answer: 'O processo envolve: 1) Planejamento: definir perfil da vaga, competências necessárias e estratégia de atração. 2) Recrutamento: divulgação da vaga (interno, externo ou misto) para atrair candidatos. 3) Triagem: análise de currículos e pré-seleção. 4) Seleção: aplicação de testes (conhecimento, psicológicos, práticos), dinâmicas de grupo e entrevistas. 5) Avaliação: comparação de candidatos com perfil desejado. 6) Decisão: escolha do candidato mais adequado. 7) Contratação: formalização e integração (onboarding). Cada etapa deve ser estruturada para garantir escolha assertiva e experiência positiva aos candidatos.',
    revealed: false
  },
  {
    id: 'q12',
    question: 'Como implementar um sistema eficaz de gestão de desempenho?',
    pageId: 'p12',
    answer: 'Um sistema eficaz de gestão de desempenho inclui: 1) Definição clara de objetivos e metas alinhados à estratégia organizacional. 2) Estabelecimento de indicadores mensuráveis (KPIs). 3) Acompanhamento contínuo com feedback regular (não apenas anual). 4) Avaliação formal periódica usando métodos como avaliação 360°, por competências ou por resultados. 5) Plano de desenvolvimento individual (PDI) para capacitação e crescimento. 6) Reconhecimento e recompensa por desempenho superior. 7) Planos de ação para melhorias. O processo deve ser transparente, justo e focado no desenvolvimento, não apenas na punição.',
    revealed: false
  },
  
  // Economia (2 perguntas)
  {
    id: 'q13',
    question: 'Como funcionam as leis de oferta e demanda na formação de preços?',
    pageId: 'p13',
    answer: 'A lei da demanda estabelece que, mantendo outros fatores constantes, quanto maior o preço, menor a quantidade demandada (relação inversa). A lei da oferta estabelece que quanto maior o preço, maior a quantidade ofertada (relação direta). O preço de equilíbrio ocorre onde as curvas de oferta e demanda se cruzam, igualando quantidade ofertada e demandada. Mudanças em fatores como renda, preferências, preços de bens relacionados, custos de produção ou tecnologia deslocam as curvas, alterando preço e quantidade de equilíbrio. Este mecanismo coordena decisões de produtores e consumidores em mercados competitivos.',
    revealed: false
  },
  {
    id: 'q14',
    question: 'Quais são os principais instrumentos de política monetária?',
    pageId: 'p14',
    answer: 'Os principais instrumentos são: 1) Taxa de juros básica (Selic no Brasil): aumentar a taxa reduz a demanda agregada e controla inflação; reduzir estimula crescimento. 2) Operações de mercado aberto: compra/venda de títulos públicos para controlar liquidez. 3) Depósito compulsório: percentual que bancos devem depositar no Banco Central, afetando capacidade de emprestar. 4) Redesconto: empréstimos do BC aos bancos comerciais. 5) Controle de crédito: regulamentação sobre concessão de empréstimos. O Banco Central usa esses instrumentos para controlar inflação, estabilizar moeda e influenciar crescimento econômico.',
    revealed: false
  },
  
  // Finanças (2 perguntas)
  {
    id: 'q15',
    question: 'Como calcular e interpretar o Valor Presente Líquido (VPL)?',
    pageId: 'p15',
    answer: 'O VPL é calculado trazendo todos os fluxos de caixa futuros de um investimento a valor presente, usando uma taxa de desconto (custo de capital), e subtraindo o investimento inicial. Fórmula: VPL = Σ [FCt / (1+r)^t] - Investimento Inicial, onde FCt são fluxos de caixa no período t e r é a taxa de desconto. Interpretação: VPL > 0: investimento é viável (cria valor); VPL = 0: investimento é indiferente; VPL < 0: investimento destrói valor (rejeitar). O VPL considera o valor do dinheiro no tempo e é considerado o melhor método de avaliação de investimentos.',
    revealed: false
  },
  {
    id: 'q16',
    question: 'O que determina a estrutura de capital ideal de uma empresa?',
    pageId: 'p16',
    answer: 'A estrutura de capital ideal equilibra capital próprio (ações) e capital de terceiros (dívidas) para minimizar o custo de capital e maximizar o valor da empresa. Fatores determinantes: 1) Custo de capital: dívida geralmente é mais barata (dedutível de impostos), mas excesso aumenta risco financeiro. 2) Risco do negócio: empresas com fluxos estáveis podem usar mais dívida. 3) Flexibilidade financeira: manter capacidade de endividamento para oportunidades. 4) Controle: dívida não dilui propriedade. 5) Condições de mercado: aproveitar momentos favoráveis. Teorias incluem trade-off (equilíbrio benefício fiscal vs. custos de falência) e pecking order (preferência por recursos internos).',
    revealed: false
  },
  
  // Engenharia Civil (2 perguntas)
  {
    id: 'q17',
    question: 'Quais são os principais tipos de fundações e quando usar cada uma?',
    pageId: 'p17',
    answer: 'Fundações rasas (sapatas, blocos, radier): usadas quando solo resistente está próximo à superfície (até 3m de profundidade) e cargas são moderadas. Fundações profundas: 1) Estacas (cravadas ou escavadas): para solos fracos superficiais, transmitindo carga por atrito lateral ou ponta. 2) Tubulões: para grandes cargas e quando há necessidade de inspeção da base. 3) Estacas raiz: para reforço de fundações ou locais com acesso restrito. A escolha depende de: características do solo (sondagem SPT), magnitude das cargas, nível do lençol freático, vibrações admissíveis, custo e prazo. Projeto adequado previne recalques diferenciais e garante segurança estrutural.',
    revealed: false
  },
  {
    id: 'q18',
    question: 'Quais os princípios básicos do dimensionamento de estruturas de concreto armado?',
    pageId: 'p18',
    answer: 'O dimensionamento segue a NBR 6118 e baseia-se em: 1) Estados limites: último (ruptura, colapso) e de serviço (deformações, fissuras). 2) Método dos estados limites: verifica segurança através de coeficientes de ponderação de ações e resistências. 3) Domínios de deformação: relacionam deformação do concreto e aço para garantir ruptura dúctil. 4) Armadura mínima: garante comportamento adequado mesmo com cargas não previstas. 5) Detalhamento: ancoragem, emendas, espaçamento e cobrimento para durabilidade. 6) Verificações: flexão, cisalhamento, torção, punção. O concreto resiste à compressão e o aço à tração, trabalhando solidariamente através da aderência.',
    revealed: false
  },
  
  // Engenharia Mecânica (2 perguntas)
  {
    id: 'q19',
    question: 'Explique a equação de Bernoulli e suas aplicações práticas.',
    pageId: 'p19',
    answer: 'A equação de Bernoulli expressa a conservação de energia em escoamento de fluidos ideais (sem viscosidade): P + ½ρv² + ρgh = constante, onde P é pressão, ρ densidade, v velocidade, g gravidade e h altura. Significa que a soma das energias de pressão, cinética e potencial permanece constante ao longo de uma linha de corrente. Aplicações práticas: 1) Medidores de vazão (Venturi, Pitot). 2) Sustentação de aeronaves (perfil alar). 3) Carburadores. 4) Atomizadores e sprays. 5) Projeto de tubulações. 6) Comportamento de fluidos em barragens. Limitações: válida para escoamento permanente, incompressível, sem atrito e ao longo de linha de corrente.',
    revealed: false
  },
  {
    id: 'q20',
    question: 'Como calcular perda de carga em tubulações?',
    pageId: 'p20',
    answer: 'Perda de carga é a redução de pressão devido ao atrito do fluido com as paredes da tubulação e turbulência. Cálculo: 1) Perda distribuída (ao longo do tubo): usa equação de Darcy-Weisbach: hf = f(L/D)(v²/2g), onde f é fator de atrito (depende de Reynolds e rugosidade), L comprimento, D diâmetro, v velocidade. 2) Perda localizada (conexões, válvulas): hL = K(v²/2g), onde K é coeficiente de perda singular. Perda total = hf + ΣhL. Para dimensionamento: escolher diâmetro que equilibre custo de tubulação (maior diâmetro = menor perda, mas mais caro) e custo de bombeamento (menor perda = menor potência).',
    revealed: false
  },
  
  // Engenharia Elétrica (2 perguntas)
  {
    id: 'q21',
    question: 'Explique a Lei de Ohm e suas aplicações em circuitos elétricos.',
    pageId: 'p21',
    answer: 'A Lei de Ohm estabelece que a corrente elétrica (I) através de um condutor é diretamente proporcional à tensão (V) aplicada e inversamente proporcional à resistência (R): V = R × I. Aplicações: 1) Cálculo de corrente, tensão ou resistência em circuitos. 2) Dimensionamento de resistores limitadores de corrente. 3) Análise de quedas de tensão em condutores. 4) Projeto de divisores de tensão. 5) Cálculo de potência dissipada (P = V×I = R×I² = V²/R). 6) Verificação de funcionamento de componentes. Limitações: válida para materiais ôhmicos (resistência constante) em condições normais. Semicondutores e alguns materiais não seguem comportamento ôhmico.',
    revealed: false
  },
  {
    id: 'q22',
    question: 'Como analisar circuitos em corrente alternada usando fasores?',
    pageId: 'p22',
    answer: 'Fasores representam grandezas senoidais como vetores complexos, simplificando análise de circuitos CA. Método: 1) Converter senoides para fasores: V(t) = Vmcos(ωt+φ) → V = Vm∠φ. 2) Representar impedâncias: resistor (R), indutor (jωL), capacitor (1/jωC). 3) Aplicar leis de Kirchhoff com fasores (como em CC). 4) Calcular correntes e tensões complexas. 5) Converter resultado para domínio do tempo. Vantagens: transforma equações diferenciais em algébricas, permite usar técnicas de análise de CC. Conceitos importantes: impedância (Z = R + jX), ângulo de fase, potência complexa (S = P + jQ), fator de potência (cosφ). Aplicável apenas em regime permanente senoidal.',
    revealed: false
  },
  
  // Engenharia de Software (2 perguntas)
  {
    id: 'q23',
    question: 'Quais são os princípios fundamentais das metodologias ágeis?',
    pageId: 'p23',
    answer: 'O Manifesto Ágil estabelece 4 valores: 1) Indivíduos e interações > processos e ferramentas. 2) Software funcionando > documentação abrangente. 3) Colaboração com cliente > negociação de contratos. 4) Responder a mudanças > seguir um plano. Princípios-chave: entregas frequentes de valor, equipes auto-organizadas, comunicação face a face, software funcionando como medida de progresso, ritmo sustentável, excelência técnica, simplicidade, reflexão e adaptação contínuas. Frameworks populares: Scrum (sprints, daily, retrospectivas), Kanban (fluxo contínuo, WIP), XP (pair programming, TDD). Benefícios: maior adaptabilidade, feedback rápido, satisfação do cliente, qualidade.',
    revealed: false
  },
  {
    id: 'q24',
    question: 'O que são padrões de projeto e quais os mais utilizados?',
    pageId: 'p24',
    answer: 'Padrões de projeto são soluções reutilizáveis para problemas recorrentes em design de software. Categorias: 1) Criacionais (criação de objetos): Singleton (instância única), Factory (criação de objetos sem especificar classe), Builder (construção passo a passo). 2) Estruturais (composição de classes): Adapter (compatibilidade de interfaces), Decorator (adicionar funcionalidades), Facade (interface simplificada). 3) Comportamentais (interação entre objetos): Observer (notificação de mudanças), Strategy (algoritmos intercambiáveis), Command (encapsular requisições). Benefícios: código mais flexível, manutenível e compreensível; comunicação eficiente entre desenvolvedores; soluções testadas. Importante: usar quando apropriado, evitar over-engineering.',
    revealed: false
  },
  
  // Computação (2 perguntas)
  {
    id: 'q25',
    question: 'Como analisar a complexidade algorítmica usando notação Big O?',
    pageId: 'p25',
    answer: 'Notação Big O descreve o comportamento assintótico de algoritmos, indicando como tempo/espaço cresce com tamanho da entrada (n). Complexidades comuns: O(1) - constante (acesso a array); O(log n) - logarítmica (busca binária); O(n) - linear (busca sequencial); O(n log n) - linearítmica (merge sort, quick sort); O(n²) - quadrática (bubble sort, loops aninhados); O(2ⁿ) - exponencial (problemas NP); O(n!) - fatorial (permutações). Análise: 1) Identificar operações dominantes. 2) Contar execuções em função de n. 3) Considerar pior caso (geralmente). 4) Descartar constantes e termos de menor ordem. Exemplo: 3n² + 5n + 10 = O(n²). Importante para escolher algoritmos eficientes.',
    revealed: false
  },
  {
    id: 'q26',
    question: 'Quais são as operações básicas em árvores binárias de busca?',
    pageId: 'p26',
    answer: 'Árvore Binária de Busca (ABB) mantém propriedade: valor do nó > todos à esquerda e < todos à direita. Operações: 1) Busca: comparar valor procurado com nó atual, ir para esquerda (menor) ou direita (maior). Complexidade: O(h), h=altura. 2) Inserção: buscar posição correta (folha) e inserir novo nó. O(h). 3) Remoção: 3 casos - nó folha (remover direto), 1 filho (substituir por filho), 2 filhos (substituir por sucessor/predecessor). O(h). 4) Percursos: in-order (esquerda-raiz-direita, ordem crescente), pre-order (raiz-esquerda-direita), post-order (esquerda-direita-raiz). O(n). ABB balanceadas (AVL, Red-Black) garantem h=O(log n), mantendo eficiência. Aplicações: dicionários, conjuntos, índices de banco de dados.',
    revealed: false
  },
  
  // Inteligência Artificial (2 perguntas)
  {
    id: 'q27',
    question: 'Qual a diferença entre aprendizado supervisionado e não supervisionado?',
    pageId: 'p27',
    answer: 'Aprendizado Supervisionado: algoritmo aprende com dados rotulados (entrada-saída conhecida). Objetivo: mapear entradas para saídas corretas. Tipos: classificação (categorias discretas - spam/não-spam) e regressão (valores contínuos - preço de imóvel). Algoritmos: regressão linear/logística, árvores de decisão, SVM, redes neurais. Requer dataset rotulado (custoso). Aprendizado Não Supervisionado: dados sem rótulos. Objetivo: descobrir padrões e estruturas. Tipos: clustering (agrupar similares - K-means, DBSCAN), redução de dimensionalidade (PCA), detecção de anomalias. Aplicações: segmentação de clientes, compressão de dados, sistemas de recomendação. Existe também aprendizado por reforço (agente aprende por tentativa-erro com recompensas).',
    revealed: false
  },
  {
    id: 'q28',
    question: 'Como funcionam as redes neurais artificiais e o algoritmo backpropagation?',
    pageId: 'p28',
    answer: 'Redes Neurais Artificiais (RNA) são modelos inspirados no cérebro, compostos por camadas de neurônios artificiais conectados. Estrutura: camada de entrada (recebe dados), camadas ocultas (processamento), camada de saída (resultado). Cada conexão tem peso (w) ajustável. Neurônio: calcula soma ponderada das entradas + bias, aplica função de ativação (sigmoid, ReLU, tanh). Backpropagation: algoritmo de treinamento que ajusta pesos para minimizar erro. Processo: 1) Forward pass: propagar entrada pela rede, calcular saída. 2) Calcular erro (diferença entre saída e valor esperado). 3) Backward pass: propagar erro de volta, calcular gradientes. 4) Atualizar pesos usando gradiente descendente. Repetir até convergência. Permite aprender padrões complexos em dados.',
    revealed: false
  },
  
  // Big Data / Data Science (2 perguntas)
  {
    id: 'q29',
    question: 'Quais são as principais técnicas de mineração de dados?',
    pageId: 'p29',
    answer: 'Mineração de dados extrai conhecimento de grandes volumes de dados. Técnicas principais: 1) Classificação: atribuir categorias (árvores de decisão, naive bayes, SVM). 2) Regressão: prever valores numéricos (regressão linear, polinomial). 3) Clustering: agrupar objetos similares (k-means, hierárquico). 4) Associação: descobrir relações (regras de associação, Apriori - "quem compra X também compra Y"). 5) Detecção de anomalias: identificar outliers. 6) Análise de séries temporais: padrões ao longo do tempo. Processo KDD: seleção de dados, pré-processamento, transformação, mineração, interpretação/avaliação. Aplicações: marketing (segmentação), fraude (detecção), medicina (diagnóstico), recomendação (e-commerce).',
    revealed: false
  },
  {
    id: 'q30',
    question: 'Como construir modelos de análise preditiva eficazes?',
    pageId: 'p30',
    answer: 'Construção de modelos preditivos envolve: 1) Definição do problema: objetivo claro, métrica de sucesso. 2) Coleta de dados: quantidade e qualidade adequadas, representativos. 3) Exploração (EDA): entender distribuições, correlações, outliers. 4) Preparação: limpeza (valores faltantes, duplicatas), transformação (normalização, encoding), engenharia de features. 5) Divisão: treino/validação/teste (ex: 70/15/15%). 6) Seleção de algoritmo: considerar tipo de problema, interpretabilidade, performance. 7) Treinamento: ajustar hiperparâmetros (grid search, random search). 8) Avaliação: métricas apropriadas (acurácia, precision, recall, F1, RMSE, R²). 9) Validação cruzada: evitar overfitting. 10) Deploy e monitoramento: performance em produção, retreinamento periódico.',
    revealed: false
  },
  
  // Educação / Pedagogia (2 perguntas)
  {
    id: 'q31',
    question: 'Quais são os princípios da pedagogia da autonomia de Paulo Freire?',
    pageId: 'p31',
    answer: 'Paulo Freire defende educação libertadora que desenvolve consciência crítica e autonomia. Princípios fundamentais: 1) Não há docência sem discência: ensinar exige reconhecer que educar não é transferir conhecimento, mas criar possibilidades para sua produção. 2) Ensinar exige respeito aos saberes dos educandos: valorizar conhecimento prévio e contexto sociocultural. 3) Ensinar exige criticidade: estimular curiosidade epistemológica, questionamento. 4) Ensinar exige reflexão crítica sobre a prática: professor como pesquisador reflexivo. 5) Educação como prática de liberdade: superar educação bancária (depósito de conteúdos) por educação problematizadora (diálogo, conscientização). 6) Ética e estética: ensinar exige comprometimento, competência profissional e generosidade.',
    revealed: false
  },
  {
    id: 'q32',
    question: 'Por que ensinar não é transferir conhecimento segundo Paulo Freire?',
    pageId: 'p32',
    answer: 'Freire critica a "educação bancária" onde professor "deposita" conhecimento em alunos passivos. Argumenta que: 1) Conhecimento não é objeto estático a ser transmitido, mas construído ativamente pelo aprendiz. 2) Ensinar exige criar condições para produção/construção do conhecimento, não transferência. 3) Aprender é processo ativo de compreensão, não memorização mecânica. 4) Educador deve problematizar, desafiar, estimular curiosidade epistemológica. 5) Diálogo é essencial: educador e educando aprendem juntos, em relação horizontal. 6) Respeito à autonomia do educando: reconhecer como sujeito do próprio aprendizado. Implicações: metodologias ativas, aprendizagem significativa, valorização da experiência, desenvolvimento do pensamento crítico. Professor como mediador/facilitador, não transmissor.',
    revealed: false
  },
  
  // Psicologia (2 perguntas)
  {
    id: 'q33',
    question: 'Quais são os estágios do desenvolvimento cognitivo segundo Piaget?',
    pageId: 'p33',
    answer: 'Jean Piaget propôs 4 estágios universais e sequenciais: 1) Sensório-motor (0-2 anos): conhecimento através de ações motoras e percepções sensoriais. Conquista: permanência do objeto (objetos existem independente da percepção). 2) Pré-operatório (2-7 anos): pensamento simbólico (linguagem, jogo simbólico), egocentrismo (dificuldade em considerar perspectiva alheia), centração (foco em um aspecto), irreversibilidade. 3) Operatório concreto (7-11 anos): pensamento lógico sobre situações concretas, conservação (quantidade não muda com aparência), reversibilidade, classificação. 4) Operatório formal (11+ anos): pensamento abstrato, hipotético-dedutivo, raciocínio científico. Conceitos-chave: esquemas, assimilação, acomodação, equilibração. Implicações educacionais: respeitar estágio de desenvolvimento, aprendizagem ativa.',
    revealed: false
  },
  {
    id: 'q34',
    question: 'Quais são as principais transformações da adolescência?',
    pageId: 'p34',
    answer: 'A adolescência (10-19 anos) envolve mudanças em múltiplas dimensões: 1) Físicas: puberdade (hormônios, caracteres sexuais secundários, estirão de crescimento), maturação cerebral (córtex pré-frontal continua desenvolvendo até ~25 anos). 2) Cognitivas: desenvolvimento do pensamento abstrato e hipotético-dedutivo (Piaget), maior capacidade de planejamento e metacognição. 3) Socioemocionais: busca de identidade (Erikson), maior influência de pares, necessidade de autonomia, intensificação emocional, comportamentos de risco (imaturidade do córtex pré-frontal vs. sistema límbico ativo). 4) Morais: desenvolvimento do raciocínio moral (Kohlberg). Desafios: pressão social, autoestima, imagem corporal, conflitos familiares. Importância de suporte familiar, educação socioemocional, ambientes seguros.',
    revealed: false
  },
  
  // Psicopedagogia (2 perguntas)
  {
    id: 'q35',
    question: 'Como realizar um diagnóstico psicopedagógico completo?',
    pageId: 'p35',
    answer: 'O diagnóstico psicopedagógico investiga dificuldades de aprendizagem através de processo sistemático: 1) Entrevista inicial: queixa, histórico escolar, desenvolvimento, contexto familiar. 2) Anamnese: gestação, parto, desenvolvimento motor/linguagem, saúde, dinâmica familiar. 3) Avaliação pedagógica: leitura, escrita, matemática, nível de escolaridade real. 4) Provas operatórias (Piaget): nível de pensamento. 5) Testes projetivos: aspectos emocionais (desenho, jogos). 6) Avaliação da leitura e escrita: hipóteses de escrita, compreensão. 7) Observação lúdica: vínculos com aprendizagem. 8) Entrevista com escola: desempenho, comportamento, relações. 9) Síntese diagnóstica: hipótese sobre origem das dificuldades (orgânica, emocional, pedagógica, ambiental). 10) Devolutiva e encaminhamentos: orientações à família e escola.',
    revealed: false
  },
  {
    id: 'q36',
    question: 'Quais estratégias de intervenção psicopedagógica são mais eficazes?',
    pageId: 'p36',
    answer: 'Intervenções psicopedagógicas devem ser individualizadas, baseadas no diagnóstico: 1) Fortalecimento de vínculos positivos com aprendizagem: atividades prazerosas, resgate da autoestima, valorização de potencialidades. 2) Desenvolvimento de funções cognitivas: atenção, memória, raciocínio lógico através de jogos e desafios. 3) Estratégias metacognitivas: ensinar a "aprender a aprender", planejamento, automonitoramento. 4) Atividades lúdicas: jogos pedagógicos que trabalham conteúdos de forma significativa. 5) Mediação: zona de desenvolvimento proximal (Vygotsky), scaffolding. 6) Trabalho com família: orientações, parceria. 7) Articulação com escola: adaptações curriculares, metodologias diferenciadas. 8) Encaminhamentos: fonoaudiologia, psicologia, neurologia quando necessário. Foco: autonomia, prazer em aprender, superação de bloqueios.',
    revealed: false
  },
  
  // Neurociência (2 perguntas)
  {
    id: 'q37',
    question: 'O que é plasticidade neural e qual sua importância?',
    pageId: 'p37',
    answer: 'Plasticidade neural é a capacidade do sistema nervoso de modificar sua estrutura e função em resposta a experiências, aprendizado ou lesões. Mecanismos: 1) Sináptica: fortalecimento (potenciação de longa duração - LTP) ou enfraquecimento de sinapses. 2) Estrutural: formação de novas sinapses (sinaptogênese), crescimento dendrítico, neurogênese (limitada em adultos). 3) Funcional: reorganização de mapas corticais, recrutamento de áreas adjacentes. Importância: 1) Aprendizagem e memória: base neural da aquisição de conhecimentos e habilidades. 2) Recuperação de lesões: reabilitação após AVC, trauma. 3) Desenvolvimento: refinamento de circuitos na infância. 4) Adaptação: ajuste a mudanças ambientais. Fatores que promovem: estimulação cognitiva, exercício físico, sono adequado, ambiente enriquecido. Períodos críticos na infância têm maior plasticidade.',
    revealed: false
  },
  {
    id: 'q38',
    question: 'Como funcionam os processos de memória e aprendizagem no cérebro?',
    pageId: 'p38',
    answer: 'Memória envolve 3 processos: codificação (aquisição), consolidação (armazenamento) e recuperação (evocação). Tipos: 1) Temporal: memória de trabalho (segundos, córtex pré-frontal), curto prazo (minutos-horas), longo prazo (dias-vida toda). 2) Conteúdo: explícita/declarativa (fatos, eventos - hipocampo, córtex temporal) e implícita/procedural (habilidades motoras - gânglios da base, cerebelo). Consolidação: processo dependente de síntese proteica, fortalecimento sináptico (LTP), replay durante sono. Hipocampo crucial para formação de memórias explícitas, depois transferidas para córtex. Aprendizagem: mudanças duradouras no comportamento por experiência. Base neural: modificação de conexões sinápticas. Neurotransmissores importantes: glutamato (LTP), acetilcolina (atenção), dopamina (recompensa, motivação). Fatores que melhoram: repetição espaçada, sono, emoção, significado.',
    revealed: false
  },
  
  // Direito (2 perguntas)
  {
    id: 'q39',
    question: 'Quais são os direitos fundamentais previstos na Constituição Federal?',
    pageId: 'p39',
    answer: 'A Constituição Federal de 1988 estabelece direitos fundamentais no Título II: 1) Direitos individuais e coletivos (art. 5º): vida, liberdade, igualdade, segurança, propriedade. Inclui inviolabilidade de domicílio, sigilo de correspondência, liberdade de expressão, devido processo legal, presunção de inocência. 2) Direitos sociais (art. 6º): educação, saúde, trabalho, moradia, lazer, segurança, previdência social, proteção à maternidade e infância. 3) Direitos de nacionalidade (arts. 12-13): critérios de aquisição, perda. 4) Direitos políticos (arts. 14-16): sufrágio universal, voto direto e secreto, elegibilidade. 5) Direitos relacionados a partidos políticos (art. 17). Características: universalidade, indivisibilidade, inalienabilidade, imprescritibilidade. Cláusulas pétreas: não podem ser abolidas por emenda constitucional.',
    revealed: false
  },
  {
    id: 'q40',
    question: 'Como funciona o controle de constitucionalidade no Brasil?',
    pageId: 'p40',
    answer: 'Controle de constitucionalidade verifica compatibilidade de leis e atos normativos com a Constituição. Modalidades: 1) Controle difuso (concreto): qualquer juiz pode declarar inconstitucionalidade em caso concreto. Efeitos inter partes (entre as partes). Recurso Extraordinário ao STF. Senado pode suspender execução de lei declarada inconstitucional pelo STF (efeito erga omnes). 2) Controle concentrado (abstrato): STF, em ação direta. Instrumentos: ADI (Ação Direta de Inconstitucionalidade), ADC (Ação Declaratória de Constitucionalidade), ADPF (Arguição de Descumprimento de Preceito Fundamental), ADO (Ação Direta de Inconstitucionalidade por Omissão). Legitimados: Presidente, Mesa do Senado/Câmara, PGR, partidos, confederações sindicais, etc. Efeitos erga omnes e vinculante. Objetivo: garantir supremacia constitucional.',
    revealed: false
  },
  
  // Direito Ambiental (2 perguntas)
  {
    id: 'q41',
    question: 'Quais são os princípios fundamentais do Direito Ambiental?',
    pageId: 'p41',
    answer: 'Princípios estruturantes do Direito Ambiental: 1) Prevenção: evitar danos ambientais conhecidos através de medidas preventivas (EIA/RIMA, licenciamento). 2) Precaução: na dúvida científica sobre riscos, adotar medidas protetivas (inversão do ônus da prova). 3) Poluidor-pagador: quem polui deve arcar com custos de prevenção, reparação e repressão. Não é licença para poluir. 4) Usuário-pagador: quem usa recurso natural deve pagar (água, mineração). 5) Desenvolvimento sustentável: equilíbrio entre crescimento econômico, proteção ambiental e equidade social. 6) Participação: sociedade deve participar de decisões ambientais (audiências públicas). 7) Informação: acesso a informações ambientais. 8) Responsabilidade: objetiva (independe de culpa), solidária, propter rem. Fundamentam legislação e decisões judiciais.',
    revealed: false
  },
  {
    id: 'q42',
    question: 'Como funciona o processo de licenciamento ambiental?',
    pageId: 'p42',
    answer: 'Licenciamento ambiental é procedimento administrativo para autorizar atividades potencialmente poluidoras. Etapas: 1) Licença Prévia (LP): fase de planejamento, viabilidade ambiental, diretrizes. Requer EIA/RIMA para atividades de significativo impacto. 2) Licença de Instalação (LI): autoriza construção/instalação conforme projetos aprovados. 3) Licença de Operação (LO): autoriza funcionamento, estabelece condicionantes, programas de monitoramento. Competência: IBAMA (federal), órgãos estaduais (OEMA) ou municipais, conforme abrangência do impacto. Participação social: audiências públicas. Estudos ambientais: EIA/RIMA (grandes impactos), RCA/PCA, outros. Renovação periódica da LO. Descumprimento: multas, embargo, suspensão, responsabilização civil, administrativa e criminal. Objetivo: compatibilizar desenvolvimento econômico com proteção ambiental.',
    revealed: false
  },
  
  // Biologia (2 perguntas)
  {
    id: 'q43',
    question: 'Como ocorre o processo de replicação do DNA?',
    pageId: 'p43',
    answer: 'Replicação do DNA é semiconservativa (cada fita serve de molde) e ocorre na fase S do ciclo celular. Etapas: 1) Iniciação: helicases desenrolam dupla hélice em origens de replicação, formando bolhas/forquilhas. Proteínas SSB estabilizam fitas separadas. 2) Primase sintetiza primers de RNA. 3) Elongação: DNA polimerase III adiciona nucleotídeos complementares (A-T, G-C) na direção 5\'→3\'. Fita líder: síntese contínua. Fita retardada: síntese descontínua em fragmentos de Okazaki. 4) DNA polimerase I remove primers e preenche lacunas. 5) DNA ligase une fragmentos. 6) Terminação: encontro de forquilhas, remoção de primers terminais. Enzimas-chave: helicase, primase, DNA pol III, DNA pol I, ligase, topoisomerases (aliviam tensão). Fidelidade: revisão por DNA polimerase, reparo de erros. Resultado: duas moléculas idênticas de DNA.',
    revealed: false
  },
  {
    id: 'q44',
    question: 'Como funciona a expressão gênica: transcrição e tradução?',
    pageId: 'p44',
    answer: 'Expressão gênica converte informação do DNA em proteínas. Transcrição (núcleo): 1) Iniciação: RNA polimerase liga-se ao promotor (TATA box), desenrola DNA. 2) Elongação: RNA pol sintetiza RNA mensageiro (mRNA) complementar à fita molde (3\'→5\'), usando ribonucleotídeos (U substitui T). 3) Terminação: sequência terminadora, liberação do mRNA. 4) Processamento (eucariotos): adição de cap 5\', cauda poli-A 3\', splicing (remoção de íntrons, união de éxons). Tradução (ribossomo): 1) Iniciação: ribossomo liga-se ao mRNA no códon AUG, tRNA com metionina. 2) Elongação: tRNAs trazem aminoácidos conforme códons, ligação peptídica. 3) Terminação: códon de parada (UAA, UAG, UGA), liberação da proteína. Código genético: trincas de nucleotídeos (códons) especificam aminoácidos. Regulação: controle transcricional, pós-transcricional, traducional.',
    revealed: false
  },
  
  // Química / Física (2 perguntas)
  {
    id: 'q45',
    question: 'Quais são os tipos de ligações químicas e suas características?',
    pageId: 'p45',
    answer: 'Ligações químicas unem átomos para formar moléculas/compostos. Tipos: 1) Iônica: transferência de elétrons entre metal (perde elétrons, cátion) e não-metal (ganha elétrons, ânion). Atração eletrostática. Propriedades: sólidos cristalinos, alto ponto de fusão/ebulição, conduzem eletricidade fundidos/dissolvidos, solúveis em água. Ex: NaCl. 2) Covalente: compartilhamento de pares de elétrons entre não-metais. Simples (1 par), dupla (2 pares), tripla (3 pares). Propriedades: podem ser gases, líquidos ou sólidos, pontos de fusão/ebulição menores, geralmente não conduzem eletricidade. Polar (diferença de eletronegatividade) ou apolar. Ex: H₂O, O₂. 3) Metálica: elétrons deslocalizados ("mar de elétrons") entre cátions metálicos. Propriedades: condutividade elétrica/térmica, maleabilidade, ductilidade, brilho. Ex: Fe, Cu. Ligações intermoleculares (mais fracas): hidrogênio, dipolo-dipolo, London.',
    revealed: false
  },
  {
    id: 'q46',
    question: 'Quais são as leis da termodinâmica e suas aplicações?',
    pageId: 'p46',
    answer: 'Termodinâmica estuda energia e transformações. Leis: 1) Lei Zero: se A está em equilíbrio térmico com B, e B com C, então A está com C. Base para termômetros. 2) Primeira Lei (conservação de energia): ΔU = Q - W, onde ΔU é variação de energia interna, Q calor absorvido, W trabalho realizado. Energia não se cria nem destrói, apenas transforma. 3) Segunda Lei: entropia do universo sempre aumenta em processos espontâneos. Calor flui espontaneamente de quente para frio. Impossível máquina térmica 100% eficiente. ΔS_universo > 0. 4) Terceira Lei: entropia de cristal perfeito a 0 K é zero. Impossível atingir zero absoluto. Conceitos: entalpia (H, calor a pressão constante), entropia (S, desordem), energia livre de Gibbs (G = H - TS, espontaneidade: ΔG < 0). Aplicações: motores, refrigeradores, reações químicas, processos biológicos.',
    revealed: false
  },
  
  // Comunicação / Jornalismo (2 perguntas)
  {
    id: 'q47',
    question: 'Como a teoria da comunicação de massa explica os efeitos da mídia?',
    pageId: 'p47',
    answer: 'Teorias sobre efeitos da mídia evoluíram: 1) Teoria Hipodérmica (anos 1920-30): mídia tem efeito direto, imediato e poderoso ("bala mágica"). Audiência passiva. Contexto: propaganda na 1ª Guerra. 2) Teoria dos Efeitos Limitados (anos 1940-60): efeitos mediados por fatores individuais e sociais. Fluxo de comunicação em duas etapas: líderes de opinião filtram mensagens. 3) Agenda Setting: mídia não diz o que pensar, mas sobre o que pensar. Define temas relevantes. 4) Espiral do Silêncio: pessoas evitam expressar opiniões minoritárias por medo de isolamento. 5) Cultivo: exposição prolongada à TV cultiva percepções de realidade. 6) Usos e Gratificações: audiência ativa escolhe mídia para satisfazer necessidades. Atualmente: reconhece-se efeitos complexos, variáveis, de longo prazo, mediados por contexto social, psicológico e cultural.',
    revealed: false
  },
  {
    id: 'q48',
    question: 'O que é a teoria do Agenda Setting e como funciona?',
    pageId: 'p48',
    answer: 'Agenda Setting, proposta por McCombs e Shaw (1972), postula que a mídia tem poder de influenciar sobre quais temas o público pensa, estabelecendo a "agenda pública". Não diz às pessoas o que pensar, mas sobre o que pensar. Mecanismo: 1) Saliência: temas com maior cobertura midiática (frequência, destaque) tornam-se mais salientes na mente do público. 2) Transferência de saliência: da agenda midiática para agenda pública. 3) Níveis: primeiro nível (temas/objetos), segundo nível (atributos/enquadramentos dos temas). Fatores moderadores: necessidade de orientação (quanto maior, maior o efeito), experiência pessoal, discussão interpessoal. Implicações: mídia tem papel central na definição de prioridades sociais, políticas públicas. Críticas: superestima poder da mídia, subestima audiência ativa. Relevância: compreender influência midiática na opinião pública, especialmente em períodos eleitorais.',
    revealed: false
  },
  
  // Marketing (2 perguntas)
  {
    id: 'q49',
    question: 'Quais são as principais estratégias de marketing digital?',
    pageId: 'p49',
    answer: 'Marketing digital utiliza canais online para alcançar e engajar consumidores. Estratégias principais: 1) Marketing de Conteúdo: criar conteúdo relevante e valioso (blogs, vídeos, infográficos) para atrair e reter audiência. 2) SEO (Search Engine Optimization): otimizar site para ranquear melhor em buscadores (palavras-chave, backlinks, experiência do usuário). 3) SEM (Search Engine Marketing): anúncios pagos em buscadores (Google Ads). 4) Redes Sociais: presença em plataformas (Instagram, Facebook, LinkedIn, TikTok), conteúdo orgânico e anúncios pagos. 5) E-mail Marketing: comunicação direta, segmentada, automação. 6) Marketing de Influência: parcerias com influenciadores. 7) Inbound Marketing: atrair clientes com conteúdo (funil: atração, conversão, fechamento, encantamento). 8) Analytics: medir resultados (Google Analytics, métricas de engajamento, conversão, ROI). Vantagens: segmentação precisa, mensuração, custo-benefício, alcance global.',
    revealed: false
  },
  {
    id: 'q50',
    question: 'Quais fatores influenciam o comportamento do consumidor?',
    pageId: 'p50',
    answer: 'Comportamento do consumidor é influenciado por múltiplos fatores: 1) Culturais: cultura (valores, crenças), subcultura (etnia, religião), classe social. 2) Sociais: grupos de referência (família, amigos), papéis sociais, status. 3) Pessoais: idade/ciclo de vida, ocupação, situação econômica, estilo de vida, personalidade. 4) Psicológicos: motivação (hierarquia de Maslow), percepção (seletiva), aprendizagem, crenças e atitudes. Processo de decisão: 1) Reconhecimento da necessidade. 2) Busca de informações. 3) Avaliação de alternativas. 4) Decisão de compra. 5) Comportamento pós-compra (satisfação/dissonância). Tipos de decisão: complexa (alto envolvimento, diferenças significativas), redução de dissonância (alto envolvimento, poucas diferenças), habitual (baixo envolvimento, poucas diferenças), busca de variedade (baixo envolvimento, diferenças significativas). Marketing deve considerar esses fatores para segmentação, posicionamento e comunicação eficazes.',
    revealed: false
  },
  
  // Relações Internacionais (2 perguntas)
  {
    id: 'q51',
    question: 'Como a teoria realista explica as relações internacionais?',
    pageId: 'p51',
    answer: 'Realismo é teoria dominante em Relações Internacionais, com raízes em Tucídides, Maquiavel e Hobbes. Premissas: 1) Estados são atores principais e racionais. 2) Sistema internacional é anárquico (ausência de autoridade central). 3) Estados buscam poder e segurança (interesse nacional). 4) Poder (militar, econômico) é central. 5) Relações são conflituosas, cooperação é difícil. Vertentes: Realismo clássico (natureza humana, Morgenthau), Neorrealismo/Realismo estrutural (estrutura do sistema, Waltz - polaridade: unipolar, bipolar, multipolar), Realismo ofensivo (maximizar poder, Mearsheimer) vs. defensivo (segurança suficiente, Waltz). Conceitos: equilíbrio de poder, dilema de segurança (ações defensivas de um ameaçam outros), dissuasão. Críticas: negligencia atores não-estatais, normas, cooperação, economia. Útil para entender conflitos, corrida armamentista, alianças.',
    revealed: false
  },
  {
    id: 'q52',
    question: 'Qual o papel das organizações internacionais na governança global?',
    pageId: 'p52',
    answer: 'Organizações Internacionais (OIs) são instituições criadas por Estados para cooperação em áreas específicas. Principais: 1) ONU: paz e segurança (Conselho de Segurança), desenvolvimento (PNUD), direitos humanos (ACNUDH), saúde (OMS). 2) OMC: comércio internacional, resolução de disputas. 3) FMI: estabilidade monetária, assistência financeira. 4) Banco Mundial: desenvolvimento, redução da pobreza. 5) OTAN: segurança coletiva. 6) UE: integração regional. Funções: 1) Fórum de negociação e cooperação. 2) Estabelecimento de normas e regras. 3) Monitoramento e fiscalização. 4) Resolução de conflitos. 5) Provisão de bens públicos globais. 6) Socialização de Estados em normas internacionais. Desafios: legitimidade democrática, eficácia, representatividade (poder de veto, sub-representação do Sul Global), financiamento. Teorias: liberalismo institucional (facilitam cooperação), realismo (refletem poder dos Estados), construtivismo (moldam identidades e interesses).',
    revealed: false
  },
  
  // Gestão Pública (2 perguntas)
  {
    id: 'q53',
    question: 'Quais são os princípios constitucionais da Administração Pública?',
    pageId: 'p53',
    answer: 'Art. 37 da CF/88 estabelece princípios expressos (LIMPE): 1) Legalidade: administrador só pode fazer o que a lei permite (diferente do particular). Vinculação à lei. 2) Impessoalidade: tratamento igualitário, sem favorecimentos. Atos visam interesse público, não pessoal. Vedação à promoção pessoal. 3) Moralidade: ética, honestidade, boa-fé, probidade. Atos devem ser moralmente aceitáveis. 4) Publicidade: transparência, divulgação de atos (exceto segurança/intimidade). Condição de eficácia. 5) Eficiência: melhor relação custo-benefício, qualidade, celeridade, produtividade. Princípios implícitos: supremacia do interesse público, indisponibilidade do interesse público, razoabilidade, proporcionalidade, motivação, autotutela, continuidade dos serviços públicos, segurança jurídica. Violação: atos podem ser anulados, responsabilização administrativa, civil e criminal (improbidade administrativa).',
    revealed: false
  },
  {
    id: 'q54',
    question: 'Como funciona o ciclo orçamentário no Brasil?',
    pageId: 'p54',
    answer: 'Ciclo orçamentário é processo contínuo de planejamento, execução e controle do orçamento público. Instrumentos (CF/88): 1) PPA (Plano Plurianual): 4 anos, define diretrizes, objetivos e metas de médio prazo. 2) LDO (Lei de Diretrizes Orçamentárias): anual, estabelece metas e prioridades, orienta elaboração da LOA, dispõe sobre alterações tributárias. 3) LOA (Lei Orçamentária Anual): estima receitas e fixa despesas para o ano. Integra orçamentos fiscal, seguridade social e investimento de estatais. Fases: 1) Elaboração: Executivo prepara projetos (PPA, LDO, LOA). 2) Apreciação: Legislativo analisa, emenda e aprova. 3) Execução: arrecadação de receitas, empenho, liquidação e pagamento de despesas. 4) Controle: interno (cada Poder) e externo (Legislativo com auxílio do Tribunal de Contas). Princípios: unidade, universalidade, anualidade, exclusividade, equilíbrio. LRF: responsabilidade fiscal, limites de gastos.',
    revealed: false
  },
  
  // Sustentabilidade (2 perguntas)
  {
    id: 'q55',
    question: 'O que caracteriza o desenvolvimento sustentável?',
    pageId: 'p55',
    answer: 'Desenvolvimento sustentável, definido no Relatório Brundtland (1987), é "aquele que atende às necessidades do presente sem comprometer a capacidade das gerações futuras de atenderem às suas próprias necessidades". Pilares (Triple Bottom Line): 1) Econômico: crescimento econômico, eficiência, inovação, geração de renda. 2) Social: equidade, justiça social, qualidade de vida, saúde, educação, redução da pobreza. 3) Ambiental: preservação de recursos naturais, biodiversidade, controle de poluição, mitigação de mudanças climáticas. Princípios: equidade intergeracional, precaução, participação, responsabilidade comum mas diferenciada. Objetivos de Desenvolvimento Sustentável (ODS/ONU): 17 objetivos globais (erradicar pobreza, fome zero, energia limpa, etc.). Desafios: conciliar crescimento econômico com limites planetários, mudança de padrões de produção e consumo, governança global.',
    revealed: false
  },
  {
    id: 'q56',
    question: 'Como funciona o modelo de economia circular?',
    pageId: 'p56',
    answer: 'Economia circular é modelo econômico que contrasta com economia linear (extrair-produzir-descartar). Princípios: 1) Eliminar resíduos e poluição desde o design. 2) Manter produtos e materiais em uso (máxima utilidade e valor). 3) Regenerar sistemas naturais. Estratégias (Rs): Repensar, Recusar, Reduzir, Reutilizar, Reparar, Restaurar, Remanufaturar, Reaproveitar, Reciclar, Recuperar energia. Ciclos: 1) Técnico: materiais não-biodegradáveis circulam (metais, plásticos). 2) Biológico: materiais biodegradáveis retornam à natureza. Benefícios: redução de extração de recursos, menor geração de resíduos, economia de energia, criação de emempregos, resiliência econômica, menor impacto ambiental. Exemplos: design modular, logística reversa, produto como serviço, simbiose industrial. Desafios: mudança cultural, infraestrutura, modelos de negócio, regulação. Alinhado com ODS e combate às mudanças climáticas.',
    revealed: false
  },
  
  // Design (2 perguntas)
  {
    id: 'q57',
    question: 'Quais são as etapas do processo de Design Thinking?',
    pageId: 'p57',
    answer: 'Design Thinking é abordagem centrada no ser humano para inovação e resolução de problemas. Etapas (modelo Stanford d.school): 1) Empatia (Empathize): compreender profundamente usuários através de observação, entrevistas, imersão. Foco em necessidades, desejos, contexto. 2) Definição (Define): sintetizar insights, definir problema de forma clara e centrada no usuário (ponto de vista). 3) Ideação (Ideate): gerar ampla variedade de ideias criativas sem julgamento. Brainstorming, SCAMPER, mapas mentais. Quantidade gera qualidade. 4) Prototipagem (Prototype): criar representações rápidas e baratas de soluções para testar ideias. Protótipos de baixa fidelidade (papel, wireframes) a alta fidelidade. 5) Teste (Test): validar protótipos com usuários, coletar feedback, aprender, iterar. Processo não-linear, iterativo. Mindset: foco no usuário, colaboração multidisciplinar, experimentação, tolerância ao erro, otimismo.',
    revealed: false
  },
  {
    id: 'q58',
    question: 'O que é design centrado no usuário e como aplicá-lo?',
    pageId: 'p58',
    answer: 'Design Centrado no Usuário (DCU/UCD) é filosofia e processo que coloca usuários no centro do desenvolvimento de produtos/serviços. Princípios: 1) Foco nos usuários: entender necessidades, objetivos, contexto, limitações. 2) Envolvimento ativo: usuários participam em todas as fases. 3) Design iterativo: ciclos de design-teste-refinamento. 4) Avaliação contínua: testar com usuários reais. Processo: 1) Pesquisa: entrevistas, observação, questionários, personas, jornadas do usuário. 2) Design: wireframes, mockups, arquitetura de informação, considerando usabilidade, acessibilidade. 3) Prototipagem: criar versões testáveis. 4) Teste de usabilidade: observar usuários interagindo, identificar problemas. 5) Iteração: refinar baseado em feedback. Métodos: card sorting, testes A/B, eye tracking, análise heurística. Benefícios: produtos mais usáveis, satisfação do usuário, redução de custos de retrabalho, vantagem competitiva. Relacionado: UX (experiência do usuário), UI (interface do usuário).',
    revealed: false
  },
  
  // Arquitetura e Urbanismo (2 perguntas)
  {
    id: 'q59',
    question: 'Quais são os princípios do planejamento urbano sustentável?',
    pageId: 'p59',
    answer: 'Planejamento urbano sustentável busca cidades ambientalmente responsáveis, socialmente justas e economicamente viáveis. Princípios: 1) Uso misto do solo: combinar residencial, comercial, serviços, reduzindo deslocamentos. 2) Densidade adequada: otimizar infraestrutura, viabilizar transporte público, preservar áreas verdes. 3) Mobilidade sustentável: priorizar transporte público, bicicletas, pedestres (TOD - Transit-Oriented Development). 4) Espaços públicos de qualidade: praças, parques, calçadas amplas, promovendo convivência. 5) Preservação ambiental: áreas verdes, corredores ecológicos, permeabilidade do solo. 6) Eficiência energética: edifícios sustentáveis, iluminação LED. 7) Gestão de resíduos e água: coleta seletiva, reuso. 8) Participação social: envolver comunidade nas decisões. 9) Equidade: acesso a serviços, moradia digna. Exemplos: Curitiba (transporte), Copenhague (bicicletas), Singapura (verticalização verde). Desafios: crescimento desordenado, especulação imobiliária, desigualdade.',
    revealed: false
  },
  {
    id: 'q60',
    question: 'O que é arquitetura bioclimática e quais suas estratégias?',
    pageId: 'p60',
    answer: 'Arquitetura bioclimática projeta edificações adaptadas ao clima local para maximizar conforto térmico e eficiência energética, minimizando uso de sistemas artificiais. Estratégias: 1) Orientação solar: posicionar ambientes conforme insolação (quartos a leste, salas a norte no hemisfério sul). 2) Ventilação natural: aberturas posicionadas para circulação de ar (ventilação cruzada), efeito chaminé. 3) Sombreamento: beirais, brises, vegetação, reduzindo ganho térmico no verão. 4) Inércia térmica: materiais com alta capacidade de armazenar calor (concreto, tijolo) para estabilizar temperatura. 5) Isolamento térmico: reduzir trocas de calor (lã de rocha, EPS). 6) Vegetação: telhados verdes, jardins verticais, árvores (sombra, evapotranspiração). 7) Cor e refletância: cores claras refletem radiação. 8) Aproveitamento de luz natural: iluminação zenital, prateleiras de luz. Benefícios: conforto, economia de energia, sustentabilidade. Ferramentas: simulação computacional, cartas solares, diagramas bioclimáticos.',
    revealed: false
  }
];

// Função auxiliar para obter pergunta com fonte completa
export function getQuestionWithSource(questionId: string): {
  question: Question;
  page: Page;
  book: Book;
} | null {
  const question = questions.find(q => q.id === questionId);
  if (!question) return null;

  const page = pages.find(p => p.id === question.pageId);
  if (!page) return null;

  const book = books.find(b => b.id === page.bookId);
  if (!book) return null;

  return { question, page, book };
}

// Função para obter todas as perguntas com suas fontes
export function getAllQuestionsWithSources() {
  return questions.map(question => {
    const page = pages.find(p => p.id === question.pageId)!;
    const book = books.find(b => b.id === page.bookId)!;
    return { question, page, book };
  });
}
