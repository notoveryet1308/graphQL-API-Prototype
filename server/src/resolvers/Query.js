 import _ from 'lodash';
 // import {cityData, propertyData, ownerData} from './../data';

 const Query = {
   property(parent, args, {
     db
   }, info) {

     return _.find(db.propertyData, {
       id: args.id
     });
   },
   owner(parent, args, {
     db
   }, info) {
     return _.find(db.ownerData, {
       id: args.id
     });
   },
   city(parent, args, {
     db
   }, info) {
     return _.find(db.cityData, {
       name: args.name
     });
   },
   properties(parent, args, {
     db
   }, info) {
     return db.propertyData;
   },
   owners(parent, args, {
     db
   }, info) {
     return db.ownerData;
   }
 }

 export default Query;