<template>
  <div>
    <img src="../../static/img/dati1@2x.png" alt="" onclick="return false"/>
    <div class="logo"></div><div class="logoh">遇见你，刚刚好~</div>
    <div class="beizhu">
    	<ul>
    		<li>题目分为单项选择和填空题，均为必答题</li>
    		<li>8月15日会显示匹配结果</li>
    		<li>根据匹配结果，相同编码的人组成一队</li>
    		<li>请在8月14日前完成测试</li>
    	</ul>
    	
    </div>
    <div class="beggin" @click="begin(1)">
    	开始答题
    </div>
    <div class="beggin" @click="begin(2)">
    	活动规则
    </div>
  </div>
</template>

<script>
import Rem from '@/assets/js/rem'
new Rem()
export default {
  name: 'Test',
  beforeMount:function(){
  	let answer1 = [];
  	this.$axios({
        method: 'get',
        url: '/userInfo',
   }).then((response) => {  	
	   if(response.data.status == true && response.data.suitability == ""){
	   	this.$router.push({path:'/Over'})
	   }else if(response.data.status == true && response.data.suitability !== ""){
	   	this.$router.push({path:'/Jieshi',query:{id: response.data.suitability}})
	   }
    }).catch(function(err){
         
    })
  },
 
  methods:{
  	begin:function(a){
  	
  		if(a == 1){
  			this.$router.push({path:'/Question'})
  		}else{
  			this.$router.push({path:'/Guizhe'})
  		}
  		
  	
  }
  }
}
</script>

<style type="text/css" scoped>
	@import "../assets/css/index.css"
	
	
</style>
