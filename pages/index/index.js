//index.js
//获取应用实例
const app = getApp()
var searchValue = ''
Page({
  data: {
    tire_brands: [{
        name: '米其林',
        id: 1,
        src: '../../assets/images/tire_brand_logo/BRANDlogo_michelin_tire.png'
      },
      {
        name: '马牌',
        id: 2,
        src: '../../assets/images/tire_brand_logo/BRANDlogo_continental_tire.png'
      },
      {
        name: '倍耐力',
        id: 3,
        src: '../../assets/images/tire_brand_logo/BRANDlogo_pirelli_tire.png'
      },
      {
        name: '邓绿普',
        id: 4,
        src: '../../assets/images/tire_brand_logo/BRANDlogo_dunlop_tire.png'
      },
      {
        name: '固特异',
        id: 5,
        src: '../../assets/images/tire_brand_logo/BRANDlogo_goodyear_tire.png'
      },
      {
        name: '普利司通',
        id: 6,
        src: '../../assets/images/tire_brand_logo/BRANDlogo_bridegestone_tire.png'
      },
      {
        name: '横滨',
        id: 7,
        src: '../../assets/images/tire_brand_logo/BRANDlogo_yokohama_tire.png'
      },
      {
        name: '百路驰',
        id: 8,
        src: '../../assets/images/tire_brand_logo/BRANDlogo_bfgoodrich_tire.png'
      },
      {
        name: '玲珑',
        id: 9,
        src: '../../assets/images/tire_brand_logo/BRANDlogo_laufenn_tire.png'
      },
      {
        name: '固铂',
        id: 10,
        src: '../../assets/images/tire_brand_logo/BRANDlogo_cooper_tire.png'
      },
      {
        name: '韩泰',
        id: 11,
        src: '../../assets/images/tire_brand_logo/BRANDlogo_hankook_tire.png'
      },
      {
        name: '锦湖',
        id: 12,
        src: '../../assets/images/tire_brand_logo/BRANDlogo_kumho_tire.png'
      },
      {
        name: '东洋',
        id: 13,
        src: '../../assets/images/tire_brand_logo/BRANDlogo_toyo_tire.png'
      },
      {
        name: '玛吉斯',
        id: 14,
        src: '../../assets/images/tire_brand_logo/BRANDlogo_maxxis_tire.png'
      },
      {
        name: '佳通',
        id: 15,
        src: '../../assets/images/tire_brand_logo/BRANDlogo_milestar_tire.png'
      },
    ],
    running_pic: [{
        src: '../../assets/images/tire_ad_pic1.jpg'
      },
      {
        src: '../../assets/images/tire_ad_pic2.jpg'
      },
      {
        src: '../../assets/images/tire_ad_pic3.jpg'
      },
      {
        src: '../../assets/images/tire_ad_pic4.jpg'
      },
      {
        src: '../../assets/images/tire_ad_pic5.jpg'
      },
      {
        src: '../../assets/images/tire_ad_pic6.png'
      }
    ],
    static_pic: [{
        name: '车型数据',
        src: '../../assets/images/pic_1.jpg',
        id: '1'
      },
      {
        name: '轮胎计算器',
        src: '../../assets/images/pic_2.jpg',
        id: '2'
      },
      {
        name: '轮胎数据',
        src: '../../assets/images/pic_3.jpg',
        id: '3'
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
  bindStaticPicTap: function(e) {
    console.log(e);
    var n = e.currentTarget.dataset.id;
    switch (n) {
      case '1':
        console.log(n);
        wx.navigateTo({
          url: '../carmodel/carmodel',
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