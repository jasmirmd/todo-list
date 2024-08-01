import './base.css';

import Default from './js/default';

document.addEventListener('DOMContentLoaded', Default);

// this to avoid page reload after pressing enter in input
window.addEventListener('keydown', (e) => {
  if(e.key === 'Enter') e.preventDefault();
});