# Freshcells Fullstack Assignment

This project is to demonstrate of following technologies
- ReactJS / Typescripts
- Tailwind
- GraphQL / ApolloClient / mutations & queries
- Unit tests (Jest with Mocks)
- i18n for localizations (initially support en / de)
- prettier
- eslint
- SPA navigation
- Error boundary: Uncaught error handling
- Clean architecture & Clean UI

## DEPLOY & TEST

#### Install this repo

Run the follow three commands to clone this repo and install its dependencies:

```
git clone https://github.com/hunghoxuan/freshcells-assignment.git
cd freshcells-assignment
npm i && cp .env.sample .env && npm start
```

#### Update environment variables `.env` file

You should manually configure environment variables by editing `.env`. Copy `.env.sample` to `.env` if file not exists. For example:
```
REACT_APP_LANGUAGE = en | de
REACT_APP_DEMO_USERNAME = test@freshcells.de
REACT_APP_DEMO_PASSWORD = 
```

## SCRIPTS

In the project directory, you can run:

##### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

##### `npm test`

Runs unit tests coverages.

##### `npm run build`

Builds the app for production to the `build` folder.\


