<script setup>
import { useWeatherStore } from './stores/weather';

const weatherStore = useWeatherStore(); // Get the store

</script>

<template>
  <div class="container">
  <div class="wrap">
  <!-- Search box for Location-->
  <div class="search-box">
  <input type="text" placeholder="Search city..." class="search-bar" v-model="weatherStore.location_query" @keypress="weatherStore.fetchWeather">
  </div>
  <!-- Weather Information -->
  <div class="weather-info" v-if="weatherStore.weather.main!=undefined">
  <div class="location-box">

  <div class="location">{{ weatherStore.weather.name }}, {{ weatherStore.weather.sys.country }}</div>
  <div class="date">{{ new Date().toLocaleString() }}</div>
  </div>

  <div class="weather-box">
  <div class="temp">{{ weatherStore.weather.main.temp }} °c</div>  
  </div>
    <div class="other-info">
          <span class="pressure">Pressure: {{ weatherStore.weather.main.pressure }} mb</span>
          <span class="pressure">Humidity: {{ weatherStore.weather.main.humidity }} %</span>
        </div>

  <div class="icon">
  <img :src="`http://openweathermap.org/img/wn/${weatherStore.weather.weather[0].icon}@2x.png`" alt="">
  </div>
  <div class="weather">{{ weatherStore.weather.weather[0].main }}</div>

  
  </div>

  </div>
  </div>

</template>

<style scoped> 
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;70;900&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}
.container{
  background-image: url("./assets/default.jpg");
  background-size: cover;
  width: 600px;
  background-position: center;
  margin: 0 auto;
  border-radius: 25px;
  margin-top: 50px;
  box-shadow: 0px 0px 30px #00000065;
  transition: .4s;
  overflow: hidden; 

}
.wrap{
  padding: 25px;
  width: 100%;  
  height: 600px;
}
.search-box{
  width: 100%;
  height: 50px;
  background-color: rgba(255,255,255,0.5);
  box-shadow: 0px 0px 8px rgba(0,0,0,0.25);
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.search-bar{
  width: 100%;
  height: 50px;
  border: none;
  outline: none;
  background: none;
  font-size: 20px;
  font-weight: 500;
  padding: 0 20px;
  color: #333;
  border-radius: 50px; 
}
.search-bar::placeholder{
  color: #333;
}
.search-box .search-bar:focus{
  box-shadow: 0px 0px 8px rgba(0,0,0,0.25);
  background-color: rgba(255,255,255,0.75);


}
.weather-info{
  width: 100%;
  height: 500px;
  background-color: rgba(255,255,255,0.75);
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  margin-top: 20px;
} 
.location-box{
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
}
.location{
  font-size: 30px;
  font-weight: 500;
  color: #333;
  margin-top: 10px;
}
.date{
  font-size: 20px;
  font-weight: 500;
  color: #333;
}
.weather-box{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
}
.weather-box .temp{
  font-size: 90px;
  font-weight: 900;
  color: #333;
  text-shadow: 3px 6px rgba(0,0,0,0.25);
  background-color: rgba(255,255,255,0.75);
  border-radius: 50px;
  padding: 20px 40px;
  margin: 25px 30px;
  font-style: italic;
  text-align: center;
}
.weather{
  font-size: 40px;
  font-weight: 700;
  color: #333;
  margin-bottom: 15px;
  font-style: italic;
  text-shadow: 3px 6px rgba(0,0,0,0.25);
}
.other-info{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;  

}
.pressure{
  font-size: 16px;
  font-weight: 500;
  color: #333;  
  margin: 0 auto;
}

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
 .container {
    width: 350px;
  }
  .weather-box .temp{
    font-size: 70px;
    padding: 10px 20px;
    margin: 15px 15px;
  }

}


</style>
