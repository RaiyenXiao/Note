<template>
 
  <div class="keyboard" v-show="showKeyboard" v-clickoutside="closeModal">
      <h2 ><span @click="close()">取消</span></h2>
    <p v-for="keys in keyList">
      <template v-for="key in keys">
        <i v-if="key === 'top'" @click.stop="clickKey"  class="iconfont icon-zhiding tab-top"></i>
        <i v-else-if="key === '123'" @click.stop="clickKey"  class="tab-num">123</i>
        <i v-else-if="key === 'del'" @click.stop="clickKey"  id="del"  class="icon icon-custom-delete1 key-delete"></i>
        <i v-else-if="key === 'blank'" @click.stop="clickKey"  class="iconfont icon-konggejian-jianpanyong tab-blank"></i>
        <i v-else-if="key === 'symbol'" @click.stop="clickKey"  class="tab-symbol">符</i>
        <i v-else-if="key === 'point'" @click.stop="clickKey"  class="tab-point">·</i>
        <i v-else-if="key === 'enter'" @click.stop="clickKey"  class="iconfont icon-huiche tab-enter"></i>
        <i v-else @click.stop="clickKey" >{{key}}</i>
      </template>
    </p>
  </div>
 
</template>
 
<script>
import clickoutside from '../assets/js/clickoutside.js'
export default {
  directives: { clickoutside },
  data() {
    return {
      keyList: [],
      status: 2,//0 小写 1 大写 2 数字 3 符号
      lowercase: [
        ['7', '8', '9'],
        ['4', '5', '6'],
        ['1', '2', '3'],
        ['.','0','del'],
      ],
      equip:!!navigator.userAgent.toLocaleLowerCase().match(/ipad|mobile/i)//是否是移动设备
    }
  },
  props: {
    option: {
      type: Object
    }
  },
  computed: {
    showKeyboard(){
      return this.option.show
    }
  },
 
  mounted() {
    this.keyList = this.lowercase
  },
 
  methods: {
    tabHandle({ value = '' }) {
      if(value.indexOf('tab-num') > -1){
         this.status = 2
         //数字键盘数据
      }else if(value.indexOf('key-delete') > -1){
        console.log(value.indexOf('key-delete'))
        this.emitValue('delete')
      }else if(value.indexOf('tab-blank') > -1){
        this.emitValue(' ')
      }else if(value.indexOf('tab-enter') > -1){
        this.emitValue('\n')
      }else if(value.indexOf('tab-point') > -1){
        this.emitValue('.')
      }else if(value.indexOf('tab-symbol') > -1){
        this.status = 3
      }else if(value.indexOf('tab-top') > -1){
        if(this.status === 0){
          this.status = 1
        }else{
          this.status = 0
          this.keyList = this.lowercase
        }
      }else{
 
      }
    },
 
    clickKey(event) {
      // if(event.type === 'click' && this.equip) return
      let value = event.srcElement.innerText;
      let id = event.srcElement.id;
      let target = event.srcElement ? event.srcElement : event.target;
      if(id !== '' && id === 'del'){//如果点击的是id为del的表示是删除
       this.emitValue(id);
      }else{//否则
        value && id !== 'del'? this.emitValue(value) : this.tabHandle(target.classList);
      }
 
    },
 
    emitValue(key) {
      console.log(key)
      this.$emit('keyVal', key)
    },
 
    closeModal(e) {
      if (e.target !== this.option.sourceDom) {
        // this.showKeyboard = false
        this.$emit('close', false)
      }
    },
    close(){
        this.$emit('close', false)
    }
  }
}
</script>
 
<style>
.keyboard {
  display: inline-block;
  width: 100%;
  font-size: 0.55rem;
  border-radius: 2px;
  background-color: #e5e6e8;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  bottom: 0;
  position: absolute;
  /* left: -20px; */
  bottom: 0;
  z-index: 9999999;
  pointer-events: auto;
}
.keyboard p {
  width: 100%;
  margin: 0 auto;
  margin-bottom: 0.05rem;
  display: -ms-flexbox;
  display: flex;
  display: -webkit-box;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.keyboard h2{
  font-size: .3rem;
  font-weight: normal;
  background: #f1f1f1;
  display: flow-root;
  margin-bottom: 0.03rem;
  border-top: 1px solid #eee;
  -webkit-box-shadow: 0 -1px 1px 0px #eee;
  box-shadow: 0 -1px 2px 0px #000;
}
.keyboard h2 span{
  float: right;
  padding: 0.1rem 0.25rem;
  border-left: 1px solid #ccc;
  color: #aaa;
}
.keyboard p i {
  display: block;
  margin: 0 0.2%;
  line-height: 1rem;
  font-style: normal;
  border-radius: 3px;
  background-color: #fff;
  text-align: center;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;
  -webkit-box-flex: 1;
}
.keyboard p i:active {
  background-color: #b3b3b3;
}
.keyboard p:last-child i:last-child{width:3.5%;    margin: 0 0.3%;}
.keyboard p:last-child i:first-child{width:3.5%;    margin: 0 0.3%;}
.keyboard p .tab-top {
  margin: 0 1%;
  background: #cccdd0;
  color: #fff;
  font-size: 24px;
}
.keyboard p .key-delete {
  margin: 0 0.2%;
  color: #827f7f;
}
</style>
