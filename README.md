# RateMyCourse WebApp


# Instructions

## MacOS/Unix
clone project and cd into the project


Install node package manager if you don't have it <br>
https://nodejs.org/en/download/package-manager <br>
node -v should print `v20.18.0` <br>
npm -v should print `10.8.2` <br>

install needed packages <br>
`npm i` <br>

## Database
Go on supabase and create a new project <br>
Inside the sql query runner paste the contents of the setup.sql and run it to set up your tables and dummy data <br>

env variables <br>
create a .env file in project root and get your api key from supabase <br>
VITE_APP_SUPABASE_KEY="key" <br>

database url <br>
go to src/client.js <br>
change to your database url from supabase <br>
const supabaseUrl = 'https://tqcjnafkckaooinaacxp.supabase.co'; <br>

run the project <br>
`npm run dev` <br>

Visit http://localhost:5173/ to see the webapp <br>
