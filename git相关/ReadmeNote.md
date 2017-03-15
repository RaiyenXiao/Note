README
===========================
该文件用来测试和展示书写README的各种markdown语法。GitHub的markdown语法在标准的markdown语法基础上做了扩充，称之为`GitHub Flavored Markdown`。简称`GFM`，GFM在GitHub上有广泛应用，除了README文件外，issues和wiki均支持markdown语法。

****


##目录
* [横线](#横线)
* [标题](#标题)
* [文本](#文本)
    * 普通文本
    * 单行文本
    * 多行文本
    * 文字高亮
    * 换行
    * 斜体
    * 粗体
    * 删除线
* [图片](#图片)
    * 来源于网络的图片
    * GitHub仓库中的图片
* [链接](#链接) 
    * 文字超链接
        *  链接外部URL
        *  链接本仓库里的URL
    *  锚点
    * [图片链接](#图片链接)
* [列表](#列表)
    * 无序列表
    * 有序列表
    * 复选框列表
* [块引用](#块引用)
* [代码高亮](#代码高亮)
* [表格](#表格) 
* [表情](#表情)

横线
-----------
***、---、___可以显示横线效果

***
---
___



标题
------

#一级标题
##二级标题
###三级标题
####四级标题
#####五级标题
######六级标题


文本
------
###普通文本
这是一段普通的文本
###单行文本

    Hello,大家好，我是果冻虾仁。

在一行开头加入1个Tab或者4个空格。
###文本块
####语法1
在连续几行的文本开头加入1个Tab或者4个空格。

    欢迎到访
    很高兴见到您
    祝您，早上好，中午好，下午好，晚安

####语法2
使用一对各三个的反引号：
```
欢迎到访
我是C++码农
你可以在知乎、CSDN、简书搜索【果冻虾仁】找到我
```
该语法也可以实现代码高亮，见[代码高亮](#代码高亮)
###文字高亮
文字高亮功能能使行内部分文字高亮，使用一对反引号。
语法：
```
`linux` `网络编程` `socket` `epoll` 
```
效果：`linux` `网络编程` `socket` `epoll`

也适合做一篇文章的tag
####换行
直接回车不能换行，  
可以在上一行文本后面补两个空格，  
这样下一行的文本就换行了。

或者就是在两行文本直接加一个空行。

也能实现换行效果，不过这个行间距有点大。
####斜体、粗体、删除线
|语法|效果|
|----|-----
|`*斜体1*`|*斜体1*
|`_斜体2_`|_斜体2_
|`**粗体1**`|**粗体1**
|`__粗体2__`|__粗体2__
|`这是一个 ~~删除线~~`|这是一个 ~~删除线~~
|`***斜粗体1***`|***斜粗体1***
|`___斜粗体2___`|___斜粗体2___
|`***~~斜粗体删除线1~~***`|***~~斜粗体删除线1~~***
|`~~***斜粗体删除线2***~~`|~~***斜粗体删除线2***~~

斜体、粗体、删除线可混合使用

图片
------
基本格式：
```
![alt](URL title)
```
alt和title即对应HTML中的alt和title属性（都可省略）：
- alt表示图片显示失败时的替换文本
- title表示鼠标悬停在图片时的显示文本（注意这里要加引号）

URL即图片的url地址，如果引用本仓库中的图片，直接使用**相对路径**就可了，如果引用其他github仓库中的图片要注意格式，即：`仓库地址/raw/分支名/图片路径`，如：
```
https://github.com/guodongxiaren/ImageCache/raw/master/Logo/foryou.gif
```

|#|语法|效果|
|---|---|----
|1|`![baidu](http://www.baidu.com/img/bdlogo.gif "百度logo")`|![baidu](http://www.baidu.com/img/bdlogo.gif "百度logo")
|2|`![][foryou]`|![][foryou]

注意例2的写法使用了**URL标识符**的形式，在[链接](#链接)一节有介绍。
>在文末有foryou的定义：
```
[foryou]:https://github.com/guodongxiaren/ImageCache/raw/master/Logo/foryou.gif
```

链接
------
###链接外部URL
|#|语法|效果|
|---|----|-----
|1|`[我的博客](http://blog.csdn.net/guodongxiaren "悬停显示")`|[我的博客](http://blog.csdn.net/guodongxiaren "悬停显示")
|2|`[我的知乎][zhihu] `|[我的知乎][zhihu] 
|2|`[zhihu]:https://www.zhihu.com/people/jellywong "我的知乎，欢迎关注"`|   

语法2由两部分组成：
- 第一部分使用两个中括号，[ ]里的标识符（本例中zhihu），可以是数字，字母等的组合，标识符上下对应就行了（**姑且称之为URL标识符**）
- 第二部分标记实际URL。

>使用URL标识符能达到复用的目的，一般把全文所有的URL标识符统一放在文章末尾，这样看起来比较干净。
>>URL标识符是我起的名字，不知道是否准确。囧。。

###链接本仓库里的URL
|语法|效果|
|----|-----
|`[我的简介]|(/example/profile.md)`|[我的简介](/example/profile.md)
|`[Book]|(./Book)`|[Book](/Book)

###图片链接
给图片加链接的本质是混合图片显示语法和普通的链接语法。普通的链接中[ ]内部是链接要显示的文本，而图片链接[ ]里面则是要显示的图片。  
直接混合两种语法当然可以，但是十分啰嗦，为此我们可以使用URL标识符的形式。

|#|语法|效果|
|---|----|:---:
|1|`[![weibo-logo]](http://weibo.com/linpiaochen)`|[![weibo-logo]](http://weibo.com/linpiaochen)
|2|`[![](/img/zhihu.png "我的知乎，欢迎关注")][zhihu]`|[![](/img/zhihu.png "我的知乎，欢迎关注")][zhihu]|
|3|`[![csdn-logo]][csdn]`|[![csdn-logo]][csdn]

因为图片本身和链接本身都支持URL标识符的形式，所以图片链接也可以很简洁（见例3）。  
注意，此时鼠标悬停时显示的文字是图片的title，而非链接本身的title了。
>本文URL标识符都放置于文末

###锚点
其实呢，每一个标题都是一个锚点，和HTML的锚点（`#`）类似，比如我们 

|语法|效果|
|---|---
|`[回到顶部](#readme)`|[回到顶部](#readme)

不过要注意，标题中的英文字母都被转化为**小写字母**了。
>以前GitHub对中文支持的不好，所以中文标题不能正确识别为锚点，但是现在已经没问题啦！


##列表
###无序列表
* 昵称：果冻虾仁
- 别名：隔壁老王
* 英文名：Jelly

###多级无序列表
* 编程语言
    * 脚本语言
        * Python

###有序列表
####一般效果
就是在数字后面加一个点，再加一个空格。不过看起来起来可能不够明显。    
面向对象的三个基本特征：

1. 封装
2. 继承
3. 多态

####有序列表自动排序
也可以在第一行指定`1. `，而接下来的几行用星号`*`（或者继续用数字1. ）就可以了，它会自动显示成2、3、4……。    
面向对象的七大原则：

1. 开闭原则
* 里氏转换原则
* 依赖倒转原则
* 接口隔离原则
* 组合/聚合复用原则
* “迪米特”法则
* 单一职责原则

####多级有序列表
和无序列表一样，有序列表也有多级结构：  

1. 这是一级的有序列表，数字1还是1
   1. 这是二级的有序列表，阿拉伯数字在显示的时候变成了罗马数字
      1. 这是三级的有序列表，数字在显示的时候变成了英文字母
	    1. 四级的有序列表显示效果，就不再变化了，依旧是英文字母

### 复选框列表
- [x] 需求分析
- [x] 系统设计
- [x] 详细设计
- [ ] 编码
- [ ] 测试
- [ ] 交付

您可以使用这个功能来标注某个项目各项任务的完成情况。
>Tip:
>>在GitHub的**issue**中使用该语法是可以实时点击复选框来勾选或解除勾选的，而无需修改issue原文。

##块引用

###常用于引用文本
####文本摘自《深入理解计算机系统》P27
　令人吃惊的是，在哪种字节顺序是合适的这个问题上，人们表现得非常情绪化。实际上术语“little endian”（小端）和“big endian”（大端）出自Jonathan Swift的《格利佛游记》一书，其中交战的两个派别无法就应该从哪一端打开一个半熟的鸡蛋达成一致。因此，争论沦为关于社会政治的争论。只要选择了一种规则并且始终如一的坚持，其实对于哪种字节排序的选择都是任意的。
>**“端”（endian）的起源**  
以下是Jonathan Swift在1726年关于大小端之争历史的描述：  
“……下面我要告诉你的是，Lilliput和Blefuscu这两大强国在过去36个月里一直在苦战。战争开始是由于以下的原因：我们大家都认为，吃鸡蛋前，原始的方法是打破鸡蛋较大的一端，可是当今的皇帝的祖父小时候吃鸡蛋，一次按古法打鸡蛋时碰巧将一个手指弄破了，因此他的父亲，当时的皇帝，就下了一道敕令，命令全体臣民吃鸡蛋时打破较小的一端，违令者重罚。”

###块引用有多级结构
>数据结构
>>树
>>>二叉树
>>>>平衡二叉树
>>>>>满二叉树

代码高亮
----------
在三个反引号后面加上编程语言的名字，另起一行开始写代码，最后一行再加上三个反引号。
```Java
public static void main(String[]args){} //Java
```
```c
int main(int argc, char *argv[]) //C
```
```Bash
echo "hello GitHub" #Bash
```
```javascript
document.getElementById("myH1").innerHTML="Welcome to my Homepage"; //javascipt
```
```cpp
string &operator+(const string& A,const string& B) //cpp
```
表格
--------

表头1  | 表头2
--------- | --------
表格单元  | 表格单元 
表格单元  | 表格单元 

| 表头1  | 表头2|
| ---------- | -----------|
| 表格单元   | 表格单元   |
| 表格单元   | 表格单元   |

###对齐
表格可以指定对齐方式

| 左对齐 | 居中  | 右对齐 |
| :------------ |:---------------:| -----:|
| col 3 is      | some wordy text | $1600 |
| col 2 is      | centered        |   $12 |
| zebra stripes | are neat        |    $1 |

###混合其他语法
表格单元中的内容可以和其他大多数GFM语法配合使用，如：  
####使用普通文本的删除线，斜体等效果

| 名字 | 描述          |
| ------------- | ----------- |
| Help      | ~~Display the~~ help window.|
| Close     | _Closes_ a window     |
####表格中嵌入图片（链接）
其实前面介绍图片显示、图片链接的时候为了清晰就是放在在表格中显示的。

| 图片 | 描述 |
| ---- | ---- |
|![baidu][baidu-logo] | 百度

表情
----------
Github的Markdown语法支持添加emoji表情，输入不同的符号码（两个冒号包围的字符）可以显示出不同的表情。

比如`:blush:`，可以显示:blush:。

具体每一个表情的符号码，可以查询GitHub的官方网页[http://www.emoji-cheat-sheet.com](http://www.emoji-cheat-sheet.com)。

## 人物

|syntax|preview|syntax|preview|syntax|preview|
|:-------:|:---:|:------:|:-----:|:------:|:---:|
|`:bowtie:`|:bowtie:|`:smile:`|:smile:|`:laughing:`|:laughing:|
|`:blush:`|:blush:|`:smiley:`|:smiley:|`:relaxed:`|:relaxed:|
|`:smirk:`|:smirk:|`:heart_eyes:`|:heart_eyes:|`:kissing_heart:`|:kissing_heart:|
|`:kissing_closed_eyes:`|:kissing_closed_eyes:|`:flushed:`|:flushed:|`:relieved:`|:relieved:|
|`:satisfied:`|:satisfied:|`:grin:`|:grin:|`:wink:`|:wink:|
|`:stuck_out_tongue_winking_eye:`|:stuck_out_tongue_winking_eye:|`:stuck_out_tongue_closed_eyes:`|:stuck_out_tongue_closed_eyes:|`:grinning:`|:grinning:|
|`:kissing:`|:kissing:|`:kissing_smiling_eyes:`|:kissing_smiling_eyes:|`:stuck_out_tongue:`|:stuck_out_tongue:|
|`:sleeping:`|:sleeping:|`:worried:`|:worried:|`:frowning:`|:frowning:|
|`:anguished:`|:anguished:|`:open_mouth:`|:open_mouth:|`:grimacing:`|:grimacing:|
|`:confused:`|:confused:|`:hushed:`|:hushed:|`:expressionless:`|:expressionless:|
|`:unamused:`|:unamused:|`:sweat_smile:`|:sweat_smile:|`:sweat:`|:sweat:|
|`:disappointed_relieved:`|:disappointed_relieved:|`:weary:`|:weary:|`:pensive:`|:pensive:|
|`:disappointed:`|:disappointed:|`:confounded:`|:confounded:|`:fearful:`|:fearful:|
|`:cold_sweat:`|:cold_sweat:|`:persevere:`|:persevere:|`:cry:`|:cry:|
|`:sob:`|:sob:|`:joy:`|:joy:|`:astonished:`|:astonished:|
|`:scream:`|:scream:|`:neckbeard:`|:neckbeard:|`:tired_face:`|:tired_face:|
|`:angry:`|:angry:|`:rage:`|:rage:|`:triumph:`|:triumph:|
|`:sleepy:`|:sleepy:|`:yum:`|:yum:|`:mask:`|:mask:|
|`:sunglasses:`|:sunglasses:|`:dizzy_face:`|:dizzy_face:|`:imp:`|:imp:|
|`:smiling_imp:`|:smiling_imp:|`:neutral_face:`|:neutral_face:|`:no_mouth:`|:no_mouth:|
|`:innocent:`|:innocent:|`:alien:`|:alien:|`:yellow_heart:`|:yellow_heart:|
|`:blue_heart:`|:blue_heart:|`:purple_heart:`|:purple_heart:|`:heart:`|:heart:|
|`:green_heart:`|:green_heart:|`:broken_heart:`|:broken_heart:|`:heartbeat:`|:heartbeat:|
|`:heartpulse:`|:heartpulse:|`:two_hearts:`|:two_hearts:|`:revolving_hearts:`|:revolving_hearts:|
|`:cupid:`|:cupid:|`:sparkling_heart:`|:sparkling_heart:|`:sparkles:`|:sparkles:|
|`:star:`|:star:|`:star2:`|:star2:|`:dizzy:`|:dizzy:|
|`:boom:`|:boom:|`:collision:`|:collision:|`:anger:`|:anger:|
|`:exclamation:`|:exclamation:|`:question:`|:question:|`:grey_exclamation:`|:grey_exclamation:|
|`:grey_question:`|:grey_question:|`:zzz:`|:zzz:|`:dash:`|:dash:|
|`:sweat_drops:`|:sweat_drops:|`:notes:`|:notes:|`:musical_note:`|:musical_note:|
|`:fire:`|:fire:|`:hankey:`|:hankey:|`:poop:`|:poop:|
|`::`|:shit:|`:+1:`|:+1:|`:thumbsup:`|:thumbsup:|
|`:-1:`|:-1:|`:thumbsdown:`|:thumbsdown:|`:ok_hand:`|:ok_hand:|
|`:punch:`|:punch:|`:facepunch:`|:facepunch:|`:fist:`|:fist:|
|`:v:`|:v:|`:wave:`|:wave:|`:hand:`|:hand:|
|`:raised_hand:`|:raised_hand:|`:open_hands:`|:open_hands:|`:point_up:`|:point_up:|
|`:point_down:`|:point_down:|`:point_left:`|:point_left:|`:point_right:`|:point_right:|
|`:raised_hands:`|:raised_hands:|`:pray:`|:pray:|`:point_up_2:`|:point_up_2:|
|`:clap:`|:clap:|`:muscle:`|:muscle:|`:metal:`|:metal:|
|`:fu:`|:fu:|`:walking:`|:walking:|`:runner:`|:runner:|
|`:running:`|:running:|`:couple:`|:couple:|`:family:`|:family:|
|`:two_men_holding_hands:`|:two_men_holding_hands:|`:two_women_holding_hands:`|:two_women_holding_hands:|`:dancer:`|:dancer:|
|`:dancers:`|:dancers:|`:ok_woman:`|:ok_woman:|`:no_good:`|:no_good:|
|`:information_desk_person:`|:information_desk_person:|`:raising_hand:`|:raising_hand:|`:bride_with_veil:`|:bride_with_veil:|
|`:person_with_pouting_face:`|:person_with_pouting_face:|`:person_frowning:`|:person_frowning:|`:bow:`|:bow:|
|`:couplekiss:`|:couplekiss:|`:couple_with_heart:`|:couple_with_heart:|`:massage:`|:massage:|
|`:haircut:`|:haircut:|`:nail_care:`|:nail_care:|`:boy:`|:boy:|
|`:girl:`|:girl:|`:woman:`|:woman:|`:man:`|:man:|
|`:baby:`|:baby:|`:older_woman:`|:older_woman:|`:older_man:`|:older_man:|
|`:person_with_blond_hair:`|:person_with_blond_hair:|`:man_with_gua_pi_mao:`|:man_with_gua_pi_mao:|`:man_with_turban:`|:man_with_turban:|
|`:construction_worker:`|:construction_worker:|`:cop:`|:cop:|`:angel:`|:angel:|
|`:princess:`|:princess:|`:smiley_cat:`|:smiley_cat:|`:smile_cat:`|:smile_cat:|
|`:heart_eyes_cat:`|:heart_eyes_cat:|`:kissing_cat:`|:kissing_cat:|`:smirk_cat:`|:smirk_cat:|
|`:scream_cat:`|:scream_cat:|`:crying_cat_face:`|:crying_cat_face:|`:joy_cat:`|:joy_cat:|
|`:pouting_cat:`|:pouting_cat:|`:japanese_ogre:`|:japanese_ogre:|`:japanese_goblin:`|:japanese_goblin:|
|`:see_no_evil:`|:see_no_evil:|`:hear_no_evil:`|:hear_no_evil:|`:speak_no_evil:`|:speak_no_evil:|
|`:guardsman:`|:guardsman:|`:skull:`|:skull:|`:feet:`|:feet:|
|`:lips:`|:lips:|`:kiss:`|:kiss:|`:droplet:`|:droplet:|
|`:ear:`|:ear:|`:eyes:`|:eyes:|`:nose:`|:nose:|
|`:tongue:`|:tongue:|`:love_letter:`|:love_letter:|`:bust_in_silhouette:`|:bust_in_silhouette:|
|`:busts_in_silhouette:`|:busts_in_silhouette:|`:speech_balloon:`|:speech_balloon:|`:thought_balloon:`|:thought_balloon:|
|`:feelsgood:`|:feelsgood:|`:finnadie:`|:finnadie:|`:goberserk:`|:goberserk:|
|`:godmode:`|:godmode:|`:hurtrealbad:`|:hurtrealbad:|`:rage1:`|:rage1:|
|`:rage2:`|:rage2:|`:rage3:`|:rage3:|`:rage4:`|:rage4:|
|`:suspect:`|:suspect:|`:trollface:`|:trollface:||||

## 自然

|syntax|preview|syntax|preview|syntax|preview|
|:-------:|:---:|:------:|:-----:|:------:|:---:|
|`:sunny:`|:sunny:|`:umbrella:`|:umbrella:|`:cloud:`|:cloud:|
|`:snowflake:`|:snowflake:|`:snowman:`|:snowman:|`:zap:`|:zap:|
|`:cyclone:`|:cyclone:|`:foggy:`|:foggy:|`:ocean:`|:ocean:|
|`:cat:`|:cat:|`:dog:`|:dog:|`:mouse:`|:mouse:|
|`:hamster:`|:hamster:|`:rabbit:`|:rabbit:|`:wolf:`|:wolf:|
|`:frog:`|:frog:|`:tiger:`|:tiger:|`:koala:`|:koala:|
|`:bear:`|:bear:|`:pig:`|:pig:|`:pig_nose:`|:pig_nose:|
|`:cow:`|:cow:|`:boar:`|:boar:|`:monkey_face:`|:monkey_face:|
|`:monkey:`|:monkey:|`:horse:`|:horse:|`:racehorse:`|:racehorse:|
|`:camel:`|:camel:|`:sheep:`|:sheep:|`:elephant:`|:elephant:|
|`:panda_face:`|:panda_face:|`:snake:`|:snake:|`:bird:`|:bird:|
|`:baby_chick:`|:baby_chick:|`:hatched_chick:`|:hatched_chick:|`:hatching_chick:`|:hatching_chick:|
|`:chicken:`|:chicken:|`:penguin:`|:penguin:|`:turtle:`|:turtle:|
|`:bug:`|:bug:|`:honeybee:`|:honeybee:|`:ant:`|:ant:|
|`:beetle:`|:beetle:|`:snail:`|:snail:|`:octopus:`|:octopus:|
|`:tropical_fish:`|:tropical_fish:|`:fish:`|:fish:|`:whale:`|:whale:|
|`:whale2:`|:whale2:|`:dolphin:`|:dolphin:|`:cow2:`|:cow2:|
|`:ram:`|:ram:|`:rat:`|:rat:|`:water_buffalo:`|:water_buffalo:|
|`:tiger2:`|:tiger2:|`:rabbit2:`|:rabbit2:|`:dragon:`|:dragon:|
|`:goat:`|:goat:|`:rooster:`|:rooster:|`:dog2:`|:dog2:|
|`:pig2:`|:pig2:|`:mouse2:`|:mouse2:|`:ox:`|:ox:|
|`:dragon_face:`|:dragon_face:|`:blowfish:`|:blowfish:|`:crocodile:`|:crocodile:|
|`:dromedary_camel:`|:dromedary_camel:|`:leopard:`|:leopard:|`:cat2:`|:cat2:|
|`:poodle:`|:poodle:|`:paw_prints:`|:paw_prints:|`:bouquet:`|:bouquet:|
|`:cherry_blossom:`|:cherry_blossom:|`:tulip:`|:tulip:|`:four_leaf_clover:`|:four_leaf_clover:|
|`:rose:`|:rose:|`:sunflower:`|:sunflower:|`:hibiscus:`|:hibiscus:|
|`:maple_leaf:`|:maple_leaf:|`:leaves:`|:leaves:|`:fallen_leaf:`|:fallen_leaf:|
|`:herb:`|:herb:|`:mushroom:`|:mushroom:|`:cactus:`|:cactus:|
|`:palm_tree:`|:palm_tree:|`:evergreen_tree:`|:evergreen_tree:|`:deciduous_tree:`|:deciduous_tree:|
|`:chestnut:`|:chestnut:|`:seedling:`|:seedling:|`:blossom:`|:blossom:|
|`:ear_of_rice:`|:ear_of_rice:|`:shell:`|:shell:|`:globe_with_meridians:`|:globe_with_meridians:|
|`:sun_with_face:`|:sun_with_face:|`:full_moon_with_face:`|:full_moon_with_face:|`:new_moon_with_face:`|:new_moon_with_face:|
|`:new_moon:`|:new_moon:|`:waxing_crescent_moon:`|:waxing_crescent_moon:|`:first_quarter_moon:`|:first_quarter_moon:|
|`:full_moon:`|:full_moon:|`:waning_gibbous_moon:`|:waning_gibbous_moon:|`:last_quarter_moon:`|:last_quarter_moon:|
|`:waning_crescent_moon:`|:waning_crescent_moon:|`:last_quarter_moon_with_face:`|:last_quarter_moon_with_face:|`:first_quarter_moon_with_face:`|:first_quarter_moon_with_face:|
|`:moon:`|:moon:|`:earth_africa:`|:earth_africa:|`:earth_americas:`|:earth_americas:|
|`:earth_asia:`|:earth_asia:|`:volcano:`|:volcano:|`:milky_way:`|:milky_way:|
|`:partly_sunny:`|:partly_sunny:|`:octocat:`|:octocat:|`:squirrel:`|:squirrel:|
|`:waxing_gibbous_moon:`|:waxing_gibbous_moon:||||||

## 物体

|syntax|preview|syntax|preview|syntax|preview|
|:-------:|:---:|:------:|:-----:|:------:|:-----:|
|`:bamboo:`|:bamboo:|`:gift_heart:`|:gift_heart:|`:dolls:`|:dolls:|
|`:school_satchel:`|:school_satchel:|`:mortar_board:`|:mortar_board:|`:flags:`|:flags:|
|`:fireworks:`|:fireworks:|`:sparkler:`|:sparkler:|`:wind_chime:`|:wind_chime:|
|`:rice_scene:`|:rice_scene:|`:jack_o_lantern:`|:jack_o_lantern:|`:ghost:`|:ghost:|
|`:santa:`|:santa:|`:christmas_tree:`|:christmas_tree:|`:gift:`|:gift:|
|`:bell:`|:bell:|`:no_bell:`|:no_bell:|`:tanabata_tree:`|:tanabata_tree:|
|`:tada:`|:tada:|`:confetti_ball:`|:confetti_ball:|`:balloon:`|:balloon:|
|`:crystal_ball:`|:crystal_ball:|`:cd:`|:cd:|`:dvd:`|:dvd:|
|`:floppy_disk:`|:floppy_disk:|`:camera:`|:camera:|`:video_camera:`|:video_camera:|
|`:movie_camera:`|:movie_camera:|`:computer:`|:computer:|`:tv:`|:tv:|
|`:iphone:`|:iphone:|`:phone:`|:phone:|`:telephone:`|:telephone:|
|`:telephone_receiver:`|:telephone_receiver:|`:pager:`|:pager:|`:fax:`|:fax:|
|`:minidisc:`|:minidisc:|`:vhs:`|:vhs:|`:sound:`|:sound:|
|`:speaker:`|:speaker:|`:mute:`|:mute:|`:loudspeaker:`|:loudspeaker:|
|`:mega:`|:mega:|`:hourglass:`|:hourglass:|`:hourglass_flowing_sand:`|:hourglass_flowing_sand:|
|`:alarm_clock:`|:alarm_clock:|`:watch:`|:watch:|`:radio:`|:radio:|
|`:satellite:`|:satellite:|`:loop:`|:loop:|`:mag:`|:mag:|
|`:mag_right:`|:mag_right:|`:unlock:`|:unlock:|`:lock:`|:lock:|
|`:lock_with_ink_pen:`|:lock_with_ink_pen:|`:closed_lock_with_key:`|:closed_lock_with_key:|`:key:`|:key:|
|`:bulb:`|:bulb:|`:flashlight:`|:flashlight:|`:high_brightness:`|:high_brightness:|
|`:low_brightness:`|:low_brightness:|`:electric_plug:`|:electric_plug:|`:battery:`|:battery:|
|`:calling:`|:calling:|`:email:`|:email:|`:mailbox:`|:mailbox:|
|`:postbox:`|:postbox:|`:bath:`|:bath:|`:bathtub:`|:bathtub:|
|`:shower:`|:shower:|`:toilet:`|:toilet:|`:wrench:`|:wrench:|
|`:nut_and_bolt:`|:nut_and_bolt:|`:hammer:`|:hammer:|`:seat:`|:seat:|
|`:moneybag:`|:moneybag:|`:yen:`|:yen:|`:dollar:`|:dollar:|
|`:pound:`|:pound:|`:euro:`|:euro:|`:credit_card:`|:credit_card:|
|`:money_with_wings:`|:money_with_wings:|`:e-mail:`|:e-mail:|`:inbox_tray:`|:inbox_tray:|
|`:outbox_tray:`|:outbox_tray:|`:envelope:`|:envelope:|`:incoming_envelope:`|:incoming_envelope:|
|`:postal_horn:`|:postal_horn:|`:mailbox_closed:`|:mailbox_closed:|`:mailbox_with_mail:`|:mailbox_with_mail:|
|`:mailbox_with_no_mail:`|:mailbox_with_no_mail:|`:door:`|:door:|`:smoking:`|:smoking:|
|`:bomb:`|:bomb:|`:gun:`|:gun:|`:hocho:`|:hocho:|
|`:pill:`|:pill:|`:syringe:`|:syringe:|`:page_facing_up:`|:page_facing_up:|
|`:page_with_curl:`|:page_with_curl:|`:bookmark_tabs:`|:bookmark_tabs:|`:bar_chart:`|:bar_chart:|
|`:chart_with_upwards_trend:`|:chart_with_upwards_trend:|`:chart_with_downwards_trend:`|:chart_with_downwards_trend:|`:scroll:`|:scroll:|
|`:clipboard:`|:clipboard:|`:calendar:`|:calendar:|`:date:`|:date:|
|`:card_index:`|:card_index:|`:file_folder:`|:file_folder:|`:open_file_folder:`|:open_file_folder:|
|`:scissors:`|:scissors:|`:pushpin:`|:pushpin:|`:paperclip:`|:paperclip:|
|`:black_nib:`|:black_nib:|`:pencil2:`|:pencil2:|`:straight_ruler:`|:straight_ruler:|
|`:triangular_ruler:`|:triangular_ruler:|`:closed_book:`|:closed_book:|`:green_book:`|:green_book:|
|`:blue_book:`|:blue_book:|`:orange_book:`|:orange_book:|`:notebook:`|:notebook:|
|`:notebook_with_decorative_cover:`|:notebook_with_decorative_cover:|`:ledger:`|:ledger:|`:books:`|:books:|
|`:bookmark:`|:bookmark:|`:microscope:`|:microscope:|`:telescope:`|:telescope:|
|`:name_badge:`|:name_badge:|`:newspaper:`|:newspaper:|`:football:`|:football:|
|`:basketball:`|:basketball:|`:soccer:`|:soccer:|`:baseball:`|:baseball:|
|`:tennis:`|:tennis:|`:8ball:`|:8ball:|`:rugby_football:`|:rugby_football:|
|`:bowling:`|:bowling:|`:golf:`|:golf:|`:mountain_bicyclist:`|:mountain_bicyclist:|
|`:bicyclist:`|:bicyclist:|`:horse_racing:`|:horse_racing:|`:snowboarder:`|:snowboarder:|
|`:swimmer:`|:swimmer:|`:surfer:`|:surfer:|`:ski:`|:ski:|
|`:spades:`|:spades:|`:hearts:`|:hearts:|`:clubs:`|:clubs:|
|`:diamonds:`|:diamonds:|`:gem:`|:gem:|`:ring:`|:ring:|
|`:trophy:`|:trophy:|`:musical_score:`|:musical_score:|`:musical_keyboard:`|:musical_keyboard:|
|`:violin:`|:violin:|`:space_invader:`|:space_invader:|`:video_game:`|:video_game:|
|`:black_joker:`|:black_joker:|`:flower_playing_cards:`|:flower_playing_cards:|`:game_die:`|:game_die:|
|`:dart:`|:dart:|`:mahjong:`|:mahjong:|`:clapper:`|:clapper:|
|`:memo:`|:memo:|`:pencil:`|:pencil:|`:book:`|:book:|
|`:art:`|:art:|`:microphone:`|:microphone:|`:headphones:`|:headphones:|
|`:trumpet:`|:trumpet:|`:saxophone:`|:saxophone:|`:guitar:`|:guitar:|
|`:shoe:`|:shoe:|`:sandal:`|:sandal:|`:high_heel:`|:high_heel:|
|`:lipstick:`|:lipstick:|`:boot:`|:boot:|`:shirt:`|:shirt:|
|`:tshirt:`|:tshirt:|`:necktie:`|:necktie:|`:womans_clothes:`|:womans_clothes:|
|`:dress:`|:dress:|`:running_shirt_with_sash:`|:running_shirt_with_sash:|`:jeans:`|:jeans:|
|`:kimono:`|:kimono:|`:bikini:`|:bikini:|`:ribbon:`|:ribbon:|
|`:tophat:`|:tophat:|`:crown:`|:crown:|`:womans_hat:`|:womans_hat:|
|`:mans_shoe:`|:mans_shoe:|`:closed_umbrella:`|:closed_umbrella:|`:briefcase:`|:briefcase:|
|`:handbag:`|:handbag:|`:pouch:`|:pouch:|`:purse:`|:purse:|
|`:eyeglasses:`|:eyeglasses:|`:fishing_pole_and_fish:`|:fishing_pole_and_fish:|`:coffee:`|:coffee:|
|`:tea:`|:tea:|`:sake:`|:sake:|`:baby_bottle:`|:baby_bottle:|
|`:beer:`|:beer:|`:beers:`|:beers:|`:cocktail:`|:cocktail:|
|`:tropical_drink:`|:tropical_drink:|`:wine_glass:`|:wine_glass:|`:fork_and_knife:`|:fork_and_knife:|
|`:pizza:`|:pizza:|`:hamburger:`|:hamburger:|`:fries:`|:fries:|
|`:poultry_leg:`|:poultry_leg:|`:meat_on_bone:`|:meat_on_bone:|`:spaghetti:`|:spaghetti:|
|`:curry:`|:curry:|`:fried_shrimp:`|:fried_shrimp:|`:bento:`|:bento:|
|`:sushi:`|:sushi:|`:fish_cake:`|:fish_cake:|`:rice_ball:`|:rice_ball:|
|`:rice_cracker:`|:rice_cracker:|`:rice:`|:rice:|`:ramen:`|:ramen:|
|`:stew:`|:stew:|`:oden:`|:oden:|`:dango:`|:dango:|
|`:egg:`|:egg:|`:bread:`|:bread:|`:doughnut:`|:doughnut:|
|`:custard:`|:custard:|`:icecream:`|:icecream:|`:ice_cream:`|:ice_cream:|
|`:shaved_ice:`|:shaved_ice:|`:birthday:`|:birthday:|`:cake:`|:cake:|
|`:cookie:`|:cookie:|`:chocolate_bar:`|:chocolate_bar:|`:candy:`|:candy:|
|`:lollipop:`|:lollipop:|`:honey_pot:`|:honey_pot:|`:apple:`|:apple:|
|`:green_apple:`|:green_apple:|`:tangerine:`|:tangerine:|`:lemon:`|:lemon:|
|`:cherries:`|:cherries:|`:grapes:`|:grapes:|`:watermelon:`|:watermelon:|
|`:strawberry:`|:strawberry:|`:peach:`|:peach:|`:melon:`|:melon:|
|`:banana:`|:banana:|`:pear:`|:pear:|`:pineapple:`|:pineapple:|
|`:sweet_potato:`|:sweet_potato:|`:eggplant:`|:eggplant:|`:tomato:`|:tomato:|
|`:corn:`|:corn:||||||

## 地点

|syntax|preview|syntax|preview|syntax|preview|
|:-------:|:---:|:------:|:-----:|:------:|:-----:|
|`:house:`|:house:|`:house_with_garden:`|:house_with_garden:|`:school:`|:school:|
|`:office:`|:office:|`:post_office:`|:post_office:|`:hospital:`|:hospital:|
|`:bank:`|:bank:|`:convenience_store:`|:convenience_store:|`:love_hotel:`|:love_hotel:|
|`:hotel:`|:hotel:|`:wedding:`|:wedding:|`:church:`| :church:|
|`:department_store:`|:department_store:|`:european_post_office:`|:european_post_office:|`:city_sunrise:`|:city_sunrise:|
|`:city_sunset:`|:city_sunset:|`:japanese_castle:`|:japanese_castle:|`:european_castle:`|:european_castle:|
|`:tent:`|:tent:|` :factory:`| :factory:|`:tokyo_tower:`|:tokyo_tower:|
|`:japan:`|:japan:|`:mount_fuji:`|:mount_fuji:|`:sunrise_over_mountains:`|:sunrise_over_mountains:|
|`:sunrise:`|:sunrise:|`:stars:`|:stars:|`:statue_of_liberty:`|:statue_of_liberty:|
|`:bridge_at_night:`|:bridge_at_night:|`:carousel_horse:`|:carousel_horse:|`:rainbow:`|:rainbow:|
|`:ferris_wheel:`|:ferris_wheel:|`:fountain:`|:fountain:|`:roller_coaster:`|:roller_coaster:|
|`:ship:`|:ship:|` :speedboat:`| :speedboat:|` :boat:`| :boat:|
|`:sailboat:`|:sailboat:|`:rowboat:`|:rowboat:|`:anchor:`|:anchor:|
|`:rocket:`|:rocket:|`:airplane:`|:airplane:|`:helicopter:`|:helicopter:|
|`:steam_locomotive:`|:steam_locomotive:|`:tram:`|:tram:|`:mountain_railway:`|:mountain_railway:|
|`:bike:`|:bike:|`:aerial_tramway:`|:aerial_tramway:|`:suspension_railway:`|:suspension_railway:|
|`:mountain_cableway:`|:mountain_cableway:|`:tractor:`|:tractor:|`:blue_car:`|:blue_car:|
|`:oncoming_automobile:`|:oncoming_automobile:|`:car:`|:car:|` :red_car:`| :red_car:|
|`:taxi:`|:taxi:|`:oncoming_taxi:`|:oncoming_taxi:|`:articulated_lorry:`|:articulated_lorry:|
|`:bus:`|:bus:|`:oncoming_bus:`|:oncoming_bus:|`:rotating_light:`|:rotating_light:|
|`:police_car:`|:police_car:|`:oncoming_police_car:`|:oncoming_police_car:|`:fire_engine:`|:fire_engine:|
|`:ambulance:`|:ambulance:|`:minibus:`|:minibus:|` :truck:`| :truck:|
|` :train:`| :train:|` :station:`| :station:|` :train2:`| :train2:|
|`:bullettrain_front:`|:bullettrain_front:|` :bullettrain_side:`| :bullettrain_side:|` :light_rail:`| :light_rail:|
|` :monorail:`| :monorail:|` :railway_car:`| :railway_car:|` :trolleybus:`| :trolleybus:|
|`:ticket:`|:ticket:|` :fuelpump:`| :fuelpump:|` :vertical_traffic_light:`| :vertical_traffic_light:|
|` :traffic_light:`| :traffic_light:|` :warning:`| :warning:|` :construction:`| :construction:|
|`:beginner:`|:beginner:|` :atm:`| :atm:|` :slot_machine:`| :slot_machine:|
|` :busstop:`| :busstop:|` :barber:`| :barber:|` :hotsprings:`| :hotsprings:|
|` :checkered_flag:`| :checkered_flag:|` :crossed_flags:`| :crossed_flags:|` :izakaya_lantern:`| :izakaya_lantern:|
|`:moyai:`|:moyai:|` :circus_tent:`| :circus_tent:|` :performing_arts:`| :performing_arts:|
|` :round_pushpin:`| :round_pushpin:|` :triangular_flag_on_post:`| :triangular_flag_on_post:|` :jp:`| :jp:|
|`:kr:`|:kr:|` :cn:`| :cn:|` :us:`| :us:|
|` :fr:`| :fr:|`:es:`|:es:|` :it:`| :it:|
|`:ru:`|:ru:|` :gb:`| :gb:|` :uk:`| :uk:|
|`:de:`|:de:||||||

## 符号

|syntax|preview|syntax|preview|syntax|preview|
|:-------:|:---:|:------:|:-----:|:------:|:-----:|
|`:one:`|:one:|`:two:`|:two:|`:three:`|:three:|
|`:four:`|:four:|`:five:`|:five:|` :six:`| :six:|
|` :seven:`| :seven:|` :eight:`| :eight:|` :nine:`| :nine:|
|` :keycap_ten:`| :keycap_ten:|` :1234:`| :1234:|` :zero:`| :zero:|
|`:hash:`|:hash:|` :symbols:`| :symbols:|` :arrow_backward:`| :arrow_backward:|
|` :arrow_down:`| :arrow_down:|` :arrow_forward:`| :arrow_forward:|` :arrow_left:`| :arrow_left:|
|` :capital_abcd:`| :capital_abcd:|` :abcd:`| :abcd:|` :abc:`| :abc:|
|`:arrow_lower_left:`|:arrow_lower_left:|` :arrow_lower_right:`| :arrow_lower_right:|` :arrow_right:`| :arrow_right:|
|` :arrow_up:`| :arrow_up:|` :arrow_upper_left:`| :arrow_upper_left:|` :arrow_upper_right:`| :arrow_upper_right:|
|`:arrow_double_down:`|:arrow_double_down:|` :arrow_double_up:`| :arrow_double_up:|` :arrow_down_small:`| :arrow_down_small:|
|` :arrow_heading_down:`| :arrow_heading_down:|` :arrow_heading_up:`| :arrow_heading_up:|` :leftwards_arrow_with_hook:`| :leftwards_arrow_with_hook:|
|`:arrow_right_hook:`|:arrow_right_hook:|` :left_right_arrow:`| :left_right_arrow:|` :arrow_up_down:`| :arrow_up_down:|
|` :arrow_up_small:`| :arrow_up_small:|` :arrows_clockwise:`| :arrows_clockwise:|` :arrows_counterclockwise:`| :arrows_counterclockwise:|
|` :rewind:`| :rewind:|` :fast_forward:`| :fast_forward:|` :information_source:`| :information_source:|
|`:ok:`|:ok:|` :twisted_rightwards_arrows:`| :twisted_rightwards_arrows:|` :repeat:`| :repeat:|
|` :repeat_one:`| :repeat_one:|` :new:`| :new:|` :top:`| :top:|
|`:up:`|:up:|`:cool:`|:cool:|` :free:`| :free:|
|`:ng:`|:ng:|`:cinema:`|:cinema:|` :koko:`| :koko:|
|` :signal_strength:`| :signal_strength:|` :u5272:`| :u5272:|` :u5408:`| :u5408:|
|` :u55b6:`| :u55b6:|` :u6307:`| :u6307:|` :u6708:`| :u6708:|
|` :u6709:`| :u6709:|` :u6e80:`| :u6e80:|` :u7121:`| :u7121:|
|` :u7533:`| :u7533:|` :u7a7a:`| :u7a7a:|` :u7981:`| :u7981:|
|`:sa:`|:sa:|` :restroom:`| :restroom:|` :mens:`| :mens:|
|` :womens:`| :womens:|` :baby_symbol:`| :baby_symbol:|` :no_smoking:`| :no_smoking:|
|`:parking:`|:parking:|` :wheelchair:`| :wheelchair:|` :metro:`| :metro:|
|` :baggage_claim:`| :baggage_claim:|` :accept:`| :accept:|` :wc:`| :wc:|
|`:potable_water:`|:potable_water:|` :put_litter_in_its_place:`| :put_litter_in_its_place:|` :secret:`| :secret:|
|` :congratulations:`| :congratulations:|` :m:`| :m:|` :passport_control:`| :passport_control:|
|`:left_luggage:`|:left_luggage:|` :customs:`| :customs:|` :ideograph_advantage:`| :ideograph_advantage:|
|` :cl:`| :cl:|` :sos:`| :sos:|` :id:`| :id:|
|` :no_entry_sign:`| :no_entry_sign:|` :underage:`| :underage:|` :no_mobile_phones:`| :no_mobile_phones:|
|` :do_not_litter:`| :do_not_litter:|` :non-potable_water:`| :non-potable_water:|` :no_bicycles:`| :no_bicycles:|
|`:no_pedestrians:`|:no_pedestrians:|` :children_crossing:`| :children_crossing:|` :no_entry:`| :no_entry:|
|` :eight_spoked_asterisk:`| :eight_spoked_asterisk:|` :eight_pointed_black_star:`| :eight_pointed_black_star:|` :heart_decoration:`| :heart_decoration:|
|` :vs:`| :vs:|` :vibration_mode:`| :vibration_mode:|` :mobile_phone_off:`| :mobile_phone_off:|
|` :chart:`| :chart:|` :currency_exchange:`| :currency_exchange:|` :aries:`| :aries:|
|` :taurus:`| :taurus:|`:gemini:`|:gemini:|` :cancer:`| :cancer:|
|`:leo:`|:leo:|` :virgo:`| :virgo:|` :libra:`| :libra:|
|` :scorpius:`| :scorpius:|` :sagittarius:`| :sagittarius:|` :capricorn:`| :capricorn:|
|` :aquarius:`| :aquarius:|` :pisces:`| :pisces:|` :ophiuchus:`| :ophiuchus:|
|` :six_pointed_star:`| :six_pointed_star:|` :negative_squared_cross_mark:`| :negative_squared_cross_mark:|` :a:`| :a:|
|`:b:`|:b:|` :ab:`| :ab:|` :o2:`| :o2:|
|` :diamond_shape_with_a_dot_inside:`| :diamond_shape_with_a_dot_inside:|` :recycle:`| :recycle:|` :end:`| :end:|
|` :on:`| :on:|` :soon:`| :soon:|` :clock1:`| :clock1:|
|`:clock130:`|:clock130:|` :clock10:`| :clock10:|` :clock1030:`| :clock1030:|
|` :clock11:`| :clock11:|` :clock1130:`| :clock1130:|` :clock12:`| :clock12:|
|` :clock1230:`| :clock1230:|` :clock2:`| :clock2:|`:clock230:`|:clock230:|
|` :clock3:`| :clock3:|` :clock330:`| :clock330:|` :clock4:`| :clock4:|
|`:clock430:`|:clock430:|` :clock5:`| :clock5:|` :clock530:`| :clock530:|
|`:clock6:`|:clock6:|` :clock630:`| :clock630:|` :clock7:`| :clock7:|
|`:clock730:`|:clock730:|` :clock8:`| :clock8:|` :clock830:`| :clock830:|
|` :clock9:`| :clock9:|`:clock930:`|:clock930:|` :heavy_dollar_sign:`| :heavy_dollar_sign:|
|` :copyright:`| :copyright:|` :registered:`| :registered:|` :tm:`| :tm:|
|`:x:`|:x:|`:heavy_exclamation_mark:`|:heavy_exclamation_mark:|`:bangbang:`|:bangbang:|
|`:interrobang:`|:interrobang:|` :o:`| :o:|` :heavy_multiplication_x:`| :heavy_multiplication_x:|
|` :heavy_plus_sign:`| :heavy_plus_sign:|` :heavy_minus_sign:`| :heavy_minus_sign:|`:heavy_division_sign:`|:heavy_division_sign:|
|` :white_flower:`| :white_flower:|` :100:`| :100:|`:heavy_check_mark:`|:heavy_check_mark:|
|`:ballot_box_with_check:`|:ballot_box_with_check:|` :radio_button:`| :radio_button:|` :link:`| :link:|
|`:curly_loop:`|:curly_loop:|` :wavy_dash:`| :wavy_dash:|` :part_alternation_mark:`| :part_alternation_mark:|
|`:trident:`|:trident:|`:black_large_square:`|:black_large_square:|` :white_large_square:`| :white_large_square:|
|`:white_check_mark:`|:white_check_mark:|` :white_square_button:`| :white_square_button:|` :black_square_button:`| :black_square_button:|
|` :black_circle:`| :black_circle:|` :white_circle:`| :white_circle:|` :red_circle:`| :red_circle:|
|` :large_blue_circle:`| :large_blue_circle:|` :large_blue_diamond:`| :large_blue_diamond:|` :large_orange_diamond:`| :large_orange_diamond:|
|` :small_blue_diamond:`| :small_blue_diamond:|` :small_orange_diamond:`| :small_orange_diamond:|` :small_red_triangle:`| :small_red_triangle:|
|`:small_red_triangle_down:`|:small_red_triangle_down:|` :shipit:`| :shipit:||||
