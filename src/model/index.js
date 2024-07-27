import mongodb from 'mongodb'

//connection url
const url = 'mongodb+srv://swornimamishra:Admin123@cluster0.6jjqgem.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

//Creating client
const client = new mongodb.MongoClient(url)

//Database name

const dbName = 'B52WEE'

export default{
    client,
    dbName
}
