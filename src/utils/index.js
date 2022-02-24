// @ts-check
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

    async findOneByTitle(collection) {
        const result = await collection.findOne({ title: this.title });
        if (result) {
            console.log(`Found a listing in the collection with the title '${this.title}':`);
            await collection.findOne({ title: this });
            // console.log(result);
        } else {
            console.log(`No listings found with the name '${this.title}'`);
        }
    }

    async update(collection) {
        // console.log("local title is: ", this.title);
        // console.log("local actor is: ", this.actor);
        return await collection.updateOne({ title: this.title }, {
          $set: {
            title: this.title,
            actor: this.actor,
          },
        });
    }
    async delete(collection) {
        // console.log("local title is: ", this.title);
        // console.log("local actor is: ", this.actor);
        return await collection.deleteOne({ title: this.title });
    }
        // async function updateListingByName(client, nameOfListing, updatedListing) {

        //     const result = await client.db("sample_airbnb").collection("listingsAndReviews")
        
        //                         .updateOne({ name: nameOfListing }, { $set: updatedListing });
        
        //     console.log(`${result.matchedCount} document(s) matched the query criteria.`);
        
        //     console.log(`${result.modifiedCount} document(s) was/were updated.`);
        
        // }



}

module.exports = Movie;