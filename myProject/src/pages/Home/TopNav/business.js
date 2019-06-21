
import {Icon} from 'ant-design-vue';


export default {
    name: 'TopNav',
    data () {
      return {
        navList:[
          {
            name:"文章",
            href:"www.baidu.com",
            index:0
          },
          {
            name:"作品",
            href:"www.baidu.com",
            index:0
          },
          {
            name:"音乐",
            href:"www.baidu.com",
            index:0
          },
          {
            name:"关于",
            href:"www.baidu.com",
            index:0
          },
        ],
        firstNavItem:'',
        navItemList:[], //导航标签DOM
        isMenuOpen:false, //菜单是否打开

      }
    },
    components:{
        Icon
    },
    mounted() {

      //导航标签移动
      this.firstNavItem = document.querySelector(".nav-content-item:first-child div");
      let navItemList = document.getElementsByClassName('nav-content-item');
      for(let i=0;i<navItemList.length;i++){
        this.navItemList.push({
          item:navItemList[i],
          left:navItemList[i].offsetLeft
        })
      };
    },
    methods: {
      //导航标签移动事件
      navMove(e){
        let target = e.currentTarget;
        if(target === this.navItemList[0].item){
          this.firstNavItem.style.transform = 'translateX(0px)';
        }
        if(target === this.navItemList[1].item){
          this.firstNavItem.style.transform = 'translateX(120px)';
        }
        if(target === this.navItemList[2].item){
          this.firstNavItem.style.transform = 'translateX(240px)';
        }
        if(target === this.navItemList[3].item){
          this.firstNavItem.style.transform = 'translateX(360px)';
        }
      },

      //菜单事件
      menuOpen(){
        this.isMenuOpen = !this.isMenuOpen;
        console.log(this.isMenuOpen)
      }
    },
  }