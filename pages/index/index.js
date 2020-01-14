//index.js
//获取应用实例
const app = getApp()
var searchValue = ''

Page({
  data: {
    tire_brands: [{
        name: '米其林',
        id: 1
      },
      {
        name: '马牌',
        id: 2
      },
      {
        name: '倍耐力',
        id: 3
      },
      {
        name: '邓绿普',
        id: 4
      },
      {
        name: '固特异',
        id: 5
      },
      {
        name: '普利司通',
        id: 6
      },
      {
        name: '横滨',
        id: 7
      },
      {
        name: '百路驰',
        id: 8
      },
      {
        name: '玲珑',
        id: 9
      },
      {
        name: '固铂',
        id: 10
      },
      {
        name: '韩泰',
        id: 11
      },
      {
        name: '锦湖',
        id: 12
      },
      {
        name: '东洋',
        id: 13
      },
      {
        name: '玛吉斯',
        id: 14
      },
      {
        name: '佳通',
        id: 15
      },
    ],
    running_pic: [{
        src: '../../assets/images/pic1.png'
      },
      {
        src: '../../assets/images/pic2.jpg'
      },
      {
        src: '../../assets/images/pic3.jpg'
      },
      {
        src: '../../assets/images/pic4.jpg'
      },
      {
        src: '../../assets/images/pic1.png'
      },
      {
        src: '../../assets/images/pic2.jpg'
      }
    ],

    static_pic: [{
        name: '车型数据',
        src: '../../assets/images/pic1.png'
      },
      {
        name: '轮胎计算器',
        src: '../../assets/images/pic2.jpg'
      },
      {
        name: '轮胎数据',
        src: '../../assets/images/pic3.jpg'
      }
    ],

    searchValue: '',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function(e) {
    var n = e.target.id;
    switch (n) {
      case '1':
        console.log(n);
        wx.navigateTo({
          url: '../tireinfo/tireinfo',
        })
        break;
      case '2':
        console.log(n);
        wx.navigateTo({
          url: '../tireinfo/tireinfo',
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
          url: '../tireinfo/tireinfo',
        })
        break;
      case '5':
        console.log(n);
        wx.navigateTo({
          url: '../tireinfo/tireinfo',
        })
        break;
      case '6':
        console.log(n);
        wx.navigateTo({
          url: '../tireinfo/tireinfo',
        })
        break;
      case '7':
        console.log(n);
        wx.navigateTo({
          url: '../tireinfo/tireinfo',
        })
        break;
      case '8':
        console.log(n);
        wx.navigateTo({
          url: '../tireinfo/tireinfo',
        })
        break;
      case '9':
        console.log(n);
        wx.navigateTo({
          url: '../tireinfo/tireinfo',
        })
        break;
      case '10':
        console.log(n);
        wx.navigateTo({
          url: '../tireinfo/tireinfo',
        })
        break;
      case '11':
        console.log(n);
        wx.navigateTo({
          url: '../tireinfo/tireinfo',
        })
        break;
      case '12':
        console.log(n);
        wx.navigateTo({
          url: '../tireinfo/tireinfo',
        })
        break;
      case '13':
        console.log(n);
        wx.navigateTo({
          url: '../tireinfo/tireinfo',
        })
        break;
      case '14':
        console.log(n);
        wx.navigateTo({
          url: '../tireinfo/tireinfo',
        })
        break;
      case '15':
        console.log(n);
        wx.navigateTo({
          url: '../tireinfo/tireinfo',
        })
        break;
      default:
        console.log(n);
        break;
    }
  },
  //搜索栏输入函数
  searchValueInput: function(e) {
    var value = e.detail.value;
    this.setData({
      searchValue: value,
    })
    console.log('你正在输入，有什么问题吗', value)
  },
  //搜索栏确认
  searchConfirm: function(e) {
    wx.navigateTo({
      url: '../searchpage/searchpage',
    })
  },
  //清除搜索栏函数
  searchClear: function(e) {
    this.setData({
      searchValue: '',
    })
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