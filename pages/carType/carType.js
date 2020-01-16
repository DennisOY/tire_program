// pages/carType/carType.js
const app = getApp();
const hotCar = [
  { "name": "宝马", "img": "/assets/images/carLogo/宝马.png" },
  { "name": "奔驰", "img": "/assets/images/carLogo/18.png" },
  { "name": "吉普", "img": "/assets/images/carLogo/10.png" },
  { "name": "本田", "img": "/assets/images/carLogo/6.png" },
  { "name": "福特", "img": "/assets/images/carLogo/4.png" },
  { "name": "起亚", "img": "/assets/images/carLogo/11.png" },
  { "name": "路虎", "img": "/assets/images/carLogo/13.png" },
  { "name": "捷豹", "img": "/assets/images/carLogo/9.png" },
  { "name": "宾利", "img": "/assets/images/carLogo/3.png" },
  { "name": "奥迪", "img": "/assets/images/carLogo/2.png" }
];
const carList = [{
  "head": "A",
  "data": [{ "name": "奥迪", "img": "/assets/images/carLogo/aodi.jpg" },
  { "name": "阿尔法.罗密欧", "img": "/assets/images/carLogo/1.png" },
  { "name": "Arash", "img": "/assets/images/carLogo/Arash.jpg" },
  { "name": "alpina", "img": "/assets/images/carLogo/alpina.jpg" },
  { "name": "阿斯顿马丁", "img": "/assets/images/carLogo/阿斯顿马丁.jpg" }
  ],
},
{
  "head": "B",
  "data": [{ "name": "比亚迪", "img": "/assets/images/carLogos/比亚迪.jpg" },
  { "name": "宝马", "img": "/assets/images/carLogos/宝马.jpg" },
  { "name": "奔驰", "img": "/assets/images/carLogos/奔驰.jpg" },
  { "name": "宾利", "img": "/assets/images/carLogos/宾利.jpg" },
  { "name": "宝骏", "img": "/assets/images/carLogos/宝骏.jpg" },
  { "name": "宝腾", "img": "/assets/images/carLogos/宝腾.jpg" },
  { "name": "宝沃", "img": "/assets/images/carLogos/宝沃.jpg" },
  ],
},
{
  "head": "C",
  "data": [{ "name": "长安", "img": "/assets/images/carLogos/长安.jpg" },
  { "name": "长城", "img": "/assets/images/carLogos/长城.jpg" },
  { "name": "长江", "img": "/assets/images/carLogos/长江.jpg" },
  { "name": "成功", "img": "/assets/images/carLogos/成功.jpg" },
  { "name": "昌河", "img": "/assets/images/carLogos/昌河.jpg" },
  ],
},
{
  "head": "D",
  "data": [{ "name": "大发", "img": "/assets/images/carLogos/大发.jpg" },
  { "name": "大通", "img": "/assets/images/carLogos/大通.jpg" },
  { "name": "道奇", "img": "/assets/images/carLogos/道奇.jpg" },
  { "name": "大众", "img": "/assets/images/carLogos/大众.jpg" },
  { "name": "杜卡迪", "img": "/assets/images/carLogos/杜卡迪.jpg" },
  ],
},
{
  "head": "F",
  "data": [{ "name": "法拉利", "img": "/assets/images/carLogos/法拉利.jpg" },
  { "name": "菲斯克", "img": "/assets/images/carLogos/菲斯克.jpg" },
  { "name": "丰田", "img": "/assets/images/carLogos/丰田.jpg" },
  { "name": "福特", "img": "/assets/images/carLogos/福特.jpg" },
  { "name": "菲亚特", "img": "/assets/images/carLogos/菲亚特.jpg" }
  ],
},
{
  "head": "H",
  "data": [{ "name": "哈弗", "img": "/assets/images/carLogos/哈弗.jpg" },
  { "name": "汉腾", "img": "/assets/images/carLogos/汉腾.jpg" },
  { "name": "悍马", "img": "/assets/images/carLogos/悍马.jpg" }
  ],
},
{
  "head": "J",
  "data": [{ "name": "Jeep", "img": "/assets/images/carLogos/jeep.jpg" },
  { "name": "吉利", "img": "/assets/images/carLogos/吉利.jpg" },
  { "name": "捷达", "img": "/assets/images/carLogos/捷达.jpg" }
  ],
},
{
  "head": "K",
  "data": [{ "name": "卡尔森", "img": "/assets/images/carLogos/卡尔森.jpg" },
  { "name": "凯迪拉克", "img": "/assets/images/carLogos/凯迪拉克.jpg" },
  { "name": "凯翼", "img": "/assets/images/carLogos/凯翼.jpg" },
  { "name": "柯尼赛格", "img": "/assets/images/carLogos/柯尼赛格.jpg" }
    , { "name": "科尔维特", "img": "/assets/images/carLogos/科尔维特.jpg" }
    , { "name": "克莱斯勒", "img": "/assets/images/carLogos/克莱斯勒.jpg" }
  ],
},
{
  "head": "L",
  "data": [{ "name": "兰博基尼", "img": "/assets/images/carLogos/兰博基尼.jpg" },
  { "name": "雷克萨斯", "img": "/assets/images/carLogos/雷克萨斯.jpg" },
  { "name": "雷诺三星", "img": "/assets/images/carLogos/雷诺三星.jpg" },
  { "name": "铃木", "img": "/assets/images/carLogos/铃木.jpg" },
  { "name": "理念", "img": "/assets/images/carLogos/理念.jpg" }
  ]
},
{
  "head": "Z",
  "data": [{ "name": "中华", "img": "/assets/images/carLogos/中华.jpg" }
  ],
}];

