import{_ as d,o as u,c as o,a,t as r,F as s}from"./index-b707b58e.js";const i=["for"],m=["id","type","name","placeholder","value","required"],c={__name:"BaseInput",props:{name:{type:String,default:"name"},placeholder:{type:String,default:"Placeholder"},modelValue:{type:String,default:""},type:{type:String,default:"text",validator:e=>["text","password"].includes(e)},required:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(e){return(l,t)=>(u(),o(s,null,[a("label",{for:e.name},r(e.name),9,i),a("input",{id:e.name,class:"input",type:e.type,name:e.name,placeholder:e.placeholder,value:e.modelValue,required:e.required,onInput:t[0]||(t[0]=n=>l.$emit("update:modelValue",n.target.value))},null,40,m)],64))}},f=d(c,[["__scopeId","data-v-f91db5f7"]]);export{f as B};
