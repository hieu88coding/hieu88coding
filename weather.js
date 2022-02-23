var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var cityName =document.querySelector('.name');
var desc =document.querySelector('.desc');
var temp =document.querySelector('.temp');

button.addEventListener('click', function(){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=f922718fb7a613d97b21653c8649e105')
 .then(response => response.json())
 .then(data => {
     var nameValue =data['name'];
     var tempValue = data['main']['temp']-273.15;
     var descValue = data['weather'][0]['description'];

     cityName.innerHTML =nameValue;
     temp.innerHTML =tempValue;
     desc.innerHTML =descValue;
 })

 .catch(err => alert("Wrong City Name!"))
})

if(tempValue)
