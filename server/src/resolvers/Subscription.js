const Subscription = {
   propertyAdded:{
     subscribe(parent, args, {pubsub}, info){
        return pubsub.asyncIterator('PROPERTY_ADDED')
     }
   }
}

export default Subscription; 