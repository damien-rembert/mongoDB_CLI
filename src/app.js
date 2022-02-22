//@ts-check
const yargs = require("yargs");
const Movie = require("./utils");
const { client, connection } = require("./db/connection");

const app = async (yargsObj) => {
    const collection = await connection();
    try {
        if (yargsObj.add) {
            // take movie info, add it to the mongodb and console log a success message
            const movie = new Movie(yargsObj.title, yargsObj.actor);
            console.log(await movie.add(collection));
        } else if (yargsObj.list) {
            // list all movies in the database
        } else {
            console.log("Incorrect command");
        }

    } catch (error) {
        console.log(error);
    }
}

app(yargs.argv);