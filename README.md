# Hooked

### A project by [Josh](https://github.com/joshualev), [Evan](https://github.com/ecomtesse) and [Dan](https://github.com/drinkwithdan)

Hooked is a MERN app designed to show and edit a collection of seafood items as a shopfront website. Users can access the collection of available items, add them to a cart, alter that cart, and then checkout.

A sign-in feature is provided for admin, which allows access to the database to add, edit and delete items ([CRUD app](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) functionality). These features are not available when not logged in.

To view a live version of the app, please click [here](https://hooked-coop.herokuapp.com/)

You can use the sample admin account details below to view full CRUD features:

```
username: demo
password: demo
```

This app was built using:

- MongoDB and Mongoose
- Express
- React JS
- Node JS

Other features include:

- React-hook-form for form manipulation
- bcrypt hashing for password storage and checking
- Material UI components for styling and structure
- Express-session and MongoDB-session for Signin / out functionality
- Multer and Cloudinary for image upload and storage

The app as deployed using MongoDB Atlas and Heroku.

---

### Planning

We were certain from the start the objective would be to create an e-commerce app that allowed access to a database and a shopping cart. Some ideas discussed:

![Initial ideas](./readme-images/Hooked%20-%20Initial%20planning.jpg)

An interesting misunderstanding (turns out Josh's brother isn't a Fishmonger) lead us down the route of a fishing co-op as a concept for our shopfront app. subscribing to the MVC (Models, Views, Controllers) structure, we fleshed out what this structure would look like:

![MVC Planning](./readme-images/Hooked%20-%20MVC%20Planning.jpg)

Once we had an idea of what we were displaying we mocked up some wireframes for both mobile and desktop view:

![Wireframes](./readme-images/Hooked%20-%20Wireframes.jpg)

Some market research was conducted to analyse other, similar sites and the components that we thought were noteworthy:

![Market-Research](./readme-images/Hooked%20-%20Market%20Research.jpg)

The [Miro](https://miro.com/index/) collaboration tool was used to assist with brainstorming, planning, wireframing and tracking progress for the app's development.

---

### Implementation

The app was built using [MUI components](https://mui.com/components/) from the beginning, allowing a finished-looking state to be achieved early on. This allowed more time to build out the front (React) and back end (Express & MongoDB).

A `fish` controller and model handles the database manipulation in MongoDB, while the `users` controller handles the database of users, as well as signing in and out of sessions. The normal RESTful routes were adhered to in order to process database collections.

Some additional graphic design, such as the logo, was created by Josh - creating a professional-looking finish. Some adaptation of the standard MUI themes allows further personalisation of the site componenents, using the app hierarchy to flow these changes down without many code changes.

A cart component was created that allows users to add and remove items, provides a total amount of products, as well as the $ subtotal for checkout.

---

### Screenshots

Sample screenshots of the app:

Sign In Page
![Sign In Page](./readme-images/Hooked%20-%20Sign%20In%20Vew.png)

Home Page (index view)
![Home Page](./readme-images/Hooked%20-%20Home%3AIndex%20View.png)

Product Details Page (admin view)
![Product Page](./readme-images/Hooked%20-%20Details%20View.png)

Checkout Page
![Checkout Page](./readme-images/Hooked%20-%20Checkout%20View.png)

---

### Major Hurdles/Challenges

#### Implementing Shopping Cart and Checkout Features

Due to the short timeframe to develop the app (4 days) a a MUI checkout template was used for the checkout process. The design of the template used brought additional challenges in managing state and user input throughout the checkout process. For our presentation app we had to use a "save" button on each form page to save state, this is something we would like to remove when we have the time.

The shopping cart state and manipulation was a challenge to build initially but ended up being hugely rewarding and allowed some insight into advanced JS and object manipulation that will no doubt be very useful.

#### Utilising React Packages

The team decided to utilise the [React Hook Form](https://react-hook-form.com/) and MUI packages for our app to gain experience and develop our skills in this area. Using both these packages presented additional challenges in some areas in drafting syntax and logic that would be recognised by each (as well as native React) to acheive the desired outcome.

#### Working with MUI

We decided to work with MUI to gain experience in the technology. While MUI provided a quick and clean solution to scaffold a simple structure for our app, the challenges began presenting themselves once our design features became more focused.

---

### Future Update Options

Potential Future updates for the app may include:

- Implement user and admin profiles into the users model.
- Additional product models (e.g. shellfish, pantry items)
- Other ecommerce products in the product details (show) view based on the product that is current being viewed.
- Integrate a recepies API, such as [spoonacular](https://spoonacular.com/food-api) or [edamam](https://developer.edamam.com/edamam-recipe-api) to provide recipse ideas based on the product viewed/selected.
- Maps integration to show the user where the fish being viewed was caught.
- Fishmonger profile pages to help promote small local businesses and the sustainable fishing approach of the platform.
- Relational date for the above, allowing the Fishmonger adding the item to be featured in the "Show" route, with added click-through to their profile.
- Additional accessibility options such as different view styles or a toggle-able font such as [Dyslexie](https://www.dyslexiefont.com/)
- Further integration of sustainable seafood tracking APIs, unfortunately there are not a huge amount of resources for this in Australia.
