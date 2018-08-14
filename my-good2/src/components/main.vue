<template>
  <div>
    <img src="../../static/img/dati1@2x.png" alt="" />
    <div class="beizhu">
    	<ul>
    		<li>题目分为单项选择和填空题，每道题均为必答题</li>
    		<li>提交成功后，8月15日会显示匹配结果</li>
    		<li>根据匹配结果，两个相同编码的人讲组成一队</li>
    		<li>答题时间为8月14日前，请务必在该时间范围内提交答题结果</li>
    	</ul>
    	
    </div>
    <div class="beggin">
    	<router-link :to="{name:'Question',params:{name: 12223}}">开始答题</router-link>    	 
    </div>
    
  </div>
</template>

<script>
import Rem from '@/assets/js/rem'
new Rem()
console.log("21212")
export default {
  name: 'Test',
  components: {
    
  }
}
</script>

<style type="text/css" scoped>
	@import "../assets/css/index.css"
	
	
</style>
