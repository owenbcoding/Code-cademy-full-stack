// Topic: React and Redux
// React/Redux need a bundler + JSX transform, so this isn't runnable
// with plain `node index.js` like the other lesson files. Treat this
// as reference pseudo-code — scaffold a real app (e.g. Vite) to run it.

// A minimal function component:
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

// A minimal Redux-style reducer:
function counterReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    default:
      return state;
  }
}
