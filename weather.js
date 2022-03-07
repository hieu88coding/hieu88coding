const wrapper =document.querySelector('.wrapper');
var inputPart =document.querySelector('.input-part');
var inputField = inputPart.querySelector('input');
var desc =document.querySelector('.desc');
var arrow =document.querySelector('.arrow');
var arrow_span =document.querySelector('.arrow span');
var arrowBack = wrapper.querySelector(".arrow i");
var wIcon =wrapper.querySelector('img');
const blogname =document.querySelector('.blogname');
var new_weather =document.getElementById('new-weather');
var music_feel =document.getElementById('music_feel');


let api;


inputField.addEventListener("keyup", e =>{
    if(e.key == "Enter" && inputField.value != ""){
        requestApi(inputField.value);
    }
}); 

function requestApi(city){
  api =`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=f922718fb7a613d97b21653c8649e105`;
  fetchData();
}

function fetchData(){
  fetch(api)
    .then(res => res.json())
    .then(result => weatherDetails(result));
}


function weatherDetails(info){
  if(info.cod =="404"){
    alert("Sai tên thành phố rùi bạn ơi :))");
  }else{
    const city = info.name;
    const country= info.sys.country;
    const {description,id} =info.weather[0];
    const {humidity, temp} =info.main;
    
    if(id == 800){
            wIcon.src = "icons/clear.svg";
            add_Child(new_weather,"Trời quang mây tạnh.")
            add_Child(music_feel,"chill")
        }else if(id >= 200 && id <= 232){
            wIcon.src = "icons/storm.svg";
            add_Child(new_weather,"Mưa gió bão bùng.")
            add_Child(music_feel,"tình")
        }else if(id >= 600 && id <= 622){
            wIcon.src = "icons/snow.svg";
        }else if(id >= 701 && id <= 781){
            wIcon.src = "icons/haze.svg";
            add_Child(new_weather,"Khói tỏa mùa sương.")
            add_Child(music_feel,"tình")
        }else if(id >= 801 && id <= 804){
            wIcon.src = "icons/cloud.svg";
            add_Child(new_weather,"Mây mer~~")
            add_Child(music_feel,"tình")
        }else if((id >= 500 && id <= 531) || (id >= 300 && id <= 321)){
            wIcon.src = "icons/rain.svg";
            add_Child(new_weather,"Mưa lạnh.")
            add_Child(music_feel,"buồn") 
            
        }
    
    document.querySelector('.temp .numb').innerText =temp;
    
    document.querySelector('.location .head').innerText =`${city}, ${country}`;
    
    document.querySelector('.desc .head').innerText =description;
    
    document.querySelector('.humidity .head ').innerText =`${humidity}%`;
    
    wrapper.classList.add("active");
    inputField.value = "";
    blogname.classList.add("active");
    var p = document.createTextNode("Quay lại");
    arrow.replaceChild(p,arrow_span);
    
    
  }
}

function add_Child(vari,name){
  var newNode = document.createTextNode(name);
  vari.appendChild(newNode);
  return vari;
}





arrowBack.addEventListener("click", ()=>{
    wrapper.classList.remove("active");
});

