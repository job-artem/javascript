const getSum = (a,b) => {
    sum = 0;
    for(let i = a; i<=b; i++){
        if(i%2===1){
            sum = sum + i;
        }    
        else{
            continue;
        }
    }
    console.log(sum);
    return sum;
    
}