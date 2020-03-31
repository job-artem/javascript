function getSum (a,b){
    for(let i = a; i<=b; i++){
        if(i%2===0){
            sum +=i;
        }        
        else{
            continue;
        }
    }
    return sum;
}
getSum(3,5);