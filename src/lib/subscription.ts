import { SubscriptionStatus, PricingPlan } from './types';

// Chave para armazenar dados no localStorage
const STORAGE_KEY = 'academia_subscription';

// Planos de assinatura disponíveis
export const pricingPlans: PricingPlan[] = [
  {
    id: 'free',
    name: 'Gratuito',
    price: 0,
    period: 'sempre',
    features: [
      '4 perguntas gratuitas',
      'Acesso a todas as áreas',
      'Fontes bibliográficas completas',
      'Respostas acadêmicas verificadas'
    ]
  },
  {
    id: 'monthly',
    name: 'Mensal',
    price: 29.90,
    period: 'mês',
    features: [
      'Perguntas ilimitadas',
      'Acesso a todas as áreas',
      'Fontes bibliográficas completas',
      'Respostas acadêmicas verificadas',
      'Suporte prioritário',
      'Novos conteúdos semanais'
    ],
    popular: true
  },
  {
    id: 'annual',
    name: 'Anual',
    price: 299.90,
    period: 'ano',
    features: [
      'Perguntas ilimitadas',
      'Acesso a todas as áreas',
      'Fontes bibliográficas completas',
      'Respostas acadêmicas verificadas',
      'Suporte prioritário',
      'Novos conteúdos semanais',
      '2 meses grátis',
      'Certificado de conclusão'
    ]
  }
];

// Obter status da assinatura do localStorage
export function getSubscriptionStatus(): SubscriptionStatus {
  if (typeof window === 'undefined') {
    return {
      plan: 'free',
      questionsUsed: 0,
      questionsLimit: 4,
      isActive: true
    };
  }

  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    return JSON.parse(stored);
  }

  // Status inicial para novos usuários
  const initialStatus: SubscriptionStatus = {
    plan: 'free',
    questionsUsed: 0,
    questionsLimit: 4,
    isActive: true
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(initialStatus));
  return initialStatus;
}

// Salvar status da assinatura
export function saveSubscriptionStatus(status: SubscriptionStatus): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(status));
}

// Incrementar contador de perguntas usadas
export function incrementQuestionsUsed(): SubscriptionStatus {
  const status = getSubscriptionStatus();
  
  if (status.plan === 'free' && status.questionsUsed < status.questionsLimit) {
    status.questionsUsed += 1;
    saveSubscriptionStatus(status);
  }
  
  return status;
}

// Verificar se usuário pode ver mais respostas
export function canViewAnswer(): boolean {
  const status = getSubscriptionStatus();
  
  // Planos pagos têm acesso ilimitado
  if (status.plan === 'monthly' || status.plan === 'annual') {
    return true;
  }
  
  // Plano gratuito tem limite de 4 perguntas
  return status.questionsUsed < status.questionsLimit;
}

// Ativar assinatura (simulação - em produção seria integrado com gateway de pagamento)
export function activateSubscription(plan: 'monthly' | 'annual'): SubscriptionStatus {
  const status: SubscriptionStatus = {
    plan,
    questionsUsed: 0,
    questionsLimit: -1, // Ilimitado
    isActive: true
  };
  
  saveSubscriptionStatus(status);
  return status;
}

// Resetar para plano gratuito (para testes)
export function resetToFree(): void {
  const status: SubscriptionStatus = {
    plan: 'free',
    questionsUsed: 0,
    questionsLimit: 4,
    isActive: true
  };
  
  saveSubscriptionStatus(status);
}
