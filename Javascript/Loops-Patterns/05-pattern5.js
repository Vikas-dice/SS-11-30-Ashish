let n =5;
let nst=1;
let nsp=n-1;
for(let row=1;row<=2*n-1;row++){

    //space chhapo
    for(let sp=1;sp<=nsp;sp++){
        process.stdout.write("\t")
    }
    //star chhapo
    for(let st=1;st<=nst;st++){
        process.stdout.write("*\t")
    }
    // new line 

    console.log();
    // update nsp nst

    if(row<5){
        nsp=nsp-1;
        nst=nst+1
    }else{
        nsp=nsp+1;
        nst=nst-1;
    }

}