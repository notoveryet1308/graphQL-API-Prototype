import _ from 'lodash';

const Mutation = {
    createProperty(parent, args, {db, pubsub}, info) {
      const newproperty = {
        id: "4",
        name: args.name,
        price: args.price,
        isAvaliable: args.isAvaliable,
        city: args.city,
        parking: args.parking,
        ownerId: args.ownerId
      }
      db.propertyData.push(newproperty);
      pubsub.publish('PROPERTY_ADDED', {propertyAdded: newproperty});
      return newproperty;
    }
  };

  export default Mutation; 