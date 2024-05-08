var array = [
    { id: 1, name: 'Vasya', group: 10 },
    { id: 2, name: 'Ivan', group: 11 },
    { id: 3, name: 'Masha', group: 12 },
    { id: 4, name: 'Petya', group: 10 },
    { id: 5, name: 'Kira', group: 11 }
];
var car1 = {};
car1.manufactor = 'manufactor';
car1.model = 'model';
var car2 = {};
car2.manufactor = 'manufactor';
car2.model = 'model';
var arrayCars = [{ cars: [car1, car2] }];
var group = {
    students: [{ id: 1, name: 'Vasya', group: 1, marks: [
                {
                    subject: "math",
                    mark: 5,
                    done: true
                },
                {
                    subject: "OOP",
                    mark: 10,
                    done: true
                }
            ]
        },
        { id: 2, name: 'Oleg', group: 2, marks: [
                {
                    subject: "Design",
                    mark: 8,
                    done: true
                },
                {
                    subject: "math",
                    mark: 7,
                    done: true
                },
                {
                    subject: "OOP",
                    mark: 9,
                    done: true
                }
            ] }],
    studentsFilter: function (group) {
        var filtered = [];
        for (var _i = 0, _a = this.students; _i < _a.length; _i++) {
            var student = _a[_i];
            if (student.group == group)
                filtered.push(student);
        }
        return filtered;
    },
    marksFilter: function (mark) {
        var filtered = [];
        for (var _i = 0, _a = this.students; _i < _a.length; _i++) {
            var student = _a[_i];
            for (var _b = 0, _c = student.marks; _b < _c.length; _b++) {
                var mark1 = _c[_b];
                if (mark1.mark == mark) {
                    filtered.push(student);
                }
            }
        }
        return filtered;
    },
    deleteStudent: function (id) {
        this.students = this.students.filter(function (student) { return student.id != id; });
    }
};
console.log(group.marksFilter(10));
