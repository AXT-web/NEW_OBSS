<template>
  <div>
    <!-- 导航栏模块 -->
    <section>
      <div class="shortcat">
        <div class="w">
          <div class="fl">
            <ul>
              <li>网上书城欢迎您！&nbsp;</li>
              <li v-if="!isLogin">
                <router-link :to="{ path: '/login' }">请登录</router-link>
                &nbsp;
                <router-link :to="{ path: '/register' }" class="style_red"
                  >免费注册</router-link
                >
              </li>
              <li v-else>
                <p class="fl">{{ userName }} 用户 &nbsp;</p>
                <a href="javascript:0" class="style_red fl" @click="clearLog"
                  >注销</a
                >
              </li>
            </ul>
          </div>
          <div class="fr">
            <ul>
              <li>
                <router-link :to="{ path: '/myCar' }">购物车</router-link>
              </li>
              <li></li>
              <li>
                <router-link :to="{ path: '/personalCenter' }"
                  >我的订单</router-link
                >
              </li>
              <li></li>
              <li>
                <router-link :to="{ path: '/personalCenter' }"
                  >个人中心</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <!-- logo和搜索框 -->
    <header class="w">
      <!-- logo图片 -->
      <div class="logo">
        <h1>
          <router-link :to="{ path: '/home' }">网上书城</router-link>
        </h1>
      </div>
      <!-- search模块  -->
      <div class="search">
        <input type="search" v-model="searchWord" />
        <button>搜索</button>
      </div>
      <!-- hotwords 模块制作 -->
      <div class="hotwords">
        <ul>
          <li v-for="item in hotWords" :key="item.id" class="hotwords-item">
            <router-link :to="{ path: item.href }">{{
              item.value
            }}</router-link>
          </li>
        </ul>
      </div>
      <!-- 购物车模块 -->
      <div class="shopcar">
        <router-link :to="{ path: '/myCar' }">
          <i class="el-icon-shopping-cart-1 iconCar"></i>
          <p class="iconCarTitle">我的购物车</p>
          <i class="count">{{ goodsNumber }}</i>
        </router-link>
      </div>
    </header>
    <!-- 菜单栏 -->
    <nav>
      <div class="w">
        <div class="dropdown">
          <div class="dt">全部商品分类</div>
          <div class="dd block">
            <ul>
              <li v-for="item in navList" :key="item.id">
                <div class="nav_title">
                  <span class="fl">{{ item.title }}</span>
                  <div class="fr">{{ nvatap }}</div>
                  <ul class="navShowValue">
                    <li v-for="item2 in item.value" :key="item2.id">
                      <router-link :to="{ path: item2.href }" class="navItam">
                        {{ item2.value }}
                      </router-link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="navitems">
          <ul>
            <li class="fl" v-for="item in titleList" :key="item.id">
              <router-link :to="{ path: item.href }">
                {{ item.value }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="w">
      <div class="main">
        <div class="focus">
          <el-carousel :interval="5000" arrow="always" height="455px">
            <el-carousel-item v-for="item in swiperList" :key="item">
              <router-link :to="{ path: item.href }">
                <img :src="item.imgSrc" alt="" />
              </router-link>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <footer></footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLogin: true,
      userName: '18775921835',
      searchHot: '算法设计与计算分析',
      searchWord: '',
      goodsNumber: '8',
      hotWords: [
        { id: 1, value: '网络与通信', href: '#' },
        { id: 2, value: '编程语言与程序设计', href: '#' },
        { id: 3, value: 'python算法宝典', href: '#' },
        { id: 4, value: '操作系统', href: '#' },
        { id: 5, value: '人工智能', href: '#' },
        { id: 6, value: '算法设计', href: '#' },
      ],
      titleList: [
        { id: 1, value: '首页', href: '#' },
        { id: 2, value: '新书', href: '#' },
        { id: 3, value: '特价书', href: '#' },
        { id: 4, value: '教材', href: '#' },
        { id: 5, value: '网络小说', href: '#' },
        { id: 6, value: '排行', href: '#' },
      ],
      navList: [
        {
          id: 1,
          title: '特色书单',
          value: [
            { id: 1, value: '1.1级导航栏', href: '#' },
            { id: 2, value: '1.2级导航栏', href: '#' },
            { id: 3, value: '1.3级导航栏', href: '#' },
            { id: 4, value: '1.4级导航栏', href: '#' },
            { id: 5, value: '1.5级导航栏', href: '#' },
            { id: 6, value: '1.6级导航栏', href: '#' },
            { id: 7, value: '1.7级导航栏', href: '#' },
            { id: 8, value: '1.8级导航栏', href: '#' },
            { id: 9, value: '1.9级导航栏', href: '#' },
          ],
        },
        {
          id: 2,
          title: '电子书 网络文学',
          value: [
            { id: 1, value: '2.1级导航栏', href: '#' },
            { id: 2, value: '2.2级导航栏', href: '#' },
            { id: 3, value: '2.3级导航栏', href: '#' },
            { id: 4, value: '2.4级导航栏', href: '#' },
            { id: 5, value: '2.5级导航栏', href: '#' },
            { id: 6, value: '2.6级导航栏', href: '#' },
            { id: 7, value: '2.7级导航栏', href: '#' },
            { id: 8, value: '2.8级导航栏', href: '#' },
            { id: 9, value: '2.9级导航栏', href: '#' },
          ],
        },
        {
          id: 3,
          title: '教育',
          value: [
            { id: 1, value: '3.1级导航栏', href: '#' },
            { id: 2, value: '3.2级导航栏', href: '#' },
            { id: 3, value: '3.3级导航栏', href: '#' },
            { id: 4, value: '3.4级导航栏', href: '#' },
            { id: 5, value: '3.5级导航栏', href: '#' },
            { id: 6, value: '3.6级导航栏', href: '#' },
            { id: 7, value: '3.7级导航栏', href: '#' },
            { id: 8, value: '3.8级导航栏', href: '#' },
            { id: 9, value: '3.9级导航栏', href: '#' },
          ],
        },
        {
          id: 4,
          title: '小说',
          value: [
            { id: 1, value: '4.1级导航栏', href: '#' },
            { id: 2, value: '4.2级导航栏', href: '#' },
            { id: 3, value: '4.3级导航栏', href: '#' },
            { id: 4, value: '4.4级导航栏', href: '#' },
            { id: 5, value: '4.5级导航栏', href: '#' },
            { id: 6, value: '4.6级导航栏', href: '#' },
            { id: 7, value: '4.7级导航栏', href: '#' },
            { id: 8, value: '4.8级导航栏', href: '#' },
            { id: 9, value: '4.9级导航栏', href: '#' },
          ],
        },
        {
          id: 5,
          title: '文艺',
          value: [
            { id: 1, value: '5.1级导航栏', href: '#' },
            { id: 2, value: '5.2级导航栏', href: '#' },
            { id: 3, value: '5.3级导航栏', href: '#' },
            { id: 4, value: '5.4级导航栏', href: '#' },
            { id: 5, value: '5.5级导航栏', href: '#' },
            { id: 6, value: '5.6级导航栏', href: '#' },
            { id: 7, value: '5.7级导航栏', href: '#' },
            { id: 8, value: '5.8级导航栏', href: '#' },
            { id: 9, value: '5.9级导航栏', href: '#' },
          ],
        },
        {
          id: 6,
          title: '青春文学/动漫·幽默',
          value: [
            { id: 1, value: '6.1级导航栏', href: '#' },
            { id: 2, value: '6.2级导航栏', href: '#' },
            { id: 3, value: '6.3级导航栏', href: '#' },
            { id: 4, value: '6.4级导航栏', href: '#' },
            { id: 5, value: '6.5级导航栏', href: '#' },
            { id: 6, value: '6.6级导航栏', href: '#' },
            { id: 7, value: '6.7级导航栏', href: '#' },
            { id: 8, value: '6.8级导航栏', href: '#' },
            { id: 9, value: '6.9级导航栏', href: '#' },
          ],
        },
        {
          id: 7,
          title: '童书',
          value: [
            { id: 1, value: '7.1级导航栏', href: '#' },
            { id: 2, value: '7.2级导航栏', href: '#' },
            { id: 3, value: '7.3级导航栏', href: '#' },
            { id: 4, value: '7.4级导航栏', href: '#' },
            { id: 5, value: '7.5级导航栏', href: '#' },
            { id: 6, value: '7.6级导航栏', href: '#' },
            { id: 7, value: '7.7级导航栏', href: '#' },
            { id: 8, value: '7.8级导航栏', href: '#' },
            { id: 9, value: '7.9级导航栏', href: '#' },
          ],
        },
        {
          id: 8,
          title: '人文社科',
          value: [
            { id: 1, value: '8.1级导航栏', href: '#' },
            { id: 2, value: '8.2级导航栏', href: '#' },
            { id: 3, value: '8.3级导航栏', href: '#' },
            { id: 4, value: '8.4级导航栏', href: '#' },
            { id: 5, value: '8.5级导航栏', href: '#' },
            { id: 6, value: '8.6级导航栏', href: '#' },
            { id: 7, value: '8.7级导航栏', href: '#' },
            { id: 8, value: '8.8级导航栏', href: '#' },
            { id: 9, value: '8.9级导航栏', href: '#' },
          ],
        },
        {
          id: 9,
          title: '经管',
          value: [
            { id: 1, value: '9.1级导航栏', href: '#' },
            { id: 2, value: '9.2级导航栏', href: '#' },
            { id: 3, value: '9.3级导航栏', href: '#' },
            { id: 4, value: '9.4级导航栏', href: '#' },
            { id: 5, value: '9.5级导航栏', href: '#' },
            { id: 6, value: '9.6级导航栏', href: '#' },
            { id: 7, value: '9.7级导航栏', href: '#' },
            { id: 8, value: '9.8级导航栏', href: '#' },
            { id: 9, value: '9.9级导航栏', href: '#' },
          ],
        },
        {
          id: 10,
          title: '成功/励志',
          value: [
            { id: 1, value: '9.1级导航栏', href: '#' },
            { id: 2, value: '9.2级导航栏', href: '#' },
            { id: 3, value: '9.3级导航栏', href: '#' },
            { id: 4, value: '9.4级导航栏', href: '#' },
            { id: 5, value: '9.5级导航栏', href: '#' },
            { id: 6, value: '9.6级导航栏', href: '#' },
            { id: 7, value: '9.7级导航栏', href: '#' },
            { id: 8, value: '9.8级导航栏', href: '#' },
            { id: 9, value: '9.9级导航栏', href: '#' },
          ],
        },
        {
          id: 11,
          title: '生活',
          value: [
            { id: 1, value: '9.1级导航栏', href: '#' },
            { id: 2, value: '9.2级导航栏', href: '#' },
            { id: 3, value: '9.3级导航栏', href: '#' },
            { id: 4, value: '9.4级导航栏', href: '#' },
            { id: 5, value: '9.5级导航栏', href: '#' },
            { id: 6, value: '9.6级导航栏', href: '#' },
            { id: 7, value: '9.7级导航栏', href: '#' },
            { id: 8, value: '9.8级导航栏', href: '#' },
            { id: 9, value: '9.9级导航栏', href: '#' },
          ],
        },
        {
          id: 12,
          title: '科技',
          value: [
            { id: 1, value: '9.1级导航栏', href: '#' },
            { id: 2, value: '9.2级导航栏', href: '#' },
            { id: 3, value: '9.3级导航栏', href: '#' },
            { id: 4, value: '9.4级导航栏', href: '#' },
            { id: 5, value: '9.5级导航栏', href: '#' },
            { id: 6, value: '9.6级导航栏', href: '#' },
            { id: 7, value: '9.7级导航栏', href: '#' },
            { id: 8, value: '9.8级导航栏', href: '#' },
            { id: 9, value: '9.9级导航栏', href: '#' },
          ],
        },
        {
          id: 13,
          title: '英文原版书',
          value: [
            { id: 1, value: '9.1级导航栏', href: '#' },
            { id: 2, value: '9.2级导航栏', href: '#' },
            { id: 3, value: '9.3级导航栏', href: '#' },
            { id: 4, value: '9.4级导航栏', href: '#' },
            { id: 5, value: '9.5级导航栏', href: '#' },
            { id: 6, value: '9.6级导航栏', href: '#' },
            { id: 7, value: '9.7级导航栏', href: '#' },
            { id: 8, value: '9.8级导航栏', href: '#' },
            { id: 9, value: '9.9级导航栏', href: '#' },
          ],
        },
        {
          id: 14,
          title: '期刊',
          value: [
            { id: 1, value: '9.1级导航栏', href: '#' },
            { id: 2, value: '9.2级导航栏', href: '#' },
            { id: 3, value: '9.3级导航栏', href: '#' },
            { id: 4, value: '9.4级导航栏', href: '#' },
            { id: 5, value: '9.5级导航栏', href: '#' },
            { id: 6, value: '9.6级导航栏', href: '#' },
            { id: 7, value: '9.7级导航栏', href: '#' },
            { id: 8, value: '9.8级导航栏', href: '#' },
            { id: 9, value: '9.9级导航栏', href: '#' },
          ],
        },
      ],
      nvatap: '<',
      swiperList: [
        {
          id: 1,
          imgSrc: require('../assets/upload/focus2.jpg'),
          href: '#',
          alt: '1',
        },
        {
          id: 2,
          imgSrc: require('../assets/upload/focus2.jpg'),
          href: '#',
          alt: '1',
        },
        {
          id: 3,
          imgSrc: require('../assets/upload/focus2.jpg'),
          href: '#',
          alt: '1',
        },
        {
          id: 4,
          imgSrc: require('../assets/upload/focus2.jpg'),
          href: '#',
          alt: '1',
        },
      ],
    }
  },
  methods: {
    // 注销操作
    clearLog() {
      this.IsLogin = false
      this.UserName = ''
      console.log('IsLogin:' + this.IsLogin)
    },
    ShowNav(e) {
      this.ShowNavID = e
    },
    BackNav() {
      this.ShowNavID = 0
    },
  },
}
</script>

