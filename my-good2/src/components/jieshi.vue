<template>
  <div>
    <img src="../../static/img/dati2@2x.png" alt="" onclick="return false"/>
    <div class="beizhu">
    	<div class="logo"></div><div class="logoh">遇见你，刚刚好~</div>
    	<div class="baizhuovercli"><p>你的匹配编码为：<em>{{this.$route.query.id}}</em></p><p>去找与你编码相同的另一伴吧~</p></div>
    </div>
    
    
  </div>
</template>

<script>
import Rem from '@/assets/js/rem'
new Rem()
export default {
  name: 'Test',
  components: {
    
  }
}
</script>

<style type="text/css" scoped>
	@import "../assets/css/index.css"
	
	
</style>
