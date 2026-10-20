const users = [
    {
        name: "SpiderMan",
        pic: " https://images.hdqwalls.com/wallpapers/bthumb/spiderman-vigilante-rising-lm.jpg",
        bio: "With great powers⚡️; comes great responsibility.🕷️",
    },

    {
        name: "Iron Man",
        pic: "https://images.hdqwalls.com/wallpapers/bthumb/iron-man-ruler-of-power-and-control-dc.jpg ",
        bio: "I am Iron Man. 🤖",
    },

    {
        name: "Captain America",
        pic: "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FwdGFpbiUyMGFtZXJpY2F8ZW58MHx8MHx8fDA%3D",
        bio: "I can do this all day. 🇺🇸🛡️",
    },

    {
        name: "Thor",
        pic: "https://images.hdqwalls.com/wallpapers/bthumb/thor-the-son-of-odin-xg.jpg",
        bio: "Whosoever holds this hammer, if they be worthy, shall possess the power of Thor. ⚡️🔨",
    },

    {
        name: "Hulk",
        pic: "https://images.hdqwalls.com/wallpapers/bthumb/hulk-marvel-green-titan-bt.jpg",
        bio: "Hulk smash! 💚💥",
    },

    {
        name: "Hawkeye",
        pic: "https://images.hdqwalls.com/wallpapers/bthumb/hawkeye-is-coming-du.jpg",
        bio: "You miss every shot you don't take. 🏹",
    },

    {
        name: "Loki",
        pic: "https://images.hdqwalls.com/wallpapers/bthumb/two-faces-of-loki-pr.jpg",
        bio: "I am burdened with glorious purpose. 🐍✨",
    },
];


// Things to do in this project
//1. Show all users
function showUsers(arr){
    arr.forEach(function(user){
        // create card
        const card = document.createElement("div");
        card.classList.add("card");

        // add img
        const img = document.createElement("img");
        img.classList.add("bg-img");
        img.src = user.pic;

        // add blur filter
        const blurFilter = document.createElement("div");
        blurFilter.style.backgroundImage = `url(${user.pic})`;
        blurFilter.classList.add("blurred-layer");

        // create content
        const content = document.createElement("div");
        content.classList.add("content");

        const h3 = document.createElement("h3");
        h3.textContent = user.name;

        const bio = document.createElement("p");
        bio.textContent = user.bio;

        // Now append things to make a card
        content.appendChild(h3);
        content.appendChild(bio);
        
        card.appendChild(img);
        card.appendChild(blurFilter);
        card.appendChild(content);

        //finally add Card to the body
        let cards = document.querySelector(".cards")
        cards.appendChild(card);
    });
}

showUsers(users);
//2. Filter krna har baar input krne pe
let inp = document.querySelector(".inp");
inp.addEventListener("input",function(){
    let newUsers = users.filter((users) => {
        return users.name.toLocaleLowerCase().startsWith(inp.value.toLocaleLowerCase());
    });

    document.querySelector(".cards").innerHTML = "";
    showUsers(newUsers);
});
//3. Show filtered user