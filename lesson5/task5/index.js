const getSum = (a,b) => {
    sum = 0;
    a = prompt('Enter value');
    b = prompt('Enter value');
    for(let i = a; i<=b; i++){
        if(i%2===0){
            sum = sum + i;
        }        
        else{
            continue;
        }
    }
    return sum;
}