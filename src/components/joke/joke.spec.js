import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Joke from '.';

describe('Joke Component', () => {
  it('should not crash', () => {
    const rootContainer = document.createElement('div');
    ReactDOM.render(<Joke value="test" />, rootContainer);
  });

  it('should have correct value', () => {
    const wrapper = shallow(<Joke value="test" />);
    expect(wrapper.text()).toBe('test');
  });
});
