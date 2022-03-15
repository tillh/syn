import { Db, MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB;

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export async function connectToDatabase() {
    if (!uri) throw new Error('MONGODB_URI not defined!');
    if (!dbName) throw new Error('MONGODB_DB not defined');

    if (cachedClient && cachedDb) {
        return { client: cachedClient, db: cachedDb };
    }

    const client = await MongoClient.connect(uri);
    const db = await client.db(dbName);

    cachedClient = client;
    cachedDb = db;

    return { client, db };
}
