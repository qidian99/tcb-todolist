// miniprogram/pages/todolist.js

import { formatTime } from '../../utils/util';


Page({

  /**
   * 页面的初始数据
   */
  data: {
    todolist: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // Retrieve all todo list from database collection

    const db = wx.cloud.database();
    db.collection("todo").get({}).then(({ data }) => {
      console.log(data);
      this.setData({
        todolist: data.map(({date, ...rest}) => ({ ...rest, date: formatTime(new Date(date)) })),
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },


  createTodo: function() {
    const db = wx.cloud.database();
    const date = Date.now();
    const todo = {
      title: 'New title',
      body: 'New body',
      date,
    }
    db.collection('todo').add({
      data: todo,
      success: res => {
        this.setData({
          todolist: [...this.data.todolist, {...todo, date: formatTime(new Date(date)), _id: res._id }],
        })
        wx.showToast({
          title: '新增记录成功',
        })
        console.log('[数据库] [新增记录] 成功，记录 _id: ', res._id)
      },
      fail: err => {
        wx.showToast({
          icon: 'none',
          title: '新增记录失败'
        })
        console.error('[数据库] [新增记录] 失败：', err)
      }
    });
  },
})