const form = document.querySelector('form');

// const height = parseInt(document.querySelector('#height').value)        --->       this usecase will give you empty

form.addEventListener('submit', function (e) {               //to stop default action of form
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#BMI-result');

  if (height === '' || height < 0 || isNaN(height)) {           //don't use height != NaN, use NaN() method (if ht= no. then isNaN will be true)
    results.innerHTML = `Please give a valid height ${height}`;
    results.style.color = "red"
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
   
    results.innerHTML = ` Your BMI is:- ${bmi}`;                  //show the result
    results.style.color = "aqua"
  }
});

