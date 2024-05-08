class Shoe{

    private _itemNumber:number;
    private _size:number;
    private _color:string;
    private _price:number;
    private _discount:number
    public get itemNumber():number{
        return this._itemNumber;
    }
    get color(): string {
        return this._color;
    }
    get price(): number {
        return this._price*(1-this._discount);
    }
    get size(): number {
        return this._size;
    }
    get discount(): number {
        return this._discount;
    }
    constructor (itemNumber:number,size:number,color:string,price:number,discount:number)
    {
        this._itemNumber=itemNumber;
        this._size=size;
        this._color=color;
        this._price=price;
        this._discount=discount;
    }
}
class Shoes{
    public boots:Shoe[];
    public sneakers:Shoe[];
    public sandals:Shoe[];
    [key:string]:Shoe[];
    constructor(boots:Shoe[],sneakers:Shoe[],sandals:Shoe[]) {
        this.boots=boots;
        this.sneakers=sneakers;
        this.sandals=sandals;
    }
    [Symbol.iterator]=function* (this:Shoes){
        let categories:string[]=Object.keys(this);
        for(let category of categories)
        {
            yield this[category];
        }
    }
}
 class Products
 {
     private shoes:Shoes;
     constructor(shoes:Shoes) {
         this.shoes=shoes;
     }
     filterShoes(minPrice:number, maxPrice:number, size:number, color:string):Shoe[]
     {
         let filteredShoes:Shoe[]=[];
         for(let category of this.shoes)
         {
            for(let product of category)
            {
                if(product.price>=minPrice &&
                    product.price<=maxPrice&&
                    product.size==size&&
                    product.color==color)
                {
                    filteredShoes.push(product);
                }
            }
         }
         return filteredShoes;
     }
 }
const shoe1 = new Shoe(1, 9, "black", 50,0.2);
const shoe2 = new Shoe(2, 8, "white", 70,0.15);
const shoe3 = new Shoe(3, 10, "blue", 60,0.50);
const shoe4 = new Shoe(4, 9, "red", 80,0.05);

const boots = [shoe1, shoe2];
const sneakers = [shoe3];
const sandals = [shoe4];

const shoes = new Shoes(boots, sneakers, sandals);
const products = new Products(shoes);

const filtered = products.filterShoes(30, 80, 9, "black");
console.log(filtered)