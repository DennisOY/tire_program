//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    lookup_cate: [{
      name: '车型数据',
      id: 1,
    }, {
      name: '轮胎计算器',
      id: 2,
    }, {
      name: '轮胎数据',
      id: 3,
    }, {
      name: '汽车小知识',
      id: 4,
    }, ],
    userInfo: {},
    hasUserInfo: false,
  },
  //事件处理函数
  bindViewTap: function(e) {
    var n = e.target.id;
    switch (n) {
      case '1':
        console.log(n);
        wx.navigateTo({
          url: '../logs/logs',
        })
        break;
      case '2':
        console.log(n);
        wx.navigateTo({
          url: '../tirecalculator/tirecalculator',
        })
        break;
      case '3':
        console.log(n);
        wx.navigateTo({
          url: '../tireinfo/tireinfo',
        })
        break;
      case '4':
        console.log(n);
        wx.navigateTo({
          url: '../logs/logs',
        })
        break;
      default:
        console.log(n);
        break;
    }
  },
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
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
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})