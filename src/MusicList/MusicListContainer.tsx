import MusicList from './MusicList';
import { connect } from 'react-redux';
import { IStoreState } from '../types';

const mapStateToProps = (state: IStoreState) => ({
    musicAlbums: state.music.musicAlbums
})

interface IStateProps {
    musicAlbums: IStoreState['music']['musicAlbums'];
}

export default connect<IStateProps, {}, {}, IStoreState>(mapStateToProps)(MusicList);