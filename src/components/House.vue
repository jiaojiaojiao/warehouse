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
                </a>
               -->
                <a  href="javascript:void(0);"  v-if="c.isactive" v-tooltip.notrigger="{ content: c.shelfname+'货架'+c.detailrow+'层'+c.detailcolumn+'列'+c.detailno+'号', visible: c.isactive}">
                   <img v-if="c.detailrow==1&&c.detailno==1&&(c.shelfname=='A'||c.shelfname=='B'||c.shelfname=='C'||c.shelfname=='D'||c.shelfname=='E')" src="../assets/box/four/box1-1.gif" alt="">
                   <img v-if="c.detailrow==1&&c.detailno==2&&(c.shelfname=='A'||c.shelfname=='B'||c.shelfname=='C'||c.shelfname=='D'||c.shelfname=='E')" src="../assets/box/four/box1-2.gif" alt="">
                   <img v-if="c.detailrow==1&&c.detailno==3&&(c.shelfname=='A'||c.shelfname=='B'||c.shelfname=='C'||c.shelfname=='D'||c.shelfname=='E')" src="../assets/box/four/box1-3.gif" alt="">
                   <img v-if="c.detailrow==1&&c.detailno==4&&(c.shelfname=='A'||c.shelfname=='B'||c.shelfname=='C'||c.shelfname=='D'||c.shelfname=='E')" src="../assets/box/four/box1-4.gif" alt="">

                   <img v-if="c.detailrow==2&&c.detailno==1&&(c.shelfname=='A'||c.shelfname=='B'||c.shelfname=='C'||c.shelfname=='D'||c.shelfname=='E')" src="../assets/box/four/box2-1.gif" alt="">
                   <img v-if="c.detailrow==2&&c.detailno==2&&(c.shelfname=='A'||c.shelfname=='B'||c.shelfname=='C'||c.shelfname=='D'||c.shelfname=='E')" src="../assets/box/four/box2-2.gif" alt="">
                   <img v-if="c.detailrow==2&&c.detailno==3&&(c.shelfname=='A'||c.shelfname=='B'||c.shelfname=='C'||c.shelfname=='D'||c.shelfname=='E')" src="../assets/box/four/box2-3.gif" alt="">
                   <img v-if="c.detailrow==2&&c.detailno==4&&(c.shelfname=='A'||c.shelfname=='B'||c.shelfname=='C'||c.shelfname=='D'||c.shelfname=='E')" src="../assets/box/four/box2-4.gif" alt="">

                   <img v-if="c.detailrow==3&&c.detailno==1&&(c.shelfname=='A'||c.shelfname=='B'||c.shelfname=='C'||c.shelfname=='D'||c.shelfname=='E')" src="../assets/box/four/box3-1.gif" alt="">
                   <img v-if="c.detailrow==3&&c.detailno==2&&(c.shelfname=='A'||c.shelfname=='B'||c.shelfname=='C'||c.shelfname=='D'||c.shelfname=='E')" src="../assets/box/four/box3-2.gif" alt="">
                   <img v-if="c.detailrow==3&&c.detailno==3&&(c.shelfname=='A'||c.shelfname=='B'||c.shelfname=='C'||c.shelfname=='D'||c.shelfname=='E')" src="../assets/box/four/box3-3.gif" alt="">
                   <img v-if="c.detailrow==3&&c.detailno==4&&(c.shelfname=='A'||c.shelfname=='B'||c.shelfname=='C'||c.shelfname=='D'||c.shelfname=='E')" src="../assets/box/four/box3-4.gif" alt="">


                   <img v-if="c.detailrow==4&&c.detailno==1&&(c.shelfname=='A'||c.shelfname=='B'||c.shelfname=='C'||c.shelfname=='D'||c.shelfname=='E')" src="../assets/box/four/box4-1.gif" alt="">
                   <img v-if="c.detailrow==4&&c.detailno==2&&(c.shelfname=='A'||c.shelfname=='B'||c.shelfname=='C'||c.shelfname=='D'||c.shelfname=='E')" src="../assets/box/four/box4-2.gif" alt="">
                   <img v-if="c.detailrow==4&&c.detailno==3&&(c.shelfname=='A'||c.shelfname=='B'||c.shelfname=='C'||c.shelfname=='D'||c.shelfname=='E')" src="../assets/box/four/box4-3.gif" alt="">
                   <img v-if="c.detailrow==4&&c.detailno==4&&(c.shelfname=='A'||c.shelfname=='B'||c.shelfname=='C'||c.shelfname=='D'||c.shelfname=='E')" src="../assets/box/four/box4-4.gif" alt="">

                  <img v-if="c.detailrow==1&&c.detailno==1&&(c.shelfname=='F'||c.shelfname=='G'||c.shelfname=='H')" src="../assets/box/three/box1-1.gif" alt="">
                  <img v-if="c.detailrow==1&&c.detailno==2&&(c.shelfname=='F'||c.shelfname=='G'||c.shelfname=='H')" src="../assets/box/three/box1-2.gif" alt="">
                  <img v-if="c.detailrow==1&&c.detailno==3&&(c.shelfname=='F'||c.shelfname=='G'||c.shelfname=='H')" src="../assets/box/three/box1-3.gif" alt="">
                  <img v-if="c.detailrow==1&&c.detailno==4&&(c.shelfname=='F'||c.shelfname=='G'||c.shelfname=='H')" src="../assets/box/three/box1-4.gif" alt="">


                  <img v-if="c.detailrow==2&&c.detailno==1&&(c.shelfname=='F'||c.shelfname=='G'||c.shelfname=='H')" src="../assets/box/three/box2-1.gif" alt="">
                  <img v-if="c.detailrow==2&&c.detailno==2&&(c.shelfname=='F'||c.shelfname=='G'||c.shelfname=='H')" src="../assets/box/three/box2-2.gif" alt="">
                  <img v-if="c.detailrow==2&&c.detailno==3&&(c.shelfname=='F'||c.shelfname=='G'||c.shelfname=='H')" src="../assets/box/three/box2-3.gif" alt="">
                  <img v-if="c.detailrow==2&&c.detailno==4&&(c.shelfname=='F'||c.shelfname=='G'||c.shelfname=='H')" src="../assets/box/three/box2-4.gif" alt="">


                  <img v-if="c.detailrow==3&&c.detailno==1&&(c.shelfname=='F'||c.shelfname=='G'||c.shelfname=='H')" src="../assets/box/three/box3-1.gif" alt="">
                  <img v-if="c.detailrow==3&&c.detailno==2&&(c.shelfname=='F'||c.shelfname=='G'||c.shelfname=='H')" src="../assets/box/three/box3-2.gif" alt="">
                  <img v-if="c.detailrow==3&&c.detailno==3&&(c.shelfname=='F'||c.shelfname=='G'||c.shelfname=='H')" src="../assets/box/three/box3-3.gif" alt="">
                  <img v-if="c.detailrow==3&&c.detailno==4&&(c.shelfname=='F'||c.shelfname=='G'||c.shelfname=='H')" src="../assets/box/three/box3-4.gif" alt="">
                </a>

                <a  href="javascript:void(0);"  :title="item.line" v-else-if="item.line=='A'||item.line=='B'||item.line=='C'||item.line=='D'||item.line=='E'">
                  <img src="../assets/box/four.png" alt="">
                </a>
                <a  href="javascript:void(0);"  :title="item.line" v-else="item.line=='F'||item.line=='G'||item.line=='H'">
                  <img src="../assets/box/three.png" alt="">
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
                  isactive:false,
                  shelfname:'',
                  detailrow:'',
                  detailcolumn:'',
                  detailno:''
                }
                ,
                {
                  number:2,
                  style:'boxItem2',
                  isactive:false,
                  shelfname:'',
                  detailrow:'',
                  detailcolumn:'',
                  detailno:''
                },
                {
                  number:3,
                  style:'boxItem3',
                  isactive:false,
                  shelfname:'',
                  detailrow:'',
                  detailcolumn:'',
                  detailno:''
                },
                {
                  number:4,
                  style:'boxItem4',
                  isactive:false
                },
                {
                  number:5,
                  style:'boxItem5',
                  isactive:false,
                  shelfname:'',
                  detailrow:'',
                  detailcolumn:'',
                  detailno:''
                },
                {
                  number:6,
                  style:'boxItem6',
                  isactive:false,
                  shelfname:'',
                  detailrow:'',
                  detailcolumn:'',
                  detailno:''
                }
            ],
            line:'A'
          }
          ,
          {
            column:
              [
                {
                  number:1,
                  style:'',
                  isactive:false,
                  shelfname:'',
                  detailrow:'',
                  detailcolumn:'',
                  detailno:''
                }
                ,
                {
                  number:2,
                  style:'boxItem2',
                  isactive:false,
                  shelfname:'',
                  detailrow:'',
                  detailcolumn:'',
                  detailno:''
                },
                {
                  number:3,
                  style:'boxItem3',
                  isactive:false,
                  shelfname:'',
                  detailrow:'',
                  detailcolumn:'',
                  detailno:''
                },
                {
                  number:4,
                  style:'boxItem4',
                  isactive:false
                },
                {
                  number:5,
                  style:'boxItem5',
                  isactive:false,
                  shelfname:'',
                  detailrow:'',
                  detailcolumn:'',
                  detailno:''
                },
                {
                  number:6,
                  style:'boxItem6',
                  isactive:false,
                  shelfname:'',
                  detailrow:'',
                  detailcolumn:'',
                  detailno:''
                }
              ],
            line:'B'
          },
          {
            column:
              [
                {
                  number:1,
                  style:'',
                  isactive:false,
                  shelfname:'',
                  detailrow:'',
                  detailcolumn:'',
                  detailno:''
                }
                ,
                {
                  number:2,
                  style:'boxItem2',
                  isactive:false,
                  shelfname:'',
                  detailrow:'',
                  detailcolumn:'',
                  detailno:''
                },
                {
                  number:3,
                  style:'boxItem3',
                  isactive:false,
                  shelfname:'',
                  detailrow:'',
                  detailcolumn:'',
                  detailno:''
                },
                {
                  number:4,
                  style:'boxItem4',
                  isactive:false
                },
                {
                  number:5,
                  style:'boxItem5',
                  isactive:false,
                  shelfname:'',
                  detailrow:'',
                  detailcolumn:'',
                  detailno:''
                },
                {
                  number:6,
                  style:'boxItem6',
                  isactive:false,
                  shelfname:'',
                  detailrow:'',
                  detailcolumn:'',
                  detailno:''
                }
              ],
            line:'C'
          },
          {
            column:
              [
                {
                  number:1,
                  style:'',
                  isactive:false,
                  shelfname:'',
                  detailrow:'',
                  detailcolumn:'',
                  detailno:''
                }
                ,
                {
                  number:2,
                  style:'boxItem2',
                  isactive:false,
                  shelfname:'',
                  detailrow:'',
                  detailcolumn:'',
                  detailno:''
                },
                {
                  number:3,
                  style:'boxItem3',
                  isactive:false,
                  shelfname:'',
                  detailrow:'',
                  detailcolumn:'',
                  detailno:''
                },
                {
                  number:4,
                  style:'boxItem4',
                  isactive:false
                },
                {
                  number:5,
                  style:'boxItem5',
                  isactive:false,
                  shelfname:'',
                  detailrow:'',
                  detailcolumn:'',
                  detailno:''
                }
              ],
            line:'D'
          },
          {
            column:
              [
                {
                  number:1,
                  style:'',
                  isactive:false,
                  shelfname:'',
                  detailrow:'',
                  detailcolumn:'',
                  detailno:''
                }
                ,
                {
                  number:2,
                  style:'boxItem2',
                  isactive:false,
                  shelfname:'',
                  detailrow:'',
                  detailcolumn:'',
                  detailno:''
                },
                {
                  number:3,
                  style:'boxItem3',
                  isactive:false,
                  shelfname:'',
                  detailrow:'',
                  detailcolumn:'',
                  detailno:''
                },
                {
                  number:4,
                  style:'boxItem4',
                  isactive:false
                },
                {
                  number:5,
                  style:'boxItem5',
                  isactive:false,
                  shelfname:'',
                  detailrow:'',
                  detailcolumn:'',
                  detailno:''
                }
              ],
            line:'E'
          },
          {
            column:
              [
                {
                  number:1,
                  style:'',
                  isactive:false,
                  shelfname:'',
                  detailrow:'',
                  detailcolumn:'',
                  detailno:''
                }
                ,
                {
                  number:2,
                  style:'boxItem2',
                  isactive:false,
                  shelfname:'',
                  detailrow:'',
                  detailcolumn:'',
                  detailno:''
                },
                {
                  number:3,
                  style:'boxItem3',
                  isactive:false,
                  shelfname:'',
                  detailrow:'',
                  detailcolumn:'',
                  detailno:''
                },
                {
                  number:4,
                  style:'boxItem4',
                  isactive:false
                },
                {
                  number:5,
                  style:'boxItem5',
                  isactive:false,
                  shelfname:'',
                  detailrow:'',
                  detailcolumn:'',
                  detailno:''
                },
                {
                  number:6,
                  style:'boxItem6',
                  isactive:false,
                  shelfname:'',
                  detailrow:'',
                  detailcolumn:'',
                  detailno:''
                }
              ],
            line:'F'
          },
          {
            column:
              [
                {
                  number:1,
                  style:'',
                  isactive:false,
                  shelfname:'',
                  detailrow:'',
                  detailcolumn:'',
                  detailno:''
                }
                ,
                {
                  number:2,
                  style:'boxItem2',
                  isactive:false,
                  shelfname:'',
                  detailrow:'',
                  detailcolumn:'',
                  detailno:''
                },
                {
                  number:3,
                  style:'boxItem3',
                  isactive:false,
                  shelfname:'',
                  detailrow:'',
                  detailcolumn:'',
                  detailno:''
                },
                {
                  number:4,
                  style:'boxItem4',
                  isactive:false
                },
                {
                  number:5,
                  style:'boxItem5',
                  isactive:false,
                  shelfname:'',
                  detailrow:'',
                  detailcolumn:'',
                  detailno:''
                },
                {
                  number:6,
                  style:'boxItem6',
                  isactive:false,
                  shelfname:'',
                  detailrow:'',
                  detailcolumn:'',
                  detailno:''
                }
              ],
            line:'G'
          },
          {
            column:
              [
                {
                  number:1,
                  style:'',
                  isactive:false,
                  shelfname:'',
                  detailrow:'',
                  detailcolumn:'',
                  detailno:''
                }
                ,
                {
                  number:2,
                  style:'boxItem2',
                  isactive:false,
                  shelfname:'',
                  detailrow:'',
                  detailcolumn:'',
                  detailno:''
                },
                {
                  number:3,
                  style:'boxItem3',
                  isactive:false,
                  shelfname:'',
                  detailrow:'',
                  detailcolumn:'',
                  detailno:''
                },
                {
                  number:4,
                  style:'boxItem4',
                  isactive:false
                },
                {
                  number:5,
                  style:'boxItem5',
                  isactive:false,
                  shelfname:'',
                  detailrow:'',
                  detailcolumn:'',
                  detailno:''
                },
                {
                  number:6,
                  style:'boxItem6',
                  isactive:false,
                  shelfname:'',
                  detailrow:'',
                  detailcolumn:'',
                  detailno:''
                }
              ],
            line:'H'
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
        /*console.log('aaaaaaaaa')
        console.log(materias)*/
        var time=0
        houses.map(house => {
           house.column.map(column => {
             column.isactive=false
             for(var i in materias) {
               if (house.line == materias[i].shelfname && materias[i].detailcolumn == (column.lenght=6?(7-column.number):(6-column.number)) ){
                   column.shelfname=materias[i].shelfname
                   column.detailno=materias[i].detailno
                   column.detailrow=materias[i].detailrow
                   column.detailcolumn=materias[i].detailcolumn
                 setTimeout(function () {
                   column.isactive=true
                 }, time)
                 time=time+1000
                 if(i<materias.length-1){
                   setTimeout(function () {
                     column.isactive=false
                     console.log(column)
                   }, time)
                 }
               }
               }
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
    overflow-y: hidden;
    overflow-x: hidden;

  }
  .houseContent,.computerList {
    background-color: #18376a;
    opacity: 20%;
    border-radius: 2rem;
    transform:rotate(5deg);
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
    padding-left: 10rem;
    padding-bottom: 10rem;
    padding-top: 0.5rem;
    display: inline-block;
  }
  .houseItems .houseItem{
    float: left;
  }
  /*.houseItem{
    margin-right: 1rem;
  }*/
  .box{
    display:inline-block;
    transform:rotate(-15deg);
  }
  .boxItem img{
    width: 7rem;
    height: 8rem;
/*  margin-right: 0.2rem;
    margin-left: 5rem;*/

  }
 .boxItem a:hover img{
   /*width: 4.5rem;*/
   /*height: 4.5rem;*/
   z-index: 0;
 }

  .boxItem{
    /* margin-right: 1rem;
     margin-bottom: -3rem;*/
  }

  .boxItem2 {
    margin-left: -5.2rem;
    margin-top: -6.5rem;
  }
 .boxItem3 {
   margin-left: -10.2rem;
   margin-top: -6.5rem;
 }
 .boxItem4 {
   margin-left: -15.2rem;
   margin-top: -6.5rem;
 }
 .boxItem5 {
   margin-left: -20.2rem;
   margin-top: -6.5rem;
 }
  .boxItem6 {
    margin-left: -25.2rem;
    margin-top: -6.5rem;
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
