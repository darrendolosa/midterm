<template>
 
  <div class= "calculator"><br><br><br><br><br><br>

    

    <div class="display">{{current || '0'}}</div>
    <div @click="clear" class="btn">C</div>
    <div @click="sign" class="btn">+/-</div>
    <div @click="percent" class="btn">%</div>
    <div @click="divide" class="btn oper">/</div>
    <div @click="append('7')" class="btn">7</div>
    <div @click="append('8')" class="btn">8</div>
    <div @click="append('9')" class="btn">9</div>
    <div @click="mul" class="btn oper">*</div>
    <div @click="append('4')" class="btn">4</div>
    <div @click="append('5')" class="btn">5</div>
    <div @click="append('6')" class="btn">6</div>
    <div @click="min" class="btn oper">-</div>
    <div @click="append('1')" class="btn">1</div>
    <div @click="append('2')" class="btn">2</div>
    <div @click="append('3')" class="btn">3</div>
    <div @click="add" class="btn oper">+</div>
    <div @click="append('0')" class="btn zero">0</div>
    <div @click="dot" class="btn">.</div>
    <div @click="equal" class="btn oper">=</div>


    </div>
</template>
<style scoped>
  .calculator{
  width: 400px;
  margin: 0 auto;
  font-size: 25px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50px, auto);
  }
  .display{
  padding: 10px;
  background-color:rgb(39, 31, 31);
  color: white;
  grid-column: 1/5;
  }
  .btn{
  padding: 10px;
  background-color: rgb(246, 255, 167);
  border: 1px solid;
  }
  .btn:hover{
  background-color: rgb(39, 13, 13);
  color: white;
  }
  .zero{
  grid-column: 1/3;
  }
  .oper{
  background-color: rgb(255, 184, 52);
  color: rgb(2, 2, 2);
  }
  </style>
<script>
  
  export default {
  data() {
  return{
  prev:null,
  current:'',
  operator:null,
  operatorClicked:false,
  }
  },
  methods:{
  clear(){
  this.current='';
  },
  sign(){
  this.current = this.current.charAt(0) === '-' ?
  this.current.slice(1) : `-${this.current}`;
  },
  percent(){
this.current =`${parseFloat(this.current)/100}`
},
append(number){
if (this.operatorClicked){
this.current ='';
this.operatorClicked =false;
}
this.current = `${this.current}${number}`;
},
dot(){
if(this.current.indexOf('.') === -1){
this.append ('.');
}
},
setPrevious(){
this.prev = this.current;
this.operatorClicked = true;
},
divide(){
this.operator =(a, b) => a/b;
this.setPrevious()
},
mul(){
this.operator =(a, b) => a*b;
this.setPrevious()
},
min(){
this.operator =(a, b) => a-b;
this.setPrevious()
},
add(){
this.operator =(a, b) => a+b;
this.setPrevious()
},
equal(){
this.current = `${this.operator(
parseFloat(this.current),
parseFloat(this.prev)
)}`;
this.prev=null;
}
}
}
</script>