# React Global Climate Change Charts, Group 3

This is a description of Oulu University of Applied Sciences's web project courses group 3's project. Group members are Tero Rantanen(me), Janita Kaikkonen, Alisa Kulonpää and Art Karimäki. The given task was to build a React-webapplication that includes 5 different chart visualisations of different given climate change data. The app also has a login/register feature and the user is able to save themselves a custom view of their own chosen charts. 

The app was built with Java for the backend side, and the frontend UI was built with React.js. The application is publicly accessible [**HERE**](https://g3-webdev-react-chart-app.onrender.com)

## My responsibilities of the project
I began by helping with converting the given datasets to a format we could easily upload to our database hosted/maintained by Kaikkonen. Easiest format to enter with the database's client tools was csv so I converted data ether with scripts or for example using MySQL workbench data wizard tools. Also in the beginning the visualisation nr. 5 was my responsibility, and later I also took visualisation 2.
After completing the visualisations, I began to plan the logic for the UI. First by creating a few extra demo charts and practising switching between them etc. Then from the rough plan I made, we created the UI logic plan and Kaikkonen created the graph for it and I began programming component by component the necessary parts. 

In addition to designing the UI logic, I created the following components to the frontend: user registration and logging in along with their backend classes and authentication methods. I created the menu components, both to create a view and to see a view, and the "browserbar" component to not only display some buttons depending on the route, but to also monitor the users login status and when needed, redirect. I also created the logic for creating and storing a custom shareable link and its necessary backend classes and the frontend component that handles accessing the link. I also created a component that I, perhaps confusingly, named "render". "Render" takes in a six digit string value and reads it as if it is binary bits. For example "0,0,0,0,0,0", each index and its state of 0 or 1 representing a different setting for the render which displays the charts. I also ended up bringing the project to a state where it could be published in render.com. I did the basic HTML/CSS formatting for the components and Kaikkonen did the final touches.

I also helped Kulonpää to finish the backend testing code and I created the frontend testing code. I was also offering a lot of help to others during the project. 


## Using the app

![Photo](https://github.com/TVT22KMO-WP-GROUP-3/R3-Projekti/blob/t1rate01-deploymenfromMainAsItIs/photosForReadMe/kaytto1.png?raw=true)
> Front page view

From users point of view the app always starts from the front page, to which one of the 5 visualisations is randomly shown as a demo. Top of the screen is the "browserbar", which in this state includes buttons for logging in, registering and "Show all" view where anyone can see all the charts. 

After the user has registered they are redirected to logging in. As they log in, the app checks if they are a new user, or if they have already saved a custom view. If the user is new/there are no saved views, the user is redirected to a menu where a view can be created. 

![Photo](https://github.com/TVT22KMO-WP-GROUP-3/R3-Projekti/blob/t1rate01-deploymenfromMainAsItIs/photosForReadMe/options.png?raw=true)
> Menu where a custom view can be crearted. Checkboxes are for choosing a view you want to have included and the switch is for formatting.

After the view is created, the user gets redirected to a page where the decired visualisations are shown. At this state the browserbar is showing in addition to other buttons a "Share" button, which creates a link that can be shared to anyone to access the view as the user created it. Other menu options are deleting account and deleting the view. 

## UI Logic, database, RestAPI
The part of the app visible to the user is created with React.js components. The "browserbar" is displayed in every page and monitors the users login state and handles necessary redirecting. "Browserbar" also contains logic for showing different buttons in different pages and states, such as login/logout and sharing the link functions. When a user logs in the token is saved in users local storage and the "browserbar" monitors it's state to determine if the user is logged in or not. 

![Photo](https://github.com/TVT22KMO-WP-GROUP-3/R3-Projekti/blob/t1rate01-deploymenfromMainAsItIs/photosForReadMe/browserbarReturn.png?raw=true)

To display the custom view and the random demo view, I created the "render" component. The component takes a 6 digit string separated with commas, which the render reads as if it was a true/false binary array. First five indexes determine if the corresponding visualisation should be shown or not, and the sixth digit is used for formatting.

![Photo](https://github.com/TVT22KMO-WP-GROUP-3/R3-Projekti/blob/t1rate01-deploymenfromMainAsItIs/photosForReadMe/renderjs.png)
> Example of when index 5 is 1, the visualisations are returned conditionally by checking the indexes.

The menu used for creating the views, chechboxes are used to change the viewstring's values to 0 or 1. When a view is saved, the viewstring is saved to the database and its delivered to the "render".

The "Share" button calls functions that creates a random id, saves it to the database together with the custom viewstring, using authentication token, from which the backend decrypts the username and saves them together to a separate table. When the shared link is accessed, it goes to a page that uses a component that gets the custom view id from the url, fetches the viewstring and the username and displays the custom view and who it was created by.

Each visualisation uses their own backend endpoints to fetch their needed data from the database. The basic logic of each visualisation is similar, the main differences come from when some charts are line charts and some are for example pie charts. The example photo is from visualisation 1, which first using reacts useEffect and useState hooks fetches the data it needs, maps it and reorganizes it, in this case by x and y values for the chart. 

![Photo](https://github.com/TVT22KMO-WP-GROUP-3/R3-Projekti/blob/t1rate01-deploymenfromMainAsItIs/photosForReadMe/visu1.png?raw=true) 

On the photo above the component offers two different chart views, which are conditionally shown by this component. The component offers also a button that switches between the chart components, the application itself calls for this component. 

The backend included the rest endpoints and controllers for each visualisation along with service classes. The backend also contains user authentication, user login, register and delete rest controllers, services and features.

The database of the application is running on a PostqreSQL server, and all the data has been converted and collected there mainly in csv form for easy upload with the client tools. Some data was given in a format that couldn't be converted easily to csv with client tools or other tools so some for example python scripts were used. Most data was uploaded using the client tools, and some uploaded by scripts using SQL syntax with python.

## Challenges and lessons learned
React and collecting and converting datasets was new to every single member of the group. Everyone also used a database first side outside of the localhost and connecting the project to it was new. React's chartjs and chartjs-2 also challenged us to self learning and finding material. While using VSCode we also learned a lot about using the terminal and carefully watching where NPM packages are installed and the problems mistakes can cause. We also learned a lot about working together and how important it is to set a common goal as early as possible and make thorough plans as early as possible. In the future we also discussed that it might be a good idea to agree upon some basic HTML/CSS related class/id naming rules. The project also taught everyone problemsolving and independent learning.
