import confetti from 'canvas-confetti';

/**
 * Immutably updates a nested property in an object using a dot-delimited path.
 * Example: setNestedProperty(state, 'hero.stats.count', '75K')
 */
export function setNestedProperty(sourceObj, path, value) {
  const result = JSON.parse(JSON.stringify(sourceObj));
  const keys = path.split('.');
  let current = result;

  for (let i = 0; i < keys.length - 1; i += 1) {
    const key = keys[i];
    if (!current[key]) {
      current[key] = {};
    }
    current = current[key];
  }

  current[keys[keys.length - 1]] = value;
  return result;
}

/**
 * Triggers subtle celebration confetti with luxury gold accents.
 */
export function triggerGoldConfetti(originY = 0.5) {
  confetti({
    particleCount: 45,
    spread: 60,
    origin: { y: originY },
    colors: ['#d5a73e', '#e8c374', '#ffffff', '#c28e2d'],
    disableForReducedMotion: true,
  });
}

/**
 * Triggers a browser download for a JSON data object.
 */
export function downloadJson(data, filename = 'portfolio-content.json') {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  URL.revokeObjectURL(url);
}

