## Implementation Details

I used the boilerplate provided ut converted the Typescript into Javascript as I'm just working on my TypeScript skills.

I deleted all the pre-created table rows from the boilerplate and used javascript to dynamically generated the table elements to be appended into the main table.

## How It Works

# App.js

In the app.js file I created const variable that was assigned html elements that will be manipulated with JS.

I create a fetchData function that fetches data from the API and returns a promise which is converted into a json format.

The fetchData function receives a parameter (Index) The index parameter is the page number or Index which is passed with the API endpoints to determine the page

The index
