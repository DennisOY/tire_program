// components/searchbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    placeHolder:'2254518、奔驰、Cinturato P7...',
    searchValue:'',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //搜索栏输入函数
    searchValueInput: function (e) {
      var value = e.detail.value;
      this.setData({
        searchValue: value,
      })
      console.log('你正在输入，有什么问题吗', value)
    },
    //搜索栏确认
    searchConfirm: function (e) {
      this.setData({
        searchValue: '',
      }),
      wx.navigateTo({
        url: '../searchpage/searchpage',
      })
    },
    //清除搜索栏函数
    searchClear: function (e) {
      this.setData({
        searchValue: '',
      })
    },
  }
})
