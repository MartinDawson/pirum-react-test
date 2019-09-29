import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore, AnyAction } from 'redux';
import reducers from './reducers';
import { IStoreState } from './types';
import AppContainer from './AppContainer';
import App from './App';

jest.mock('./App', () => () => <div />);
jest.mock('./actions/musicActions', () => ({
    ...jest.requireActual('./actions/musicActions'),
    getMusicData: jest.fn().mockReturnValue('getMusicDataFn')
}))

const setup = (newProps?: object) => {
    const props = {
        ...newProps
    };
  
    const store = createStore<IStoreState, AnyAction, {}, {}>(reducers);

    store.dispatch = jest.fn();

    const wrapper = mount(
        <Provider store={store}>
            <AppContainer {...props} />
        </Provider>
    );
  
    return {
        props,
        wrapper,
        store
    }
};

describe('AppContainer', () => {
    it('mapDispatchToProps dispatches getMusicData correctly', () => {
        const { wrapper, store } = setup();
        
        wrapper.find(App).props().getMusicData();

        expect(store.dispatch).toHaveBeenCalledTimes(1);
        expect(store.dispatch).toHaveBeenCalledWith('getMusicDataFn');
    });
});