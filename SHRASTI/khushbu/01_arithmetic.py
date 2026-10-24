# arithmetic operators :- + , - , * , / , %

a = 3
b = 4
c = 5
a = a + b + c
b = a - b - c
c = a - b - c
a = a - b - c
print(a)
print(b)
print(c)


a = int(input("enter your first number :- "))

a += int(input("enter your second number :- "))

print(f"first and second number is :- {a} ")


c = int(input("enter your first number :- "))
c -= int(input("enter your second number :- "))

print(f"first and second number is :- {c}")


b = int(input("enter your first number :- "))
b *= int(input("enter your second number :- "))

print(f"first and second number is :- {b}")


x = int(input("enter your first number :- "))
x /= int(input("enter your second number :- "))

print(f"first and second number is :- {x}") 


  

# product_name = input("product name :- ")

# price = float(input("enter your product price :- "))

# quantity = int(input("enter your product quantity :- "))
# total_amount = "price * quantity"

# total = 2000
# discount = 200

# final_bill ="total - discount"

# print(product_name)
# print(price)
# print(quantity)
# print(total_amount)
# print(final_bill)
sarang_age = int(input("enter sarang age :- "))
khushbu_age = int(input("enter khushbu age :- "))

print(f"sarang age is short then khushbu age  :- {sarang_age<=khushbu_age}")