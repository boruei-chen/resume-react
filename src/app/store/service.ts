export const sagaBoundary = <A>(saga: (action: A) => void) => {
  return function * (action: A) {
    try {
      yield saga(action);
    } catch (error) {
      console.log(error);
    }
  };
};
