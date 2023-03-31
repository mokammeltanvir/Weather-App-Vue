<script setup>

</script>

<template>
  <div class="container">
  <div class="wrap">
  <!-- Search box for Location-->
  <div class="search-box">
  <input type="text" name="search" value="" placeholder="Search city..." class="search-bar">
  </div>
  <!-- Weather Information -->
  <div class="weather-info">
  <div class="location-box">
  <div class="location">Dhaka</div>
  <div class="date">31-03-2023</div>
  </div>
  <div class="weather-box">
  <div class="temp">20°c</div>
  <div class="weather">Sunny</div>

  </div>

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
  width: 375px;
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
  width: 350px;
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
  max-width: 600px;
  height: 100%;
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
  font-size: 100px;
  font-weight: 900;
  color: #333;
  text-shadow: 3px 6px rgba(0,0,0,0.25);
  background-color: rgba(255,255,255,0.75);
  border-radius: 50px;
  padding: 10px 20px;
  margin: 30px 0;
  font-style: italic;
}
.weather-box .weather{
  font-size: 40px;
  font-weight: 700;
  color: #333;
  margin: 30px 0;
  font-style: italic;
  text-shadow: 3px 6px rgba(0,0,0,0.25);
}

</style>
