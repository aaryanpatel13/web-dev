// Class kaise banate hai
class CreatePencil{
    // class bante hi constructor call hoga ---> it is used to assign the default value to every instance of the particular class

    constructor(name,company,price,color){
        this.name = name;
        this.company = company;
        this.price = price;
        this.color = color;
    };
    // class k andar bana function method() kehlata hai
    write(text){
        let h1 = document.createElement("h1");
        h1.textContent = text;
        h1.style.color = this.color;
        document.body.append(h1);
    };
};

// jb bhi new ka use kr k class ko call krte hia nyii class banti hai aur construcotr sbse phle chlate hai
let p1 = new CreatePencil("nataraj","nataraj",10,"black"); 
let p2 = new CreatePencil("Doms","doms",10,"pink");

// p1 & p2 CreatePencil class k instance hai
console.log(p1)
