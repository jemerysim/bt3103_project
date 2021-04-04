<template>
<div>
  <p class="pageTitle">
    Why Switch to Electric?
  </p>

  <div id="pageContent1">
    There are many benefits to owning an electric vehicle instead of a traditional internal combustion vehicle!
  </div>

  <div id="pageContent2">
    <span class="imageArea">
      <span class="benefitTitle">Lower maintenance and running costs</span>
      <button>Learn more</button>
      <img alt="Car Maintenance" src="../assets/car_maintenance.jpg" class="image">
      <span class="textArea">
        <span class="text">
          New <a href="https://www.betterenergy.org/blog/consumer-reports-study-finds-electric-vehicle-maintenance-costs-are-50-less-than-gas-powered-cars/">research</a> 
          from Consumer Reports shows that pure EVs—which have fewer moving parts—need <strong>less maintenance</strong>, 
          and generally <strong>cost less to repair</strong> than the average gas-powered vehicle. 
          <br><br> 
          Consumers who purchase an EV can expect to save an average of <strong>$4,600</strong> in 
          repair and maintenance costs over the life of the vehicle compared with a gasoline-powered car!
        </span>
      </span>
    </span>
    <span class="imageArea">
      <span class="benefitTitle">Cleaner air in your living environment</span>
      <button>Learn more</button>
      <img alt="Clean air" src="../assets/clean_air.jpg" class="image">
      <span class="textArea">
        <span class="text">
          Powered by electricity, EVs are a much <strong>cleaner alternative</strong> as they produce 
          <a href="https://blog.ucsusa.org/dave-reichmuth/are-electric-vehicles-really-better-for-the-climate-yes-heres-why">
          significantly fewer emissions.</a> It <strong>eliminates harmful tailpipe pollutants</strong> 
          that kill thousands of people every year, and <strong>emits less carbon dioxide</strong>, 
          slowing down climate change. 
          <br><br>
          Thus, driving an EV makes our country a better place where everyone can enjoy <strong>cleaner air</strong>!
        </span>
      </span>
    </span>
    <span class="imageArea">
      <span class="benefitTitle">Use less of depleting fossil fuels</span>
      <button>Learn more</button>
      <img alt="Fossil fuel" src="../assets/fossil_fuel.jpg" class="image">
      <span class="textArea">
        <span class="text">
          Mining of fossil fuels is highly <strong>damaging</strong> to the environment, and its supply is quickly <strong>depleting</strong>, 
          thus every one of us should take small steps to move away from fossil fuels. 
          Making the switch to EV is one way to do so. 
          <br><br>
         Furthermore, a <a href="https://www.bbc.com/news/science-environment-51977625">study</a> has shown that <strong>EVs lead to lower carbon emissions overall</strong>, 
         even if electricity generation still relies on fossil fuels. 
         Even if Singapore still relies mainly on fossil fuels for electricity generation, 
         choosing an EV still makes a small but <strong>significant</strong> difference!
        </span>
      </span>
    </span>
  </div>
</div>
</template>

<script>
export default {
  name: 'Benefits'
};
</script>

<style scoped>
.pageTitle {
    font-size: 35px;
    color: black;
    text-align: center;
    position: relative;
    top: 30px;
    text-shadow: 2px 2px 2px gray;
    margin-bottom: 50px
}

.image {
  opacity: 1;
  height: 265px;
  margin: 20px;
  transition: 0.5s ease;
}

.imageArea {
  position: relative;
  width: 40%;
}

.text {
  color: black;
  font-size: 15px;
}

.textArea {
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  left: 15%;
  top: -1350%;
  transform: translateX(-9%);
  text-align: center;
}

.imageArea:hover .image {
  opacity: 0.25;
}

.imageArea:hover .textArea {
  opacity: 1;
}

button:hover ~ .image {
  opacity: 0.25;
}

button:hover ~ .textArea {
  opacity: 1;
}

.benefitTitle {
  position: absolute;
  top: -300px;
  left: 21px;
  font-size: 17px;
  font-weight: bold
}

#pageContent1 {
  font-size: 23px;
  margin-bottom: 60px;
  text-align: center
}

#pageContent2 {
  margin-bottom: 80px;
  text-align: center
}

button {
  position: absolute;
  bottom: -30px;
  left: 20px;
  background-color: black;
  color: white;
  font-size: 13px;
  border-radius: 10px;
  padding: 4px;
  outline: 0;
}
</style>