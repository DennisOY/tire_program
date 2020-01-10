// pages/searchpage/searchpage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchValue: "",
    menuType: "0",
    name: "倍耐力",
    model: "225/45R18",
    series: "Cinturato P7",
    ratio: "95Y",
    equipment: "宝马_新3系_前/全轮位",
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
      //跳转界面
    })
  },
  //清除搜索栏函数
  searchClear: function(e) {
    this.setData({
      searchValue: '',
    })
  },
  //展示菜单栏
  showMenuTap: function(e) {
    console.log(e.target.dataset.type)
    this.setData({
      menuType: e.target.dataset.type,
      color:"#d81e06"
    })
  },
  //隐藏菜单栏
  hideMenuTap: function (e) {
    console.log(e.target.dataset.type)
    this.setData({
      menuType: 0,
      color:"#555"
    })
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