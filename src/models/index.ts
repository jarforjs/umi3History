export default {
  namespace: 'index',
  state: {},

  effects: {},

  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
  subscriptions: {
    setup: ({ dispatch, history }) => {
      return history.listen((route) => {
        // dev访问根路径的时候也会进入history.listen
        console.log(route, 'pppp');
      });
    },
  },
};
