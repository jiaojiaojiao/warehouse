<template>
  <layout>
    <menu-item slot="header" :title-list="headerTitle"></menu-item>
    <storage-item slot="left-bar" :material-list="MaterialList"></storage-item>
    <!--<div class="bottom" slot="bottom-bar">
      <company-item :company-list="companyList" :receiveunit="Receiveunit"></company-item>
    </div>-->
    <house-item slot="container" :material="Material"></house-item>
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
  const headerTitle = {input: '入库', output: '出库', storage: '仓库'}

  export default {
    data() {
      return {
        headerTitle,
        storageDate: [],
        companyList: [],//单位列表
        MaterialList: [],//货物列表
        Material:'',
        Receiveunit: "",//接收单位
        queryInterval: null,
        time: 20000//刷新数据时间
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
      /* _this.queryInterval = window.setInterval(_this.querydata, 20000)*/

    },
    methods: {
      querydata(){
        const _this = this;
        ajax({
          url: 'API/VehicleMonitor/OutWareH5Query.ashx',
          method: 'post'
        }).then(res => {
          this.storageDate = res
          const length = res.Entity.length
          var i = 0
          const setMaterial = () => {
            var time = 0;
            if (i < length) {
              var mater_length = res.Entity[i].MaterialList.length;
              var time_len = 6000 / mater_length;
              _this.MaterialList=res.Entity[i].MaterialList;
              res.Entity[i].MaterialList.forEach(mater=> {
                setTimeout(function () {
                  _this.Material = mater
                }, time);
                time += time_len
              })
              _this.Receiveunit = res.Entity[i].receiveunit
              setTimeout(setMaterial, 6000)
              i++
            }
            else {
              _this.querydata();
            }
          }
          setMaterial();
        })
      },
      showMaterlList(res, index){
        const _this = this
        if (res.IsSucceed) {
          res.Entity.map(item => {
            _this.companyList.push(item.receiveunit)
          })
          _this.MaterialList = res.Entity[index].MaterialList
          _this.Receiveunit = res.Entity[index].receiveunit
        }
      }
    },
    destroyed() {
      clearInterval(this.queryInterval)
    }
  }
</script>
<style scoped>
  .bottom {
    margin-top: 1.5rem;
    padding: 1rem;
    height: 10rem;
    /*border: 2px solid #a8ffff;*/
    /* border-radius: 1rem;*/
    /*background-color: #041f4f;*/
    box-sizing: border-box;
    overflow-y: auto;
    background: no-repeat url("assets/companybg.png");
    background-size: 100% 97%;
  }
</style>
