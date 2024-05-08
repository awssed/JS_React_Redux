type Person={
    id:number,
    name:string,
    group:number
}
const array: Person[] = [
    {id: 1, name: 'Vasya', group: 10},
    {id: 2, name: 'Ivan', group: 11},
    {id: 3, name: 'Masha', group: 12},
    {id: 4, name: 'Petya', group: 10},
    {id: 5, name: 'Kira', group: 11}
]
type CarType={
    manufactor?:string,
    model?:string
}
let car1:CarType={}
car1.manufactor='manufactor';
car1.model='model';

let car2:CarType={}
car2.manufactor='manufactor';
car2.model='model';

type ArrayCarType={
    cars:CarType[]
}

const arrayCars:Array<ArrayCarType>=[{cars:[car1,car2]}]


type MarkFilterType=1|2|3|4|5|6|7|8|9|10;
type DoneType=boolean;
type GroupFilterType=1|2|3|4|5|6|7|8|9|10|11|12;


type MarkType = {
    subject: string,
    mark: MarkFilterType, // может принимать значения от 1 до 10
    done: DoneType,
}
type StudentType = {
    id: number,
    name: string,
    group: GroupFilterType, // может принимать значения от 1 до 12
    marks: Array<MarkType>,
}

type GroupType = {
    students:StudentType[] // массив студентов типа StudentType
    studentsFilter: (group: number) => Array<StudentType>, // фильтр по группе
    marksFilter: (mark: number) => Array<StudentType>, // фильтр по  оценке
    deleteStudent: (id: number) => void, // удалить студента по id из  исходного массива
    //mark: MarkFilterType,
    //group: GroupFilterType,
}

const group:GroupType={
    students:[{id:1,name:'Vasya',group:1,marks:[
            {
                subject: "math",
                mark: 5,
                done: true
            },
            {
                subject: "OOP",
                mark: 10,
                done: true
            }]
        },
        {id:2,name:'Oleg',group:2, marks:[
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
            ]}],
    studentsFilter:function (group:number):Array<StudentType>{
        let filtered:Array<StudentType>=[];
        for(let student of this.students)
        {
            if(student.group==group)
                filtered.push(student);
        }
        return filtered;
    },
    marksFilter:function (mark:number):Array<StudentType>{
        let filtered:Array<StudentType>=[];
        for(let student of this.students)
        {
            for(let mark1 of student.marks)
            {
                if(mark1.mark==mark)
                {
                    filtered.push(student);
                }
            }
        }
        return filtered;
    },
    deleteStudent:function (id:number):void{
        this.students=this.students.filter((student)=>student.id!=id)
    }

}

console.log(group.marksFilter(10));
