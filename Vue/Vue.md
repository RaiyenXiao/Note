### Vue自定义过滤器函数
Vue.js 允许你自定义过滤器，可被用于一些常见的文本格式化。过滤器可以用在两个地方：双花括号插值和 v-bind 表达式 (后者从 2.1.0+ 开始支持)。过滤器应该被添加在 JavaScript 表达式的尾部，由“管道”符号指示，过滤器通常会使用管道标志 “ | ”  
####  1.{{ msg | capitalize   }}  
 capitalize过滤器 : 将输入的字符串首字母转换成大写字母的过滤器。  
 ```
capitalize(str){ 
    return str.charAt(0).toUpperCase()+str.slice(1)  
}
```  
#### 表达式
```
<li v-for="product in products | filterBy 'electronics' in 'category' ">
      {{ product.name | capitalize }} - {{ product.price | currency }}
</li>
```
<!--
charAt(index) 方法可返回指定位置的字符。  
slice(start,end) 从已有的数组中返回选定的元素,如果 end 未被规定，那么 slice() 方法会选取从 start 到数组结尾的所有元素。  
vue filterBy被替换了 最新的方法:在 computed 属性中使用 js 内置方法 .filter
-->
