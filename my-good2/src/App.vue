<template>
  <div id="app">
    
    
    <!--<p>
	    <router-link to="/">home</router-link>
	    <router-link :to="{name:'Test',params:{userId: 123}}">test</router-link>
    </p>-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
	@import "assets/css/index.css"
</style>
