### CSS边框背景边角
http://ghmagical.com/iframe/modal/code/cssMagical

### currentColor
它是从SVG那里借鉴来的，这个关键字没有绑定到一个固定的颜色值，而是一直被解析为color。实际上这特性让它成为了CSS有史以来的第一个变量。
例如：假设我们想让所有的水平分割线（所有`<hr>`元素）自动与文本的颜色保持一致。
```
hr{
    height:.5em;（em单位引用了font-size的值）
    background：currentColor；
}
```
### 继承
inherit可以用在任何CSS属性中，而且它总是绑定到父元素的计算值（对伪元素来说，则会取生成该伪元素的宿主元素）
    表单元素的字体设定为与页面的其他部分相同
        input，select，button （font:：inherit；）
    要把超链接的颜色设定为与页面中其他文本相同：
        a{color：inherit；}
创建提示框的时候，小箭头能够自动继承背景和边框的样式
