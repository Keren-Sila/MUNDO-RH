/**
 * MUNDO RH - Utilitários de Validação e Verificação
 */

import { normalizeText } from './helpers.js';

export function isAnswerCorrect(userInput, expectedAnswer) {
  if (!userInput || !expectedAnswer) return false;
  return normalizeText(userInput) === normalizeText(expectedAnswer);
}

export function validateQuestionOptions(options, correctIndex) {
  if (!Array.isArray(options) || options.length < 2) return false;
  if (typeof correctIndex !== 'number' || correctIndex < 0 || correctIndex >= options.length) {
    return false;
  }
  return true;
}

export function sanitizeHtml(str) {
  if (!str) return '';
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}
