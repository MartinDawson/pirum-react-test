import React from 'react';
import { mount } from 'enzyme';
import MusicListContainer from './MusicListContainer';
import MusicList from './MusicList';
import { Provider } from 'react-redux';
import { createStore, AnyAction } from 'redux';
import reducers from '../reducers';
import { IStoreState } from '../types';

jest.mock('./MusicList', () => () => <div />);

const setup = (newProps?: object) => {
    const props = {
        ...newProps
    };
  
    const store = createStore<IStoreState, AnyAction, {}, {}>(reducers);

    const wrapper = mount(
        <Provider store={store}>
            <MusicListContainer {...props} />
        </Provider>
    );
  
    return {
        props,
        wrapper,
        store
    }
};

describe('MusicListContainer', () => {
    it('mapStateToProps maps musicAlbums state correctly', () => {
        const { wrapper, store } = setup();

        expect(wrapper.find(MusicList).props().musicAlbums).toBe(store.getState().music.musicAlbums);
    });
});