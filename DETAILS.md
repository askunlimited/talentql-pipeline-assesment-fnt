# Implementation Details
### _The paginated Data Application_

[Go to app](https://talentqlpaginatedapp.netlify.app/)

The paginated application assessment calls data from randomuser api and present in a table format.


## Features

- The API returns 5 items per page and returns 2 pages with the url for the next
- Drag and drop images (requires your Dropbox account be linked)
- The App dynamically populates the table with the 5 items in the table
- The next button calls the data from the next page and populate the table with it


### How it Works
- In the app.js file I created const variable that was assigned html elements that will be manipulated with JS.
- I create a fetchData function that fetches data from the API and returns a promise which is converted into a json format.
- The fetchData function receives a parameter (Index) The index parameter is the page number or Index which is passed with the API endpoints to determine the page data it fetches
- The data that is fetched is converted in a json format which is passed into the dynamically generated table data row.

