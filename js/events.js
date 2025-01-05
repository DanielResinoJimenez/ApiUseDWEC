/* EVENTS CLASS */

export class EventNFL {

    static events = [];
    static articles = [];

    constructor(image, name, url, timezone) {
        this._image = image;
        this._name = name;
        this._url = url;
        this._timezone = timezone;

        EventNFL.events.push(this);
    }

    static showEvents() {
        EventNFL.events.forEach((event) => {
            let newarticle = document.createElement("article");
            newarticle.classList.add("p-6")
            newarticle.classList.add("rounded-sm")
            newarticle.classList.add("bg-blue-300")
            newarticle.classList.add("w-56")
            newarticle.classList.add("flex");
            newarticle.classList.add("flex-col")
            newarticle.classList.add("justify-between")

            let newimg = document.createElement("img");
            newimg.src = event._image;
            newimg.classList.add("object-cover")
            newimg.classList.add("rounded-md")

            let newtitle = document.createElement("h2");
            newtitle.textContent = event._name;

            let newA = document.createElement("a");
            newA.href = event._url;
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
            if (event._timezone.includes("_")) {
                newSpan.textContent = event._timezone.replace("_", " ");
                newSpan.classList.add("hidden")
                newarticle.appendChild(newSpan);
            } else {

                newSpan.textContent = event._timezone;
                newSpan.classList.add("hidden")
                newarticle.appendChild(newSpan);
            }

            this.articles.push(newarticle);

        })
    }


}