const wrapper =document.querySelector('.wrapper');
var inputPart =document.querySelector('.input-part');
var button = document.querySelector('.button');
var inputField = inputPart.querySelector('.input input');
var cityName =document.querySelector('.name');
var desc =document.querySelector('.desc');
const temp =document.querySelector('.temp .numb');

let api;


inputField.addEventListener("keyup", e =>{
    if(e.key == "Enter" && inputField.value != ""){
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
    inputValue.value = ""
    
    
  }
}

