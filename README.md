# Intro to Swagger

> Your API is only as good as its documentation.  

What is Swagger?  
- A tool for API documentation and testing.  
- Provides an interactive UI to explore and test APIs.  
- Follows the OpenAPI Specification (OAS), an industry-standard for API documentation.  

Why Use Swagger?  
- Clear documentation – Helps frontend & backend teams communicate.  
- Interactive testing – Try API requests without writing code.  
- Auto-generates docs – Keeps documentation updated with the API.  
- Standardization – Ensures APIs follow a consistent structure.  

Swagger vs. Postman  
- Postman is for manual API testing; Swagger is for live API documentation (Postman can be used to make live documentation too).  
- Swagger UI runs with your backend, while Postman requires separate requests.  

How Does Swagger Work?  
- Reads API definitions from code comments or a JSON file.  
- Generates a UI where users can see available endpoints, request bodies, and responses.  
- Supports authentication, request validation, and error handling.  

Swagger in Express.js  
- We use [`swagger-autogen`](https://www.npmjs.com/package/swagger-autogen) to automate documentation from our routes.  
- We use [`swagger-ui-express`](https://www.npmjs.com/package/swagger-ui-express) to serve the UI at `/api-docs`.  

You can find a example from Swagger [here](https://petstore.swagger.io/)

## Activity 1 (completed)

Take the existing Express API for coffee and create basic swagger docuementation for it. This entails the following:

**Note**: You can also follow along from Lesson 3.1 on moodle, it covers the same steps as this.

- [Setup](https://swagger-autogen.github.io/docs/getting-started/quick-start) `swagger-autogen` to generate a `swagger-output.json` specification.
    - Other setup options can be found in the [advanced usage](https://swagger-autogen.github.io/docs/getting-started/advanced-usage/)
    - An example using routes can be found [here](https://github.com/davibaltar/example-swagger-autogen-with-router)
    - Remember to add a `swagger` script in `package.json` to generate the documentation when you make changes. 
- [Setup](https://www.npmjs.com/package/swagger-ui-express) Swagger UI to read in the `swagger-output.json` specification and generate documentation which should be made available at `/api-docs`
- Add swagger autogen style comments (`// #swagger`) for the "get all coffees" endpoint (tag, description, responses).
    - Relevant documentation on [endpoints](https://swagger-autogen.github.io/docs/endpoints/)
    - Relevant documentation on [responses](https://swagger-autogen.github.io/docs/swagger-2/responses) 
    - **NOTE**: We do not use schema definitions yet, do it manually for now (example 3 in the docs for responses). Keep in mind that this endpoint returns an array of coffees

## Activity 2 (completed)

- Create swagger documentation for the "get by id" and post endpoints
- Use [definitions](https://swagger-autogen.github.io/docs/swagger-2/schemas-and-definitions) to create models in `swagger.js`
    - `Coffee`, `CoffeeArray`, `AddCoffee` (with required parameters), and `FailMessage` (for our non-2xx responses)
- Use those definitions to in the endpoints to tell swagger which schema to use, [Example 2](https://swagger-autogen.github.io/docs/swagger-2/responses)
- Take care to create repsonses for all states (`400`, `404`, `200`, and `201`) with appropriate schemas
- Create [parameter](https://swagger-autogen.github.io/docs/swagger-2/parameters) comments for the ID path variable in "get by id" and the request body in the post endpoint

## Reflection

- **Question**: What are the biggest advantages and disadvantages of using Swagger?
    - Think about development speed, collaboration, and maintenance.
    - Can Swagger ever be a burden instead of a benefit?
- **Question**: How does Swagger improve communication between frontend and backend developers?
    - Can it prevent misunderstandings?
    - Could it ever cause frustration?
- **Question**: Based on what we've seen today, would you want to use Swagger in a real project?
    - What would make Swagger a must-have for your team?
    - What would make you avoid it?
    - If you were to introduce Swagger into a team, how would you ensure it's used correctly?