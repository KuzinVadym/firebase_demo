import { v4 as uuidv4 } from 'uuid';

export default {
  Query: {
    users: async (_parent, _args, {models}) => {
      return await models.User.find();
    },
    user: async (_parent, { id }, { models }) => {
      return models.User.findById(id);
    }
  },
  Mutation: {
    create: async (
        _parent,
      { username, email, password },
      { models },
    ) => {
      return models.User.create({
        id: uuidv4(),
        username,
        email,
        password,
      });
    },
    
    update: async (
        _parent,
      args,
      { models},
    ) => {
      return models.User.findOneAndUpdate({id: args.id}, args, {new: true});
    },
    
    delete: async (
        _parent,
      args,
      { models },
    ) => {
      return await models.User.findOneAndDelete({id: args.id});
    },
  }
};
