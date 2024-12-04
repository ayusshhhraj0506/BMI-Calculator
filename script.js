function calculateBmi() {
  const weight = document.getElementById('weight').value;
  const height = document.getElementById('height').value;

  let bmi = weight / (height * height);

  document.getElementById('heading').innerHTML = 'Your BMI is :';
  document.getElementById('bmi-output').innerHTML = bmi.toFixed(1);

  if (bmi <= 18.5) {
    document.getElementById('message').innerHTML ='You are Under-weight';
  } else if (bmi >= 18.5 || bmi <= 24.9) {
    document.getElementById('message').innerHTML ='You are Normal-weight';
  } else if (bmi >= 25 || bmi <= 29.9) {
    document.getElementById('message').innerHTML = 'You are Over-weight';
  } else {
    document.getElementById('message').innerHTML = 'You are Obese ';
  }
}

function reload() {
  window.location.reload();
}
