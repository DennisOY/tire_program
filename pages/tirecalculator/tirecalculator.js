// pages/tirecalculator/tirecalculator.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menuType: "0",
    rightdataselect: "0",
    leftdataselect: "0",
    left_option: "轮胎规格",
    right_option: "轮胎规格",
    hiddenLeftCate:true,
    hiddenRightCate:true,
    previous_data:0,
    current_data:0,
    tire_diameter:0,
    car_speed:0,
    tire_thickness:0,
    title: "轮毂轮胎参数推荐表",
    subtitle: [["轮毂宽度"], ["可选范围"], ["最佳胎宽"]],
    listData: [
      { "code": "5.5J", "text": "175-195", "type": "185" },
      { "code": "6.0J", "text": "185-205", "type": "195" },
      { "code": "6.5J", "text": "195-215", "type": "205" }
    ]
  },

  //展示左菜单栏
  showLeftMenuTap: function(e) {
    this.setData({
      menuType: e.target.dataset.type,
      hiddenLeftCate:!this.data.hiddenLeftCate,
      hiddenRightCate:true,
      color: "#d81e06"
    })
  },
  //展示右菜单栏
  showRightMenuTap: function (e) {
    this.setData({
      menuType: e.target.dataset.type,
      hiddenRightCate: !this.data.hiddenRightCate,
      hiddenLeftCate:true,
      color: "#d81e06"
    })
  },

  //隐藏菜单栏
  hideMenuTap: function(e) {
    console.log('1')
    this.setData({
      menuType: 0,
      hiddenLeftCate: true,
      hiddenRightCate: true,
      color: "#555"
    })
  },
  //选择选项
  selectState: function(e) {
    var n = e.target.dataset.status
    switch (n) {
      case '0':
        this.setData({
          menuType: "0",
          leftdataselect: "0",
          rightdataselect:"0",
          left_option: "轮胎规格",
          right_option: "轮胎规格"
        })
        break;
      case '1':
        this.setData({
          menuType: "0",
          leftdataselect: "1",
          left_option: "225/45 R 18"
        })
        break;
      case '2':
        this.setData({
          menuType: "0",
          leftdataselect: "2",
          left_option: "230/50 R 19"
        })
        break;
      case '3':
        this.setData({
          menuType: "0",
          leftdataselect: "3",
          left_option: "235/55 R 20"
        })
        break;
      case '4':
        this.setData({
          menuType: "0",
          rightdataselect: "4",
          right_option: "255/40 R 18"
        })
        break;
      case '5':
        this.setData({
          menuType: "0",
          rightdataselect: "5",
          right_option: "260/45 R 19"
        })
        break;
      case '6':
        this.setData({
          menuType: "0",
          rightdataselect: "6",
          right_option: "265/50 R 20"
        })
        break;
      default:
        break;
    }

  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})