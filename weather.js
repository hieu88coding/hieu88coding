const wrapper =document.querySelector('.wrapper');
var button = document.querySelector('.button');
var inputValue = document.querySelector('input');
var cityName =document.querySelector('.name');
var desc =document.querySelector('.desc');
const temp =document.querySelector('.temp .numb');

let api;


inputValue.addEventListener("keyup", e =>{
    if(e.key == "Enter" && inputValue.value != ""){
        requestApi(inputValue.value);
    }
}); 

function requestApi(city){
  api =`https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&units=metric&appid=f922718fb7a613d97b21653c8649e105`;
  fetchData();
}

function fetchData(){
  fetch(api)
    .then(res => res.json())
    .then(result => weatherDetails(result))
}


function weatherDetails(info){
  if(info.cod =="404"){
    alert("Sai tên thành phố rùi bạn ơi :))");
  }else{
    const city = info.name;
    const country= info.sys.country;
    const {description,id} =info.weather[0];
    const {humidity, temp} =info.main;
    
    document.querySelector('.temp .numb').innerText =temp;
    
    document.querySelector('.location span').innerText =`${city}, ${country}`;
    
    document.querySelector('.desc').innerText =description;
    
    document.querySelector('.humidity span ').innerText =`${humidity}%`;
    
    wrapper.classList.add("active");
    
  }
}

