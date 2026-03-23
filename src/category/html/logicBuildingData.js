export let logicBuildingData = [
    {
        "id": 1,
        "title": "Determine Whether a Person is Eligible to Vote",
        "difficulty": "Easy",
        "category": "If-Else",
        "description": "Given a person's age, determine whether they are eligible to vote.",

        "input": "An integer age",
        "output": "Print 'Eligible' or 'Not Eligible'",
        "examples": [
            { "input": "20", "output": "Eligible" },
            { "input": "16", "output": "Not Eligible" }
        ],
        "constraints": ["0 <= age <= 120"],

        "solution": "if(age >= 18){ System.out.println(\"Eligible\"); } else { System.out.println(\"Not Eligible\"); }",

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
        "category": "If-Else",
        "description": "Given an integer, determine whether it is even or odd.",

        "input": "An integer n",
        "output": "Print 'Even' or 'Odd'",
        "examples": [
            { "input": "4", "output": "Even" },
            { "input": "7", "output": "Odd" }
        ],
        "constraints": ["-10^9 <= n <= 10^9"],

        "solution": "if(num % 2 == 0){ System.out.println(\"Even\"); } else { System.out.println(\"Odd\"); }",

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
        "category": "If-Else",
        "description": "Given two numbers, determine which one is greater.",

        "input": "Two integers a and b",
        "output": "Print the larger number",
        "examples": [
            { "input": "5 10", "output": "10" },
            { "input": "20 3", "output": "20" }
        ],
        "constraints": ["-10^9 <= a, b <= 10^9"],

        "solution": "if(a > b){ System.out.println(a); } else { System.out.println(b); }",

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
        "category": "If-Else",
        "description": "Given three numbers, determine the largest among them.",

        "input": "Three integers a, b, c",
        "output": "Print the largest number",
        "examples": [
            { "input": "3 7 5", "output": "7" },
            { "input": "10 2 8", "output": "10" }
        ],
        "constraints": ["-10^9 <= a, b, c <= 10^9"],

        "solution": "if(a > b && a > c){ System.out.println(a); } else if(b > c){ System.out.println(b); } else { System.out.println(c); }",

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
        "category": "If-Else",
        "description": "Determine whether a given year is a leap year.",

        "input": "An integer year",
        "output": "Print 'Leap Year' or 'Not Leap Year'",
        "examples": [
            { "input": "2024", "output": "Leap Year" },
            { "input": "1900", "output": "Not Leap Year" }
        ],
        "constraints": ["1000 <= year <= 9999"],

        "solution": "if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){ System.out.println(\"Leap Year\"); } else { System.out.println(\"Not Leap Year\"); }",

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
        "category": "If-Else",
        "description": "Assign grade based on marks.",

        "input": "An integer marks",
        "output": "Print grade (A, B, C, Fail)",
        "examples": [
            { "input": "85", "output": "B" },
            { "input": "45", "output": "Fail" }
        ],
        "constraints": ["0 <= marks <= 100"],

        "solution": "if(marks >= 90){ System.out.println(\"A\"); } else if(marks >= 75){ System.out.println(\"B\"); } else if(marks >= 50){ System.out.println(\"C\"); } else { System.out.println(\"Fail\"); }",

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
        "category": "If-Else",
        "description": "Determine whether a number is positive, negative, or zero.",

        "input": "An integer n",
        "output": "Print 'Positive', 'Negative', or 'Zero'",
        "examples": [
            { "input": "5", "output": "Positive" },
            { "input": "-3", "output": "Negative" }
        ],
        "constraints": ["-10^9 <= n <= 10^9"],

        "solution": "if(num > 0){ System.out.println(\"Positive\"); } else if(num < 0){ System.out.println(\"Negative\"); } else { System.out.println(\"Zero\"); }",

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
        "category": "If-Else",
        "description": "Calculate discount based on purchase amount.",

        "input": "An integer amount",
        "output": "Print discount percentage",
        "examples": [
            { "input": "6000", "output": "20%" },
            { "input": "1500", "output": "0%" }
        ],
        "constraints": ["0 <= amount <= 10^7"],

        "solution": "if(amount > 5000){ System.out.println(\"20%\"); } else if(amount >= 2000){ System.out.println(\"10%\"); } else { System.out.println(\"0%\"); }",

        "unlockQuestion": {
            "question": "Which condition checks range?",
            "options": ["&&", "||", "="],
            "answer": "&&"
        }
    }
]