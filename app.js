// TrænPlan Foundation Beta v0.4 RC3

// Founder Patch RC3

const app = {

  xp: Number(localStorage.getItem('tp_xp') || 90),

  todayDone: localStorage.getItem('tp_today_done') === 'true'

};

function save() {

  localStorage.setItem('tp_xp', app.xp);

  localStorage.setItem('tp_today_done', app.todayDone);

}

function renderHome() {

  const btn = document.getElementById('openTrainingButton');

  if (!btn) return;

  btn.onclick = openTraining;

  const xp = document.getElementById('xpValue');

  if (xp) xp.textContent = app.xp;

  if (app.todayDone) {

    btn.textContent = '✅ Dagens træning gennemført';

    btn.disabled = true;

  }

}

function openTraining() {

  const view = document.getElementById('trainingView');

  if (!view) return;

  view.hidden = false;

  view.innerHTML = `

    <div class="card dark">

      <h2>🏃 Rolig løbetur</h2>

      <p>30 minutter • Zone 2</p>

      <p><b>Opvarmning:</b> 5 min rolig jog.</p>

      <p><b>Hovedpas:</b> 20 min let tempo.</p>

      <p><b>Nedjog:</b> 5 min rolig jog.</p>

      <button id="finishWorkout">Gennemfør træning (+25 XP)</button>

    </div>

  `;

  document.getElementById('finishWorkout').onclick = () => {

    if (!app.todayDone) {

      app.todayDone = true;

      app.xp += 25;

      save();

    }

    view.hidden = true;

    renderHome();

  };

}

document.addEventListener('DOMContentLoaded', renderHome);
