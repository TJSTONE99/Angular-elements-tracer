import { MessagesActions } from './message-actions';


const INITIAL_STATE = {
  messages: []
};

const mapItems = (originalItems, items) => {
  return JSON.parse(JSON.stringify(originalItems.filter((item) => {
    let found = false;
    for (const block of items.deleted) {
      if (item._id === block._id) {
        found = true;
      }
    }
    if (!found) {
      return item;
    }
  }).map((item) => {
    for (const block of items.updated) {
      if (item._id === block._id) {
        item = block;
        break;
      }
    }
    return item;
  }).concat(items.new)));
}

export function createMessagesReducer() {
  return (
    state = INITIAL_STATE,
    action
  ) => {

    switch (action.type) {
      case MessagesActions.GET_ALL_SENT_MESSAGES:
        return {
          ...state,
          messages: mapItems(state.messages, action.data)
        }
    }

    return state;
  };
}
