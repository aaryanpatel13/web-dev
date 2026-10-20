// Class kasie banate hai
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



//                          extends & super

// extends--> ye inheritance krata hai...class child extends Parent 
// iska mtlb parent class ki sb chize child pe hogi...aur child pe apni alg chize bhi ho skti hai

// super --> iski helpse child class m hum parent class k constructor ko call krte hai

class Users{
    constructor(name,address,username,email){
        this.name = name;
        this.address = address;
        this.username = username;
        this.email = email;
        this.role = "user";
    }

    checkRole(){
        return `You are ${this.role}`;
    }

    write(text){
        let h1 = document.createElement("h1");
        h1.textContent = `${this.name}: ${text}`;
        document.body.append(h1);
    }

    
}
// extends kr se Admin class Users class se chize le rhi hai
class Admin extends Users{
    constructor(name,address,username,email){
        super(name,address,username,email);     // super yhn pe user class k contructor ko call krega
        this.role = "admin";
    }

    remove(){
        document.querySelectorAll("h1").forEach(function(elem){
            elem.remove();
        });
    }
}


let u1 = new Users("Atul","Rewa","Atul70","atul@atul.com");
let u2 = new Users("Aryan","gwalior","Aryan70","aryan@atul.com");

let a1 = new Admin("admin","bhopal","Admin123","admin@ad.min");




//                          classical inheritance  & prototypal inheritance

// classical inheritance --> abhi jo extends kiya..vo classical inheritance hai.
// Classical inheritance mtlb child class parent class se chize inherit krti hai


// prototypal inheritance -->Jab ek object, kisi doosre object se properties aur methods access kar pata hai, toh ise prototypal inheritance kehte hain.

// object 1
let user = {
    name: "Aryan",
    greet: function () {
        console.log("Hello!");
    }
};

// object 2
let student = Object.create(user);
student.course = "Btech"
student.greet(); // user object ka function student object use kar pa rha