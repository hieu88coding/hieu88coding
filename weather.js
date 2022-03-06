var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var cityName =document.querySelector('.name');
var desc =document.querySelector('.desc');
var temp =document.querySelector('.numb');



button.addEventListener('click', function(){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&units=metric&appid=f922718fb7a613d97b21653c8649e105')
 .then(response => response.json())
 .then(data => {
     var nameValue =data['name'];
     var descValue = data['weather'][0]['description'];
     var tempValue = data['main']['temp'];

     cityName.innerHTML =nameValue;
     temp.innerHTML =tempValue;
     desc.innerHTML =descValue;
 })

 .catch(err => alert("Sai tên thành phố rùi bạn ei :))"))
})

