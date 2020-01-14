// pages/tirecalculator/tirecalculator.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menuType: "0",
    rightdataselect: "0",
    leftdataselect: "0",
    left_option: "轮胎规格",
    right_option: "轮胎规格"
  },

  //展示菜单栏
  showMenuTap: function(e) {
    this.setData({
      menuType: e.target.dataset.type,
      color: "#d81e06"
    })
  },
  //隐藏菜单栏
  hideMenuTap: function(e) {
    this.setData({
      menuType: "0",
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