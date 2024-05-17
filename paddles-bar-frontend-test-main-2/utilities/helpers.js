export const parse = (json, fallback = false) => {
  try {
    if (json === null || json === '') {
      return fallback;
    }

    return JSON.parse(json) || fallback;
  } catch (e) {
    console.error(e);
    return fallback;
  }
};

// abbreviate class name with a prefix
export const _classes = (styles) => (name) => {
  if (typeof name === 'string') {
    return styles[name] || name || '';
  }

  if (Array.isArray(name)) {
    return name.map((n) => styles[n] || n || '').join(' ');
  }

  return '';
};
