<template>
<div class="col-full">
    <h1>Welcome to the Community Page!</h1>
    <CategoryList/>
  </div>
</template>


<script>
import CategoryList from '../components/CategoryList'

export default {
  components: {
      CategoryList
    },
};
</script>


<style scoped>

.col-full {
  flex-basis: 98%;
  margin: 0 1%;
  text-align: center;
}
</style>