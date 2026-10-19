// form select krna queryselector se
let form = document.querySelector("form");

// Variables and document.querySelector
let name_ =  document.querySelector("#name");
let role =  document.querySelector("#role");
let bio =  document.querySelector("#bio");
let photo = document.querySelector("#photo")
let remove = document.querySelector(".remove-btn");
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
            id : Date.now(),
            name_ : name_.value,
            role : role.value,
            bio : bio.value,
            photo : photo.value,
        });
        form.reset();
        this.renderUI();
        
    },

    removeUser : function(id){
        let indx = this.users.findIndex(function(user){
            return user.id === id;
        });

        if(indx !== -11){
            this.users.splice(indx,1);
        };

        this.renderUI();
    },

    renderUI : function(){
        document.querySelector(".cards-container").innerHTML = "";
        this.users.forEach(function(user){
            // Main card
            let card = document.createElement("div");
            card.className = "user-card";

            // Image
            let photo = document.createElement("img");
            photo.src = user.photo;
            photo.alt = "user photo";
            card.appendChild(photo);

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

            // Remove button
            let removeBtn = document.createElement("button");
            removeBtn.textContent = "❌";
            removeBtn.classList.add("remove-btn");

            removeBtn.addEventListener("click", function(){
                userManger.removeUser(user.id);
            });
            card.appendChild(removeBtn);

            // Add card to container
            document.querySelector(".cards-container").appendChild(card);
        });
    }

}

userManger.init();