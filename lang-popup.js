import { langs } from './get-github-string.js'

const langPopup = document.getElementById('lang-popup');
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modal-close');

langPopup.addEventListener('click', () => {

  modal.classList.remove('modal-hidden');
  modal.classList.add('modal-visible');
  document.body.classList.add('modal-open');
});

modalClose.addEventListener('click', () => {
  modal.classList.remove('modal-visible');
  modal.classList.add('modal-hidden');
  document.body.classList.remove('modal-open');
});

modal.querySelector('.modal-overlay').addEventListener('click', () => {
  modalClose.click();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('modal-visible')) {
    modalClose.click();
  }
});


const seen = new Set();
const allLangs = [];
for (const levelList of langs) {
  for (const lang of levelList) {
    if (!seen.has(lang)) {
      seen.add(lang);
      allLangs.push(lang);
    }
  }
}

const langToLevel = new Map();
langs.forEach((levelList, idx) => {
  const level = idx + 1;
  for (const lang of levelList) {
    langToLevel.set(lang, level);
  }
});

// Column headers: Level 1, Level 2, Level 3, Level 4, Level 5
// Rows: languages
// For each language row:
//    For each level column:
//       If lang level >= col level: show checkmarks equal to col number
//       Else empty cell

function createTable() {
  const levelsCount = langs.length; // 5

  let html = '<table border="1" cellspacing="0" cellpadding="4">\n';

  html += '  <thead>\n';
  html += '    <tr><th style="background-color:black"></th><th colspan="' + levelsCount + '" style="text-align:center;">Expertise</th></tr>\n';

  html += '    <tr><th>Language</th>';
//   for (let i = 1; i <= levelsCount; i++) {
//     html += `<th>Level ${i}</th>`;
//   }
  html += '<th>Beginner</th><th>Intermediate</th><th>Advanced</th><th>Impossible</th><th>These Aren\'t Even Languages</th>'
  html += '</tr>\n';
  html += '  </thead>\n';

  html += '  <tbody>\n';

  for (const lang of allLangs) {
    const lvl = langToLevel.get(lang);

    html += `    <tr><td>${lang}</td>`;

    for (let colLevel = 1; colLevel <= levelsCount; colLevel++) {
      if (lvl >= colLevel) {
        // show checkmarks equal to col level
        const checks = '✓'.repeat(colLevel);
        html += `<td style="text-align:center;">${checks}</td>`;
      } else {
        html += `<td></td>`;
      }
    }

    html += '</tr>\n';
  }

  html += '  </tbody>\n</table>';

  ////// description segment
  html += `<hr><div><h4 style='margin-bottom: 1em'>Cumulative Language Counts:</h4>`
  html += `Beginner: <strong>${langs[0].length}</strong><br>
  Intermediate: <strong>${langs[0].length+langs[1].length}</strong><br>
  Advanced: <strong>${langs[0].length+langs[1].length+langs[2].length}</strong><br>
Impossible: <strong>${langs[0].length+langs[1].length+langs[2].length+langs[3].length}</strong><br>
  These Aren't Even Languages: <strong>${langs[0].length+langs[1].length+langs[2].length+langs[3].length+langs[4].length}</strong><br>

  </div>`

  return html;
}

const tableInsertion = document.getElementById("table-here");
tableInsertion.innerHTML = createTable();

let style = document.createElement('style');
    style.textContent = `

    table {
  border-collapse: collapse;
  width: 100%;
}

table, th, td {
  border: 1px solid black;
}
  .modal-hidden {
    display: none;
  }
  
  .modal-visible {
    display: block;
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    z-index: 1000;
  }
  
  .modal-overlay {
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0,0,0,0.5);
  }
  
  .modal-content {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    max-height: 80vh;
    width: 60vw;
    max-width: 80vw;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.3);
    display: flex;
    flex-direction: column;
  }
  
  #modal-close {
    align-self: flex-end;
    font-size: 1.5rem;
    border: none;
    background: transparent;
    cursor: pointer;
    padding: 0.5rem 1rem;
    line-height: 1;
  }
  
  .modal-body {
    overflow-y: auto;
    padding: 1rem 1.5rem 1.5rem;
    flex-grow: 1;
  }

  body.modal-open {
    overflow: hidden;
  }
    `
    document.head.appendChild(style);