export class Product {
    public imagePath:string;
    public name: string;
    public category: string;
    public price: number;
    public amount:number;
  
    constructor(imagePath:string,name:string,category:string,price: number,amount:number,){
        this.imagePath=imagePath;
        this.name=name;
        this.category=category;
        this.price=price;
        this.amount=amount;
        
    }
    }