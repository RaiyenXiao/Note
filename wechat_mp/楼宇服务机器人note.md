### 模糊身份证号码
```
  fuzzIdNumber(id_number) {
    if(id_number=='') {
      return '';
    } else {
      var newid = id_number.substr(0, 2) + '*'.repeat(id_number.length-4) + id_number.substr(id_number.length-2, 2);
      return newid;
    }
  },
```
`substr(start,length)`:在字符串中抽取从 start 下标开始的指定数目的字符
`repeat(n)`方法返回一个新字符串，表示将原字符串重复`n`次。

### 获取当前页，上一页的路径
```
    var pages = getCurrentPages();
    var prevPage = pages[pages.length - 2].route;
```
### 微信小程序节点查询方法:wx.createSelectorQuery()
```
queryMultipleNodes: function(){//声明节点查询的方法
    var query = wx.createSelectorQuery()//创建节点查询器 query
    query.select('#the-id').boundingClientRect()//这段代码的意思是选择Id=the-id的节点，获取节点位置信息的查询请求
    query.selectViewport().scrollOffset()//这段代码的意思是获取页面滑动位置的查询请求
    query.exec(function(res){
      res[0].top       // #the-id节点的上边界坐标
      res[1].scrollTop // 显示区域的竖直滚动位置
    })
}
```


### 小程序的分享 onShareAppMessage(options)

微信小程序秉承了JavaScript模块化的机制，通过`module.exports`暴露对象，通过`require`来获取对象。

项目中的公司分享模板：
```
步骤1.在公共模块companyPage.js中写
function shareMessage(_this) {
    var title = _this.data.cd.company_short_name + '的公司主页';
    var path = '/pages/company/otherCompany/index?company_code=' + _this.data.cd.company_code;
    var imageUrl = '';
    return [title, path, imageUrl];
}
module.exports = {
    shareMessage: shareMessage
}//module.exports来暴露接口
```
```
步骤2：先引用 var companyPage = require('../../../templates/companyPages/companyPages');
在分享页面中使用：
  onShareAppMessage: function(res) {
    var message = companyPage.shareMessage(this);
    return {
      title: message[0],// 默认是小程序的名称(可以写slogan等)
      path: message[1],// 默认是当前页面，必须是以‘/’开头的完整路径
      imageUrl: message[2], //自定义图片路径，可以是本地文件路径、代码包文件路径或者网络图片路径，支持PNG及JPG，不传入 imageUrl 则使用默认截图。显示图片长宽比是 5:4
    }
  }
```

### 微信小程序之事件（bindtap和catchtap）
`bindtap`和`catchtap`都是当用户点击该组件的时候会在该页面对应的Page中找到相应的事件处理函数。但是`bind`事件绑定不会阻止冒泡事件向上冒泡，`catch`事件绑定可以阻止冒泡事件向上冒泡。