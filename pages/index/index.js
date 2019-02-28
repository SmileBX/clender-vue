//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    month:[],
    getdate: (new Date).getDate(),
    day: ['日', '一', '二', '三', '四', '五', '六'],
  },
  //事件处理函数
 
  onLoad: function () {
    const dates = new Date()
    const year = dates.getFullYear();
    const month = dates.getMonth();
    // const date = dates.getDate();
    // const day = dates.getDay();
    // const firstDay = new Date(year,month,0).getDate();

    const monthData = this.data.month;
    for (let i = month; i < (month + 3); i += 1) {
      const date = new Date(year, i + 1, 0).getDate();
      const dateArr=[];
      for(let j=0;j<date;j+=1){
        dateArr.push({
          date:j,
          price:(100).toFixed(2),
          num:88
        })
      }
      monthData.push({
        date:dateArr,
        oneDay:new Date(year,i,1).getDay(),
        newDate:new Date().getDate(),
        newMonth:month+1,
        month:i+1,
        year
      })
      console.log(monthData)
    }
    this.setData({
      month:monthData
    })
    // console.log(`${dates}\n${year}年${month + 1}月${date}日--星期${day}\n${firstDay}`)
  }
})
