fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(countries => { //hon b7t essm l object
        for (let index = 0; index< countries.length; index++) {
            var option = document.createElement('option');
            option.innerHTML=countries[index].name.common;
            document.getElementById('AK').appendChild(option);
            var g=document.createElement('g');
            g.innerHTML=countries[index].png;
            document.getElementById('flag').appendChild('g')    
        }
      })
