// components/chatroom/formGroup/formGroup.js
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
    countries: [{
      value: 'USA', name: '美国',
    }, {
      value: 'CHN', name: '中国',
    },{
      value: 'JPN', name: '日本',
    }]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },

  // 基础库2.10.3以后开始支持
  // behaviors相当于mixins
  behaviors: ['wx://form-field-group'],
})
