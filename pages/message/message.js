// pages/message/message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchValue: '',
  },

  //搜索栏输入函数
  searchValueInput: function (e) {
    var value = e.detail.value;
    this.setData({
      searchValue: value,
    })
    console.log('你正在输入，有什么问题吗', value)
  },
  toDraft: function () {
    wx.navigateTo({
      url: '../message_draft/message_draft',
    })
  },
  toEdit: function (e) {
    let type= e.currentTarget.dataset.type;
    if(type!=null && type==='edit') {
      wx.navigateTo({
        url: '../message_edit/message_edit?type=new',
      })
    }
  },
  //搜索栏确认
  searchConfirm: function (e) {
    // wx.navigateTo({
    //   url: '../searchpage/searchpage',
    // })
  },
  //清除搜索栏函数
  searchClear: function (e) {
    this.setData({
      searchValue: '',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  }

})