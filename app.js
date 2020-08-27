//app.js
App({
  // 页面初始化数据
  data: {
    
  },
  onLaunch: function () {
    this.myGetUserInfo();
  },
  globalData: {
    userInfo: null,
    openid:"",
    servicePath:"192.168.80.120:8080/",
  },
  myGetUserInfo:function(){
    var _this = this;
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        // console.log(res);
        if (res.code) {
          wx.request({
            url: 'https://api.weixin.qq.com/sns/jscode2session',//微信服务器获取appid的网址 不用变
            method: 'post',//必须是post方法
            data: {
              js_code: res.code,
              appid: 'wx273ea9ff323ef509',//仅为实例appid
              secret: 'ad034c03cdafdebbbc99251d04cab4ef',//仅为实例secret
              grant_type: 'authorization_code'
            },
            header: {
              'content-type': 'application/x-www-form-urlencoded',
            },
            success: function (res) {
              console.log(res.data.openid);
              _this.globalData.openid = res.data.openid;
            }
          })
        } else {
          console.log("登陆失败");
        }
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        // console.log(res);
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo;
              // console.log(res);
              console.log("app获取用户信息成功！");
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  }
})