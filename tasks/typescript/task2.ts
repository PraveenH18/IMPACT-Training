class Product{

 ptId:number;
private productName:string="";
private unitPrice:number=0;
private qty:number=0;


//use while compiling -t es5

    
        public get name():string
        {
          return this.productName;
        }
    
        public set name(value:string)
        {
           this.productName=value;
        }

        public get price():number
        {
          return this.unitPrice;
        }
    
        public set price(value:number)
        {
           this.unitPrice=value;
        }

        public get pqty():number
        {
          return this.qty;
        }
    
        public set pqty(value:number)
        {
           this.qty=value;
        }

        constructor(value : number) {
          this.ptId = value;
          
      }

   }

   let p: Product = new Product(10);
       p.name="TATA"
       p.price=65000;
       p.pqty=12;


    console.log(`Product Details::Product Id :${p.ptId}, Product Name :${p.name}, Product Price :${p.price}, Product Quantity :${p.pqty}`)




