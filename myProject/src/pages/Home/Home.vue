<template>
  <div class="container">
    <header>
      <Top-Nav></Top-Nav>
      <div class="header-bkg">

      </div>
    </header>
    <div class="main-content">
        <div class="curve-img"></div>
        
    </div>
  </div>
</template>

<script>
import business from './business.js';
export default Object.assign({},business);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
@import '../../static/css/commen.scss';
.container {
  height: 100%;
  header {
    width: 100%;
    height: 100%;
    .header-bkg {
      width: 100%;
      height: 110%;
      background: url("../../assets/图片3.jpg") no-repeat 100%;
      background-size: cover;
      background-attachment: fixed;
    }
  }
  .main-content {
    width: 100%;
    height: 500px;
    //background: red;
    .curve-img {
      //margin-top: -20px;
      position: absolute;
      top:100%;
      width:100%;
      height: 100px;
      background: url("../../assets/background_curve.png") no-repeat 100%;
      background-size: cover;
    }
  }
    
}
</style>