for(let num=1;num<=10;num++){
    let nod = 0
    for(let div=1;div<=num;div++){
        if(num%div==0){
            nod=nod+1
        }
    }
    if(nod==2){
        console.log(num,"prime");
    }
    else{
        console.log(num,"not prime");
    }
}