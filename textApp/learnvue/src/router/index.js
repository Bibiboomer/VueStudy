import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Works from '@/components/Work'
import LM from '@/components/LM'

Vue.use(Router)
const UserProfile = {
  template: `
        <div>  我是UserProfile </div>
  `
}
const UserPosts = {
  template: `
        <div>  我是UserPosts </div>
  `
}

const User = {
  // template: '<div>User {{ $route.params.id }}</div>'
  template: `
              <div class="user">
                <h2>User {{ $route.params.id }}</h2>
                <router-view></router-view>
              </div>
            `
}

export default new Router({
  // mode: 'hash',
  mode: 'history',

  linkActiveClass: 'lm',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/work',
      name: 'Work',
      component: Works
    },
    {
      path: '/lm',
      name: 'LM',
      component: LM
    },
    { path: '/user/:id',   
      component: User, 
      children: [{
                  path: 'profile',
                  component: UserProfile
            },
            {
                  path: 'posts',
                  component: UserPosts
            }
        ]
    }
  ]
  
})
