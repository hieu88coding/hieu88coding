var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var cityName =document.querySelector('.name');
var desc =document.querySelector('.desc');
//var temp =document.querySelector('.temp .numb');



button.addEventListener('click', function(){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&units=metric&appid=f922718fb7a613d97b21653c8649e105')
 .then(response => response.json())
 .then(data => weatherDetails(data))
});

function weatherDetails(info){
  if(info.cod =="404"){
    alert("Sai tên thành phố tùi bạn ơi :))");
  }else{
    const city = info.name;
    const country= info.sys.name;
    const {desc,id} =info.weather[0];
    const {humidity, temp} =info.main;
    
    temp.innerText =temp;
  }
}

