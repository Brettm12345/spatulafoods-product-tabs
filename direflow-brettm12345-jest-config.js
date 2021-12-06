
// eslint-disable-next-line no-undef
jest.mock('@brettm12345/direflow-component', () => {
const { createContext } = require('react');
return {
  Styled: (props) => {
    return props.children;
  },
  EventContext: createContext(() => {}),
}
});
