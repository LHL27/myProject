//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    servicePath: "",
    scrollTop:0,
    searchWord:"",
    indicatorDots: true,
    autoplay: true,
    interval:3000,
    duration:1000,
    swiperURL:[
"https://ss3.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=45762bb8beec8a130b1a51e0c7029157/c75c10385343fbf2a04ba974a77eca8065388f05.jpg",
"https://ss1.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=e0a5ed4d7759252dbc171b04049a032c/8435e5dde71190ef4f9a9d88d91b9d16fdfa6007.jpg",
"https://ss3.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=c1879b23ba345982da8ae3923cf5310b/9358d109b3de9c828702f6d87b81800a19d84305.jpg"
    ],
    typeData:[
      "全部",
      "二手",
      "组局",
      "闲聊",
      "求助"
    ],
    activeType:0,
    hideSearchViewLeft:"750rpx"
  },
  //事件处理函数
  onLoad: function () {
    this.setData({
      servicePath: app.globalData.servicePath,
    })
  },
  // 输入搜索词
  searchInput:function(e){
    this.setData({ searchWord: e.detail.value });
  },
  // 点击搜索图标
  searchCheck:function(){
    console.log(this.data.searchWord);
  },
  //监听屏幕滚动 判断上下滚动  
  onPageScroll: function (ev) {
    var _this = this;
    //当滚动的top值最大或者最小时，为什么要做这一步是由于在手机实测小程序的时候会发生滚动条回弹，所以为了解决回弹，设置默认最大最小值   
    if (ev.scrollTop <= 0) {
      ev.scrollTop = 0;
    } else if (ev.scrollTop > wx.getSystemInfoSync().windowHeight) {
      ev.scrollTop = wx.getSystemInfoSync().windowHeight;
    }
    //判断浏览器滚动条上下滚动   
    if (ev.scrollTop > this.data.scrollTop || ev.scrollTop == wx.getSystemInfoSync().windowHeight) {
      // console.log('向下滚动');
      _this.setData({
        hideSearchViewLeft:"0rpx"
      })
    } else {
      // console.log('向上滚动');
      _this.setData({
        hideSearchViewLeft: "750rpx"
      })
    }
    //给scrollTop重新赋值    
    this.setData({
      scrollTop: ev.scrollTop
    })
  },
  //点击菜单选项
  barItemCheck:function(e){
    // console.log(e.currentTarget.dataset.type);
    this.setData({
      activeType: e.currentTarget.dataset.type
    })
  }
})
