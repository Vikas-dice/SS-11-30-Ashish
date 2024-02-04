
let nsp=7;
let nst=1;
for(let row=1;row<=9;row++){

    //star
    for(let st=1;st<=nst;st++){
        process.stdout.write("*\t")
    }
    //space

    for(let sp=1;sp<=nsp;sp++){
        process.stdout.write("\t")
    }
    //star
    for(let st=1;st<=nst;st++){
        process.stdout.write("*\t")
    }

    // new line 
    console.log();
    if(row==5){
        
        continue;
    }
    if(row<=5){
        nst=nst+1;
        nsp=nsp-2;
    }else{
        nst=nst-1;
        nsp=nsp+2;

    }
}
