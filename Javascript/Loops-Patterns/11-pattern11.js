
let nsp=3;
let nst=1;
for(let row=1;row<=5;row++){



    // star
    for(let st=1;st<=nst;st++){
        process.stdout.write("*")
    }

    //space
    for(let sp=1;sp<=nsp;sp++){
        process.stdout.write(" ")
    }


    //star
    for(let st=1;st<=nst;st++){
        process.stdout.write("*")
    }


    //nerw line 
    console.log();
    if(row<=3){
        nst=nst+1;
        nsp=nsp-1
    }else;
}