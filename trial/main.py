
# recursive function (factorial of numbers)
def factorial(num):
    if num == 1:
        return num
    else:
         return num * factorial(num - 1)
 
print(factorial(3))


# fibonacci sequence
def fibonacci(num):
    if num <= 1:
        return num
    else:
        return fibonacci(num -1) + fibonacci(num -2)
    
print(fibonacci(6))