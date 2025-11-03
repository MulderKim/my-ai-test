export const SCORE_MAP = { A: 3, B: 2, C: 1 };


export const sectionOf = (idx) => {
// idx는 0-based
const qn = idx + 1;
if (qn <= 15) return 'communication';
if (qn <= 30) return 'persistence';
return 'ai';
};


export function interpret(avg, labels) {
// labels: { high, mid, low }
if (avg > 2.5) return labels.high;
if (avg > 1.8) return labels.mid;
return labels.low;
}


export function saveState(state) {
localStorage.setItem('ai-40q-state', JSON.stringify(state));
}


export function loadState() {
try {
const raw = localStorage.getItem('ai-40q-state');
return raw ? JSON.parse(raw) : null;
} catch (e) {
return null;
}
}


export function resetState() {
localStorage.removeItem('ai-40q-state');
}