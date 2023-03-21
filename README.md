# my-blog-backend

# mongodb installation

1. first install Homebrew - https://brew.sh/
2. run the command: brew tap mongodb/brew
3. run the command: brew install mongodb-community@5.0

# db config

1. create data folder (mongo-db-data)
2. open additional terminal and run the command: mongod --dbpath ./mongo-db-data/ (mongo now running on background)
3. connect to the mongo shell, run the command: mongo
4. create new db - run: use 'db-name' (in my case I called it react-blog-db)
5. replase the mock with real db, run:
   db.articles.insertMany([{
   name: "learn-react",
   upvotes: 0,
   comments: [],
   },
   {
   name: "learn-node",
   upvotes: 0,
   comments: [],
   },
   {
   name: "mongodb",
   upvotes: 0,
   comments: [],
   }])
6. if you want to see all of the docs run: db.articles.find({}) or db.articles.find({}).pretty()
7. if you want to find a specific object you can use the find method with property - db.articles.find({name: "learn-react"})
