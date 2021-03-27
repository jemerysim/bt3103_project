<template>
  <div class="col-full">
    <h1 class="heading-title">{{ category }}
    </h1>
    <router-link class='thread-button' tag="button" to="/register" exact>Start a new thread</router-link>
    
    <h3 class="list-title">
      <a>Threads</a>
    </h3>
    
      <ul id="list-threads">   
     <li v-for="obj in categoryForums" v-bind:key='obj' class='subject-header'>
    
      <router-link :to="{name: 'CommunityForum', params: {category: category, forums: obj}}">
        {{ obj.Subject }}

      </router-link>


     </li>
      </ul>

  </div>
</template>

<script>
  import database from './../firebase.js'

  export default {
    components: {
    },
    props: {
      category: {
        required: true,
        type: String
      }
    },
    data(){
      return{
        categoryForums: []
      }
    },
    methods: {
      getCategoryForums () {
        database.collection('forum').doc(this.category)
        .collection('threads').get()
        .then((querySnapShot)=> {
          querySnapShot.forEach(doc => {
            var thread_id = doc.id
            var main_msg = doc.data()
            main_msg['thread_id'] = thread_id
            main_msg['replies'] = []

            database.collection('forum').doc(this.category)
              .collection('threads').doc(thread_id)
              .collection('replies').get()
              .then((querySnapShot)=> {
                querySnapShot.forEach(doc1 => {
                  main_msg['replies'].push(doc1.data())

                })
              })
              // console.log(main_msg)
            this.categoryForums.push(main_msg);
          
          })
        })
        

      // console.log(this.categoryForums)
        // return this.categoryForums
      }
    },
    created: function() {
        this.getCategoryForums()
    }
  }
</script>

<style scoped>

li a {
    text-decoration: none;
    color: inherit;
}
.thread-button {
  float: right;
  color: black;
  background-color: #89c6af;
  box-shadow: inset 0px 0px 0px 1.6px #57AD8D;
  padding: 15px 30px;
  border-radius: 5px;
  border: none;
  transition: all 0.4s ease;
}
.thread-button:hover {
  color: white;
}

.subject-header {
  border-bottom-left-radius: 20px;
  color: rgb(96, 168, 111);
  font-weight: 100;
  display: flex;
  width: 100%;
  justify-content: flex-start;
  position: relative;
  padding: 10px 20px;
  margin: 0;
}
.subject-header a:hover {
  color: #89c6af;
} 

.heading-title {
  border-bottom-left-radius: 20px;
  color: #263959;
  display: flex;
  justify-content: flex-start;
  position: relative;
  padding: 10px 20px;
  margin: 0;
  display: inline-block;
}


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


</style>
