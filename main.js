const students = [ 
    {
        name: "Pedro",
        test_score: 6
    },
    {
        name: "Joao",
        test_score: 3
    },
    {
        name: "Maria",
        test_score: 9
    },
    {
        name: "Jose",
        test_score: 5
    },
    {
        name: "Ana",
        test_score: 7
    }
]

function averageTestScore(students){
    const StudentApproved = students.filter(student => student.test_score >= 6);
    return StudentApproved;
    }

const average = averageTestScore(students);
console.log(average);