const baomaSeries = [
  { "name": "1系", "img": "/assets/images/carSeries/1_series_5door.png" },
  { "name": "2系", "img": "/assets/images/carSeries/2_series_coupe.png" },
  { "name": "3系", "img": "/assets/images/carSeries/3_series_sedan.png" },
  { "name": "3系GT", "img": "/assets/images/carSeries/3_series_sedan.png" },
  { "name": "4系", "img": "/assets/images/carSeries/4_series_coupe.png" },
  { "name": "5系", "img": "/assets/images/carSeries/5_series_sedan.png" },
  { "name": "6系GT", "img": "/assets/images/carSeries/6_series_gt.png" },
  { "name": "7系", "img": "/assets/images/carSeries/7_series_sedan.png" },
  { "name": "8系", "img": "/assets/images/carSeries/8_series_coupe.png" },
  { "name": "X1系", "img": "/assets/images/carSeries/x1.png" },
  { "name": "X2系", "img": "/assets/images/carSeries/x2.png" },
  { "name": "X3系", "img": "/assets/images/carSeries/x3.png" },
  { "name": "X4系", "img": "/assets/images/carSeries/x4.png" },
  { "name": "X5系", "img": "/assets/images/carSeries/x5.png" },
  { "name": "X6系2019", "img": "/assets/images/carSeries/x6_2019.png" },
];
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    hidden: true,
    hotCar: hotCar,
    carList: carList,
    index: null,
    myPicker_show: false
  },
  //搜索框函数
  searchValueInput: function (e) {
    var value = e.detail.value;
    this.setData({
      searchValue: value,
    })
  },
  //搜索框函数
  searchConfirm: function (e) {

  },
  //搜索框函数
  searchClear: function (e) {
    this.setData({
      searchValue: '',
    })
  },
  onLoad() {
    //导航栏字母初始化
    let list = [];
    for (let i = 0; i < 26; i++) {
      list[i] = String.fromCharCode(65 + i)
    }
    // list.unshift("热");
    this.setData({
      list: list,
      listCur: carList[0].head
    })
  },
  onReady() {
    let that = this;
    wx.createSelectorQuery().select('.indexBar-box').boundingClientRect(function (res) {
      that.setData({
        boxTop: res.top
      })
    }).exec();
    wx.createSelectorQuery().select('.indexes').boundingClientRect(function (res) {
      that.setData({
        barTop: res.top
      })
    }).exec();
  },
  //获取文字信息
  getCur(e) {
    this.setData({
      hidden: false,
      listCur: this.data.list[e.target.id],
    })
  },
  setCur(e) {
    this.setData({
      hidden: true,
      listCur: this.data.listCur
    })
  },
  //滑动选择Item
  tMove(e) {
    let y = e.touches[0].clientY,
      offsettop = this.data.boxTop,
      that = this;
    //判断选择区域,只有在选择区才会生效
    if (y > offsettop) {
      let num = parseInt((y - offsettop) / 20);
      this.setData({
        listCur: that.data.list[num]
      })
    };
  },
  //触发全部开始选择
  tStart() {
    this.setData({
      hidden: false
    })
  },
  //触发结束选择
  tEnd() {
    console.log(this.data);
    this.setData({
      hidden: true,
      listCurID: this.data.listCur
    });
  },
  toHot: function () {
    this.setData({
      listCurID: "hot"
    });
  },

  showModal(e) {
    // console.log(e);
    this.setData({
      modalName: e.currentTarget.dataset.target,
      carImg: e.currentTarget.dataset.image,
      carname: e.currentTarget.dataset.carname,
      baomaSeries: baomaSeries
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
  },
  PickerChange: function (e) {
    this.hideModal();
    wx.navigateTo({
      url: '../carmodel/carmodel',
    })
  }
  // toPicker: function (e) {
  //   this.setData({
  //     list: ['2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009', '2008'],
  //     myPicker_show: true,
  //     carSerises: e.currentTarget.dataset.series
  //   });
  // }
})
