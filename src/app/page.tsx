'use client';

import { useState } from 'react';
import { getAllQuestionsWithSources } from '@/lib/data';
import { BookOpen, Eye, EyeOff, GraduationCap, Search } from 'lucide-react';

export default function Home() {
  const allQuestions = getAllQuestionsWithSources();
  const [questions, setQuestions] = useState(allQuestions);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedArea, setSelectedArea] = useState<string>('all');

  const areas = ['all', 'Medicina', 'Enfermagem', 'Farmacologia'];

  const toggleAnswer = (questionId: string) => {
    setQuestions(prev =>
      prev.map(item =>
        item.question.id === questionId
          ? { ...item, question: { ...item.question, revealed: !item.question.revealed } }
          : item
      )
    );
  };

  const filteredQuestions = questions.filter(item => {
    const matchesSearch = item.question.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.page.theme.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesArea = selectedArea === 'all' || item.book.area === selectedArea;
    return matchesSearch && matchesArea;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2 sm:p-3 rounded-xl">
                <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  AcademIA
                </h1>
                <p className="text-xs sm:text-sm text-gray-600">Respostas com fontes acadêmicas</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
              <BookOpen className="w-4 h-4" />
              <span>{questions.length} perguntas disponíveis</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        {/* Intro Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Aprenda com <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Fontes Verificadas</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Cada resposta mostra primeiro a fonte bibliográfica, garantindo credibilidade acadêmica
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-6 sm:mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar perguntas ou temas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 sm:py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {areas.map(area => (
              <button
                key={area}
                onClick={() => setSelectedArea(area)}
                className={`px-4 py-2 rounded-lg font-medium transition-all text-sm sm:text-base ${
                  selectedArea === area
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-400'
                }`}
              >
                {area === 'all' ? 'Todas as Áreas' : area}
              </button>
            ))}
          </div>
        </div>

        {/* Questions List */}
        <div className="space-y-4 sm:space-y-6">
          {filteredQuestions.length === 0 ? (
            <div className="text-center py-12 sm:py-16">
              <p className="text-lg sm:text-xl text-gray-500">Nenhuma pergunta encontrada</p>
            </div>
          ) : (
            filteredQuestions.map(({ question, page, book }) => (
              <div
                key={question.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                {/* Question Header */}
                <div className="p-4 sm:p-6 lg:p-8">
                  <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-2 sm:p-3 rounded-lg flex-shrink-0">
                      <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 break-words">
                        {question.question}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-gray-600">
                        <span className="bg-blue-100 text-blue-700 px-2 sm:px-3 py-1 rounded-full font-medium">
                          {book.area}
                        </span>
                        <span className="hidden sm:inline">•</span>
                        <span className="break-words">{page.theme}</span>
                      </div>
                    </div>
                  </div>

                  {/* Source Information (Always Visible) */}
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 sm:p-6 mb-4 sm:mb-6 border border-blue-100">
                    <div className="flex items-start gap-3">
                      <div className="bg-white p-2 rounded-lg flex-shrink-0">
                        <BookOpen className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs sm:text-sm font-semibold text-blue-900 mb-2">
                          📚 Fonte Bibliográfica:
                        </p>
                        <div className="space-y-1 text-xs sm:text-sm text-gray-700">
                          <p className="font-bold break-words">{book.title}</p>
                          <p className="break-words">Autor: {book.author}</p>
                          <p>Edição: {book.edition}</p>
                          <p className="break-words">ISBN: {book.isbn}</p>
                          <p className="mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-blue-200">
                            <span className="font-semibold text-blue-700">📖 Página {page.pageNumber}</span>
                            <span className="text-gray-600 ml-2 block sm:inline">— {page.summary}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Answer Section (Toggleable) */}
                  {question.revealed ? (
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 sm:p-6 border border-green-100">
                      <div className="flex items-start gap-3 mb-3 sm:mb-4">
                        <div className="bg-white p-2 rounded-lg flex-shrink-0">
                          <Eye className="w-5 h-5 text-green-600" />
                        </div>
                        <p className="text-xs sm:text-sm font-semibold text-green-900">
                          ✅ Resposta Completa:
                        </p>
                      </div>
                      <p className="text-sm sm:text-base text-gray-800 leading-relaxed whitespace-pre-line break-words">
                        {question.answer}
                      </p>
                    </div>
                  ) : (
                    <div className="bg-gray-50 rounded-xl p-4 sm:p-6 border border-gray-200 text-center">
                      <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                        Clique no botão abaixo para ver a resposta completa
                      </p>
                    </div>
                  )}

                  {/* Toggle Button */}
                  <button
                    onClick={() => toggleAnswer(question.id)}
                    className={`w-full mt-4 sm:mt-6 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base ${
                      question.revealed
                        ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
                    }`}
                  >
                    {question.revealed ? (
                      <>
                        <EyeOff className="w-5 h-5" />
                        Ocultar Resposta
                      </>
                    ) : (
                      <>
                        <Eye className="w-5 h-5" />
                        Ver Resposta Completa
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Info */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10 border border-gray-100">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
              Por que fontes primeiro?
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Mostramos a fonte bibliográfica <span className="font-semibold text-blue-600">antes da resposta</span> para 
              garantir transparência acadêmica. Você sabe exatamente de onde vem cada informação, 
              permitindo consultar o material original e verificar a credibilidade do conteúdo.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
