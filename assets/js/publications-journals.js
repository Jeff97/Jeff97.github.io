(function () {
  'use strict';
  const root = document.getElementById('journal-overview');
  if (!root) return;
  const styles = {
    'Journal of the Mechanics and Physics of Solids': ['JMPS', '#b8c9d5', 'jmps', '#162a3b'],
    'International Journal of Solids and Structures': ['IJSS', '#293f7a', 'ijss'],
    'International Journal of Engineering Science': ['IJES', '#922953', 'ijes'],
    'Thin-Walled Structures': ['TWS', '#23577e', 'tws'],
    'International Journal of Mechanical Sciences': ['IJMS', '#c8edf7', 'ijms', '#163340'],
    'Computer Methods in Applied Mechanics and Engineering': ['CMAME', '#203f80', 'cmame'],
    'Applied Mathematical Modelling': ['AMM', '#edc94d', 'amm', '#332b0c'],
    'Mathematics and Mechanics of Solids': ['MMS', '#243778', 'mms'],
    'Acta Mechanica Solida Sinica': ['AMSS', '#313b97', 'amss'],
    'Oxidation of Metals': ['OM', '#ba391e', 'om']
  };
  const counts = new Map();
  document.querySelectorAll('.publications-page .publication-venue em').forEach(function (venue) {
    const name = venue.textContent.trim();
    counts.set(name, (counts.get(name) || 0) + 1);
  });
  const journals = Array.from(counts, function ([name, count]) {
    const style = styles[name] || [name.split(/\s+/).map(word => word[0]).join(''), '#425c73', 'mesh'];
    return { name, count, abbr: style[0], color: style[1], motif: style[2], ink: style[3] || '#fff' };
  }).sort((a, b) => b.count - a.count || a.abbr.localeCompare(b.abbr));
  if (!journals.length) return;
  const total = journals.reduce((sum, journal) => sum + journal.count, 0);
  const map = root.querySelector('.journal-treemap');
  const detail = root.querySelector('.journal-detail');
  root.querySelector('.journal-total').textContent = journals.length + ' journals · ' + total + ' articles';
  function show(journal) {
    detail.hidden = false;
    journals.forEach(item => item.button.dataset.active = String(item === journal));
    detail.style.setProperty('--detail-color', journal.color);
    detail.querySelector('.journal-detail-name').textContent = journal.name;
    detail.querySelector('.journal-detail-count').textContent = journal.count + (journal.count === 1 ? ' article' : ' articles') + ' · ' + (journal.count / total * 100).toFixed(1) + '% of publications';
  }
  journals.forEach(function (journal) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'journal-tile';
    button.dataset.motif = journal.motif;
    button.dataset.count = journal.count;
    button.setAttribute('aria-label', journal.name + ': ' + journal.count + (journal.count === 1 ? ' article' : ' articles'));
    button.style.setProperty('--journal-color', journal.color);
    button.style.setProperty('--journal-ink', journal.ink);
    const abbr = document.createElement('span');
    abbr.className = 'journal-abbr';
    abbr.textContent = journal.abbr;
    const quantity = document.createElement('span');
    quantity.className = 'journal-quantity';
    quantity.textContent = journal.count + (journal.count === 1 ? ' article' : ' articles');
    button.append(abbr, quantity);
    ['pointerenter', 'focus', 'click'].forEach(event => button.addEventListener(event, () => show(journal)));
    journal.button = button;
    map.append(button);
  });
  function layout(items, x, y, width, height) {
    if (items.length === 1) {
      const journal = items[0];
      Object.assign(journal.button.style, { left: x + 'px', top: y + 'px', width: width + 'px', height: height + 'px' });
      const tileStyle = window.getComputedStyle(journal.button);
      const available = width - parseFloat(tileStyle.paddingLeft) - parseFloat(tileStyle.paddingRight)
        - parseFloat(tileStyle.borderLeftWidth) - parseFloat(tileStyle.borderRightWidth);
      // Increase journal names by 10px and article counts from 12px to 28px.
      // Fit each enlarged line to narrow tiles without clipping or word breaks.
      const labelSize = Math.min(32, available / (journal.abbr.length * 0.92), height / 3) + 10;
      journal.button.style.setProperty('--journal-label-size', labelSize + 'px');
      journal.button.style.setProperty('--journal-quantity-size', '28px');
      const abbr = journal.button.querySelector('.journal-abbr');
      const quantity = journal.button.querySelector('.journal-quantity');
      quantity.textContent = width < 76 ? String(journal.count) : journal.count + (journal.count === 1 ? ' article' : ' articles');
      const fittedLabelSize = labelSize * Math.min(1, Math.max(0, available - 1) / abbr.offsetWidth);
      const fittedQuantitySize = 28 * Math.min(1, Math.max(0, available - 1) / quantity.offsetWidth);
      const availableHeight = height - parseFloat(tileStyle.paddingTop) - parseFloat(tileStyle.paddingBottom)
        - parseFloat(tileStyle.borderTopWidth) - parseFloat(tileStyle.borderBottomWidth) - parseFloat(tileStyle.rowGap);
      const heightScale = Math.min(1, Math.max(0, availableHeight - 1) / (fittedLabelSize * 1.2 + fittedQuantitySize * 1.3));
      journal.button.style.setProperty('--journal-label-size', fittedLabelSize * heightScale + 'px');
      journal.button.style.setProperty('--journal-quantity-size', fittedQuantitySize * heightScale + 'px');
      return;
    }
    const sum = items.reduce((s, item) => s + item.count, 0);
    let split = 1, cumulative = items[0].count;
    while (split < items.length - 1 && Math.abs(cumulative + items[split].count - sum / 2) < Math.abs(cumulative - sum / 2)) {
      cumulative += items[split++].count;
    }
    const ratio = cumulative / sum;
    if (width >= height) {
      layout(items.slice(0, split), x, y, width * ratio, height);
      layout(items.slice(split), x + width * ratio, y, width * (1 - ratio), height);
    } else {
      layout(items.slice(0, split), x, y, width, height * ratio);
      layout(items.slice(split), x, y + height * ratio, width, height * (1 - ratio));
    }
  }
  root.hidden = false;
  function redraw() { layout(journals, 0, 0, map.clientWidth, map.clientHeight); }
  redraw();
  if (document.fonts) document.fonts.ready.then(redraw);
  if (window.ResizeObserver) new ResizeObserver(redraw).observe(map);
  else window.addEventListener('resize', redraw);
}());
