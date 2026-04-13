export let logicBuildingData = [
    {
        "id": 1,
        "title": "Determine Whether a Person is Eligible to Vote",
        "difficulty": "Easy",
        "category": "if-else",
        "description": "Given a person's age, determine whether they are eligible to vote.",

        "input": "An integer age",
        "output": "Print 'Eligible' or 'Not Eligible'",
        "examples": [
            { "input": "20", "output": "Eligible" },
            { "input": "16", "output": "Not Eligible" }
        ],
        "constraints": ["0 <= age <= 120"],

        "solution": "if(age >= 18)\n{ \n    System.out.println(\"Eligible\"); \n} else { \n    System.out.println(\"Not Eligible\"); \n}",

        "unlockQuestion": {
            "question": "What is minimum voting age?",
            "options": ["16", "18", "21"],
            "answer": "18"
        }
    },
    {
        "id": 2,
        "title": "Check Whether a Number is Even or Odd",
        "difficulty": "Easy",
        "category": "if-else",
        "description": "Given an integer, determine whether it is even or odd.",

        "input": "An integer n",
        "output": "Print 'Even' or 'Odd'",
        "examples": [
            { "input": "4", "output": "Even" },
            { "input": "7", "output": "Odd" }
        ],
        "constraints": ["-10^9 <= n <= 10^9"],

        "solution": "if(num % 2 == 0)\n{ \n    System.out.println(\"Even\"); \n} else { \n    System.out.println(\"Odd\"); \n}",

        "unlockQuestion": {
            "question": "Which operator is used to check remainder?",
            "options": ["%", "/", "*"],
            "answer": "%"
        }
    },
    {
        "id": 3,
        "title": "Find the Largest Among Two Numbers",
        "difficulty": "Easy",
        "category": "if-else",
        "description": "Given two numbers, determine which one is greater.",

        "input": "Two integers a and b",
        "output": "Print the larger number",
        "examples": [
            { "input": "5 10", "output": "10" },
            { "input": "20 3", "output": "20" }
        ],
        "constraints": ["-10^9 <= a, b <= 10^9"],

        "solution": "if(a > b)\n{ \n    System.out.println(a); \n} else { \n    System.out.println(b); \n}",

        "unlockQuestion": {
            "question": "Which operator is used for comparison?",
            "options": [">", "=", "+"],
            "answer": ">"
        }
    },
    {
        "id": 4,
        "title": "Find the Largest Among Three Numbers",
        "difficulty": "Easy",
        "category": "if-else",
        "description": "Given three numbers, determine the largest among them.",

        "input": "Three integers a, b, c",
        "output": "Print the largest number",
        "examples": [
            { "input": "3 7 5", "output": "7" },
            { "input": "10 2 8", "output": "10" }
        ],
        "constraints": ["-10^9 <= a, b, c <= 10^9"],

        "solution": "if(a > b && a > c)\n{ \n   System.out.println(a); \n} else if(b > c){ \n   System.out.println(b); \n} else { \n   System.out.println(c); \n}",

        "unlockQuestion": {
            "question": "Which operator is used for AND condition?",
            "options": ["&&", "||", "!"],
            "answer": "&&"
        }
    },
    {
        "id": 5,
        "title": "Check Whether a Year is a Leap Year",
        "difficulty": "Medium",
        "category": "if-else",
        "description": "Determine whether a given year is a leap year.",

        "input": "An integer year",
        "output": "Print 'Leap Year' or 'Not Leap Year'",
        "examples": [
            { "input": "2024", "output": "Leap Year" },
            { "input": "1900", "output": "Not Leap Year" }
        ],
        "constraints": ["1000 <= year <= 9999"],

        "solution": "if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)\n{ \n    System.out.println(\"Leap Year\"); \n} else { \n    System.out.println(\"Not Leap Year\"); }",

        "unlockQuestion": {
            "question": "Leap year is divisible by?",
            "options": ["2", "4", "10"],
            "answer": "4"
        }
    },
    {
        "id": 6,
        "title": "Determine Student Grade Based on Marks",
        "difficulty": "Easy",
        "category": "if-else",
        "description": "Assign grade based on marks.",

        "input": "An integer marks",
        "output": "Print grade (A, B, C, Fail), Marks Above 90 shows Grade A, Marks between 75 and 90 shows Grade B, Marks between 75 and 89 shows Grade B, Marks between 50 and 74 shows Grade B and Marks Less than 50 shoulb be Fail",
        "examples": [
            { "input": "85", "output": "B" },
            { "input": "45", "output": "Fail" }
        ],
        "constraints": ["0 <= marks <= 100"],

        "solution": "if(marks >= 90)\n{ \n  System.out.println(\"A\"); \n} else if(marks >= 75){ \n  System.out.println(\"B\"); \n} else if(marks >= 50){ \n  System.out.println(\"C\"); \n} else { \n  System.out.println(\"Fail\"); \n}",

        "unlockQuestion": {
            "question": "Which keyword is used for multiple conditions?",
            "options": ["else if", "loop", "switch"],
            "answer": "else if"
        }
    },
    {
        "id": 7,
        "title": "Check Whether a Number is Positive, Negative, or Zero",
        "difficulty": "Easy",
        "category": "if-else",
        "description": "Determine whether a number is positive, negative, or zero.",

        "input": "An integer n",
        "output": "Print 'Positive', 'Negative', or 'Zero'",
        "examples": [
            { "input": "5", "output": "Positive" },
            { "input": "-3", "output": "Negative" }
        ],
        "constraints": ["-10^9 <= n <= 10^9"],

        "solution": "if(num > 0)\n{ \n  System.out.println(\"Positive\"); \n} else if(num < 0){ \n  System.out.println(\"Negative\"); \n} else { \n  System.out.println(\"Zero\"); \n}",

        "unlockQuestion": {
            "question": "Which value is neither positive nor negative?",
            "options": ["1", "-1", "0"],
            "answer": "0"
        }
    },
    {
        "id": 8,
        "title": "Calculate Discount Based on Purchase Amount",
        "difficulty": "Medium",
        "category": "if-else",
        "description": "Calculate discount based on purchase amount.",

        "input": "An integer amount",
        "output": "Print discount percentage",
        "examples": [
            { "input": "6000", "output": "20%" },
            { "input": "1500", "output": "0%" }
        ],
        "constraints": ["0 <= amount <= 10^7"],

        "solution": "if(amount > 5000)\n{ \n  System.out.println(\"20%\"); \n} else if(amount >= 2000){ \n  System.out.println(\"10%\"); \n} else { \n  System.out.println(\"0%\"); \n}",

        "unlockQuestion": {
            "question": "Which condition checks range?",
            "options": ["&&", "||", "="],
            "answer": "&&"
        }
    },
    {
        "id": 9,
        "title": "Print Numbers from 1 to N",
        "difficulty": "Easy",
        "category": "loops",
        "description": "Given a number N, print numbers from 1 to N.",

        "input": "An integer N",
        "output": "Print numbers from 1 to N",
        "examples": [
            { "input": "5", "output": "1 2 3 4 5" }
        ],
        "constraints": ["1 <= N <= 10^5"],

        "solution": `for(int i = 1; i <= N; i++) {
    System.out.print(i + " ");
}`,

        "unlockQuestion": {
            "question": "Which loop is best when number of iterations is known?",
            "options": ["for", "while", "do-while"],
            "answer": "for"
        }
    },
    {
        "id": 10,
        "title": "Calculate Sum of First N Natural Numbers",
        "difficulty": "Easy",
        "category": "loops",
        "description": "Given a number N, calculate the sum of first N natural numbers.",

        "input": "An integer N",
        "output": "Print sum",
        "examples": [
            { "input": "5", "output": "15" }
        ],
        "constraints": ["1 <= N <= 10^6"],

        "solution": `int sum = 0;
for(int i = 1; i <= N; i++) {
    sum += i;
}
System.out.println(sum);`,

        "unlockQuestion": {
            "question": "What does += do?",
            "options": ["Add and assign", "Multiply", "Compare"],
            "answer": "Add and assign"
        }
    },
    {
        "id": 11,
        "title": "Generate Multiplication Table",
        "difficulty": "Easy",
        "category": "loops",
        "description": "Given a number N, print its multiplication table up to 10.",

        "input": "An integer N",
        "output": "Multiplication table",
        "examples": [
            { "input": "2", "output": "2 4 6 8 10 12 14 16 18 20" }
        ],
        "constraints": ["1 <= N <= 100"],

        "solution": `for(int i = 1; i <= 10; i++) {
    System.out.println(N + " * " + i + " = " + (N * i));
}`,

        "unlockQuestion": {
            "question": "Loop runs how many times here?",
            "options": ["5", "10", "Infinite"],
            "answer": "10"
        }
    },
    {
        "id": 12,
        "title": "Find Factorial of a Number",
        "difficulty": "Easy",
        "category": "loops",
        "description": "Given a number N, find its factorial.",

        "input": "An integer N",
        "output": "Print factorial",
        "examples": [
            { "input": "5", "output": "120" }
        ],
        "constraints": ["1 <= N <= 20"],

        "solution": `int fact = 1;
for(int i = 1; i <= N; i++) {
    fact *= i;
}
System.out.println(fact);`,

        "unlockQuestion": {
            "question": "Factorial of 0 is?",
            "options": ["0", "1", "Undefined"],
            "answer": "1"
        }
    },
    {
        "id": 13,
        "title": "Count Digits in a Number",
        "difficulty": "Easy",
        "category": "loops",
        "description": "Given a number, count how many digits it contains.",

        "input": "An integer N",
        "output": "Print number of digits",
        "examples": [
            { "input": "12345", "output": "5" }
        ],
        "constraints": ["1 <= N <= 10^9"],

        "solution": `int count = 0;
while(N > 0) {
    N = N / 10;
    count++;
}
System.out.println(count);`,

        "unlockQuestion": {
            "question": "Which operator removes last digit?",
            "options": ["/", "%", "*"],
            "answer": "/"
        }
    },
    {
        "id": 14,
        "title": "Reverse a Number",
        "difficulty": "Medium",
        "category": "loops",
        "description": "Given a number, reverse it.",

        "input": "An integer N",
        "output": "Print reversed number",
        "examples": [
            { "input": "123", "output": "321" }
        ],
        "constraints": ["1 <= N <= 10^9"],

        "solution": `int rev = 0;
while(N > 0) {
    int digit = N % 10;
    rev = rev * 10 + digit;
    N = N / 10;
}
System.out.println(rev);`,

        "unlockQuestion": {
            "question": "Which operator gives last digit?",
            "options": ["%", "/", "*"],
            "answer": "%"
        }
    },
    {
        "id": 15,
        "title": "Check Whether a Number is Prime",
        "difficulty": "Medium",
        "category": "loops",
        "description": "Determine whether a number is prime or not.",

        "input": "An integer N",
        "output": "Print 'Prime' or 'Not Prime'",
        "examples": [
            { "input": "7", "output": "Prime" },
            { "input": "8", "output": "Not Prime" }
        ],
        "constraints": ["1 <= N <= 10^6"],

        "solution": `boolean isPrime = true;
for(int i = 2; i < N; i++) {
    if(N % i == 0) {
        isPrime = false;
        break;
    }
}
if(isPrime && N > 1) {
    System.out.println("Prime");
} else {
    System.out.println("Not Prime");
}`,

        "unlockQuestion": {
            "question": "Prime numbers are divisible by?",
            "options": ["1 and itself", "All numbers", "Even numbers"],
            "answer": "1 and itself"
        }
    },
    {
        "id": 16,
        "title": "Right-Angled Triangle Star Pattern",
        "difficulty": "Easy",
        "category": "pattern",
        "description": "Print a right-angled triangle pattern using '*' where each row contains stars equal to the row number.",

        "input": "An integer n",
        "output": "Print star pattern",
        "examples": [
            {
                "input": "5",
                "output": `*
* *
* * *
* * * *
* * * * *` }
        ],
        "constraints": ["1 <= n <= 50"],

        "solution": `   static void printPattern(int n){
        for(int i=1;i<=n;i++){
            for(int j=1;j<=i;j++){
                System.out.print("*"+" ");
            }
            System.out.println();
        }
    }`,

        "unlockQuestion": {
            "question": "What does inner loop control?",
            "options": ["Rows", "Columns", "Conditions"],
            "answer": "Columns"
        }
    },
    {
        "id": 17,
        "title": "Incremental Number Triangle Pattern",
        "difficulty": "Easy",
        "category": "pattern",
        "description": "Print a triangle pattern where each row contains numbers starting from 1 up to the current row number.",

        "input": "An integer num",
        "output": "Print number pattern",
        "examples": [
            {
                "input": "5",
                "output": `1
1 2
1 2 3
1 2 3 4
1 2 3 4 5`
            }
        ],
        "constraints": ["1 <= num <= 50"],

        "solution": `static void printPattern(int num){
    for(int i = 1; i <= num; i++){
        for(int j = 1; j <= i; j++){
            System.out.print(j + " ");
        }
        System.out.println();
    }
}`,

        "unlockQuestion": {
            "question": "What does outer loop control?",
            "options": ["Rows", "Columns", "Values"],
            "answer": "Rows"
        }
    },
    {
        "id": 18,
        "title": "Row-Wise Constant Number Triangle Pattern",
        "difficulty": "Easy",
        "category": "pattern",
        "description": "Print a triangle pattern where each row contains the same number equal to the row index.",

        "input": "An integer num",
        "output": "Print number pattern",
        "examples": [
            {
                "input": "5",
                "output": `1
2 2
3 3 3
4 4 4 4
5 5 5 5 5`
            }
        ],
        "constraints": ["1 <= num <= 50"],

        "solution": `static void printPattern(int num){
    for(int i = 1; i <= num; i++){
        for(int j = 1; j <= i; j++){
            System.out.print(i + " ");
        }
        System.out.println();
    }
}`,

        "unlockQuestion": {
            "question": "What value is printed in each row?",
            "options": ["Column number", "Row number", "Random number"],
            "answer": "Row number"
        }
    },
    {
        "id": 19,
        "title": "Inverted Right-Angled Triangle Star Pattern",
        "difficulty": "Easy",
        "category": "pattern",
        "description": "Print an inverted right-angled triangle pattern using '*' where the number of stars decreases in each row.",

        "input": "An integer num",
        "output": "Print star pattern",
        "examples": [
            {
                "input": "5",
                "output": `* * * * *
* * * *
* * *
* *
*`
            }
        ],
        "constraints": ["1 <= num <= 50"],

        "solution": `static void printPattern(int num){
    for (int i = num; i > 0; i--) {
        for(int j = 1; j <= i; j++){
            System.out.print("* ");
        }
        System.out.println();
    }
}`,

        "unlockQuestion": {
            "question": "What happens to number of stars in each row?",
            "options": ["Increases", "Decreases", "Remains same"],
            "answer": "Decreases"
        }
    },
    {
        "id": 20,
        "title": "Inverted Incremental Number Triangle Pattern",
        "difficulty": "Easy",
        "category": "pattern",
        "description": "Print an inverted triangle pattern where each row contains numbers starting from 1 up to the decreasing row length.",

        "input": "An integer num",
        "output": "Print number pattern",
        "examples": [
            {
                "input": "5",
                "output": `1 2 3 4 5
1 2 3 4
1 2 3
1 2
1`
            }
        ],
        "constraints": ["1 <= num <= 50"],

        "solution": `static void printPattern(int num) {
    for (int i = num; i > 0; i--) {
        for (int j = 1; j <= i; j++) {
            System.out.print(j + " ");
        }
        System.out.println();
    }
}`,

        "unlockQuestion": {
            "question": "What happens to numbers in each row?",
            "options": ["Increase", "Decrease", "Remain same"],
            "answer": "Decrease"
        }
    },
    {
        "id": 21,
        "title": "Centered Pyramid Star Pattern",
        "difficulty": "Medium",
        "category": "pattern",
        "description": "Print a centered pyramid pattern using '*' where stars increase in odd numbers and are aligned with leading spaces.",

        "input": "An integer x",
        "output": "Print pyramid pattern",
        "examples": [
            {
                "input": "5",
                "output": `    *
   ***
  *****
 *******
*********`
            }
        ],
        "constraints": ["1 <= x <= 50"],

        "solution": `static void printPattern(int x){
    for(int i = 1; i <= x; i++){
        for(int j = 1; j <= x - i; j++){
            System.out.print(" ");
        }
        for(int k = 1; k <= 2 * i - 1; k++){
            System.out.print("*");
        }
        System.out.println();
    }
}`,

        "unlockQuestion": {
            "question": "Why do we use (2*i - 1) in pyramid?",
            "options": ["To print odd numbers of stars", "To print even numbers of stars", "To reduce spaces"],
            "answer": "To print odd numbers of stars"
        }
    },
    {
        "id": 22,
        "title": "Inverted Centered Pyramid Star Pattern",
        "difficulty": "Medium",
        "category": "pattern",
        "description": "Print an inverted centered pyramid pattern using '*' where stars decrease in odd numbers and are aligned with leading spaces.",

        "input": "An integer x",
        "output": "Print inverted pyramid pattern",
        "examples": [
            {
                "input": "5",
                "output": `*********
 *******
  *****
   ***
    *`
            }
        ],
        "constraints": ["1 <= x <= 50"],

        "solution": `static void printPattern(int x){
    for(int i = x; i > 0; i--){
        for(int j = 1; j <= x - i; j++){
            System.out.print(" ");
        }
        for(int k = 1; k <= 2 * i - 1; k++){
            System.out.print("*");
        }
        System.out.println();
    }
}`,

        "unlockQuestion": {
            "question": "What happens to stars in each row?",
            "options": ["Increases", "Decreases", "Remain same"],
            "answer": "Decreases"
        }
    },
    {
        "id": 23,
        "title": "Diamond Star Pattern",
        "difficulty": "Medium",
        "category": "pattern",
        "description": "Print a diamond pattern using '*' by combining a centered pyramid and an inverted pyramid.",

        "input": "An integer x",
        "output": "Print diamond pattern",
        "examples": [
            {
                "input": "5",
                "output": `    *
   ***
  *****
 *******
*********
*********
 *******
  *****
   ***
    *`
            }
        ],
        "constraints": ["1 <= x <= 50"],

        "solution": `static void printPattern(int x){
    for(int i = 1; i <= x; i++){
        for(int j = 1; j <= x - i; j++){
            System.out.print(" ");
        }
        for(int k = 1; k <= 2 * i - 1; k++){
            System.out.print("*");
        }
        System.out.println();
    }
    for(int i = x; i > 0; i--){
        for(int j = 1; j <= x - i; j++){
            System.out.print(" ");
        }
        for(int k = 1; k <= 2 * i - 1; k++){
            System.out.print("*");
        }
        System.out.println();
    }
}`,

        "unlockQuestion": {
            "question": "Diamond pattern is combination of?",
            "options": ["Two triangles", "Pyramid and Inverted Pyramid", "Square and Triangle"],
            "answer": "Pyramid and Inverted Pyramid"
        }
    }
]