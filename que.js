let x={
    scope:1,
    toString:function(){
        return this.scope++;
    }
}
if(x==1 && x==2 && x==3){
    console.log("console");
}
else
console.log("not logged")