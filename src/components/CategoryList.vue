<template> 
  <div class="forum-list">
    <h2 class="list-title">
      <a>Discussion</a>
    </h2>
    <CategoryListItem
      v-for="obj,category in categories"
      :category="category"
      :key="category"
      class="forum-listing"/>

  </div>
</template>

<script>
  import database from './../firebase.js'
  import CategoryListItem from '@/components/CategoryListItem'


  export default {
    components: {
      CategoryListItem
    },

    methods:{
    fetchItems: function() {
      database.collection('forum').get()
      .then((querySnapShot)=> {
        querySnapShot.forEach(doc => {
          let cat_id = doc.id
          this.categories[cat_id] = [];

        database.collection('forum').doc(cat_id)
            .collection("threads").get()
            .then((querySnapShot) => {
              querySnapShot.forEach(doc => {
                  this.categories[cat_id].push(doc.data())
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
        categories: { "Announcements": [ {},], 
                      "Miscellaneous": [ {} ], 
                      "Ownership": [ {} ], 
                      "Questions & Feedback": [ {} ],
                       "Vehicles": [ {} ] }
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


.forum-list {
  padding: 0;
  background: white;
  /* margin: 20px 0; */
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
  border-bottom-left-radius: 20px;
}

</style>
