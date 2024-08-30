const button= document.getElementById("btn");
const cityinput=document.getElementById("display");
const card=document.getElementById("card");
const api_key="cf3c57ba2f0afc6acb2c62fca944ba83"
const icon=document.getElementById("img");

button.addEventListener("click",event=>{
    const city=display.value;
    weatherdata(city);
})



async function weatherdata(city){
const apiurl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
const response= await fetch(apiurl);
const new_data= await response.json()
console.log(new_data)
document.getElementById("city").innerText=new_data.name;
const temperature=(new_data.main.temp-273.15);
document.getElementById("temp").innerText=temperature.toFixed(1)+" °C";
document.getElementById("humidity").innerText=" "+new_data.main.humidity+"%";
document.getElementById("wind").innerText=" "+new_data.wind.speed+"Km/h";
if(new_data.weather[0].main=='Clouds'){
icon.src="weather.webp";
}
else if(new_data.weather[0].main=='Clear'){
    icon.src="sun.png";
    }

  else if(new_data.weather[0].main=='Rain'){
        icon.src="light-rain.png";
        }
      else if(new_data.weather[0].main=='Thunderstorm'){
            icon.src="thunderstorm.png";
            }
            else if(new_data.weather[0].main=='Haze'){
              icon.src="haze.png"
            }
document.getElementById("card").style.display="block";
}

