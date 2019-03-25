<template>
    <div class="l_input">
        <input type="tel"  value="" v-model="preMoney" min="1" id="input_id"  ref="keyboard" @focus="onFocus($event)"> 元    
        <keyboard :option="option" @keyVal="getInputValue" @close="option.show=false"></keyboard>
    </div>
</template>

<script>
import Keyboard from './keyboard.vue'
export default {
  data(){
      return{
        preMoney:null,
        option: {
            show: false,
            sourceDom: ''
        }
    }
  },
  components:{
      "keyboard":Keyboard
  },
    methods:{
        getInputValue(val){
            console.log(val)
             if(val==='del'){              
      this.preMoney=this.preMoney.toString().substr(0,this.preMoney.toString().length-1);
               console.log(this.preMoney)
             }else{
                  if(this.preMoney==null){
                     this.preMoney=''
                  }
                 this.preMoney+=val
             } 

        }
    },
    onFocus(ev){
      document.activeElement.blur();//禁止默认键盘
      this.$set(this.option,'show',true)
      this.$set(this.option,'sourceDom',this.$refs['keyboard'])
    }
}
</script>
