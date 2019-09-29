import { connect } from 'react-redux';
import { getMusicData } from './actions/musicActions';
import App from './App';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { IStoreState } from './types';

const mapDispatchToProps = (dispatch: ThunkDispatch<IStoreState, {}, AnyAction>) => ({
  getMusicData: () => dispatch(getMusicData())
})

export default connect(null, mapDispatchToProps)(App);