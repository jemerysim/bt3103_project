import Home from './components/Home.vue'
import Benefits from './components/Benefits.vue'
import Charging from './components/Charging.vue'
import Ownership from './components/Ownership.vue'
import Community from './components/Community.vue'


export default [
  { name: "Home", path: '/', component: Home },
  { name: "Benefits", path: '/benefits', component: Benefits },
  { name: "Charging", path: '/charging', component: Charging },
  { name: "Ownership", path: '/ownership', component: Ownership, props: true},
  { name: "Community", path: '/community', component: Community }
]
