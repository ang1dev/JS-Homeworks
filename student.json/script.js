const url = "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json";

function getAllStudents() {
    fetch(url)
        .then(students => {
            students.json()
                .then(parsedStudents => {
                    let students = parsedStudents;

                    // let averageGrade3 = students
                    //     .filter(
                    //         (s) => s.averageGrade > 4
                    //     );
                    // console.log(averageGrade3);

                    // let allFemalesWithAvg5 = students
                    //     .filter((s) => s.gender === 'Female' && s.averageGrade === 5);
                    // console.log(allFemalesWithAvg5);

                    // let malesStudentsInSkopje18Years = students
                    //     .filter((s) => s.gender === 'Male' && s.age > 18 && s.city === 'Skopje');
                    // console.log(malesStudentsInSkopje18Years);
                    
                    let allFemalesOver24 = students
                    .filter((s)=> s.gender === 'Female' && s.age > 24)

                    
                    let avgOfAllGrades = allFemalesOver24
                        .map((s)=> s.averageGrade)
                        .reduce((avg, averageGrade ) => (avg += averageGrade), 0) / allFemalesOver24.length ;
                    console.log('avg grade is: ',avgOfAllGrades);

                
                    // let studentsWithB = students
                    //     .filter((s) => s.firstName.startsWith('B') && s.averageGrade > 2);
                    // console.log(studentsWithB);
                })
                .catch(e => {
                    console.error(e);
                })
        })
}

getAllStudents();



