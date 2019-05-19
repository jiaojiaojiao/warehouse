<template>
  <div class="modal" v-if="isModalDisable" id="modal">
    <span class="modal-close" @click="setModalDisable(false)">X</span>
    <div class="material-title">{{materialDetail.carname}}({{materialDetail.licenseplate}})</div>
    <div class="material-cont">
      <div class="material-item" v-for="(item,index) in materialDetail.MaterialList" :key="index">
        <div>
          <span>物资名称:</span>
          <span>{{item.materialname}}</span>
        </div>
        <div>
          <span>物资数量:</span>
          <span>{{item.materialcount}}</span>
        </div>
        <div>
          <span>物资单位:</span>
          <span>{{item.materialunit}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    props: ['isModalDisable','setModalDisable', 'materialDetail']
  }
</script>
<style>
  .modal{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 22rem;
    padding: 2rem;
    background: rgba(0,0,0,.6);
    z-index: 99;
  }
  .modal-close{
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 2rem;
    color: #ffffff;
    cursor: pointer;
  }
  .material-title{
    margin-bottom: 1rem;
    font-size: 1.6rem;
    text-align: center;
    color: #ffffff;
  }
  .material-cont{
    width: 100%;
    height: 100%;
    color: #ffffff;
    text-align: left;
    overflow-y: auto;
  }
  .material-item{
    padding: 1rem;
    margin-bottom: .5rem;
    line-height: 1.6rem;
    background-color: rgba(225,225,225, .2);
  }
</style>
