<template>
  <div class="index-container">
    <div class="banner-top">
      <img calss='banner-cover' src="../assets/c1.jpg">
      <div class="logo">
          <img src="../assets/c2.png"/>
          <span>新宝骏</span>
      </div>
    </div>
    <div class="banner-desc">
      <p>
        {{description}}
        <br/>
        <br/>
        {{description1}}
      </p>
      <div class="link">
        <span @click="getCarList">明星车型</span>
        <a href="https://www.sgmw.com.cn/" target="blank">品牌官网
        <img src="../assets/c3.png"/>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import {brand1,brand} from '../js/desc'
// 问题1：从其它文件import过来的变量，是不可直接用于组件内，需要将导入的变量赋值给data数据。
export default {
  name:'container',
  data(){
    return{
      description:'',
      description1:'',
    }
  },
  mounted(){
    this.description = brand;
    this.description1 = brand1
  },
  methods:{
    getCarList(){
      this.$router.push('/car')
    }
  }
}
</script>

<style scoped>
.index-container{
  position: relative;
  font-size: 22px;
}
.index-container,.banner-top,.banner-cover,.banner-desc{
  width: 100%;
}
.banner-top{
  position: relative;
  
}
.logo{
  position: absolute;
  bottom: 33px;
  left: 44px;
}
.logo img{
  width: 86px;
  height: 86px;
  vertical-align: middle;
}
.logo span{
  vertical-align: middle;
  font-size: 40px;
  /* font-weight: 600; */
  color: #fff;
}
.banner-desc{
  /* 问题2:采用margin负值让第二个div盖住第一个div，为什么需要优先定位 */
  position: relative;
  box-sizing: border-box;
  border-radius: 15px;
  margin-top: -20px;
  /* z-index: 999; */
  padding: 40px 20px;
  color: #242629;
  font-family:PingFang SC;
  background-color: #fff;
}
.banner-desc p{
  height: 284px;
}
.link{
  height: 40px;
  clear: both;
}
.link a,.link img,.link span{
  vertical-align: middle;
  font-size: 21px;
  color: #408fff;
}
.link img{
  width: 17px;
  height: 17px;
}
.link a{
  float: right;
}
</style>