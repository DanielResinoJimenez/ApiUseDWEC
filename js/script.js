/* Script JS Api Use */

// First Api Search

let apiKey = "yVhAb1oXDUGASbyAMclGTte4wQosdlTc";

const apiRequest = async () => {
    const api = await fetch("https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=" + apiKey + "&keyword=NFL");
    const data = await api.json();
    return data;
}

let eventtable = document.getElementById("eventtable");
const arrayEvent = [];

const loadApiFootball = async () => {
    const football = await apiRequest();
    console.log(football);

    let arrayEvents = football._embedded.events;
    arrayEvents.forEach(event => {

        let newarticle = document.createElement("article");
        newarticle.classList.add("p-6")
        newarticle.classList.add("rounded-sm")
        newarticle.classList.add("bg-blue-300")
        newarticle.classList.add("w-56")
        newarticle.classList.add("flex");
        newarticle.classList.add("flex-col")
        newarticle.classList.add("justify-between")

        let newimg = document.createElement("img");
        newimg.src = event.images[1].url;
        newimg.classList.add("object-cover")
        newimg.classList.add("rounded-md")

        let newtitle = document.createElement("h2");
        newtitle.textContent = event.name;

        let newA = document.createElement("a");
        newA.href = event.url;
        newA.classList.add("mt-2");
        newA.classList.add("py-3");
        newA.classList.add("bg-blue-500");
        newA.classList.add("border");
        newA.classList.add("border-blue-950");
        newA.classList.add("text-center");
        newA.classList.add("hover:text-blue-50");
        newA.classList.add("hover:bg-blue-950");
        newA.textContent = "Go For It"

        newarticle.appendChild(newimg);
        newarticle.appendChild(newtitle);
        newarticle.appendChild(newA);
        eventtable.appendChild(newarticle);

        let newSpan = document.createElement("SPAN");
        if (event.dates.timezone.includes("_")) {
            newSpan.textContent = event.dates.timezone.replace("_", " ");
            newSpan.classList.add("hidden")
            newarticle.appendChild(newSpan);
        } else {
            
            newSpan.textContent = event.dates.timezone;
            newSpan.classList.add("hidden")
            newarticle.appendChild(newSpan);
        }


        arrayEvent.push(newarticle);

    });

}

// Second Api Search

const apiRequest2 = async () => {
    const api = await fetch("https://countriesnow.space/api/v0.1/countries/states");
    const data = await api.json();
    return data;
}

let locations = document.getElementById("locations");

const loadApiStates = async () => {
    const data = await apiRequest2();
    const arrayCountries = data.data;
    const states = arrayCountries.filter(element => element.name === "United States").map(state => { return state.states });
    states[0].forEach(state => {
        let newOption = document.createElement("OPTION");
        newOption.value = state.name;
        newOption.textContent = state.name;
        locations.append(newOption);
    })
}



document.addEventListener("DOMContentLoaded", () => {
    loadApiFootball();
    loadApiStates();
})

// Variables

let navbutton = document.getElementById("navbutton");
let smallmenu = document.getElementById("smallmenu");
let search = document.getElementById("search");
let another = document.getElementById("another");
let noResults = document.getElementById("noResults")

let open = false;

// Open Nav Event

navbutton.addEventListener("click", () => {
    if (open) {
        smallmenu.classList.remove("block");
        smallmenu.classList.add("hidden");
        open = false;
    } else {
        smallmenu.classList.remove("hidden");
        smallmenu.classList.add("block");
        open = true;
    }
})

// Filter Events By Team Event

const filterEventTeam = () => {

}

// Filter Events By Location Event

const filterEventLocation = (event) => {
    if(event.target.tagName === "SELECT"){
        const arrayFilter = arrayEvent.filter(element => element.lastElementChild.textContent.toLowerCase().includes(event.target.options[event.target.selectedIndex].textContent.toLowerCase()))
        if(arrayFilter.length == 0){
            noResults.classList.remove("hidden");
            eventtable.textContent = "";
        }else{
            eventtable.textContent = "";
            noResults.classList.add("hidden");
            arrayFilter.forEach(event => {
                eventtable.appendChild(event);
            })
        }
    }else{
        if(another.value != ""){
            const arrayFilter = arrayEvent.filter(element => element.lastElementChild.textContent.toLowerCase().includes(another.value.toLowerCase()))
            if(arrayFilter.length == 0){
                noResults.classList.remove("hidden");
                eventtable.textContent = "";
            }else{
                eventtable.textContent = "";
                noResults.classList.add("hidden");
                arrayFilter.forEach(event => {
                    eventtable.appendChild(event);
                })
            }
        }
    }
    
    

}

locations.addEventListener("change", filterEventLocation);
search.addEventListener("click", filterEventLocation);

