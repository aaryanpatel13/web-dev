console.log("js is running")


function createToaster(config){
    return function(str){
        let div = document.createElement("div");
        div.textContent = str;
        // notification div m class add ho rhi
        div.className =
         `inline-block flex flex-col gap-3 ${config.theme === "dark"? "bg-gray-800 text-white" : "bg-gray-100 text-black"}  px-6 py-3 rounded shadow-lg pointer-events-none`
        document.querySelector(".parent").appendChild(div);
        //  notification ki position
        if (config.positionX !== "left" || config.positionY !== "top"){
            document.querySelector(".parent").className += 
            `${config.positionX === "right"? " right-5": "left-5"} ${config.positionY ==="bottom"? " bottom-5" : "top-5"}`
        }
        // notification k hide hone ka time
        setTimeout(() => {
            document.querySelector(".parent").removeChild(div);
            
        }, config.duration * 1000);
    };
};

let toaster = createToaster({
    positionX: "right",
    positionY: "bottom",
    theme: "light",
    duration: 3,
});


toaster("Demo notifcation !!")