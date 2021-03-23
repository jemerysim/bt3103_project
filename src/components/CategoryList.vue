<template>
  <div class="category-list">

    <h2 class="list-title">
      <a href="#">Feedback & Information</a>
    </h2>
    <h2 class="list-title">
      <a href="#">Discussion</a>
    </h2>

    <CategoryListItem
      v-for="category in categories"
      :category="category"
      :key="category['.key']"
    />
 
  </div>
</template>

<script>
  import CategoryListItem from '@/components/CategoryListItem'

  export default {
    components: {
        CategoryListItem
    },
    props: {
      
    }
  }
</script>

<style scoped>
.list-title {
  background-color: #263959;
  border-bottom-left-radius: 20px;
  color: #f5f8fe;
  font-weight: 100;
  display: flex;
  width: 100%;
  justify-content: flex-start;
  position: relative;
  padding: 10px 20px;
  margin: 0;
}

.list-title a {
  color: white;
}

.list-title a:hover {
  color: #89c6af;
}
</style>
