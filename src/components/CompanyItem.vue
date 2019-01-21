<!--单位信息-->
<template>
  <div class="company">
   <ul class="companyItems">
        <li v-for="item in companyList" >
            <v-if receiveunit=item>
              <a href="" class="companyItem active" v-bind:title=item >
                {{item}}
              </a>
            </v-if>
          <v-else>
            <a href="" class="companyItem" v-bind:title=item>
              {{item}}
            </a>
          </v-else>
        </li>
    </ul>

  </div>
</template>
<script>
export default {
  name: 'MaterialItem',
  props:['companyList','receiveunit'],
  data () {
    return {
       items: ['金瓜子科技发展（北京）有限公司','京东数字科技控股有限公司','上海基分文化传播有限公司','北京锤子数码科技有限公司','北京故宫文化传播有限公司','京千橡网景科技发展有限公司','重庆大学','重庆理工大学']
    }
  },
  computed: {
    isReceive(){
      var companys=this.companyList
      var time=10
      var num=0
      companys.map(company => {
        setTimeout(function () {
          num++
        }, time)
        time=time+2000
      })
      return num
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul{
    list-style-type:none;
  }
  .companyItems li{
    float: left;
    width: 25%;
    height: 3.5rem;
    box-sizing: border-box;
  }
  a{
    border: 2px #4881ab solid;
    text-decoration:none;
    display: inline-block;
    height: 100%;
    width: 100%;
    line-height: 3.5rem;
    background-color: #031793;
    color: #7ae1fa;
    font-size: 1rem;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .companyItem:hover,.active{
    background: no-repeat url('../assets/companyBackground.png');
    background-size: cover;
  }
</style>
