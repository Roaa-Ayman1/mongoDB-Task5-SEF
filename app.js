const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;
const url = 'mongodb://127.0.0.1:27017';
const dbName = 'mongodbTask';

mongoClient.connect(url, (err , res) => {
    if(err){
        return console.log('Error: cannot connect to MongoDB');
    }
    console.log('Connected to MongoDB');

    const db = res.db(dbName);

    db.collection('users').insertOne({
        name: 'John Doe',
        age: 30,
        email: 'johndoe@example.com'
    } , (err, result) => {
        if(err){
            return console.log('Error: cannot insert user');
        }
        console.log('User inserted successfully');
    });

    db.collection('users').insertOne({
        name: 'William Jackson',
        age: 40,
        email: 'williamjackson@example.com'
    } , (err, result) => {
        if(err){
            return console.log('Error: cannot insert user');
        }
        console.log('User inserted successfully');
    });

    db.collection('users').insertMany(
        [
            {
                name: 'Pop Jane',
                age: 27,
                email: 'popjane@example.com'
            },
            {
                name: 'Michael Johnson',
                age: 27,
                email:'michaeljohnson@example.com'
            },
            {
                name: 'Sarah Wilson',
                age: 27,
                email:'sarahwilson@example.com'
            },
            {
                name: 'David Brown',
                age: 27,
                email: 'davidbrown@example.com'
            },
            {
                name: 'Emily Davis',
                age: 27,
                email: 'emilydavis@example.com'
            },
            {
                name: 'Michael Lee',
                age: 38,
                email:'michaellee@example.com'
            },
            {
                name: 'Sarah Johnson',
                age: 48,
                email:'sarahjohnson@example.com'
            },
            {
                name: 'David Wilson',
                age: 58,
                email: 'davidwilson@example.com'
            },
            {
                name: 'Moana Boo',
                age: 29,
                email: 'moanaboo@example.com'
            },
            {
                name: 'Main Lee',
                age: 39,
                email:'mainlee@example.com'
            }
        ] , (err, result) => {
            if(err){
                return console.log('Error: cannot insert users');
            }
            console.log('Users inserted successfully');
        }
    ); 


    db.collection('users').find({age: 27}).toArray((err, docs) => {
        if(err){
            return console.log('Error: cannot fetch users');
        }
        console.log('Users:');
        console.log(docs);
    });

    db.collection('users').find({age: 27}).limit(3).toArray((err, docs) => {
        if(err){
            return console.log('Error: cannot fetch users');
        }
        console.log('Limited users:');
        console.log(docs);
    });


    db.collection('users').updateOne({_id:mongodb.ObjectId("66b24b02b51daf843b13e8a2")} , {
        $set: {
            name: 'Ahmed Osama'
        },
        $inc:{
            age: 5
        }
    });

    db.collection('users').updateOne({_id:mongodb.ObjectId("66b24b02b51daf843b13e8a3")} , {
        $set: {
            name: 'Mohamed Ayman'
        },
        $inc:{
            age: 5
        }
    });

    db.collection('users').updateOne({_id:mongodb.ObjectId("66b24b02b51daf843b13e8a4")} , {
        $set: {
            name: 'Rahaf Nassar'
        },
        $inc:{
            age: 5
        }
    });

    db.collection('users').updateOne({_id:mongodb.ObjectId("66b24b02b51daf843b13e8a5")} , {
        $set: {
            name: 'Alyaa Atef'
        },
        $inc:{
            age: 5
        }
    });

    db.collection('users').updateOne({_id:mongodb.ObjectId("66b24b02b51daf843b13e8a6")} , {
        $set: {
            name: 'Roaa Ayman'
        },
        $inc:{
            age: 5
        }
    });

    db.collection('users').updateMany({} , 
        {
            $inc: {
                age: 10
            }
        }
    )

    db.collection('users').deleteMany({age: 42} , (err, res) => {
        if(err){
            return console.log('Error: cannot delete users');
        }
        console.log(`Deleted ${res.deletedCount} users`);
    })
})