/**
 * MUNDO RH - Componente de Barra de Progresso Reutilizável
 */

export function renderProgressBar({ current, total, label = '', showText = true, color = '#2563eb' }) {
  const percent = total > 0 ? Math.min(100, Math.round((current / total) * 100)) : 0;
  
  return `
    <div class="progress-container" role="progressbar" aria-valuenow="${percent}" aria-valuemin="0" aria-valuemax="100">
      ${label ? `<div class="progress-label"><span>${label}</span>${showText ? `<span class="progress-pct">${percent}%</span>` : ''}</div>` : ''}
      <div class="progress-track">
        <div class="progress-fill" style="width: ${percent}%; background: ${color};"></div>
      </div>
    </div>
  `;
}
