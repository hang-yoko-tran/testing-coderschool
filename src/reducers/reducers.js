export const counterReducer = (state = { count: 1 }, action) => {
    switch(action.type) {
      case 'INCREMENT_COUNTER':
        return { count: state.count + 1}
      default:
        return state;
    }
  }