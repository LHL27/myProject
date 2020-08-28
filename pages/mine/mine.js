// pages/mine/mine.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 用户信息
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    openid: "",
    department:"企业信息化服务部",
    realName:"张三",
    //显示模块
    showModuleIndex:100,

    //发布的商品
    releaseGoods:[
      {
        goodsId:"g111",
        title:"好奇的零食",
        imgURL: ["https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1821555880,3887479267&fm=26&gp=0.jpg"],
        price:100,
      },{
        goodsId: "g112",
        title: "好吃的零食好吃的零食好吃的零食",
        imgURL: ["https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=118845459,3792174975&fm=26&gp=0.jpg"],
        price: 1005,
      }
    ],

    // 收藏的商品
    favoritesGoods: [
      {
        favoritesMan:"万五",
        goodsId: "g111sds",
        title: "好奇的零食",
        imgURL: ["https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1821555880,3887479267&fm=26&gp=0.jpg"],
        price: 100,
      }, {
        favoritesMan: "李四",
        goodsId: "g112",
        title: "好吃的零食好吃的零食好吃的零食",
        imgURL: ["https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=118845459,3792174975&fm=26&gp=0.jpg"],
        price: 1005,
      }, {
        favoritesMan: "不知火舞",
        goodsId: "g114",
        title: "好吃的零食好吃的零食好吃的零食",
        imgURL: ["https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=118845459,3792174975&fm=26&gp=0.jpg"],
        price: 1005,
      }
    ],

    //是否可输入
    disabledChange:true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        openid: app.globalData.openid,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
   
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log(this.data.userInfo);
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  //显示或隐藏模块
  showModule:function(e){
    // console.log(e.currentTarget.dataset.index);
    var _this = this;
    var index = e.currentTarget.dataset.index;
    if(this.data.showModuleIndex === index){
      _this.setData({
        showModuleIndex:100,
      })
    }else{
      _this.setData({
        showModuleIndex: index,
      })
    }
  },
  // 点击更改按钮
  changeAboutMe:function(){
    this.setData({
      disabledChange: false,
    })
  },
  // 输入部门
  departmentInput:function(e){
    // console.log(e.detail.value);
    this.setData({
      department: e.detail.value,
    })
  },
  // 输入真名
  realNameInput: function (e) {
    // console.log(e.detail.value);
    this.setData({
      realName: e.detail.value,
    })
  },
  //点击保存按钮
  saveAboutMe:function(){
    this.setData({
      disabledChange: true,
    });
    var obj = {
      "openId": app.globalData.openid,
      "department": this.data.department,
      "realName": this.data.realName,
    }
    console.log(obj);
  }
})