<template>
<div class="container">
    <h2> Welcome! {{ this.name }} </h2>
    <div class="largeBox">
        <div class="box">
        <p> Email: {{ this.email }} </p>
        <p> Password:{{ this.password }} </p>
        <p> Phone number: {{ this.phoneNumber }} </p>
                <button type="button" class="btn" @click="showModal"> Update Phone Number </button>
                <Modal v-show="modalVisible" @close="closeModal">
                <template v-slot:header>
                    Type in your new phone number below.
                </template>
                <template v-slot:body>
                    <label for="updatePhoneNumber"> Phone Number: </label>
                    <input type="text" id="PhoneNumber" v-model="update_phoneNumber">
                    <button v-bind="doc_id" v-on:click="updatePhoneNumber(doc_id)"> Confirm </button>
                </template>
                </Modal>
        </div>
    </div>
    <div class="largeBox">
        <div class="box">
        <h4> Your Activity </h4>
        </div>
    </div>
</div>
</template>

<script>
import database from "../firebase.js";
import Modal from "./Modal.vue"
export default {
    name: 'Dashboard',
    components: {
        Modal,
    },
    computed: {
        user() {
            return this.$store.getters.getUser;
        },
    },
    data() {
        return {
            doc_id: null,
            email: null,
            questions: null,
            name: null,
            password: null,
            phoneNumber : '',
            update_phoneNumber: '',
            modalVisible: false
        }
    },
    methods: {
        fetchUserInfo: function(user) {
            database.collection('users').get()
                .then((querySnapshot) => {
                    let item = {}
                    querySnapshot.forEach((doc) => {
                        item = doc.data()
                        if (item.email == user.email) {
                            this.doc_id = doc.id,
                            this.name = item.name,
                            this.password = item.password,
                            this.email = item.email,
                            this.phoneNumber = item.phoneNumber
                        }
                    })
                    
                })
        },
        updatePhoneNumber: function(doc_id) {
            database.collection('users').doc(doc_id).update({
                'phoneNumber': this.update_phoneNumber
            })
        },
        showModal: function() {
            this.modalVisible = true;
        },
        closeModal: function() {
            this.modalVisible = false;
        },
    },
    created() {
        this.fetchUserInfo(this.user)
    }
}

</script>

<style scoped>
.largeBox {
    display: flex;
    height: 500px;
    border: black 2px solid;
}
.box {
    display: inline-block;
    width: 50%;
    font-size: 2rem;
    line-height: 1;
    font-weight: 400;
    text-align: left;
    border: 1px solid #76C056;;
    outline: none;
}
p {
    margin: 30px;
    border: 2px black solid;
}

button {
display: block;
  width: 30%;
  font-size: 1.5rem;
  line-height: 1;
  font-weight: 300;
  color: black;
  background: #76C056;;
  padding: 10px 10px;
  margin: 30px auto;
  border: 0;
  outline: none;
  cursor: pointer;
}
</style>