# Novorésumé Challenge

#### Symbols Legend:

:white_check_mark: - Implemented
:x: - Not implemented
:atom_symbol: - Only in FE/React

### Functional requirements:

The user should be able to:

- Sign up, log in, log out -- :white_check_mark: , :white_check_mark: , :atom_symbol:
- Add items to the basket -- :atom_symbol:
- Add billing information -- :atom_symbol:
- Save their order and billing information -- :x:
- Generate a PDF of their order (Hint: The library called [wkhtmltopdf](https://www.npmjs.com/package/wkhtmltopdf) is useful for this and already installed in the app folder, and will be installed in the Docker image once you build it) -- :x:

### Technical requirements:

- The backend code should have unit tests for 3 functions of your choice -- :x:
- The code should be clean and follow the best practices -- :white_check_mark: (as much as time allowed)
- Your implementations and changes to Dockerfile (if any) should be documented in the README file -- :white_check_mark:
- The app should be running and functioning properly on Docker :atom_symbol:
- You should do the assignment by yourself (no copy/paste from other projects) :white_check_mark:

### Stack requirements:

- Frontend: React :white_check_mark:
- Backend: Node.js, Express.js, MongoDB :white_check_mark:
- CI: Docker :white_check_mark:

### Bonus points will be given for:

- Adding SSL by using a self-signed certificate
- Using GRUNT or Webpack -- Create React App uses webpack by default as configuration
- Preventing XSS attacks -- Create React App takes care of XSS attacks via JSX syntax
- Using SASS or LESS -- [JSS](https://cssinjs.org/?v=v10.4.0) has been used instead in compbination with [Material-ui](https://material-ui.com/)
- Writing unit tests for frontend -- :x:

### Library tips:

- Authentication: Passport.js -- Based on the latest winner of [PHC](https://password-hashing.net/) argon2 was used for hashing the passwords of the created users. Due to the simplicity of the login system and the fact that it did not require any 3rd party login systems sucn as Facebook Login / Google Login / etc, Passport was not neccessary.
- Unit testing: Mocha, Chai
- Generating the PDF: wkhtmltopdf, PhantomJS

### Further implementation and improvements

#### Frontend:

From the requirements, the offers page is missing. The page has been mocked up but no functionality implemented also it is missing a good amount of styling to it. Please also note that a function that fetches the products from the backend has been implemented in the backend but the frontend does not currently connect to it. That being said, when the page was mocked up, it was made with a format in mind so once the endpoint is connected, not too many changes should be made.

Also, please note, that currently there are no checks implemented on the frontend that sanitize the data sent to the backend through the Login / Register form. Also, please keep in mind that no login token is stored either, which one should.

In terms of styling, the default material ui theme has been used for the buttons.

#### Backend

As mentioned above, the order page has not been implemented. This means that the backend is currently also not storing any information about any potential orders. It should be noted however that a products object has been created which stors all the available offers.

As with the fronend, there currently isn't too much data sanitization within the project. I have installed @hapi/joi for validation but due to time contstrains there is no implementation of it. Unit tests are also missing from the backend. Despite being suggest to use Mocha/Chai, I would have proceeded to do the tests using Jest as the project is not very large and the frontend codebase already comes with a Jest installation for React. Also, this would have granted easier end-to-end testing.

#### Docker

Unfortunatelly, there is a bug that automatically shuts down the backend and a manual start of the backend (using npm run dev) is neccessary. The database and frontend are however running. I am aware of the issue but just did get around to fixing it.

### How to run the app:

To run the backend locally without Docker, in the project folder, run:

```
npm run dev
```

To run the frontend locally without Docker, in the frontend folder, run:

```
npm start
```

To build and run the project using Docker, in the project folder, run:

```
docker-compose up
```

Docker compose up will boot up 3 different images, the database, the backend and the frontend.

To stop and remove all the Docker containers on your machine simply run CTRL + C in the terminal instance where docker is running.

The backend api is running on http://localhost:9007
The frontend is running on http://localhost:3000

#### Thank you for your time. For any further questions, do not hesitate to contact me
