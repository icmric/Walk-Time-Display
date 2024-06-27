import{openBlock as t,createElementBlock as r,toDisplayString as o}from"vue";function a(t){if(isNaN(t))return"Invalid Input";var r="",o=!1;if(t>=48?(o=!0,r=Math.floor(t/24)+" days",(t=Math.floor(t%24))>0&&(r+=" ")):t>=24&&(o=!0,r=Math.floor(t/24)+" day",(t=Math.floor(t%24))>0&&(r+=" ")),t>0||o){var a=!1;t>=1&&t<2?(r+=Math.floor(t)+" h",a=!0):t>=2&&(r+=Math.floor(t)+" hrs",a=!0);var e=60*(t-Math.floor(t));1==e?(a&&(r+=" "),r+=Math.round(e)+" min"):e>1&&(a&&(r+=" "),r+=Math.round(e)+" mins")}else r="Negative Input";return r}var e={id:"walk-time-display",name:"Display walk times",icon:"schedule",description:"Displays the time of a walk from an input json",component:((t,r)=>{const o=t.__vccOpts||t;for(const[t,a]of r)o[t]=a;return o})({props:{value:{type:String,default:"Time 1"}},setup:t=>function(){for(var r=t.value.replace(/\s/g,"").split(","),o=0;o<r.length;o++)r[o]=parseFloat(r[o]);r.sort(((t,r)=>t-r));var e="";for(o=0;o<r.length;o++)2==o&&(e+=" to "),e+=a(r[o]),0==o&&(e+=", ");return e}},[["render",function(a,e,n,i,l,s){return t(),r("div",null,o(a.testString()),1)}],["__file","display.vue"]]),options:null,types:["string","json"]};export{e as default};