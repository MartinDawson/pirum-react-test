import React from 'react';
import App, { IAppProps } from './App';
import { shallow } from 'enzyme';
import MusicListContainer from './MusicList/MusicListContainer';

// Have to mock it out because useEffect
// is not supported by shallow yet
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useEffect: jest.fn((fn) => fn())
}))

const setup = (newProps?: IAppProps) => {
  const props: IAppProps = {
    getMusicData: jest.fn(),
    ...newProps
  };

  const wrapper = shallow(<App {...props} />);

  return {
      props,
      wrapper
  }
}

describe('App', () => {
  it('renders MusicListContainer', () => {
    const { wrapper } = setup();

    expect(wrapper.find(MusicListContainer)).toHaveLength(1);
  });

  it('calls getMusicData on mount', () => {
    const { props } = setup();

    expect(props.getMusicData).toBeCalledTimes(1);
  })
});
