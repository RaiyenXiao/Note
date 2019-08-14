### 常用的正则校验
1.正则
```
// 匹配邮箱
let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$

// (新)匹配手机号
let reg = /^1[0-9]{10}$/;

// (旧)匹配手机号
let reg = /^1[3|4|5|7|8][0-9]{9}$/;

// 匹配8-16位数字和字母密码的正则表达式
let reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;

// 匹配国内电话号码 0510-4305211
let reg = /\d{3}-\d{8}|\d{4}-\d{7}/;

// 匹配身份证号码
let reg=/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;

// 匹配腾讯QQ号
let reg = /[1-9][0-9]{4,}/;

// 匹配ip地址
let reg = /\d+\.\d+\.\d+\.\d+/;

// 匹配中文
let reg = /^[\u4e00-\u9fa5]*$/;

```

2.检测平台（设备）类型

```
let isWechat = /micromessenger/i.test(navigator.userAgent),
    isWeibo = /weibo/i.test(navigator.userAgent),
    isQQ = /qq\//i.test(navigator.userAgent),
    isIOS = /(iphone|ipod|ipad|ios)/i.test(navigator.userAgent),
    isAndroid = /android/i.test(navigator.userAgent);
```

3.常用的日期时间函数

```
// 时间格式化
function format_date(timeStamp) {
    let date = new Date(timeStamp);
    return date.getFullYear() + "年"
        + prefix_zero(date.getMonth() + 1) + "月"
        + prefix_zero(date.getDate()) + "日 "
        + prefix_zero(date.getHours()) + ":"
        + prefix_zero(date.getMinutes());
}

// 数字格式化
function prefix_zero(num) {
    return num >= 10 ? num : "0" + num;
}

// 倒计时时间格式化
function format_time(timeStamp) {
    let day = Math.floor(timeStamp / (24 * 3600 * 1000));
    let leave1 = timeStamp % (24 * 3600 * 1000);
    let hours = Math.floor(leave1 / (3600 * 1000));
    let leave2 = leave1 % (3600 * 1000);
    let minutes = Math.floor(leave2 / (60 * 1000));
    let leave3 = leave2 % (60 * 1000);
    let seconds = Math.floor(leave3 / 1000);
    if (day) return day + "天" + hours + "小时" + minutes + "分";
    if (hours) return hours + "小时" + minutes + "分" + seconds + "秒";
    if (minutes) return minutes + "分" + seconds + "秒";
    if (seconds) return seconds + "秒";
    return "时间到！";
}
```