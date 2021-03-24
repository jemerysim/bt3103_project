<template>
  <div class="category-list">
    <div v-for="obj, category in this.categories" v-bind:key="category">
      <h2 class="list-title">
        <a href="#">{{ category }}</a>
      </h2>
        <div class="forum-list" v-for="threads, subcategory in obj" v-bind:key="subcategory">
          <h2 class="list-title">
            <a href="#">{{ subcategory }}</a>
            <!-- <a href="#">{{ threads }}</a> -->
          </h2>
        </div>
      
      <!-- <CategoryListItem v-bind:key="category"/> -->
    </div>
  </div>
</template>

<script>
  // import CategoryListItem from '@/components/CategoryListItem'
  import database from './../firebase.js'

  export default {
    components: {
        // CategoryListItem
    },
    methods:{
    fetchItems: function() {
      database.collection('forum').get()
      .then((querySnapShot)=> {
        querySnapShot.forEach(doc => {
          var cat_id = doc.id
          this.categories[cat_id] = {};

        database.collection('forum').doc(cat_id)
            .collection("subcategories").get()
            .then((querySnapShot) => {
              querySnapShot.forEach(doc => {
                  var subcat_id = doc.id
                  this.categories[cat_id][subcat_id] = []

          database.collection('forum').doc(cat_id)
              .collection("subcategories").doc(subcat_id)
              .collection('threads').get()
              .then((querySnapShot) => {
                querySnapShot.forEach(doc => {
                    this.categories[cat_id][subcat_id].push({"user": doc.data().user, "text": doc.data().text})
                    console.log(this.categories)
           
                })
              })
            })
          })
        })
      })
    }
   },

    created: function() {
        this.fetchItems()
    },
    data(){
      return{
        categories: {},
      }
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

.forum-list {
  padding: 0;
  background: white;
  margin: 20px 0;
}

.forum-list .forum-listing {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10px 20px 30px;
}

.forum-list .forum-listing:nth-child(odd) {
  background: rgba(73, 89, 96, 0.06);
  border-bottom-left-radius: 20px;
}

.forum-list .forum-listing:last-child {
  border-bottom-left-radius: 0;
}

.forum-list .forum-listing .forum-details {
  flex-basis: 52%;
}

@media (min-width: 240px) and (max-width: 720px) {
  .forum-list .forum-listing .forum-details {
    flex-basis: 100%;
  }
}

.forum-list .forum-listing .forum-details ul.subforums {
  padding-left: 5px;
  display: block;
}

.forum-list .forum-listing .forum-details ul.subforums::before {
  content: '⌙';
  margin-right: 5px;
}

.forum-list .forum-listing .forum-details ul.subforums.subforums li {
  display: inline;
}

.forum-list .forum-listing .forum-details ul.subforums.subforums li:not(:last-of-type)::after {
  content: '\f111';
  font-family: 'FontAwesome';
  font-size: 4px;
  position: relative;
  top: -3px;
  left: 2px;
  padding: 0 3px;
  color: #878787;
}

.forum-list .forum-listing .threads-count {
  flex-basis: 12%;
  text-align: center;
}

.forum-list .forum-listing .threads-count .count {
  font-weight: 100;
  display: block;
}

.forum-list .forum-listing .last-thread {
  flex-basis: 32%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.forum-list .forum-listing .last-thread .avatar {
  margin-right: 10px;
}
</style>
