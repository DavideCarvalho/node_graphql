# node_graphql
> Project to learn how GraphQL works

I've made this project just to learn how GraphQL works with NodeJS and possible tools to work with it

It's really simple to use
- Git clone it
- If you have docker, just ``docker-compose up --build``
  - Don't forget to put your database uri on ``app.js`` file
- if you have yarn:
  - ``yarn run start:hotreload`` to run with nodemon, it will reload the server once you change one file inside the project
  - ``yarn run start`` to run as a normal node app
- if you don't have yarn:
  - ``npm run start:hotreload`` to run with nodemon, it will reload the server once you change one file inside the project
  - ``npm run start`` to run as a normal node app
  
This project uses ApolloEngine. It's a gateway to your GraphQL projects that outputs a bunch of metrics for you. Since performance reports
until what are the most used querys.
Inside ``initialization/express.js`` there is
```javascript
const engine = new ApolloEngine({
  apiKey: 'service:DavideCarvalho-Demolay:0oe2ZfdbsEoHV6mNXe8Zuw'
 })
```
Change this apiKey to yours (just go to [Apollo Engine Website](https://www.apollographql.com/engine) and click on "Get Api Key"). It will
take you to the page where you can create an account using your github account and then create a project. Inside this project, get your
api key.

Before continuing. I recommend you to use [Insomnia](https://insomnia.rest/) to make those queries, it's a lightweight simple to use 
REST and GraphQL Client.

This project has an authentication layer with JWT too. When the project starts, it create an user called ``root`` with password ``root``
and cid ``1`` so you can make a query to GraphQL like this:
```javascript
query ($login: LoginInput) {
  login(login: $login) {
    name
  }
}
```

passing those as query variables:
```json
{
	"login": {
		"cid": "1",
		"password": "root"
	}
}
```
Get the token from the header (It's named "Authentication") and put it on the header of the rest of the requests.

Or you can change this line of code on ``initialization/express.js``
```javascript
consign()
  .include('middlewares')
  .then('models')
  .then('graphql')
  .then('api')
  .then('routes')
  .into(app);
  ```
  
  To this:
  ```javascript
consign()
  .include('models')
  .then('graphql')
  .then('api')
  .then('routes')
  .into(app);
  ```
  
  Now you're free to send requests without getting the token.
