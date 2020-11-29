<template>
  <div class="carList">
    <div class="carTitle">
      <h2>明星车型</h2>
    </div>
    <div class="cars">
      <div class="car-items" 
        v-for="(item,index) in carDetail" 
        :key="index" 
        @click='getClickNum(index)'>
        <img class="carPhoto" :src="carDetail[index].cover"/>
        <h2 class="title">{{carDetail[index].name}}</h2>
        <p class="price">
          {{"¥"+carDetail[index].price_min}}{{"~"+carDetail[index].price_max}}万
        </p>
        <p class="carDesc">{{carDetail[index].highlight}}</p>
      </div>
    </div>
    <div class="popupDetail" v-show="show && clickNum>=0" @mouseover="mouseover" @mouseout="mouseout">
      <div class="popupContent" >
        <img class="close-btn" @click="closePopup" src="../assets/c10.png"/>
        <!-- 轮播图插件的使用问题 -->
        <swiper class="car-swiper swiper" :options="swiperOption" >
          <swiper-slide v-if="carDetail.length">
            <img :src="carDetail[clickNum].images[photoNum]" 
            v-for="(item,index) in carDetail[clickNum].images" 
            :key="index"
            v-show="showNum == index"/>
          </swiper-slide>
          <div class="pageNum" v-if="carDetail.length">
            <p>{{photoNum+1}}/{{carDetail[clickNum].images.length}}</p>
          </div>
          <div class="swiper-button-prev" 
            slot="button-prev" 
            @click="sub" 
            v-show="photoNum > 0" >
          </div>
          <div class="swiper-button-next" 
            slot="button-next" 
            @click="add" 
            v-show="carDetail.length && photoNum < carDetail[clickNum].images.length-1"></div>
        </swiper>
        <div class="car-content" v-if="carDetail.length">
          <h2>{{carDetail[clickNum].name}}</h2>
          <p class="price">官方建议零售价：{{"¥"+carDetail[clickNum].price_min}}{{"~"+carDetail[clickNum].price_max}}万</p>
          <p class="desc">{{carDetail[clickNum].description}}</p>
          <p class="car-link">
            <a :href="carDetail[clickNum].jump_link" target="blank">点击了解更多车型信息</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
export default {
  name:'carList',
  components: {
      Swiper,
      SwiperSlide
    },
  data(){
    return{
      carDetail:[],
      show:false,
      clickNum:0,
      showNum:0,
      photoNum:0,
      swiperOption: {
          pagination: {
            el: '.swiper-pagination',
            type: 'fraction'
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
      }
    }
  },
  mounted(){
    axios({
      url:'https://mock.yonyoucloud.com/mock/16361/car-data'
    }).then(
      (res)=>{
        this.carDetail = res.data.data.modelList
      },(err)=>{
        console.log(err)
      }
    )
  },
  methods:{
    getClickNum(num){
      this.clickNum = num;
      setTimeout(()=> {
        this.show = true;
      },100)
    },
    closePopup(){
      this.show = false;
      this.photoNum = 0 ;
    },
    // 设置fixed定位的div样式，光标在div内时只能div滚动（非整个页面滚动），采用mouseover 和mouseout 事件设置body的overflow属性
    mouseover(){
      document.body.style.overflow="hidden";
    },
    mouseout(){
      document.body.style.overflow="auto";
    },
    add(){
      this.photoNum ++
    },
    sub(){
      this.photoNum --;
    }
  }
}
</script>

<style scoped>

.carList,.cars{
  width: 100%;
  box-sizing: border-box;
  position: relative;
}
.carTitle{
  margin-bottom: 10px;
}
.carList{
padding: 46px 22px 22px;
}
.car-items{
  display: inline-block;
  margin-bottom: 20px;
}
.car-items .carPhoto{
 width: 348px;
 height: 244px;
 border-radius: 15px;
}
.car-items .title{
 color: #242629;
 font-size:30px ;
 margin-top: 10px;
 font-family: PingFangSC-Semibold;

}
.car-items .price{
 color: #717376;
 font-size:26px ;
 margin: 2px 0px;
 font-family:PingFangSC;
}
.car-items .carDesc{
 display: inline-block;
 padding:0  4px;
 color:#ffa7a7 ;
 border: 0.5px solid #FFa7a7;
 border-radius: 5px;
 font-size: 24px;
}
.cars div:nth-child(odd){
  margin-right: 10px;
}
.popupDetail{
  width: 100%;
  height: 100%;
  background-color:rgba(0,0,0,.8) ;
  z-index: 999;
  position: fixed;
  left: 0;
  top: 0;
  padding-top: 10%;
}
.popupContent{
  position: relative;
  width: 80%;
  margin: 0 auto;
  padding: 120px 0px;
  max-width: 600px;
}
.popupContent .close-btn{
 width: 34px;
 height: 34px;
 position: absolute;
 right: 0px;
 top: 60px;
}
.car-swiper{
  border-top-left-radius: 20px;
  border-top-right-radius:20px;
  overflow: hidden;
}
.car-swiper img{
  width: 100%;
  height:258px ;
  object-fit: cover;
  max-width: 600px;
}
.swiper-slide{
  overflow: hidden;
}
.swiper-slide img{
  display: inline-block;
}
.pageNum{
  position: absolute;
  bottom: 10px;
  right: 10px;
  border-radius: 15px;
  padding: 0 6px;
  background: rgba(0,0,0,.3);
  color: #fff;
  font-size: 14px;
}
.car-content{
  width: 100%;
  background-color: #fff;
  padding: 10px;
  box-sizing: border-box;
  text-align: center;
  font-size: 30px;
  color: #333;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}
.car-content h2{
 font-size: 40px;
}
.car-content h2,.car-content .price,.car-content .desc{
  margin-bottom: 6px;
}
.car-content .price{
  font-size: 28px;
  color: #717376;
}
.car-content .desc{
  text-align: left;
}
.car-link{
  text-align: right;
  text-decoration: underline;
  
}
.car-link a{
 color: #408FFF;
 font-size: 26px;
}

</style>