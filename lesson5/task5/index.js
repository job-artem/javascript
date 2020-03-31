const getSum = (m,n) => {
    sum = 0;
    for(let i = m; i<=n; i++){
        if(i%2===0){
            sum = sum + i;
        }    
        else{
            continue;
        }
    }
    return sum;
}