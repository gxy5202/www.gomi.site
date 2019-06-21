<template>
  <nav class="container" :class="isMenuOpen ? 'container-box-open':'container-box-close'">
      <div class="nav-logo" :class="isMenuOpen ? 'nav-logo-open':'nav-logo-close'">
          <img src="../../../assets/logo.png" alt="">
      </div>
      <div class="nav-right">
        <div class="nav-content" :class="isMenuOpen ? 'nav-content-open':'nav-content-close'">
          <ul>
            <li class="nav-content-item" v-for="navItem,index in navList" :key="index" @mouseover="navMove">
              <a :href="navItem.href">{{navItem.name}}</a>
              <div class="item-move-box"></div>
            </li>
          </ul>
        </div>
        <div class="login" :class="isMenuOpen ? 'login-open':'login-close'">
          <a href="">
            <Icon type="user" style="color:rgb(255,255,255);fontSize:16px" />
          </a>
        </div>
        <div class="nav-menu" :class="isMenuOpen ? 'nav-menu-open':'nav-menu-close'" @click="menuOpen">
            <div></div>
            <div></div>
        </div>
      </div>
      
  </nav>
</template>

<script>
import business from './business.js';
export default Object.assign({},business);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
@import './business.scss'
</style>