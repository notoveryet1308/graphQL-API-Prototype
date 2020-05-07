import _ from 'lodash';
// import {cityData, propertyData, ownerData} from './../data';

const Property = {
  owner(parent, args, {db}, info) {
    if (!args) {
      return db.ownerData;
    }
    return _.find(db.ownerData, {
      id: parent.ownerId
    })
  }
};

export default  Property;