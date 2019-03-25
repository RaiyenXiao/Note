#### 数据模板定义
##### String

```
'name|min-max': 'value' 通过重复 'value' 生成一个字符串，重复次数大于等于 min，小于等于 max。

 Mock.mock({                  =>  {
       "string|1-10": "★"              "string": "★★★★★★"
      })//随机出现1到10个字符"★"      }
```
```
'name|count': 'value' 通过重复 'value' 生成一个字符串，重复次数等于 count  

      Mock.mock({                =>   {
        "string|3": "★★★"              "string": "★★★★★★★★★"
      })                              }
```

##### Number
```
'name|min-max.dmin-dmax': number

Mock.mock({                      =>{
"number|1-100.1-10": 1              "number": 75.75862
})                                  }    
// num|1-5.1-3'
//1到5范围.小数点一道三个 前面是范围，后面是个数，数字是多少没意义
```

##### Object
```
'name|count': object
'name|min-max': object
//原理同字符串
```

##### Array
```
'name|1': array
'name|min-max': array
'name|count': array
```

#### 数据占位符定义
```
 {
    "自然数": "@natural",
    "浮点数": "@float",
    "日期": "@date",
    "时间": "@time",
    "标题": "@title",
    "中文名字": "@cname",
    "网址": "@url",
    "域名": "@domain",
    "邮箱": "@email",
    "段落": "@paragraph",
    "句子": "@sentence"
}
```