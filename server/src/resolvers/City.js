import _ from 'lodash';
import {cityData, propertyData, ownerData} from './../data';

const City = {
    properties(parent, args, {db}, info) {
      return _.filter(db.propertyData, {
        city: parent.name
      });
    }
  };

export default City;