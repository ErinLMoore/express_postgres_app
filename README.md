# Postgres Express App!
------------------
This is a simple express app that interacts with a postgres database.
I've commited some environment files so it's easy to run in a dev environment, the production values would not be commited to a repo.

Available routes:

GET `/bets` - lists all bets

POST `/bets/create` - Creates a bet. Example payload: `{
	"amount": 32,
	"teamName": "Dayton Normals"
}`

GET `/bets/:id/delete` - Deletes a bet by ID number

Installation instructions (all run inside root app directory):

- Run `source .dev.env` to pull in environment variables
- Run `npm install`
- Run `docker-compose up -d` to start the database
- Initialize the database by running:
   - `npx sequelize-cli db:migrate`
   - `npx sequelize-cli db:seed:all`
- Run `npm run start` to begin the app. You can now visit `http://localhost:3000/bets` to view existing bets.
- Don't forget to `docker-compose stop` when you're done

