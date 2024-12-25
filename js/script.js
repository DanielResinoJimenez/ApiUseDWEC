/* Script JS Api Use */

// Variables

let navbutton = document.getElementById("navbutton");
let smallmenu = document.getElementById("smallmenu");

let open = false;

navbutton.addEventListener("click", () => {
    if(open){
        smallmenu.classList.remove("block");
        smallmenu.classList.add("hidden");
        open = false;
    }else{
        smallmenu.classList.remove("hidden");
        smallmenu.classList.add("block");
        open = true;
    }
})

// Api Search

let apiKey = "yVhAb1oXDUGASbyAMclGTte4wQosdlTc";

const apiRequest = async() => {
    const api = await fetch("https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=" + apiKey + "&keyword=NFL");
    const data = await api.json();
    return data;
}

let eventtable = document.getElementById("eventtable");

const loadApiFootball = async() => {
    const football = await apiRequest();
    console.log(football);
    
    let arrayEvents = football._embedded.events;
    arrayEvents.forEach(event => {
        let newarticle = document.createElement("article");
        newarticle.classList.add("w-36")
        let newimg = document.createElement("img");
        newimg.src = event.images[1].url;
        newimg.classList.add("object-cover")
        let newtitle = document.createElement("h2");
        let newp = document.createElement("p");
        

        newarticle.appendChild(newimg);
        newarticle.appendChild(newtitle);
        newarticle.appendChild(newp);
        eventtable.appendChild(newarticle);
    });
    
}

loadApiFootball();





