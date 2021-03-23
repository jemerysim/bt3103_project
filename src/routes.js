import Home from './pages/Home.vue'
import Benefits from './pages/Benefits.vue'
import Charging from './pages/Charging.vue'
import Ownership from './pages/Ownership.vue'
import Community from './pages/Community.vue'
import Register from './pages/Register.vue'
import Login from './pages/Login.vue'


export default [
  { name: "Home", path: '/', component: Home },
  { name: "Benefits", path: '/benefits', component: Benefits },
  { name: "Charging", path: '/charging', component: Charging },
  { name: "Ownership", path: '/ownership', component: Ownership, props: true},
  { name: "Community", path: '/community', component: Community },
  { name: "Register", path: '/register', component: Register },
  { name: 'Login', path: '/login', component: Login }
]
