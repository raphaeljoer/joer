import { Db, MongoClient } from 'mongodb';

type MongoDBConnectType = {
  client?: MongoClient;
  error: unknown;
};

type Params = {
  uri: string;
  dbname: string;
};

let cachedDb: Db;

export const connectToMongoDB = async ({ uri, dbname }: Params) => {
  if (cachedDb) return cachedDb;
  const { client, error }: MongoDBConnectType = await MongoClient.connect(uri)
    .then((client) => ({ client, error: undefined }))
    .catch((error) => ({ client: undefined, error }));
  if (error) console.error('error:', error);
  if (!client) throw new Error('MongoDB connection error');
  const db = client.db(dbname);
  cachedDb = db;
  return db;
};
