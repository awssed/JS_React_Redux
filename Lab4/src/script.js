"use strict";
var _a;
class Shoe {
    get itemNumber() {
        return this._itemNumber;
    }
    get color() {
        return this._color;
    }
    get price() {
        return this._price * (1 - this._discount);
    }
    get size() {
        return this._size;
    }
    get discount() {
        return this._discount;
    }
    constructor(itemNumber, size, color, price, discount) {
        this._itemNumber = itemNumber;
        this._size = size;
        this._color = color;
        this._price = price;
        this._discount = discount;
    }
}
class Shoes {
    constructor(boots, sneakers, sandals) {
        this[_a] = function* () {
            let categories = Object.keys(this);
            for (let category of categories) {
                yield this[category];
            }
        };
        this.boots = boots;
        this.sneakers = sneakers;
        this.sandals = sandals;
    }
}
_a = Symbol.iterator;
class Products {
    constructor(shoes) {
        this.shoes = shoes;
    }
    filterShoes(minPrice, maxPrice, size, color) {
        let filteredShoes = [];
        for (let category of this.shoes) {
            for (let product of category) {
                if (product.price >= minPrice &&
                    product.price <= maxPrice &&
                    product.size == size &&
                    product.color == color) {
                    filteredShoes.push(product);
                }
            }
        }
        return filteredShoes;
    }
}
const shoe1 = new Shoe(1, 9, "black", 50, 0.2);
const shoe2 = new Shoe(2, 8, "white", 70, 0.15);
const shoe3 = new Shoe(3, 10, "blue", 60, 0.50);
const shoe4 = new Shoe(4, 9, "red", 80, 0.05);
const boots = [shoe1, shoe2];
const sneakers = [shoe3];
const sandals = [shoe4];
const shoes = new Shoes(boots, sneakers, sandals);
const products = new Products(shoes);
const filtered = products.filterShoes(30, 80, 9, "black");
console.log(filtered);
