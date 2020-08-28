// pages/release/release.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //用户信息
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    openid: "",
    servicePath:"",
    //商品
    tempFilePaths:"",
    imgRes:"",
    babyTitle:"",
    //放大图片
    showShield:false,
    showImgPath:""
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
    //获取服务器地址
    this.setData({
      servicePath: app.globalData.servicePath,
    })
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
  //获取用户信息
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  // 选择图片
  selectImage:function(){
    console.log("di");
    wx.chooseImage({
      count: 3,
      sizeType:['original','compressed'],
      sourceType:['album','camera'],
      success:res => {
        const tempFilePaths = res.tempFilePaths;  //路径
        console.log(res);
        console.log(tempFilePaths);
        this.setData({
          tempFilePaths: res.tempFilePaths,
          imgRes:res,
        })
      }
    })
  },
  // 删除图片
  delImg:function(e){
    var index = e.currentTarget.dataset.index;
    this.data.tempFilePaths.splice(index, 1);
    this.setData({
      tempFilePaths: this.data.tempFilePaths,
    })
    console.log(e.currentTarget.dataset.index);
    console.log("删除图片");
    console.log(this.data.tempFilePaths);
  },
  //放大图片
  showImg:function(e){
    // console.log(e.currentTarget.dataset.index);
    this.setData({
      showImgPath: this.data.tempFilePaths[e.currentTarget.dataset.index],
      showShield: true,
    })
  },
  // 隐藏图片
  closeImg:function(){
    this.setData({
      showShield:false,
    })
  },
  // 点击发布
  releaseBtn:function(){
    console.log(this.data.userInfo);
    console.log(this.data.openid);
  }
})