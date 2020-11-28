import { UserActions } from './user-actions';


const INITIAL_STATE = {
  users: []
};

const mapItems = (originalItems, items) => {
  return JSON.parse(JSON.stringify(originalItems.filter((item) => {
    let found = false;
    for (const client of items.deleted) {
      if (item.clientID === client.clientID) {
        found = true;
      }
    }
    if (!found) {
      return item;
    }
  }).map((item) => {
    for (const client of items.updated) {
      if (item.clientID === client.clientID) {
        item = client;
        break;
      }
    }
    return item;
  }).concat(items.new)));
}

const getUserByID = (users, {value}) => {
  for (const user of users){
    if (user.clientID == value){
      return user
    }
  }
}

export function createUsersReducer() {
  return (
    state = INITIAL_STATE,
    action
  ) => {

    switch (action.type) {
      case UserActions.UPDATE_USERS:
        return {
          ...state,
          users: mapItems(state.users, action.data)
        }
      case UserActions.GET_ALL_USERS:
        return {
          ...state,
          users:[]
        }
      case UserActions.ADD_CLIENT_TO_ROOM:
        return {
          ...state,
          users:[]
        }
      case UserActions.REMOVE_CLIENT_FROM_ROOM:
        return {
          ...state,
          users:[]
        }
      case UserActions.GET_USER_BY_ID:
        return {
          ...state,
          chattingTo: getUserByID(state.users, action.data)
        }
    }

    return state;
  };
}
