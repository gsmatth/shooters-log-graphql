import competitionModel from '../../models/competition-model';
import competitionType from '../types/competition-type';
import matchModel from '../../models/match-model';
import matchType from '../types/match-type';
import httpErrors from 'http-errors';

import {
  GraphQLID,
  GraphQLInt,
  GraphQLString,
  GraphQLNonNull,
  GraphQLList
} from 'graphql';


  const matchQueries = {

  getMatch: {
    type: matchType,
    args: {
      _id: {
        type: new GraphQLNonNull(GraphQLID)
      }
    },
    resolve: async (prevValue, args, {}) => {
      console.log('entered getMatch');
        return new Promise((resolve, reject) => {
          console.log('value of args.id: ', args._id);
          matchModel.findOne({'_id': args._id})
            .then(match => {
              console.log('results of find in match-query.js:  ', match);
              resolve(match);
            })
            .catch(err => reject(httpErrors(404, err.message)));
        });
    },
    }, 

  getAllMatches: {
    type: new GraphQLList(matchType),
    resolve: async (prevValue, _ , {}) => {
      console.log('entered getAllMatchs');
      return new Promise((resolve, reject) => {
        matchModel.find()
        .then(matchs => {
          console.log('results in getAllMatchs: ', matchs)
          resolve(matchs);
        })
        .catch(err => reject(httpErrors(404, err.message)));
      });
    }
  }
  };

export {
  matchQueries,
};
