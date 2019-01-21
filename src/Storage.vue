<template>
  <layout>
    <menu-item slot="header" :title-list="headerTitle"></menu-item>
    <storage-item slot="left-bar" :material-list="MaterialList" ></storage-item>
    <!--<div class="bottom" slot="bottom-bar">
      <company-item :company-list="companyList" :receiveunit="Receiveunit"></company-item>
    </div>-->
    <house-item slot="container" :material-list="MaterialList"></house-item>
    <dialog-bar slot="dialog-bar"></dialog-bar>
    <title-left slot="left-menu" :receiveunit="Receiveunit"></title-left>
    <title-right slot="right-menu"></title-right>

  </layout>
</template>
<script>
  import menuItem from './components/MenuItem.vue'
  import StorageItem from './components/StorageItem.vue'
  import companyItem from './components/CompanyItem.vue'
  import houseItem from './components/House.vue'
  import dialogBar from './components/Dialog.vue'
  import titleLeft from './components/TitleLeft.vue'
  import titleRight from './components/TitleRight.vue'

  import ajax from './utils/ajax'
  const headerTitle={input: '入库',output: '出库',storage: '仓库'}

  export default {
    data() {
      return {
        headerTitle,
        storageDate: [],
        companyList:[],//单位列表
        MaterialList:[],//货物列表
        Receiveunit:"",//接收单位
        queryInterval: null
      }
    },
    components: {
      menuItem,
      StorageItem,
      companyItem,
      houseItem,
      dialogBar,
      titleLeft,
      titleRight
    },
    mounted() {
      const _this = this
      _this.querydata()
      _this.queryInterval = window.setInterval(_this.querydata, 200000)
      /*_this.storageDate = {
        "Entity": [
          {
            "taskid": "25",
            "outwasecode": "100002",
            "receiveunit": "4",
            "unitaddress": "4",
            "contactman": "4",
            "contactphone": "15310671012",
            "carlicense": "渝AK1234",
            "MaterialList": [
              {
                "tmaterialid": "26",
                "materialname": "野战器材箱",
                "materialtypename": "办公物资",
                "materialcount": "5",
                "materialmode": "规格1*0.6*0.5",
                "boxid": "6",
                "boxname": "3号容器",
                "boxrfid": "373737323536633430383266",
                "shelfid": "11",
                "shelfname": "3号货架",
                "shelfdetailid": "481",
                "shelfdetailrfid": "633065353230336237623064",
                "detailrow": "1",
                "detailcolumn": "1",
                "detailno": "1"
              },
              {
                "tmaterialid": "27",
                "materialname": "野战器材箱11",
                "materialtypename": "办公物资",
                "materialcount": "5",
                "materialmode": "规格1*0.6*0.5",
                "boxid": "6",
                "boxname": "3号容器",
                "boxrfid": "373737323536633430383266",
                "shelfid": "11",
                "shelfname": "3号货架",
                "shelfdetailid": "481",
                "shelfdetailrfid": "633065353230336237623064",
                "detailrow": "2",
                "detailcolumn": "2",
                "detailno": "1"
              }
            ]
          },
          {
            "taskid": "26",
            "outwasecode": "100003",
            "receiveunit": "6",
            "unitaddress": "6",
            "contactman": "6",
            "contactphone": "15310671012",
            "carlicense": "渝AK1234",
            "MaterialList": [
              {
                "tmaterialid": "26",
                "materialname": "野战器材箱",
                "materialtypename": "办公物资",
                "materialmode": "规格1*0.6*0.5",
                "materialcount": "5",
                "boxid": "6",
                "boxname": "3号容器",
                "boxrfid": "373737323536633430383266",
                "shelfid": "11",
                "shelfname": "3号货架",
                "shelfdetailid": "481",
                "shelfdetailrfid": "633065353230336237623064",
                "detailrow": "1",
                "detailcolumn": "1",
                "detailno": "1"
              },
              {
                "tmaterialid": "27",
                "materialname": "打印机",
                "materialtypename": "办公物资",
                "materialmode": "佳能",
                "materialcount": "5",
                "boxid": "",
                "boxname": "",
                "boxrfid": "",
                "shelfid": "9",
                "shelfname": "1号货架",
                "shelfdetailid": "242",
                "shelfdetailrfid": "000000000000000000000033",
                "detailrow": "1",
                "detailcolumn": "1",
                "detailno": "2"
              }
            ]
          }
        ],
        "Extend": null,
        "IsSucceed": true,
        "Message": null,
        "TotalCount": 0,
        "TotalCurr": 0,
        "userid": 0,
        "username": null
      }*/
    /*  console.log('aa')
      console.log( _this.storageDate)*/
    },
    methods: {
      querydata(){
        const _this = this
        ajax({
          url: 'http://116.62.30.175:8004/API/VehicleMonitor/OutWareH5Query.ashx',
          method: 'post'
        }).then(res => {
          console.log('aaa')
          console.log(res)
          /*res = {
           "Entity": [
           {
           "taskid": "25",
           "outwasecode": "100002",
           "receiveunit": "4",
           "unitaddress": "4",
           "contactman": "4",
           "contactphone": "15310671012",
           "carlicense": "渝AK1234",
           "MaterialList": [
           {
           "tmaterialid": "26",
           "materialname": "野战器材箱",
           "materialtypename": "办公物资",
           "materialcount": "5",
           "materialmode": "规格1*0.6*0.5",
           "boxid": "6",
           "boxname": "3号容器",
           "boxrfid": "373737323536633430383266",
           "shelfid": "11",
           "shelfname": "3号货架",
           "shelfdetailid": "481",
           "shelfdetailrfid": "633065353230336237623064",
           "detailrow": "1",
           "detailcolumn": "1",
           "detailno": "1"
           },
           {
           "tmaterialid": "27",
           "materialname": "野战器材箱11",
           "materialtypename": "办公物资",
           "materialcount": "5",
           "materialmode": "规格1*0.6*0.5",
           "boxid": "6",
           "boxname": "3号容器",
           "boxrfid": "373737323536633430383266",
           "shelfid": "11",
           "shelfname": "3号货架",
           "shelfdetailid": "481",
           "shelfdetailrfid": "633065353230336237623064",
           "detailrow": "2",
           "detailcolumn": "2",
           "detailno": "1"
           }
           ]
           },
           {
           "taskid": "26",
           "outwasecode": "100003",
           "receiveunit": "6",
           "unitaddress": "6",
           "contactman": "6",
           "contactphone": "15310671012",
           "carlicense": "渝AK1234",
           "MaterialList": [
           {
           "tmaterialid": "26",
           "materialname": "野战器材箱",
           "materialtypename": "办公物资",
           "materialmode": "规格1*0.6*0.5",
           "materialcount": "5",
           "boxid": "6",
           "boxname": "3号容器",
           "boxrfid": "373737323536633430383266",
           "shelfid": "11",
           "shelfname": "3号货架",
           "shelfdetailid": "481",
           "shelfdetailrfid": "633065353230336237623064",
           "detailrow": "1",
           "detailcolumn": "1",
           "detailno": "1"
           },
           {
           "tmaterialid": "27",
           "materialname": "打印机",
           "materialtypename": "办公物资",
           "materialmode": "佳能",
           "materialcount": "5",
           "boxid": "",
           "boxname": "",
           "boxrfid": "",
           "shelfid": "9",
           "shelfname": "1号货架",
           "shelfdetailid": "242",
           "shelfdetailrfid": "000000000000000000000033",
           "detailrow": "1",
           "detailcolumn": "1",
           "detailno": "2"
           }
           ]
           }
           ],
           "Extend": null,
           "IsSucceed": true,
           "Message": null,
           "TotalCount": 0,
           "TotalCurr": 0,
           "userid": 0,
           "username": null
           }*/
          this.storageDate=res
          /*this.showMaterlList(res,0)*/
          const length = res.Entity.length
          var i = 0
          const setMaterial = () => {
            if(i < length-1){
              i=i+1
            }
            else {
              i=0
            }
            console.log("这是第几个"+i)
            _this.MaterialList=res.Entity[i].MaterialList
            console.log( _this.MaterialList)
            _this.Receiveunit=res.Entity[i].receiveunit
            console.log( _this.Receiveunit)
            setTimeout(setMaterial, 20000)
          }
          setMaterial();
        })
      },
      showMaterlList(res,index){
        const _this = this
        if(res.IsSucceed){
          res.Entity.map(item => {
            _this.companyList.push(item.receiveunit)
          })
          _this.MaterialList=res.Entity[index].MaterialList
          _this.Receiveunit=res.Entity[index].receiveunit
        }
      }
    },
    destroyed() {
      clearInterval(this.queryInterval)
    }
  }
</script>
<style scoped>
  .bottom{
    margin-top: 1.5rem;
    padding: 1rem;
    height: 10rem;
    /*border: 2px solid #a8ffff;*/
   /* border-radius: 1rem;*/
    /*background-color: #041f4f;*/
    box-sizing: border-box;
    overflow-y: auto;
    background:no-repeat url("assets/companybg.png");
    background-size: 100%  97%;
  }
</style>