<style lang='less' scoped>
/* 快捷导航模块 */
.shortcat {
  height: 31px;
  line-height: 31px;
  background-color: #b1b1b1;
  ul li {
    float: left;
  }
  /* 选择所有的偶数的li */
  .fr ul li:nth-child(even) {
    width: 1px;
    height: 12px;
    background-color: #666;
    margin: 9px 15px 0;
  }
}
/* 头部模块 */
header {
  position: relative;
  height: 105px;
  color: #fff;

  // logo
  .logo {
    position: absolute;
    top: 25px;
    width: 262px;
    height: 60px;
    background-color: skyblue;
    h1 {
      display: block;
      width: 262px;
      height: 60px;
      font-size: 0px;
      background: transparent url(../assets/images/logo.jpg) no-repeat;
    }
  }

  // 搜索框
  .search {
    position: absolute;
    left: 346px;
    top: 25px;
    width: 538px;
    height: 36px;
    border: 2px solid #b1191a;
    input {
      position: relative;
      z-index: 10;
      width: 454px;
      height: 32px;
      padding-left: 10px;
    }
    button {
      float: right;
      width: 80px;
      height: 33px;
      margin-top: -1px;
      background-color: #b1191a;
      font-size: 16px;
      color: #fff;
    }
  }

  // 热词
  .hotwords {
    position: absolute;
    top: 66px;
    left: 346px;
    .hotwords-item {
      float: left;
      margin: 0 10px;
    }
  }

  // 购物图标
  .shopcar {
    position: absolute;
    right: 60px;
    top: 25px;
    width: 140px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    color: #666;
    border: 1px solid #dfdfdf;
    background-color: #f7f7f7;

    .iconCar {
      position: absolute;
      top: 7px;
      left: 10px;
      font-size: 22px;
    }

    .iconCarTitle {
      margin-left: 15px;
      display: inline-block;
    }

    .count {
      height: 35px;
      position: absolute;
      top: -5px;
      left: 105px;
      height: 14px;
      line-height: 14px;
      color: #fff;
      background-color: #e60012;
      padding: 0 5px;
      border-radius: 7px 7px 7px 0;
    }
  }
}
/* nav模块制作 */
nav {
  height: 47px;
  border-bottom: 2px solid #b1191a;

  .dropdown {
    position: relative;
    float: left;
    width: 210px;
    height: 45px;
    margin-top: 1px;
    background-color: #b1191a;

    .dt {
      width: 100%;
      height: 100%;
      color: #fff;
      text-align: center;
      line-height: 45px;
      font-size: 16px;
      font-weight: 600;
    }

    .dd {
      position: absolute;
      width: 210px;
      z-index: 10;
      background-color: #c81623;

      .nav_title {
        position: relative;
        height: 34px;
        width: 210px;
        color: #fff;
        font-size: 12px;
        font-weight: 500;
        line-height: 34px;
        padding: 0 8px;
        background-color: #c81623;
        border-bottom: 1px dashed #bcbcbc;

        .navShowValue {
          position: absolute;
          display: none;
          left: 210px;
          width: 450px;
          background-color: #000;

          .navItam {
            float: left;
            margin: 2px 5px;
          }
        }
      }
      .nav_title:hover {
        .navShowValue {
          display: block;
        }
      }
    }
  }

  .navitems {
    float: left;
    margin-top: 1px;

    ul li {
      float: left;

      a {
        display: block;
        height: 45px;
        line-height: 45px;
        font-size: 16px;
        padding: 0 25px;
      }
    }
  }
}
/* 主体大盒子 */
.main {
  width: 980px;
  height: 455px;
  /* background-color: skyblue; */
  margin-left: 220px;
  margin-top: 10px;

  /* 主体大图片 */
  .focus {
    float: left;
    width: 721px;
    height: 455px;
    background-color: skyblue;

    img {
      height: 100%;
      width: 100%;
    }
  }
}
</style>
