
interface IUser {
  id: string;
  username: string;
  email: string;
}

interface IUpdatePayload {
  id: string;
  user: IUser
}

interface IUserClass {

}

const defaultEntities: IUser[] = [
  {id: '1', username: 'Vadym', email: 'v@gmail.com', },
  {id: '2', username: 'Olha', email: 'o@gmail.com', },
  {id: '3', username: 'Aron', email: 'a@gmail.com', }
];

class User implements IUserClass{
  entities: IUser[] = [];

  constructor(entities: IUser[]){
    this.entities = entities;
  }

  async find() {
    return this.entities
  }

  async findById(id: string) {
    return this.entities.find(entity => entity.id === id)
  }

  async create(payload: IUser) {
    this.entities.push(payload);
    return payload
  }

  async findOneAndUpdate(payload: IUpdatePayload) {
    const newUser = {...this.entities.find(entity => entity.id === payload.id)};
    for (let key in payload.user){
      if (payload.user.hasOwnProperty(key)) {
        newUser[key] = payload.user[key]
      }
    }
    return newUser;
  }

}

const user = new User(defaultEntities);

export default user;