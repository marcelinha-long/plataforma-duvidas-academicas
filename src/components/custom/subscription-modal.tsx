'use client';

import { X, Check, Crown, Zap } from 'lucide-react';
import { pricingPlans } from '@/lib/subscription';
import type { SubscriptionPlan } from '@/lib/types';

interface SubscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPlan: (plan: SubscriptionPlan) => void;
  questionsUsed: number;
  questionsLimit: number;
}

export default function SubscriptionModal({
  isOpen,
  onClose,
  onSelectPlan,
  questionsUsed,
  questionsLimit
}: SubscriptionModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-3xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 sm:p-8 rounded-t-3xl">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-all"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
              <Crown className="w-8 h-8" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-2">
              Limite de Perguntas Atingido
            </h2>
            <p className="text-lg text-white/90">
              Você usou {questionsUsed} de {questionsLimit} perguntas gratuitas
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          <p className="text-center text-gray-600 mb-8 text-lg">
            Continue aprendendo com acesso ilimitado! Escolha o plano ideal para você:
          </p>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-2xl border-2 p-6 transition-all hover:shadow-xl ${
                  plan.popular
                    ? 'border-purple-500 shadow-lg scale-105'
                    : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Zap className="w-4 h-4" />
                      Mais Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-gray-900">
                      R$ {plan.price.toFixed(2).replace('.', ',')}
                    </span>
                    <span className="text-gray-600">/{plan.period}</span>
                  </div>
                  {plan.id === 'annual' && (
                    <p className="text-sm text-green-600 font-semibold mt-2">
                      Economize R$ 58,90
                    </p>
                  )}
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => onSelectPlan(plan.id)}
                  disabled={plan.id === 'free'}
                  className={`w-full py-3 rounded-xl font-semibold transition-all ${
                    plan.id === 'free'
                      ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      : plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                  }`}
                >
                  {plan.id === 'free' ? 'Plano Atual' : 'Assinar Agora'}
                </button>
              </div>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
              Por que assinar o AcademIA?
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="bg-blue-600 p-2 rounded-lg flex-shrink-0">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Conteúdo Verificado</h4>
                  <p className="text-sm text-gray-600">
                    Todas as respostas com fontes bibliográficas acadêmicas
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-purple-600 p-2 rounded-lg flex-shrink-0">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Sempre Atualizado</h4>
                  <p className="text-sm text-gray-600">
                    Novos conteúdos adicionados semanalmente
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-pink-600 p-2 rounded-lg flex-shrink-0">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Todas as Áreas</h4>
                  <p className="text-sm text-gray-600">
                    Acesso completo a 24+ áreas de pós-graduação
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-indigo-600 p-2 rounded-lg flex-shrink-0">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Suporte Dedicado</h4>
                  <p className="text-sm text-gray-600">
                    Tire suas dúvidas com nossa equipe especializada
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <p className="text-center text-sm text-gray-500 mt-6">
            💳 Pagamento seguro • 🔒 Cancele quando quiser • ✅ Garantia de 7 dias
          </p>
        </div>
      </div>
    </div>
  );
}
