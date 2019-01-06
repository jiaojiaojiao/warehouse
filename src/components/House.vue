<!--库房-->
<template>
  <div class="house">
    <ul class="houseItems">
      <li v-for="item in items"  class="houseItem" :class="item.style">
          <ul class="box">
            <li class=" boxItem" v-for="c in item.column" :class="c.style" >
              <a  @click="openMask()" href="javascript:void(0);">
                <img src="../assets/box.png" alt="">
              </a>
            </li>
           <!-- <li class="boxItem2 boxItem">
              <a href=""><img src="../assets/box.png" alt=""></a>
            </li>
            <li class="boxItem3 boxItem">
              <a href=""><img src="../assets/box.png" alt=""></a>
            </li>
            <li class="boxItem4 boxItem">
              <a href=""><img src="../assets/box.png" alt=""></a>
            </li>
            <li class="boxItem5 boxItem">
              <a href=""><img src="../assets/box.png" alt=""></a>
            </li>-->
          </ul>
      </li>
    </ul>

  </div>
</template>
<script>
  import dialogBar from './Dialog.vue'
  export default {
    components:{
      'dialog-bar': dialogBar,
    },
    name: 'House',
    data () {
      return {
        sendVal: false,
        items : [
          {
            column:
              [
                {
                  number:1,
                  style:''
                },
                {
                  number:2,
                  style:'boxItem2'
                },
                {
                  number:3,
                  style:'boxItem3'
                },
                {
                  number:4,
                  style:'boxItem4'
                },
                {
                  number:5,
                  style:'boxItem5'
                }
            ],
            line:1
          },
          {
            column:
              [
                {
                  number:1,
                  style:''
                },
                {
                  number:2,
                  style:'boxItem2'
                },
                {
                  number:3,
                  style:'boxItem3'
                },
                {
                  number:4,
                  style:'boxItem4'
                },
                {
                  number:5,
                  style:'boxItem5'
                }
              ],
            line:2
          },
          {
            column:
              [
                {
                  number:1,
                  style:''
                },
                {
                  number:2,
                  style:'boxItem2'
                },
                {
                  number:3,
                  style:'boxItem3'
                },
                {
                  number:4,
                  style:'boxItem4'
                },
                {
                  number:5,
                  style:'boxItem5'
                }
              ],
            line:3,
            style:'marginLeft'
          },
          {
            column:
              [
                {
                  number:1,
                  style:''
                },
                {
                  number:2,
                  style:'boxItem2'
                },
                {
                  number:3,
                  style:'boxItem3'
                },
                {
                  number:4,
                  style:'boxItem4'
                },
                {
                  number:5,
                  style:'boxItem5'
                }
              ],
            line:4
          },
          {
            column:
              [
                {
                  number:1,
                  style:''
                },
                {
                  number:2,
                  style:'boxItem2'
                },
                {
                  number:3,
                  style:'boxItem3'
                },
                {
                  number:4,
                  style:'boxItem4'
                },
                {
                  number:5,
                  style:'boxItem5'
                }
              ],
            line:5,
            style:'marginLeft'
          },
          {
            column:
              [
                {
                  number:1,
                  style:''
                },
                {
                  number:2,
                  style:'boxItem2'
                },
                {
                  number:3,
                  style:'boxItem3'
                },
                {
                  number:4,
                  style:'boxItem4'
                },
                {
                  number:5,
                  style:'boxItem5'
                }
              ],
            line:6
          },
          {
            column:
              [
                {
                  number:1,
                  style:''
                },
                {
                  number:2,
                  style:'boxItem2'
                },
                {
                  number:3,
                  style:'boxItem3'
                },
                {
                  number:4,
                  style:'boxItem4'
                },
                {
                  number:5,
                  style:'boxItem5'
                }
              ],
            line:7,
            style:'marginLeft'
          },
          {
            column:
              [
                {
                  number:1,
                  style:''
                },
                {
                  number:2,
                  style:'boxItem2'
                },
                {
                  number:3,
                  style:'boxItem3'
                },
                {
                  number:4,
                  style:'boxItem4'
                },
                {
                  number:5,
                  style:'boxItem5'
                }
              ],
            line:8
          }
        ]
      }
    } ,
    methods:{
      openMask(index){
        this.sendVal = true;
      },
      clickCancel(){
        console.log('点击了取消');
      },
      clickDanger(){
        console.log('这里是danger回调')
      },
      clickConfirm(){
        console.log('点击了confirm');
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 /* .house{
    background: url('../assets/bg.png');
    width: 100%;
    height: 2000px;
  }*/
  ul{
    list-style-type:none;
  }
  .houseItems{
    margin-left: 10rem;
  }
  .houseItems .houseItem{
    float: left;
  }
  .box{
    display:inline;
  }
  .boxItem img{
    width: 4rem;
    height: 4rem;
    /*margin-right: 0.2rem;
    margin-left: 5rem;*/

  }
 .boxItem a:hover img{
   /*width: 4.5rem;*/
   /*height: 4.5rem;*/
   z-index: 0;
   -webkit-animation: living 3s linear infinite;
 }

  .boxItem{
    margin-right: 5rem;
  }
 @keyframes living {
   0%{
     transform: scale(1);
     opacity: 1;
   }
   50%{
     transform: scale(1.2);
     opacity: 0.5;   /*圆形放大的同时，透明度逐渐减小为0*/
   }
   100%{
     transform: scale(1);
     opacity: 1;
   }
 }
   .marginLeft{
    margin-left: -5rem;
  }
 /* .boxItem2 {
    margin-left: 0rem;
    margin-top: -3rem;
  }
 .boxItem3 {
   margin-left: -5rem;
   margin-top: -3rem;
 }
 .boxItem4 {
   margin-left: -10rem;
   margin-top: -3rem;
 }
 .boxItem5 {
   margin-left: -15rem;
   margin-top: -3rem;
 }*/
</style>
