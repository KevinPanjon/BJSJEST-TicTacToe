const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const html = fs.readFileSync(path.resolve(__dirname, 'app.html'), 'utf8');

let dom;
let container;
let cells;

beforeEach(() => {
  dom = new JSDOM(html, { runScripts: 'dangerously' });
  container = dom.window.document.querySelector('.board');
  cells = dom.window.document.querySelectorAll('.cell');
});

test('Initial state of the board', () => {
  expect(container).not.toBeNull();
  expect(cells.length).toBe(9);

  cells.forEach(cell => {
    expect(cell.textContent).toBe('');
  });
});

