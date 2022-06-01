/* calcs nth fibonacci number */ 
function fibonacci(i) {
  if (i == 1){
    return 0; 
  }
  else if (i == 2){
    return 1; 
  }
  else{
    return (fibonacci(i-1) + fibonacci(i-2)); 
  }
}; 

/*returns 1st to nth fibonacci number */
function first(i) {
  for (n=1; n<=i; n++)
  {
    console.log(fibonacci(n)); 
  }
}; 

/* for first 10 fibonacci digits: */ 
first(10); 
