<template>
  <div>
  	<div class="logo"></div><div class="logoh">遇见你，刚刚好~</div>
    <div class="header">
    	<div class="bigqu"></div><div class="smallqu"></div>
    	<span class="header1">{{datatype}}</span><span class="header2">/</span><span class="header3">7</span>
    </div>
    <div class="connert">
    	<div v-if="questionNum[0].seenType" class="question1">
    		<p>我的性别</p>
	    	<div class="sex">
	    		<div :class="[sex1,this.answer[0].sex == '1' ? activeClass : '']" @click="esxtype">
	    			<img src="../../static/img/man@2x.png"/>
	    			<span>男生</span>
	    		</div>
	    		<div class="sexor">or</div>
	    		<div :class="[sex2,this.answer[0].sex == '0' ? activeClass : '']" @click="esxtype">
	    			<img src="../../static/img/woman@2x.png"/>
	    			<span>女生</span>
	    		</div>
	    	</div>
	    	
	    	<p>我的姓名</p>
	    	<div class="heiggtht">
	    		<input type="text" name="" id="" value="" v-model="answer[0].name" />
	    	</div>
	    	<p>我的身高(CM)</p>
	    	<div class="heiggtht">
	    		<input v-model.number="answer[0].height"  type="number" name="" id="" value="" />
	    	</div>
	    	<p>我的年龄</p>
	    	<div class="heiggtht">
	    		<input v-model.number="answer[0].age"  type="number" name="" id="" value="" />
	    	</div>
    	</div>
    	<div v-if="questionNum[1].seenType" class="question1" @click="activeColor(1,$event)">
    		<p>2.你的星座是什么？</p>    		
    		<div aid="A" :class="[color,this.answer[1].color == 'A' ? coloractive : '']" >A，白羊座（3月21日~4月19日）</div>
    		<div aid="B" :class="[color,this.answer[1].color == 'B' ? coloractive : '']" >B，金牛座（4月20日～5月20日）</div>
    		<div aid="C" :class="[color,this.answer[1].color == 'C' ? coloractive : '']" >C，双子座（5月21日～6月21日）</div>
    		<div aid="D" :class="[color,this.answer[1].color == 'D' ? coloractive : '']" >D，巨蟹座（6月22日～7月22日）</div>
    		<div aid="E" :class="[color,this.answer[1].color == 'E' ? coloractive : '']" >E，狮子座（7月23日～8月22日）</div>
    		<div aid="F" :class="[color,this.answer[1].color == 'F' ? coloractive : '']" >F，处女座（8月23日～9月22日）</div>
    		<div aid="G" :class="[color,this.answer[1].color == 'G' ? coloractive : '']" >G，天秤座（9月23日～10月23日）</div>
    		<div aid="H" :class="[color,this.answer[1].color == 'H' ? coloractive : '']" >H，天蝎座（10月24日～11月22日）</div>
    		<div aid="I" :class="[color,this.answer[1].color == 'I' ? coloractive : '']" >I，射手座（11月23日～12月21日）</div>
    		<div aid="J" :class="[color,this.answer[1].color == 'J' ? coloractive : '']" >J，摩羯座（12月22日～1月19日）</div>
    		<div aid="K" :class="[color,this.answer[1].color == 'K' ? coloractive : '']" >K，水瓶座（1月20日～2月18日）</div>
    		<div aid="L" :class="[color,this.answer[1].color == 'L' ? coloractive : '']" >L，双鱼座（2月19日～3月20日）</div>
    	</div>
    	
    	
    	<div v-if="questionNum[2].seenType" class="question1">
    		<p>3.选出最适合情侣一起旅行的目的地？</p>
    		<div class="quantucolor">
    			<ul>
    				<li v-for="n in 9" v-bind:aid="n" @click="canima(n,$event)"><div v-if="n == answer[2].piclike" class="backkk"><img src="../../static/img/icon_s@2x.png"/></div></li>
    			</ul>
    		</div>   		    		
    	</div>
    	
    	
    	<div v-if="questionNum[3].seenType" class="question1" @click="activeColor(3,$event)">
    		<p>4.你的兴趣爱好是什么？</p>
    		<div aid="A" :class="[color,this.answer[3].former == 'A' ? coloractive : '']">A：时尚前沿</div>
    		<div aid="B" :class="[color,this.answer[3].former == 'B' ? coloractive : '']">B：文艺生活</div>
    		<div aid="C" :class="[color,this.answer[3].former == 'C' ? coloractive : '']">C：环游世界</div>
    		<div aid="D" :class="[color,this.answer[3].former == 'D' ? coloractive : '']">D：美妆护肤</div>   		   		
    		<div aid="E" :class="[color,this.answer[3].former == 'E' ? coloractive : '']">E：游戏王者</div>   		   		  		   		
    		<div aid="F" :class="[color,this.answer[3].former == 'F' ? coloractive : '']">F：品尝美食</div>   		   		  		   		
    	</div>
    	
    	<div v-if="questionNum[4].seenType" class="question1" @click="activeColor(4,$event)">
    		<p>5.选出你最喜欢的颜色</p>
    		<div aid="A" :class="[color,this.answer[4].charming == 'A' ? coloractive : '']">A：蓝色</div>
    		<div aid="B" :class="[color,this.answer[4].charming == 'B' ? coloractive : '']">B：红色</div>
    		<div aid="C" :class="[color,this.answer[4].charming == 'C' ? coloractive : '']">C：灰色</div>
    		<div aid="D" :class="[color,this.answer[4].charming == 'D' ? coloractive : '']">D：黄色</div>    		   		
    	</div>
    	
    	
    	<div v-if="questionNum[5].seenType" class="question1" @click="activeColor(5,$event)">
    		<p>6.你觉得自己什么地方最迷人？</p>
    		<div aid="A" :class="[color,this.answer[5].value == 'A' ? coloractive : '']">A：外在</div>
    		<div aid="B" :class="[color,this.answer[5].value == 'B' ? coloractive : '']">B：内在</div>
    		<div aid="C" :class="[color,this.answer[5].value == 'C' ? coloractive : '']">C：财富</div>
    		<div aid="D" :class="[color,this.answer[5].value == 'D' ? coloractive : '']">D：什么地方都迷人</div>    		   		
    	</div>
    	
    	
    	<div v-if="questionNum[6].seenType" class="question1">
    		<p>7.你的兴趣爱好还有哪些？</p>
    		<textarea class="textinput" name="" rows="" cols="" v-model="answer[6].hobby"></textarea>	   		
    	</div>
    	
    	<div :class="[top,datatype == 1 ? topnextcant : '']" v-on:click="lastquestion($event)">上一题</div>
    	<div :class="[next]" v-on:click="nextquestion($event)">{{nextValue}}</div>
    </div>
    
  </div>
