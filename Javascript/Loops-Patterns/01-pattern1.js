// for(let row=1;row<=5;row++){
//     // console.log("row -",row)
//     // console.log("*****")
//     for(let col=1;col<=5;col++){
//         // console.log("* ")
//         process.stdout.write("* ")
//     }
// }

for(let row=1;row<=5;row++){

    // console.log("*****")
    for(let col=1;col<=5;col++){
        // console.log("*")
        process.stdout.write("* ")

    }

    console.log();



}

/**  dry run
 * ram = row =1
 * row<=5 1<=5 true
 * 
 * 
 * ram - col=1
 * col<=n 1<=5 true
 * [*]
 * col++ col=2
 * col<=5 2<=5 true
 *  [**]
 * col++ col=3
 * col<=5 3<=5 true
 * [***]
 * col++ col=4
 * col<=5 4<=5 true
 * [****]
 * col++ col=5
 * col<=5 5<=5 true
 * [*****]
 * col++ col=6
 * col<=5 6<=5 false
 * [*****]
 * 
 * row++ row=2
 * row<=5 2<=5 true
 * [*****]
 * 
 * [*****]
 * [*****]
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 *   
 * 
 * 
 * 
 * 
 * 
 */