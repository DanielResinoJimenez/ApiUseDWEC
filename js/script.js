/* Script JS Api Use */

import { EventNFL } from "./events.js";

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
    let arrayEvents = football._embedded.events;
    arrayEvents.forEach(event => {

        let newEvent = new EventNFL(event.images[1].url, event.name, event.url, event.dates.timezone)

    });

    EventNFL.showEvents();
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

// Filter Events By Location Event

const filterEventLocation = (event) => {
    if(event.target.tagName === "SELECT"){
        const arrayFilter = EventNFL.articles.filter(element => element.lastElementChild.textContent.toLowerCase().includes(event.target.options[event.target.selectedIndex].textContent.toLowerCase()))
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
            const arrayFilter = EventNFL.articles.filter(element => element.lastElementChild.textContent.toLowerCase().includes(another.value.toLowerCase()))
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

