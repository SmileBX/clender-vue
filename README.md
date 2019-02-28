# date-select

#### 介绍
一个日历sku选择的微信小程序demo
## 每一个日期都是一个数组
- ### 初始化日历数组 （注意深拷贝问题）
- ### demo的样式问题没有细调。且下面的代码是实际业务上使用的，与demo上的不一致，但是实现的方法大致相同
```
// 初始化日期数组,
    // 取最近三个月数组，每一天赋值一个时间戳
    resetDate() {
      let month = new Date().getMonth()
      let year = new Date().getFullYear()
      const dateArr = []
      for (let i = month; i < month + 3; i += 1) {
        const endDate = new Date(year, i + 1, 0).getDate()
        const day = new Date(year, i, 1).getDay()
        dateArr.push({
          dateTab: year + '-' + (i * 1 + 1),
          endDate,
          year,
          month: i,
          day,
          sku: []
        })
        // 12月份加一年，月份变为1月
        if (month === 12) {
          year += 1
          month = 1
        }
      }
      // 每一天赋值一个时间戳
      for (let a = 0; a < dateArr.length; a += 1) {
        //深拷贝问题
        const dateArrs = JSON.parse(JSON.stringify(dateArr[a]))
        for (let j = 1; j < dateArrs.endDate + 1; j += 1) {
          dateArr[a].sku.push({
            maxSum: 0,
            minSum: 0,
            sum: 0,
            price: 0,
            closePrice: 0,
            // 选中编辑状态
            status: false,
            date: new Date(dateArrs.year, dateArrs.month, j).valueOf()
          })
        }
      }
      this.dateArr = dateArr
    },
```

