fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(countries => {
    for (let index = 0; index < countries.length; index++) {
      var option = document.createElement('option');
      option.innerHTML = countries[index].name.common;
      document.getElementById('AK').appendChild(option);
    }
  });

// Function to display the selected country's image
function displayCountryImage() {
  var select = document.getElementById('AK');
  var selectedCountry = select.options[select.selectedIndex].text;

  fetch('https://restcountries.com/v3.1/name/' + selectedCountry)
    .then(response => response.json())
    .then(data => {
      var imgSrc = data[0].flags.png;
      var img = document.createElement('img');
      img.src = imgSrc;
      img.alt = selectedCountry + ' Flag';
      
      var flagContainer = document.getElementById('flag');
      flagContainer.innerHTML = '';
      flagContainer.appendChild(img);
    });
}
