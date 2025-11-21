// Tipos para a plataforma educacional

export type Area = 
  | 'Administração / Gestão'
  | 'Economia'
  | 'Engenharia Civil'
  | 'Engenharia Mecânica'
  | 'Engenharia Elétrica'
  | 'Engenharia de Software'
  | 'Computação / Ciência da Computação'
  | 'Educação / Pedagogia'
  | 'Psicologia'
  | 'Direito'
  | 'Medicina'
  | 'Enfermagem'
  | 'Farmácia'
  | 'Saúde Pública'
  | 'Biologia / Ciências Biológicas'
  | 'Química / Física'
  | 'Comunicação / Jornalismo'
  | 'Marketing'
  | 'Finanças'
  | 'Recursos Humanos'
  | 'Relações Internacionais'
  | 'Direito Ambiental'
  | 'Inteligência Artificial'
  | 'Big Data / Data Science'
  | 'Gestão Pública'
  | 'Sustentabilidade'
  | 'Neurociência'
  | 'Design'
  | 'Arquitetura e Urbanismo'
  | 'Psicopedagogia';

export interface Book {
  id: string;
  title: string;
  author: string;
  edition: string;
  isbn: string;
  area: Area;
}

export interface Page {
  id: string;
  bookId: string;
  pageNumber: number;
  theme: string;
  summary: string;
}

export interface Question {
  id: string;
  question: string;
  pageId: string;
  answer: string;
  revealed: boolean;
}

export interface QuestionWithSource extends Question {
  book: Book;
  page: Page;
}
