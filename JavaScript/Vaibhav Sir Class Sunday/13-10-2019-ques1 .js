// returnstudent name who have passed exam
var srtGrades = [
    {
        name : 'N1',
        marks : 59,
    }, {
        name : 'N2',
        marks : 21,
    }, { 
        name : 'N3',
        marks : 63,
    }, { 
        name : 'N4',
        marks : 30,
    }, { 
        name : 'N5',
        marks : 89,
    }, { 
        name : 'N6',
        marks : 80,
    }, { 
        name : 'N7',
        marks : 99,
    }, { 
        name : 'N8',
        marks : 90,
    }
]
var res = srtGrades.filter((x) => {
    if(x.marks > 40)
        return true;
})
res.forEach(element => {
    console.log(element.name);
});