import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import Button from '.';

describe('Button Component', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should not crash', () => {
    const rootContainer = document.createElement('div');
    ReactDOM.render(<Button value="test" />, rootContainer);
  });

  it('should have correct value', () => {
    const wrapper = shallow(<Button value="test" />);
    expect(wrapper.find('button').text()).toBe('test');
  });

  it('should call on click', () => {
    const onClick = jest.fn();
    const wrapper = shallow(<Button value="test" onClick={onClick} />);
    const button = wrapper.find('button');
    button.simulate('click');
    expect(onClick).toBeCalled();
  });
});
