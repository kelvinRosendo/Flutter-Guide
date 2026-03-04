// CURSOR
const cur = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
  cur.style.left = mx + 'px';
  cur.style.top = my + 'px';
});

(function animR() {
  rx += (mx - rx) * .12;
  ry += (my - ry) * .12;
  ring.style.left = rx + 'px';
  ring.style.top = ry + 'px';
  requestAnimationFrame(animR);
})();

document.querySelectorAll('button,a,.ov-card,.cmd-card,.os-card,.sidebar-step').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cur.style.width = '20px';
    cur.style.height = '20px';
    ring.style.width = '48px';
    ring.style.height = '48px';
  });
  el.addEventListener('mouseleave', () => {
    cur.style.width = '12px';
    cur.style.height = '12px';
    ring.style.width = '36px';
    ring.style.height = '36px';
  });
});

// PARTICLES
(function () {
  const w = document.getElementById('particles');
  for (let i = 0; i < 25; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const sz = Math.random() * 4 + 1;
    p.style.cssText = `width:${sz}px;height:${sz}px;left:${Math.random() * 100}%;bottom:-10px;animation-duration:${8 + Math.random() * 12}s;animation-delay:${Math.random() * 10}s;background:${Math.random() > .5 ? 'var(--acc)' : 'var(--teal)'};`;
    w.appendChild(p);
  }
})();

// STATE
const N = 5;
const done = Array(N).fill(false);

function toggle(i) {
  const cards = document.querySelectorAll('.step-card');
  const isA = cards[i].classList.contains('active');
  cards.forEach(c => c.classList.remove('active'));
  if (!isA) cards[i].classList.add('active');
  updateSidebar(isA ? -1 : i);
}

function jumpTo(i) {
  const cards = document.querySelectorAll('.step-card');
  cards.forEach(c => c.classList.remove('active'));
  cards[i].classList.add('active');
  cards[i].scrollIntoView({ behavior: 'smooth', block: 'center' });
  updateSidebar(i);
}

function markDone(i) {
  done[i] = true;
  document.querySelectorAll('.step-card')[i].classList.add('done');
  updateProgress();
}

function next(i) {
  markDone(i);
  const cards = document.querySelectorAll('.step-card');
  cards.forEach(c => c.classList.remove('active'));
  if (i + 1 < N) {
    cards[i + 1].classList.add('active');
    setTimeout(() => cards[i + 1].scrollIntoView({ behavior: 'smooth', block: 'center' }), 100);
    updateSidebar(i + 1);
  }
}

function checkAll() {
  if (done.every(Boolean)) {
    const c = document.getElementById('completion');
    c.classList.add('show');
    setTimeout(() => c.scrollIntoView({ behavior: 'smooth', block: 'center' }), 100);
  }
}

function updateSidebar(active) {
  document.querySelectorAll('.sidebar-step').forEach((s, i) => {
    s.classList.remove('active');
    s.classList.toggle('done', done[i]);
    if (i === active) s.classList.add('active');
  });
}

function updateProgress() {
  const cnt = done.filter(Boolean).length;
  const pct = (cnt / N * 100) + '%';
  document.getElementById('spFill').style.width = pct;
  document.getElementById('navProgFill').style.width = pct;
  document.getElementById('spDone').textContent = cnt;
  document.getElementById('navProgText').textContent = cnt + '/5';
  document.querySelectorAll('.sidebar-step').forEach((s, i) => s.classList.toggle('done', done[i]));
}

function selectOS(el, os) {
  document.querySelectorAll('.os-card').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  ['win', 'mac', 'linux'].forEach(k => {
    document.getElementById('os-' + k).style.display = k === os ? '' : 'none';
  });
}

function cp(text, btn) {
  navigator.clipboard.writeText(text).then(() => {
    const o = btn.textContent;
    btn.textContent = 'copiado!';
    btn.style.color = 'var(--teal)';
    setTimeout(() => {
      btn.textContent = o;
      btn.style.color = '';
    }, 1600);
  });
}
