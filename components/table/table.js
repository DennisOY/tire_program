// components/table.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:String,
    subtitle:Array,
    listData:Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    title: "",
    subtitle:[],
    listData: [
      { "code": "5.5J", "text": "175-195", "type": "185" },
      { "code": "6.0J", "text": "185-205", "type": "195" },
      { "code": "6.5J", "text": "195-215", "type": "205" }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
