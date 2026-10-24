student_name = input("enter your name :- ")
subject_marks1 = int(input("enter the first subject name :- "))
subject_marks2 =int(input("enter the second subject name :- "))
subject_marks3 = int(input("enter the third subject name :- "))
print(subject_marks1)
print(subject_marks2)
print(subject_marks3)
total_marks = subject_marks1 + subject_marks2 + subject_marks3
percentage = total_marks / 100 * 300
print(f"first subject marks is :- {subject_marks1<33}") 
print(f"second subject marks is :- {subject_marks2<75}")
print(f"third subject marks is :- {subject_marks3==40}")

print(f"student name is {student_name} and first subject marks{subject_marks1},secend subject marks{subject_marks2} and third subject marks is{subject_marks3}")
