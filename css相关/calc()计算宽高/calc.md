### calc的语法就是简单的四则运算，

1.使用“+”、“-”、“*” 和 “/”四则运算；
2.可以使用百分比、px、em、rem等单位；
3.可以混合使用各种单位进行计算；
4.表达式中有“+”和“-”时，其前后必须要有空格，如"widht: calc(12%+5em)"这种没有空格的写法是错误的；
5.表达式中有“*”和“/”时，其前后可以没有空格，但建议留有空格。
6.兼容性: IE8-、safari5.1-、ios5.1-、android4.3-不支持，android4.4-4.4.4只支持加法和减法。IE9不支持用于backround-position

```
<style>
.test1{
    border: calc( 1px + 1px ) solid black;
    /* calc里面的运算遵循*、/优先于+、-的顺序 */
    width: calc(100%/3 - 2*1em - 2*1px);
}
.test2{
    /* 由于运算符+的左右两侧没有空白符，所以失效 */
    border: calc(1px+1px) solid black;
    /* 对于，不能小于0的属性值，当运算结果小于0时，按0处理 */
    width: calc(10px - 20px);
}
</style>
```

### vw和vh是什么？
vm、vh、vmin、vmax是一种视窗单位，也是相对单位。它相对的不是父节点或者页面的根节点。而是由视窗（Viewport）大小来决定的，单位 1，代表类似于 1%。
视窗(Viewport)是你的浏览器实际显示内容的区域—，换句话说是你的不包括工具栏和按钮的网页浏览器。
具体描述如下：

1.vw：视窗宽度的百分比（1vw 代表视窗的宽度为 1%）
2.vh：视窗高度的百分比
3.vmin：取当前Vw和Vh中较小的那一个值
4.vmax：取当前Vw和Vh中较大的那一个值

### vw、vh 与 % 百分比的区别
（1）% 是相对于父元素的大小设定的比率，vw、vh 是视窗大小决定的。
（2）vw、vh 优势在于能够直接获取高度，而用 % 在没有设置 body 高度的情况下，是无法正确获得可视区域的高度的，所以这是挺不错的优势。

### calc和vh/vm结合使用
上面我们使用%结合calc使用可以实现想要的效果，为什么要引入vm和vh呢？上面说%和vm,vh的区别中，% 在没有设置 body 高度的情况下，是无法正确获得可视区域的高度的。

### calc + vm 计算宽度
```
width: 800px; /* fallback for b*/
width: -moz-calc(100vm - (2 * 10)px);
width: -webkit-calc(100vm -(2 * 10)px);
width: calc(100vm - (2 * 10)px);
```
### calc + vh 计算高度
```
height: 800px;
height: -moz-calc(100vh - (2 * 10)px);
height: -webkit-calc(100vh - (2 * 10)px);
height: calc(100vh - (2 * 10)px);
```