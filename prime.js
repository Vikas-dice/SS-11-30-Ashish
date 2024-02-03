/**
 * prime number = 1, number
 * 2 factor
 * 2,3,5,7,,11,13,17,19,23,....
 * 
 * 
 * range -1 to 100
 * 
 * 
 * 
 * 
 * 
 * 
 */

for(let num =1;num<=100;num++){
    var nod=0;


    for(let div=2;div*div<num;div++){
        if(num%div==0){
            nod=nod+1;
            break;


        }
   
       
    }
    if(nod==0){
        console.log(num,"  prime");
    }else{
        console.log(num," not prime")
    }
  
 
}
/**
 * 1*36   36*1
 * 2*18   18*2
 * 3*12    12*3
 * 4*9     9*4
 * 6*6   6*6
 * 
 * 
 * 
 * 
 * 
 */


/*
1*100
2*50
4*25
5*20
10*10



20*5
25*4
50*2
100*1




*/
