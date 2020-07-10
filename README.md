![logo](https://pinhole-seed.s3-us-west-1.amazonaws.com/pinhole_seeds/honeybearlogo.png)

# HONEYBEAR

View [honeybear](https://honeybear.herokuapp.com/#/)

## Engineers
- [Bryan Sillorequez](http://www.linkedin.com/in/bsillo)
- [Ahmad Alqadhy](https://www.linkedin.com/in/ahmad-alqadhy-1895a6161/)
- [Sheava Danesh](https://www.linkedin.com/in/sheava-danesh-088818137/)


## About HoneyBear

Getting outdoors to adventoruos activities can be costly and buying gear with the possibilty of only using it a couple times per year doesn't sound appealing to some.  **honeybear** is an app that allows users to connect with others in their community to borrow, rent, and lend gear to each other.

![frontpage](https://pinhole-seed.s3-us-west-1.amazonaws.com/pinhole_seeds/honeybearfrontpage.png)

## Technologies

- Frontend
  - React
  - Redux
  - Axios
  - CSS
  - HTML

- Backend
  - Express
  - MongoDB
  - JWT
  - Passport

- Deployment
  - Heroku

- APIs
  - Mapbox
  - AirBnb React-Dates
  
## Features

### Search Bar
  - Search feature with dates to rent.
  - Search is case-insensitive.
  - User can search either parts of words or full words and get a list of relevant items.

![search](https://pinhole-seed.s3-us-west-1.amazonaws.com/pinhole_seeds/honeybearsearch.png)

### Map
  - Interactive map with markers.
  - Displays each item at its respective location.
  - Each map marker can be clicked, triggering a pop-up that has more information about that item.
  - User can scroll around/zoom in map and view surrounding locations/markers.

![map](https://pinhole-seed.s3-us-west-1.amazonaws.com/pinhole_seeds/honeybearmap.png)

### Item Index - Search Results
  - Upon searching an item, the user is able to see a clear list of all relevant items to the search.
  - The list can be scrolled through within the page, while keeping the map static.

![scroll](https://pinhole-seed.s3-us-west-1.amazonaws.com/pinhole_seeds/honeybearscroll.png)

### User Authentication

  - Users can sign up and create an account on ***honeybear***, storing their information to be able to logout and log back in to view their personal account.
  - A demo login feature is available that serves as a guest login, allowing the user to browse through the site without creating an account.
  - The login/signup forms have validations that restrict the user from continuing further if the input requirements are not met.

![login](https://pinhole-seed.s3-us-west-1.amazonaws.com/pinhole_seeds/honeybearlogin.png)

## Code Snippets

### Search Bar Backend JavaScript
```
router.get("/search", (req, res) => {
  let itemPattern = new RegExp(req.query.title, "i")
  Item.find({title:{$regex:itemPattern}})
    .then( items => {
      let userIds = items.map( item => item.user)
      User.find({_id: {$in: userIds}})  
        .then((users) => {
          res.json({items, users})})
        .catch((err) => res.status(404).json({ noitemssfound: "No items found" }));
    })
})
```
The axios call triggers the backend /search route which initiates a query to the MongoDB described by the user’s input, further formatted by a regex and a case insensitivity parameter. Upon success, the promise then fires a second MongoDB query populating a users parameter based on the items array returned by the first query. The state is subsequently updated accordingly.

### Map

```
```