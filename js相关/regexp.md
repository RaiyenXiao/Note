# 正则表达式
## 1. 正则表达式的定义
正则表达式是由普通字符和特殊字符(也叫元字符或限定符)组成的文字模板， 如下便是简单的匹配连续数字的正则表达式:
```
/[0-9]+/
/\d+/
```
“\d” 就是元字符, 而 “+” 则是限定符.
### 1.1 元字符
---
| 元字符    |  描述 |
| :-------- |:--------:|
| .      | 匹配除换行符以外的任意字符 |  
| \d     |   匹配数字, 等价于字符组[0-9] |  
| \w     |   匹配字母, 数字, 下划线或汉字 | 
|\s	|匹配任意的空白符(包括制表符,空格,换行等)|
|\b|	匹配单词开始或结束的位置|
|^	|匹配行首|
|$	|匹配行尾|
### 1.2反义元字符
---
| 反义元字符    |  描述 |
| :-------- |:--------:|
|\D	|匹配非数字的任意字符, 等价于[^0-9]|
|\W	|匹配除字母,数字,下划线或汉字之外的任意字符|
|\S |匹配非空白的任意字符|
|\B |匹配非单词开始或结束的位置|
|[^x]|匹配除x以外的任意字符|

可以看出正则表达式严格区分大小写.
### 1.3重复限定符
---
限定符共有6个, 假设重复次数为x次, 那么将有如下规则:
| 限定符    |  描述 |
| :-------- |:--------:|
|*	|x>=0|
|+	|x>=1|
|?  |x=0 or x=1|
|{n}	|x=n|
|{n,}	|x>=n|
|{n,m}	|n<=x<=m|
### 1.4字符组
---
[…] 匹配中括号内字符之一. 如: [xyz] 匹配字符 x, y 或 z. 如果中括号中包含元字符, 则元字符降级为普通字符, 不再具有元字符的功能, 如 [+.?] 匹配 加号, 点号或问号.
### 1.5排除性字符组
---
[^…] 匹配任何未列出的字符,. 如: [^x] 匹配除x以外的任意字符.
### 1.6多选结构
---
| 就是或的意思, 表示两者中的一个. 如: a|b 匹配a或者b字符.
### 1.7括号
---
括号 常用来界定重复限定符的范围, 以及将字符`分组`. 如: (ab)+ 可以匹配abab..等, 其中 ab 便是一个分组.
### 1.8转义字符
---
\ 即转义字符, 通常 `\ * + ? | { [ ( ) ] }^ $ . #` 和` 空白 `这些字符都需要转义.
### 1.9操作符的运算优先级
---
1. \ 转义符
1. (), (?:), (?=), [] 圆括号或方括号
1. *, +, ?, {n}, {n,}, {n,m} 限定符
1. ^, $ 位置
1. | “或” 操作
### 1.10测试
---
我们来测试下上面的知识点, 写一个匹配手机号码的正则表达式, 如下:
```
(\+86)?1\d{10}
```
① “\+86” 匹配文本 “+86”, 后面接元字符问号, 表示可匹配1次或0次, 合起来表示 “(\+86)?” 匹配 “+86” 或者 “”.
② 普通字符”1” 匹配文本 “1”.
③ 元字符 “\d” 匹配数字0到9, 区间量词 “{10}” 表示匹配 10 次, 合起来表示 “\d{10}” 匹配连续的10个数字.
## 2.修饰符
javaScript中正则表达式默认有如下五种修饰符:
* g (全文查找)
* i (忽略大小写查找)
* m (多行查找)
* y (ES6新增的粘连修饰符)
* u (ES6新增)

## 3.常用的正则表达式
1. 汉字: [\u4e00-\u9fa5]{0,}
1. Email: ^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$
1. URL: ^https?://([\w-]+.)+[\w-]+(/[\w-./?%&=]*)?$
1. 手机号码: ^1\d{10}$
1. 身份证号: ^(\d{15}|\d{17}(\d|X))$
1. 中国邮政编码: [1-9]\d{5}(?!\d) (邮政编码为6位数字)

### 3.1密码验证
---
密码验证是常见的需求, 一般来说, 常规密码大致会满足规律: 6-16位, 数字, 字母, 字符至少包含两种, 同时不能包含中文和空格. 如下便是常规密码验证的正则描述:
```
var reg = /(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^[^\s\u4e00-\u9fa5]{6,16}$/;
```

## 4.正则表达式初阶技能
### 4.1贪婪模式与非贪婪模式
---
默认情况下, 所有的限定词都是贪婪模式, 表示尽可能多的去捕获字符; 而在限定词后增加?, 则是非贪婪模式, 表示尽可能少的去捕获字符. 如下:
```
var str = "aaab",
    reg1 = /a+/, //贪婪模式
    reg2 = /a+?/;//非贪婪模式
console.log(str.match(reg1)); //["aaa"], 由于是贪婪模式, 捕获了所有的a
console.log(str.match(regs)); //["a"], 由于是非贪婪模式, 只捕获到第一个a
```
实际上, 非贪婪模式非常有效, 特别是当匹配html标签时. 比如匹配一个配对出现的div, 方案一可能会匹配到很多的div标签对, 而方案二则只会匹配一个div标签对.
```
var str = "<div class='v1'><div class='v2'>test</div><input type='text'/></div>";
var reg1 = /<div.*<\/div>/; //方案一,贪婪匹配
var reg2 = /<div.*?<\/div>/;//方案二,非贪婪匹配
console.log(str.match(reg1));//"<div class='v1'><div class='v2'>test</div><input type='text'/></div>"
console.log(str.match(reg2));//"<div class='v1'><div class='v2'>test</div>"
```
#### 4.21区间量词的非贪婪模式
---
一般情况下, 非贪婪模式, 我们使用的是”*?”, 或 “+?” 这种形式, 还有一种是 “{n,m}?”.
区间量词”{n,m}” 也是匹配优先, 虽有匹配次数上限, 但是在到达上限之前, 它依然是尽可能多的匹配, 而”{n,m}?” 则表示在区间范围内, 尽可能少的匹配.
`需要注意的是:`
* 能达到同样匹配结果的贪婪与非贪婪模式, 通常是贪婪模式的匹配效率较高.
* 所有的非贪婪模式, 都可以通过修改量词修饰的子表达式, 转换为贪婪模式.
* 贪婪模式可以与`固化分组`(后面会讲到)结合，提升匹配效率，而非贪婪模式却不可以.

#### 4.2分组
---
正则的分组主要通过小括号来实现, 括号包裹的子表达式作为一个分组, 括号后可以紧跟限定词表示重复次数. 如下, 小括号内包裹的abc便是一个分组:
```
/(abc)+/.test("abc123") == true
```
