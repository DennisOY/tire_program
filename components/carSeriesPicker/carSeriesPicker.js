// components/carSeriesPicker/carSeriesPicker.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //配置页面传过来的值,key值要一一对应
    'list': {
      type: Array, //必填，目前接受的类型包括：String,Number,Boolean, Object, Array, null（表示任意类型）
      value: [] //可选，默认值，如果页面没传值过来就会使用默认值 
    },
    'serises': String,
    'showDialog': {
      type: Boolean, //必填，目前接受的类型包括：String,Number,Boolean, Object, Array, null（表示任意类型）
      value: false //可选，默认值，如果页面没传值过来就会使用默认值 
    }
  },

  data: {
    // list: ['2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009', '2008'],
    // myPicker_show: true,
    // carSerises: "X1"
  },
  /**
   * 组件的方法列表
   */
  methods: {
    methods: {
      
    }
  }
})
