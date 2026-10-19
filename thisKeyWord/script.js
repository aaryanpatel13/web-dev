// form select krna queryselector se
let form = document.querySelector("form");

// Variables and document.querySelector
let name_ =  document.querySelector("#name");
let role =  document.querySelector("#role");
let bio =  document.querySelector("#bio");
// Ek userManager naam ka ek object bnana hai
const userManger = {
    users : [],
    init : function(){
        form.addEventListener("submit",this.submitForm.bind(this));
    },
    submitForm : function(evt){
        evt.preventDefault();
        console.log("form submitted !!")
        this.addUser();
        console.log(this.users)
    },
    addUser : function(){
        console.log("addUser called !!")
        this.users.push({
            name_ : name_.value,
            role : role.value,
            bio : bio.value,
            photo : photo.value,
        });
        form.reset();
        this.renderUI();
        
    },
    removeUser : function(){},

    renderUI : function(){
        document.querySelector(".cards-container").innerHTML = "";
        this.users.forEach(function(user){
            // Main card
            let card = document.createElement("div");
            card.className = "user-card";

            // Image
            let img = document.createElement("img");
            img.src = user.photo;
            img.alt = "user photo";
            card.appendChild(img);

            // Name
            let name = document.createElement("h2");
            name.textContent = user.name_;
            card.appendChild(name);

            // Role
            let role = document.createElement("h3");
            role.textContent = user.role;
            card.appendChild(role);

            // Bio
            let bio = document.createElement("p");
            bio.textContent = user.bio;
            card.appendChild(bio);

            // Add card to container
            document.querySelector(".cards-container").appendChild(card);
        });
    }

}

userManger.init();
// usme ke user array
// 3 method honge: init addUser  removeUser
// submit form ek method hai  

// init function turant chal jaega


// card formation
