function fibonacci(n)
{
    if(n < 1) return 0;
    else if(n <= 2) return 1;
    else return (fibonacci(n - 1) + fibonacci(n - 2));
}

for(var i = 0; i < 7; i++)
{
    console.log(fibonacci(i));
}