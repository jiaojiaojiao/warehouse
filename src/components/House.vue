<!--库房-->
<template>
  <div class="house ">
    <div class="houseContent">
    <ul class="houseItems clear">
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
      <div class="clear"></div>
    </ul>
    </div>

    <div class="lineCom">
      <img src="../assets/lineCop.png"></img>
    </div>
    <div class="computer">
      <ul class="computerList">
        <li>
          <img src="../assets/computer.png" alt="">
        </li>
        <li>
          <img src="../assets/computer.png" alt="">
        </li>
        <li>
          <img src="../assets/computer.png" alt="">
        </li>
        <div class="clear"></div>
      </ul>
    </div>
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
                }
                ,
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
          }
          ,
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
  .house{
    height: 100%;
    overflow-y: scroll;
  }
  .houseContent,.computerList {
    background-color: #18376a;
    opacity: 20%;
    border-radius: 2rem;
    transform:rotate(15deg);
    z-index: 1;
  }
  .houseContent{

    margin-top: 3rem;
  }
  .computer{
    /*margin-top: 2rem;*/
    text-align: center;
  }
  ul{
    list-style-type:none;
  }
 .clear{
   clear: both;
 }
  .houseItems{
    padding-left: 12rem;
    padding-bottom: 9rem;
    padding-top: 5rem;
    display: inline-block;
  }
  .houseItems .houseItem{
    float: left;
  }
  .box{
    display:inline-block;
    transform:rotate(-20deg);
  }
  .boxItem img{
    width: 5rem;
    height: 5rem;
/*  margin-right: 0.2rem;
    margin-left: 5rem;*/

  }
 .boxItem a:hover img{
   /*width: 4.5rem;*/
   /*height: 4.5rem;*/
   z-index: 0;
 }

  .boxItem{
    margin-right: 2rem;
   /* margin-bottom: -3rem;*/
  }

  .boxItem2 {
    margin-left: -5.4rem;
    margin-top: -4.1rem;
  }
 .boxItem3 {
   margin-left: -11rem;
   margin-top: -4rem;
 }
 .boxItem4 {
   margin-left: -16.8rem;
   margin-top: -4rem;
 }
 .boxItem5 {
   margin-left: -22.5rem;
   margin-top: -4rem;
 }
 .computer li{
   float: left;
   padding: 2rem;
 }
  .computer img{
    width: 5rem;
    height: 6rem;
  }
  .computerList{
    margin:0 auto;
    display:table;
    text-align: center;
  }
</style>
