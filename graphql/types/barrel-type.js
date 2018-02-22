import barrelType from './barrel-type';

import {
  GraphQLObjectType, 
  GraphQLString, 
  GraphQLID, 
  GraphQLNonNull, 
  GraphQLInt} from 'graphql';



export default  new GraphQLObjectType({
  name: 'barrelType',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLID),
    },
    barrelName: {
      type: GraphQLString
    },
    rifleName: {
      type: GraphQLString
    },
    barrelBrand: {
      type: GraphQLString
    },
    barrelType: {
      type: GraphQLString
    },
    barrelTwist: {
      type: GraphQLString
    },
    barrelLength: {
      type: GraphQLInt
    }, 
    barrelChambered: {
      type: GraphQLInt
    },
    barrelLife: {
      type: GraphQLString
    },
    currentRoundCount: {
      type: GraphQLInt
    }
  }),
});