let n=5;
let nst=1;
let nsp=n-1;

for(let row=1;row<=5;row++){
    //space chhapo
    for(let sp=1;sp<=nsp;sp++){
        // console.log("space ")
        process.stdout.write("\t")
    }
    //star chhapo
    for(let st=1;st<=nst;st++){
        // console.log("* ")
        process.stdout.write("*\t")
    }
    //new line 
    console.log();

    nsp=nsp-1;
    nst=nst+1;

}

