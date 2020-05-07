import _ from 'lodash';
// import {cityData, propertyData, ownerData} from './../data';

const Owner = {
  property(parent, args, {db}, info) {
    if(!args){
      return db.ownerData
    }
    return _.filter(db.propertyData, {
      ownerId: parent.id
    });
  }
};

export default  Owner;