</template>

<script>
//import Over from '@/components/over'
import Rem from '@/assets/js/rem'
new Rem()
export default {
  name: 'Test',
  data(){
  	return{
  		answerOver:false,
  		"sex1":"sex1",
  		"sex2":"sex2",
  		color:"color",
  		coloractive:"coloractive",
  		iscoloractive:true,
  		topnextcant:'topnextcant',
  		top:'top',
  		next:'next',
  		nextValue:"下一题",
  		"activeClass":"activee",		
  		"isActive":true,
  		"seen1":true,
  		"seen2":false,
  		"seen3":false,
  		"seen4":false,
  		"seen5":false,
  		"seen6":false,
  		"seen7":false,
  		"datatype":1,
  		questionNum:[
  			{seenType:true,num:1},
  			{seenType:false,num:2},
  			{seenType:false,num:3},
  			{seenType:false,num:4},
  			{seenType:false,num:5},
  			{seenType:false,num:6},
  			{seenType:false,num:7}
  		],
  		answer:[
  			{sex:1,name:"",height:"",age:""},
  			{color:"A"},
  			{piclike:2},
  			{former:"A"},
  			{charming:"A"},
  			{value:"A"},
  			{hobby:""} 		
  		],
  		picli:[1,2,3,4,5,6,7,8,9]
  	}
  },
  beforeCreate: function(){
  	
  	
  },
  created: function(){
  	
  	
  	
  },
  beforeMount:function(){
  	let imgAge = document.createElement("img");
  	imgAge.src = require('../../static/img/icon_s@2x.png')
  	let answer1 = [];
  	this.$axios({
        method: 'get',
        url: '/userInfo',
   	}).then((response) => {
          // this.answer = response.data.data;  
           console.log(response.data)
    }).catch(function(err){
         
    })
  },
  mounted:function(){
  	
  },
  components: {
    
  },
  methods: {
  	esxtype: function(){
  		//this.isActive = !this.isActive;
  		if(this.answer[0].sex == 1){
  			this.answer[0].sex = 0;
  		}else{
  			this.answer[0].sex = 1;
  		}
  	},
  	nextquestion: function(event){
  		//this.$router.go('/Over');
  		
  		if(this.answerOver && this.answer[6].hobby){
  			this.$axios({
		        method: 'get',
		        url: '/score',
		        params: {
		        	datas: JSON.stringify(this.answer)
		        }
		   	}).then((res) => {
		   		this.$router.push({path:'/Over'})
		   	}).catch(function(err){})
  			
  			
  		}
  			
  	
  		if(this.answer[0].name && this.answer[0].height && this.answer[0].age && this.datatype < 7 ){
  			console.log(this.datatype)
  			
  			this.nextValue = "下一题"
  			this.datatype = this.datatype + 1 ; 	
	  		for(let i = 0 ;i < this.questionNum.length ;i ++){
	  			this.questionNum[i].seenType = false;
	  		}
	  		this.questionNum[this.datatype - 1].seenType = true; 	
	  		if(this.datatype >= 7 ){
  				this.datatype = 7
  				this.nextValue = "完成"
  				this.answerOver = true;
  			}
  		}
  	},
  	lastquestion: function(event){ 		
  		this.datatype = this.datatype - 1 ;
  		if(this.datatype <= 0 ){
  			this.datatype = 1;
  			this.answerOver = false;
  		}else if(this.datatype < 7){
  			this.nextValue = "下一题"
  			this.answerOver = false;
  		}
  		for(let i = 0 ;i < this.questionNum.length ;i ++){
  			this.questionNum[i].seenType = false;
  		}
  		this.questionNum[this.datatype - 1].seenType = true;
  	},
  	activeColor: function(a,event){
  		if(event.target.tagName == "DIV"){
  			let _this = event.target; 			
			 for(let n = 0 ;n < _this.parentNode.children.length ;n ++){
			 	
			 	if(_this.parentNode.children[n].tagName == "DIV"){
			 		_this.parentNode.children[n].className = "color"  			 		
			 	}
			 }
			_this.className = "color coloractive" 
  			if(a == 1){
  				this.answer[1].color = _this.getAttribute("aid")
  			}else if(a == 3){
  				console.log(_this.getAttribute("aid"))
  				this.answer[3].former = _this.getAttribute("aid")
  				
  			}else if(a == 4){
  				this.answer[4].charming = _this.getAttribute("aid")
  			}else if(a == 5){
  				this.answer[5].value = _this.getAttribute("aid")
  			}
  			
  		} 		
  	},
  	canima: function(n,event){
  		this.answer[2].piclike = n;
  	}
  }
}
</script>

<style type="text/css" scoped>
	@import "../assets/css/index.css"
	
	
</style>
