# 🏈 NFL Fan Zone | Event Discovery Platform
A dynamic web application that integrates the Ticketmaster API to provide real-time information about NFL events, games, and parties across different locations.

# 📝 Overview
This project demonstrates the ability to consume and process external data streams. It allows users to search for NFL-related events by location, fetching live data directly from Ticketmaster's database to display game details, schedules, and ticket availability.

# 🛠️ Tech Stack
Frontend: HTML5 & CSS3 (Custom grid system for event cards).

Logic: JavaScript (ES6+).

API Integration: Ticketmaster Discovery API (RESTful API consumption using fetch).

Features: Dynamic filtering, asynchronous data rendering, and error handling for API quotas.

# 🌟 Key Features
Real-time API Polling: Fetches the most up-to-date event data, including Draft parties and Wild Card games.

Location-based Search: Integrated search functionality to filter events by US states (e.g., Alabama, Arizona).

Dynamic Content Cards: Automatically generates UI components based on the API response, including event images and direct links to tickets.

Responsive Layout: A clean, sports-themed interface that adapts to different screen sizes.

# ⚙️ Installation & Usage
Clone the repository:

Bash
git clone https://github.com/tu-usuario/nfl-fan-zone.git
Open index.html.

Note: You will need a Ticketmaster Developer API Key. Replace the placeholder in the app.js file with your own key.
