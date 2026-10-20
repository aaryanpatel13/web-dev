// All variables and DOC selection

const addBtn   = document.querySelector("#add-note");
const closeBtn = document.querySelector("#closeBtn");
const formBox  = document.querySelector("#form-container");
const form     = document.querySelector("#note-form");

const stack = document.querySelector(".stack");
const upBtn = document.querySelector("#upBtn");
const downBtn = document.querySelector("#downBtn");


const imageInput   = form.querySelector('[name="image"]');
const nameInput    = form.querySelector('[name="fullname"]');
const townInput    = form.querySelector('[name="town"]');
const purposeInput = form.querySelector('[name="purpose"]');




// Code starts from here

// + button ye dabane pe form open hona chahiye
addBtn.addEventListener("click", function(){
    formBox.style.display = "grid";

});

// close button dabane pe form hat jae
closeBtn.addEventListener("click",function(){
    formBox.style.display = "none";
});

// form validation

form.addEventListener("submit",function(evt){
    evt.preventDefault();

    const checked = form.querySelector('input[name = "category"]:checked');

    if (
        imageInput.value.trim() !== "" &&
        nameInput.value.trim() !== "" &&
        townInput.value.trim() !== "" &&
        purposeInput.value.trim() !== "" &&
        checked
        ) {
            const contact = {
                image : imageInput.value.trim(),
                name_ : nameInput.value.trim(),
                town : townInput.value.trim(),
                purpose : purposeInput.value.trim(),
                category : checked.value,
            };
            saveToLocalStorage(contact);    // fun to save form data to localStorage
            showCard();
            form.reset();                   // data save krne k baad form ko empty kr do agli baar k liye
            formBox.style.display = "none"     // form vps hidden ho jae
          }
        else {
            alert("Please fill all the fields and select category");
        };
    

});


// Save form data into our localStorage

function saveToLocalStorage(contact){
    if (localStorage.getItem("contacts") === null){
        let contacts = [];              // iss variabe m vo data aaega jo local storage m phle se save hoga
        contacts.push(contact);
        localStorage.setItem("contacts", JSON.stringify(contacts));
    }
    else{
        let contacts = localStorage.getItem("contacts");
        contacts = JSON.parse(contacts);
        contacts.push(contact);
        localStorage.setItem("contacts", JSON.stringify(contacts));
    };
};


// form data se card bana k show krna
function createRow(label, value) {
    const row = document.createElement("div");
    row.className = "row";

    const dt = document.createElement("dt");
    dt.textContent = label;

    const dd = document.createElement("dd");
    dd.textContent = value;

    row.append(dt, dd);
    return row;
};
// Function to create card from form data
function createCard(contact) {
    // <div class="card">
    const card = document.createElement("div");
    card.className = "card";

    // <div class="avatar">FU</div>
    const avatar = document.createElement("div");
    avatar.className = "avatar";

    const img = document.createElement("img");
    img.src = contact.image;
    img.alt = contact.name_;
    avatar.append(img);

    // <h1 class="name">Fatima Uma</h1>
    const name = document.createElement("h1");
    name.className = "name";
    name.textContent = contact.name_;

    // <dl class="details"> ... </dl>
    const details = document.createElement("dl");
    details.className = "details";
    details.append(
        createRow("Home town", contact.town),
        createRow("Purpose", contact.purpose)
    );

    // <div class="flex items-center gap-3"> ... </div>
    const actions = document.createElement("div");
    actions.className = "flex items-center gap-3";

    // <button class="btn btn-primary call-btn" type="button"><i class="ri-phone-line"></i>Call</button>
    const callBtn = document.createElement("button");
    callBtn.className = "btn btn-primary call-btn";
    callBtn.type = "button";

    const icon = document.createElement("i");
    icon.className = "ri-phone-line";
    callBtn.append(icon, "Call");

    // <button class="btn btn-secondary" type="button">Message</button>
    const messageBtn = document.createElement("button");
    messageBtn.className = "btn btn-secondary";
    messageBtn.type = "button";
    messageBtn.textContent = "Message";

    actions.append(callBtn, messageBtn);

    // sab kuch card ke andar, HTML ke order me
    card.append(avatar, name, details, actions);

    return card;
};

// functin to show card
function showCard() {
    const contacts = JSON.parse(localStorage.getItem("contacts")) || [];

    stack.innerHTML = "";   // purane cards hatao

    // aakhri 3 contacts, naya sabse pehle (sabse aage)
    contacts.slice().reverse().forEach(function (contact) {
        stack.append(createCard(contact));
    });

    updateStack();
};

showCard();

// Stack update
function updateStack(){
    let cards = document.querySelectorAll(".stack .card");

    cards.forEach(function(card,index){
        card.style.zIndex = 3 - index;
        card.style.transform = `translateY(${index * 10}px) scale(${1- index * 0.02})`;
        card.style.opacity = `${1 - index * 0.02}`;
    });
};

// adding functionality ot up button and down button to show the next or previous card
 upBtn.addEventListener("click", function(){
    let lastCard = stack.lastElementChild;
    if (lastCard){
        stack.insertBefore(lastCard, stack.firstElementChild);
    };
    // update
    updateStack();

  });

 downBtn.addEventListener("click", function(){
    let firstCard = stack.firstElementChild;
    if (firstCard){
        stack.appendChild(firstCard);
    };
    //update
    updateStack();
    
 });




