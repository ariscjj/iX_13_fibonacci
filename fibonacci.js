/* primary solution */ 
function fibonacci0() {
  first = 0; 
  second = 1; 
  for (i = 3; i <=10; i++){
    fib = first + second 
    console.log(fib); 
    first = second
    second = fib
  }
}

/* sol allows function reuse of fib nums other than 10 */ 
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

/* func returns first 10 fib digits: */ 
first(10); 
