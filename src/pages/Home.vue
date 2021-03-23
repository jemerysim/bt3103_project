<template>
<div class='homepage'>

  <div class='content'>
    <nav class='logo'>
      <p class="headertext">
      THE FUTURE OF MOBILITY HAS ARRIVED
      </p>
    </nav>
    <vue-horizontal class='pagecontent' responsive>
    <img alt="ev_car" src="../assets/ev_car.png">
    <div>
      <h3 class="description">
        Welcome to the electric world!
      </h3>
      <p>A group of EV enthusiasts have created this valuable resource for EV-related information! Join us as a member for free if you are interested in helping us grow!
      </p>
      <ul>
        <li>Charging Information</li>
        <li>Ownership Information</li>
        <li>Benefits of Electric Vehicles</li>
        <li>Our EV Community</li>
      </ul>
    </div>
    </vue-horizontal>
  </div>

  <div class='partner_content'>
    <h2>Supported by the World's Best EV Manufacturers</h2>
    <vue-horizontal class='partner_content'>
      <img class="logos" src="../assets/tesla_logo.png">
      <img class="logos" src="../assets/bmw_logo.png">
      <img class="logos" src="../assets/mercedes_logo.png">
      <img class="logos" src="../assets/nissan_logo.png">
      <img class="logos" src="../assets/Chevrolet-logo.png">
    </vue-horizontal>
  </div>

 </div>
</template>


<script>
import VueHorizontal from "vue-horizontal";

export default {
  components: {
    VueHorizontal
  },

  data() {
    return {
    }
  }
};
</script>


<style scoped>

.content { 
  background-color: rgba(0, 0, 0, 0.068);
}
.pagecontent {
  margin: auto;
  left: 30%;
  padding: 10px;
}

.partner_content {
  margin: auto;
  width: 80%;
  padding: 10px;
}
.logos {
  line-height: 10px;
  width: 200px;
  float: left;
}


.headertext{
    font-size: 35px;
    color: red;
    text-align: center;
    position: relative;
    top:30px;
    text-shadow: 2px 2px 2px gray;
}
</style>