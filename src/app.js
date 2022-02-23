//@ts-check
const yargs = require("yargs");
const Movie = require("./utils");
const { client, connection } = require("./db/connection");


// • App must cover all CRUD operations.
// • Movie entries should include optional
// information.
// Stretch goals - Allow for filtered search results
// (by name/actor/rating)


const app = async (yargsObj) => {
    const collection = await connection();
    try {
        if (yargsObj.add) {
            // Create: take movie info, add it to the mongodb and console log a success message
            const movie = new Movie(yargsObj.title, yargsObj.actor);
            console.log(await movie.add(collection));

        } else if (yargsObj.list) {
            // Read: list all movies in the database
            console.log(await collection.find().toArray());

        } else if (yargsObj.find) {
            // Read: list all movies in the database 
            const movie = new Movie(yargsObj.title, yargsObj.actor);
            await movie.findOneByTitle(collection);


        // } else if (yargsObj.updateLast) {
        //     const movie = new Movie(yargsObj.title, yargsObj.actor);
        //     console.log(await movie.updateOne(collection))

        } else if (yargsObj.update) {
            // Update: list all movies in the database
            const movie = new Movie(yargsObj.title, yargsObj.actor);
            console.log(await movie.update(collection));

        } else if (yargsObj.delete) {
            const movie = new Movie(yargsObj.title, yargsObj.actor);
            console.log(await movie.update(collection));



        } else {
            console.log("Incorrect command");
        }
        await client.close();

    } catch (error) {
        console.log(error);
    }
}

app(yargs.argv);