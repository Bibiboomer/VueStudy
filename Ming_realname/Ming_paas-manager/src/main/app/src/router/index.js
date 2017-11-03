import Vue from 'vue'
import Router from 'vue-router'
import RealName from '@/components/realname/Realname.vue'
import FruitsSum from '@/components/fruits/FruitsSum.vue'
import AppleNo1 from '@/components/fruits/AppleNo1.vue'
import BannerNo2 from '@/components/fruits/BannerNo2.vue'
import OrangeNo3 from '@/components/fruits/OrangeNo3.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/realname',
      name: 'realname',
      component: RealName
    }, {
      path: '/fruits',
      name: 'fruitssum',
      component: FruitsSum,
      children: [
        {path: '/fruits/AppleNo1', component: AppleNo1},
        {path: '/fruits/BannerNo2', component: BannerNo2},
        {path: '/fruits/OrangeNo3', component: OrangeNo3} 
      ]
    }
  ]
})
