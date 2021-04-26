## Part 1a
1.20
2.20
3.20
4. error
   1. explain: since line 13 is outside of the block result is defined in, and since variable created by 'let' cannot be access outside the scope, we see an error
5. error
   1. explain: variable created by 'const' could not be changed to another value
6. error
   1. explain: variable created by 'const' could not be changed to another value, and it is out of scope
## Part 1b
1. print 3
   1. explain: The value of 'i' when it leaves the for loop is 3. Since 'var' is function scope, we could access i's value even after the block where it's declared within the function. So we see 3 printed out.
2. print 150
   1. explain: The 'discountedPrice' in the last iteration would be 300*(1-0.5) = 150. Since 'var' is function scope, we could access discountedPrice's value even outside the block where it's declared within the function, so we see 150 printed out.
3. print 150
   1. explain: Since 'var' is function scope, we could still access 'finalPrice' 's value at line 14 and print 150
4. return [50,100,150] There are no errors in this piece of code. In each iteration of the for loop, we calculate 'discountedPrice' and 'finalPrice', and push 'finalPrice' to discounted. At the end of the function, 'discounted' would be returned as expected.
5. The code would cause errors. Variable declared with 'let' could only be accessed within its scope. Since we are accessing i outside the for loop, we would see error
6. The code would cause errors. Same problem with case 5. 'discountedPrice' is declared with 'let' within the for loop and we are trying to access 'discountedPrice' outside its scope.
7. print 150. Since 'finalPrice' is declared at the very beginning of the function and since we are not redeclaring it anywhere in the code, and since line 14 is still in its scope, we would print 150 as expected.
8. return [50, 100, 150]. There is no error in this code. We are not redeclaring variable with let within the same scope, we are not accessing any variable outside its scope. So this function would return what should be returned successfully.
9. We see an error. Since i is declared with let, the scope of this variable is a single iteration of the for loop. Since we are accessing i outside the for loop, we would see an error.
10. print 3. length is a const variable. Since we are not reassigning length and since we are accessing length within its scope, we see 3 printed out.
11. return [50,100,150]. const define constant reference of a value. Since we are not reassigning discounted, we can still push values to it.
12. 
    A. student.name
    B. student["Grad Year"]
    C. student.greeting()
    D. student["Favorite Teacher"].name
    E. student.courseLoad[0]
Basic operators and Type conversion
13. Arithmetic
    A. '3'+ 2 = '32' since integer 2 map to its string representation '2', + concatenate '3' and '2' to '32'
    B. '3'-2 = 1 since string '3' map to its integer representation 3, and 3-2=1
    C. 3 + null = 3 since null convert to 0 and 3+0=3
    D. '3' + null = '3null' since null map to 'null' and + concatenate '3' and 'null'
    E. true + 3 = 4 since true maps to 1
    F. false + null = 0 since false and null both map to 0
    G '3' + undefined = '3undefined' since undefined was map to its string representation and + concatenate them
    H '3' - undefined = NaN since undefined could not be maped to any number
14. Comparison
    A. '2' > 1 = true since '2' map to integer 2
    B. '2' < '12' = false since '2' map to 2, '12' map to 12
    C . 2 == '2' = true since '2' map to 2
    D. 2 === '2' = false since === checks type comparison, and 2 and '2' has different type
    E. true == 2 = false since true map to 1
    F. true === Boolean(2) = true since they are of the same type
15 === checks the equality without type conversion, it check whether 2 operands are of the same type; == checks whether its two operands are equal: unlike the strict equality operator ===, it tries to convert and compare operands that are of different types.
17. this would return  [2, 4, 6]
    1.  explain:  doSomething takes in a integer num, return num*2. We input modifyArray with array [1,2,3] and function doSomething. Inside modifyArray, we first create a new empty array newArr, and then loop through the input array [1,2,3]. For each element in this array,  we apply doSomething to it and push the result to the newArr. Since doSomething simply multiple the element by 2, the function return [2,4,6] in the end.
19. Output:
    1
    4
    3
    2
