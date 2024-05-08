
export function checkCell(numSquare:number,numCell:number,board:string[][]):boolean
{
    if(board[numSquare][numCell]=="")
    {
        return true;
    }
    //проверка по квадрату
    for(let i=0;i<9;i++)
    {
        if(i!==numCell && board[numSquare][i]===board[numSquare][numCell])
        {
            return false;
        }
    }
    //провекра по строке всей сетки
    let squareStart =numSquare - numSquare % 3;
    let cellStart = numCell - numCell % 3;
    for(let i=squareStart;i<squareStart+3;i++)
    {
        for(let j=cellStart;j<cellStart+3;j++)
        {
            if(i==numSquare &&j==numCell)
                continue;
            if(board[i][j]===board[numSquare][numCell])
            {
                return false;
            }
        }
    }
    squareStart=numSquare%3;
    cellStart=numCell%3;
    for (let i = squareStart; i <= squareStart + 6; i = i + 3)
    {
        for (let j = cellStart; j <= cellStart + 6; j = j + 3)
        {
            if(i==numSquare &&j==numCell)
                continue;
            if(board[i][j]===board[numSquare][numCell])
            {
                return false;
            }
        }
    }
    return true;
}
export function generateCells():string[][]
{
    let values=generateArray();
    for(let i=0;i<9;i++)
    {
        for(let j=0;j<9;j++)
        {
            if(!checkCell(i,j,values))
            {
                values[i][j]="";
            }
        }
    }
    for(let i=0;i<9;i++)
    {
        if(Math.random()<0.5)
        {
            values[8][i]="";
        }
    }
    return values;
}
function generateArray(): string[][] {
    const array: string[][] = [];

    for (let i = 0; i < 9; i++) {
        const subArray: string[] = [];

        for (let j = 1; j <= 9; j++) {
            subArray.push(j.toString());
        }

        array.push(shuffleArray(subArray));
    }

    return array;
}
function shuffleArray<T>(array: T[]): T[] {
    // Создаем копию массива, чтобы не изменять исходный массив
    const shuffledArray = [...array];

    // Функция сравнения для метода sort()
    function compareRandom() {
        return Math.random() - 0.5;
    }

    // Перемешиваем массив
    shuffledArray.sort(compareRandom);

    return shuffledArray;
}
