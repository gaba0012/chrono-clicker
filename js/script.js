let energy = 0;
let clickPower = 1;
let autoPower = 0;

function updateDisplay() {
  document.getElementById('energy').textContent = energy;
  document.getElementById('clickPower').textContent = clickPower;
  document.getElementById('autoPower').textContent = autoPower;
  document.getElementById('click-cost').textContent = 50 * clickPower;
  document.getElementById('auto-cost').textContent = 100 * (autoPower + 1);
}

document.getElementById('rift-img').addEventListener('click', function () {
  energy += clickPower;
  updateDisplay();
});

document.getElementById('upgrade-click').addEventListener('click', function () {
  let cost = 50 * clickPower;
  if (energy >= cost) {
    energy -= cost;
    clickPower++;
    updateDisplay();
  }
});

document.getElementById('upgrade-auto').addEventListener('click', function () {
  let cost = 100 * (autoPower + 1);
  if (energy >= cost) {
    energy -= cost;
    autoPower++;
    updateDisplay();
  }
});

setInterval(() => {
  energy += autoPower;
  updateDisplay();
}, 1000);

updateDisplay();
