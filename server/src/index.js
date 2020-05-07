// import {
//   GraphQLServer,
//   PubSub
// } from 'graphql-yoga';
// import db from './data';
// import cors from 'cors';
// import _ from 'lodash';
// import express from 'express';
// import resolvers from './resolvers/resolver';

// const app = express();
// app.use(cors())

// const pubsub = new PubSub();
// const server = new GraphQLServer({

//   typeDefs: './src/schema.graphql',
//   resolvers,
//   context: {
//     db,
//     pubsub
//   }
// });

// server.start((url) => console.log(`Server is up ${url}`));

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import {
  ApolloServer
} from 'apollo-server-express'
import {createServer} from 'http';
import resolvers from './resolvers/resolver';
import typeDefs from './schema';
import db from './data';
import {
  PubSub
} from 'apollo-server';

const PORT = 4000;
const pubsub = new PubSub();
const app = express();
app.use(bodyParser.json());
app.use(cors());
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    db,
    pubsub
  },
  playground:{
    endpoint:'/graphql'
  }
})

server.applyMiddleware({
  app
});

const httpServer = createServer(app);
server.installSubscriptionHandlers(httpServer)


httpServer.listen({port: PORT}, () => {
   console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
  console.log(`🚀 Subscriptions ready at ws://localhost:${PORT}${server.subscriptionsPath}`)
});


// app.use('/graphql', graphqlExpress({
//   schema
// }));

// app.use('/graphiql', graphiqlExpress({
//   endpointURL: '/graphql',
//   subscriptionsEndpoint:`ws://localhost:${PORT}/subscriptions`
// }));

// const server = createServer(app);
// server.listen(PORT, () => {
//   console.log(`Server is running on ${PORT}`);
//   new SubscriptionServer({
//     execute,
//     subscribe,
//     schema
//   },{
//     server,
//     path: '/subscriptions'
//   })
// })





// const httpServer = require('http').createServer(app)
// graphQlServer.installSubscriptionHandlers(httpServer)












// const typeDefs = `
//   type Query{
//     property(id: ID!): Property!
//   }
//   type Property{
//     id: ID!
//     name: String!
//     price: Int!
//     isAvaliable: Boolean!
//     city: String!
//     parking: Boolean
//   }
// `