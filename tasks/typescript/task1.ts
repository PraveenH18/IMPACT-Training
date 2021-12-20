class Product
{
    public empno:number = 0;
    public ename:string  = "";
    public ecity:string  = "";

  

    constructor(empno:number = 0, ename:string = "", ecity:string = "")
      {
        this.empno = empno;
        this.ename = ename;
        this.ecity = ecity; 
        }

        public showDetails():void
        {
            console.log(`Customer Details :: Id : ${this.empno}, Name : ${this.ename}, City : ${this.ecity} `);
      
        }    

  
}
    let c1:Product = new Product();
    let c2:Product = new Product(10256);
    let c3:Product = new Product(10256, "Scott");
    let c4:Product = new Product(10256, "Scott", "Bangalore");
      /* c1.showDetails();
       c2.showDetails();
       c3.showDetails();*/
       c4.showDetails();

