<<<<<<< HEAD
import Home from './pages/Home.vue'
import Benefits from './pages/Benefits.vue'
import Charging from './pages/Charging.vue'
import Ownership from './pages/Ownership.vue'
import Community from './pages/Community.vue'
import Register from './pages/Register.vue'
import Login from './pages/Login.vue'
import CommunityCategory from './pages/CommunityCategory.vue'
import CommunityForum from './pages/CommunityForum.vue'



=======
import Home from './components/Home.vue'
import Benefits from './components/Benefits.vue'
import Charging from './components/Charging.vue'
import Ownership from './components/Ownership.vue'
import Community from './components/Community.vue'
import Register from './components/Register.vue'
import Login from './components/Login.vue'
import Dashboard from './components/Dashboard.vue'
>>>>>>> d3ee938c39a507d681fff45593f496201e8d98b9

export default [
  { name: "Home", path: '/', component: Home },
  { name: "Benefits", path: '/benefits', component: Benefits },
  { name: "Charging", path: '/charging', component: Charging },
  { name: "Ownership", path: '/ownership', component: Ownership, props: true},
  { name: "Community", path: '/community', component: Community },
  { name: "Register", path: '/register', component: Register },
  { name: 'Login', path: '/login', component: Login },
<<<<<<< HEAD
  { name: 'CommunityCategory', path: '/community/communityCategory', component: CommunityCategory, props: true },
  { name: 'CommunityForum', path: '/community/communityForum', component: CommunityForum, props: true }

=======
  { name: 'Dashboard', path: '/dashboard', component: Dashboard , props: true}
>>>>>>> d3ee938c39a507d681fff45593f496201e8d98b9
]
