const wrapper =document.querySelector('.wrapper');
var inputPart =document.querySelector('.input-part');
var inputField = inputPart.querySelector('input');
var desc =document.querySelector('.desc');
var arrow =document.querySelector('.arrow');
var arrow_span =document.querySelector('.arrow span');
var arrowBack = wrapper.querySelector(".arrow i");
var wIcon =document.querySelector('header');
const blogname =document.querySelector('.blogname');
var new_weather =document.getElementById('new-weather');
var music_feel =document.getElementById('music_feel');
var display_part =document.querySelector('display_part');
var header =document.querySelector('header');


let api;

var p = document.createElement('span');
p.innerHTML ="Quay lại";

const colorButton =document.querySelector('.wrapper-color-switch')
const colorSwitch = document.getElementById("input-color-switch");




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
            wIcon.style.background = " url('https://wallpaperaccess.com/full/478348.jpg')";
            add_Text(new_weather,"Trời quang mây tạnh.")
            add_Links(music_feel,"nhạc chill","https://www.youtube.com/playlist?list=PLYi2OL7Hp1baKrDEy8GzXVhonwdS6hbpk")
        }else if(id >= 200 && id <= 232){
            wIcon.src = "icons/storm.svg";
            add_Text(new_weather,"Mưa gió bão bùng.")
            add_Links(music_feel,"piano thư giãn", "https://www.youtube.com/playlist?list=PLYi2OL7Hp1bbtOYUBi1sDg3PpHvzjT4GE")
        }else if(id >= 600 && id <= 622){
            wIcon.src = "icons/snow.svg";
        }else if(id >= 701 && id <= 781){
            wIcon.src = "icons/haze.svg";
            add_Text(new_weather,"Khói tỏa mù sương.")
            add_Links(music_feel,"nhạc tình", "https://www.youtube.com/playlist?list=PLYi2OL7Hp1bbWR6EZZx8tC8MBJLGcQ4-Y")
        }else if(id >= 801 && id <= 804){
            wIcon.style.background ="url('https://i.pinimg.com/originals/4b/40/6f/4b406f08d46ff55aebdb98071070684f.jpg')"
            add_Text(new_weather,"Mây mer~~")
            add_Links(music_feel,"nhạc tình","https://www.youtube.com/playlist?list=PLYi2OL7Hp1bbWR6EZZx8tC8MBJLGcQ4-Y")
        }else if((id >= 500 && id <= 531) || (id >= 300 && id <= 321)){
            wIcon.style.background = "url('https://wallpaperaccess.com/full/1358748.jpg')";
            add_Text(new_weather,"Mưa lạnh.")
            add_Links(music_feel,"nhạc sầuuu","https://www.youtube.com/playlist?list=PLYi2OL7Hp1bbB0Ccjh8xz0uVjwB1c4Vsg") 
            
        }
    
    document.querySelector('.temp .numb').innerText =temp;
    
    document.querySelector('.location .head').innerText =`${city}, ${country}`;
    
    document.querySelector('.desc .head').innerText =description;
    
    document.querySelector('.humidity .head ').innerText =`${humidity}%`;
    
    wrapper.classList.add("active");
    inputField.value = "";
    blogname.classList.add("active");
    arrow.replaceChild(p,arrow_span);
    //dark_modeActive();
    
    
  }
}

function add_Text(vari,name){
  var newNode = document.createTextNode(name);
  vari.appendChild(newNode);
  return vari;
}

function add_Links(vari,name,links){
  var a=document.createElement('a');
  var link =document.createTextNode(name);
  a.appendChild(link);
  a.href =links;
  vari.appendChild(a);
}

function dark_modeActive(){
  colorSwitch.classList.add("active");
  if (colorSwitch.checked) {
    document.body.classList.add("dark-mode-active");;
  } else {
    document.body.classList.remove("dark-mode-active");
  }
}


arrowBack.addEventListener("click", ()=>{
    wrapper.classList.remove("active");
    arrow.replaceChild(arrow_span,p);
    location.reload();
});


//when the input is clicked verify the state of the checkbox
colorSwitch.addEventListener("click", checkMode);

//1. see which state the checkbox is in
//2. if it is checked enable the dark mode by adding the class
//3. if it is not checked remove dark mode by removing the class
function checkMode() {
  console.log("checking...");
  if (colorSwitch.checked) {
    console.log("dark on");
    darkModeOn();
  } else {
    console.log("dark off");
    darkModeOff();
  }
}

function darkModeOn() {
  document.body.classList.add("dark-mode");
}

function darkModeOff() {
  document.body.classList.remove("dark-mode");
}


