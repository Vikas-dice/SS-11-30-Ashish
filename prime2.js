let sum=0
for(let num=1;num<=1000;num++){
    let nod =0
    for(let div=2;div<num-1;div++){
        if(num%div==0){
            nod=nod+1
            break
        }
    }
    if(nod!=0){
        
    }
    else {
        sum=sum+num
    }
}
console.log(sum);