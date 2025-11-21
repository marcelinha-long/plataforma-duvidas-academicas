import { supabase } from './supabase';
import type { User } from '@supabase/supabase-js';

// Obter usuário autenticado
export async function getCurrentUser(): Promise<User | null> {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}

// Obter dados do usuário do banco
export async function getUserData(userId: string) {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', userId)
    .single();

  if (error) {
    console.error('Erro ao buscar dados do usuário:', error);
    return null;
  }

  return data;
}

// Atualizar contador de perguntas
export async function incrementUserQuestions(userId: string) {
  // Primeiro, buscar o usuário atual
  const userData = await getUserData(userId);
  
  if (!userData) return null;

  // Verificar se pode incrementar
  if (userData.subscription_plan === 'free' && userData.questions_used >= userData.questions_limit) {
    return null; // Limite atingido
  }

  // Incrementar contador
  const { data, error } = await supabase
    .from('users')
    .update({ questions_used: userData.questions_used + 1 })
    .eq('id', userId)
    .select()
    .single();

  if (error) {
    console.error('Erro ao incrementar perguntas:', error);
    return null;
  }

  return data;
}

// Verificar se usuário pode ver resposta
export async function canUserViewAnswer(userId: string): Promise<boolean> {
  const userData = await getUserData(userId);
  
  if (!userData) return false;

  // Planos pagos têm acesso ilimitado
  if (userData.subscription_plan === 'monthly' || userData.subscription_plan === 'annual') {
    return true;
  }

  // Plano gratuito tem limite
  return userData.questions_used < userData.questions_limit;
}

// Atualizar plano de assinatura
export async function updateSubscriptionPlan(
  userId: string, 
  plan: 'free' | 'monthly' | 'annual'
) {
  const { data, error } = await supabase
    .from('users')
    .update({ 
      subscription_plan: plan,
      questions_limit: plan === 'free' ? 4 : -1, // -1 = ilimitado
      subscription_active: true
    })
    .eq('id', userId)
    .select()
    .single();

  if (error) {
    console.error('Erro ao atualizar plano:', error);
    return null;
  }

  return data;
}

// Fazer logout
export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error('Erro ao fazer logout:', error);
  }
}
