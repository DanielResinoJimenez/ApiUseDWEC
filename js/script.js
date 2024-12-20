/* Script JS Api Use */

// Api Search

let apiKey = "yVhAb1oXDUGASbyAMclGTte4wQosdlTc";

const apiRequest = async() => {
    const api = await fetch("https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=" + apiKey);
    const data = await api.json();
    return data;
}

const loadApiFootball = async() => {
    const football = await apiRequest();
    console.log(football);
}

loadApiFootball();