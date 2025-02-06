let count = 0;
const countDisplay = document.getElementById('countDisplay');
const incrementButton = document.getElementById('incrementButton');
const resetButton = document.getElementById('resetButton');
const ledbutton = document.getElementById("ledbutton")
const display = document.querySelector(".display")

incrementButton.addEventListener('click', () => {
  count++;
  updateDisplay();
  const sound = new Audio('./audios/click.wav');
  sound.play().catch(error => console.log(error));
  if (count % 33 == 0){
    const sound1 = new Audio("./audios/beep.wav")
    sound1.play()
  }
});

resetButton.addEventListener('click', () => {
  count = 0;
  updateDisplay();
  const sound = new Audio('./audios/click.wav');
  sound.play().catch(error => console.log(error));
});
ledbutton.addEventListener('click',() => {
  display.classList.toggle("displayJs")

  const sound = new Audio('./audios/click.wav');
  sound.play().catch(error => console.log(error));
});



function updateDisplay() {
  countDisplay.textContent = count;
}

