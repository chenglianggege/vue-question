import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/main'
import Question from '@/components/question'
import Over from '@/components/over'
import Guizhe from '@/components/guizhe'
import Jieshi from '@/components/jieshi'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test/:userId',
      name: 'Test',
      component: Test
    },
    {
      path: '/guizhe',
      name: 'Guizhe',
      component: Guizhe
    },
    {
      path: '/jieshi',
      name: 'Jieshi',
      component: Jieshi
    },
    {
      path: '/question',
      name: 'Question',
      component: Question
    },
    {
      path: '/over',
      name: 'Over',
      component: Over
    }
  ]
})
