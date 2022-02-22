class Movie {
    constructor (title, actor = "Not specified") {
        this.title = title;
        this.actor = actor;
    }

    async add(collection) {
        // add this to the db
        await collection.insertOne(this);
        return "Success";
    }

    async list(collection) {
        // list all movies in the db
        return await collection.find().toArray();
        
    }
}

module.exports = Movie;