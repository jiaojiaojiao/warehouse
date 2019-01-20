<!--库房-->
<template>
  <div class="house ">
    <div class="houseContent">
    <ul class="houseItems clear">
      <li v-for="item  in list"  class="houseItem" :class="item.style">
          <ul class="box">
            <li class="boxItem" v-for="c in item.column" :class="c.style" >
                  <!--<a  href="javascript:void(0);" v-for="material in list">
                    <template v-if="material.detailno==item.line && material.detailrow ==c.number">
                      <img src="../assets/boxActive.png" alt="">
                    </template>
                    <template v-else>
                      <img src="../assets/box.png" alt="">
                    </template>
                </a>-->
                <a  href="javascript:void(0);"  v-if="c.isactive">
                <img src="../assets/boxactive.gif" alt="">
              </a>
              <a  href="javascript:void(0);"  v-else>
                <img src="../assets/box.png" alt="">
              </a>
            </li>
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
    props:['materialList'],
    data () {
      return {
        sendVal: false,
        houseList : [
          {
            column:
              [
                {
                  number:1,
                  style:'',
                  isactive:false
                }
                ,
                {
                  number:2,
                  style:'boxItem2',
                  isactive:false
                },
                {
                  number:3,
                  style:'boxItem3',
                  isactive:false
                },
                {
                  number:4,
                  style:'boxItem4',
                  isactive:false
                },
                {
                  number:5,
                  style:'boxItem5',
                  isactive:false
                },
                {
                  number:6,
                  style:'boxItem6',
                  isactive:false
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
                  style:'',
                  isactive:false
                }
                ,
                {
                  number:2,
                  style:'boxItem2',
                  isactive:false
                },
                {
                  number:3,
                  style:'boxItem3',
                  isactive:false
                },
                {
                  number:4,
                  style:'boxItem4',
                  isactive:false
                },
                {
                  number:5,
                  style:'boxItem5',
                  isactive:false
                },
                {
                  number:6,
                  style:'boxItem6',
                  isactive:false
                }
              ],
            line:2
          },
          {
            column:
              [
                {
                  number:1,
                  style:'',
                  isactive:false
                }
                ,
                {
                  number:2,
                  style:'boxItem2',
                  isactive:false
                },
                {
                  number:3,
                  style:'boxItem3',
                  isactive:false
                },
                {
                  number:4,
                  style:'boxItem4',
                  isactive:false
                },
                {
                  number:5,
                  style:'boxItem5',
                  isactive:false
                },
                {
                  number:6,
                  style:'boxItem6',
                  isactive:false
                }
              ],
            line:3
          },
          {
            column:
              [
                {
                  number:1,
                  style:'',
                  isactive:false
                }
                ,
                {
                  number:2,
                  style:'boxItem2',
                  isactive:false
                },
                {
                  number:3,
                  style:'boxItem3',
                  isactive:false
                },
                {
                  number:4,
                  style:'boxItem4',
                  isactive:false
                },
                {
                  number:5,
                  style:'boxItem5',
                  isactive:false
                },
                {
                  number:6,
                  style:'boxItem6',
                  isactive:false
                }
              ],
            line:4
          },
          {
            column:
              [
                {
                  number:1,
                  style:'',
                  isactive:false
                }
                ,
                {
                  number:2,
                  style:'boxItem2',
                  isactive:false
                },
                {
                  number:3,
                  style:'boxItem3',
                  isactive:false
                },
                {
                  number:4,
                  style:'boxItem4',
                  isactive:false
                },
                {
                  number:5,
                  style:'boxItem5',
                  isactive:false
                },
                {
                  number:6,
                  style:'boxItem6',
                  isactive:false
                }
              ],
            line:5,
            style:'marginLeft'
          }
        ],
        matailIndex:0
      }
    } ,
    methods:{
    },
    computed :{
      list(){
        var houses=this.houseList
        var materias=this.materialList
        console.log('aaaaaaaaa')
        console.log(materias)
        houses.map(house => {
           house.column.map(column => {
             materias.map(materal=>
             {
               if (house.line == materal.detailno && materal.detailrow == column.number) {
                column.isactive=true
               }
               })
             })
        })
        return this.houseList
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .house{
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
  }
  .houseContent,.computerList {
    background-color: #18376a;
    opacity: 20%;
    border-radius: 2rem;
    transform:rotate(7deg);
    z-index: 1;
  }
  .houseContent{
    margin: 3.5rem 1rem 0rem;
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
    padding-left: 20rem;
    padding-bottom: 10rem;
    padding-top: 0.5rem;
    display: inline-block;
  }
  .houseItems .houseItem{
    float: left;
  }
  .houseItem{
    margin-right: 2rem;
  }
  .box{
    display:inline-block;
    transform:rotate(-20deg);
  }
  .boxItem img{
    width: 6rem;
    height: 6rem;
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
    margin-left: -7rem;
    margin-top: -4.6rem;
  }
 .boxItem3 {
   margin-left: -14rem;
   margin-top: -4.6rem;
 }
 .boxItem4 {
   margin-left: -21rem;
   margin-top: -4.6rem;
 }
 .boxItem5 {
   margin-left: -28rem;
   margin-top: -4.6rem;
 }
  .boxItem6 {
    margin-left: -35rem;
    margin-top: -4.6rem;
  }
 .computer li{
   float: left;
   padding: 0.4rem 1rem;
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
  .lineCom img{
    height: 2rem;
  }
</style>
