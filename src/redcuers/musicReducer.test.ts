import musicReducer from './musicReducer';
import { setMusicAlbums, MusicActionName } from '../actions/musicActions';
import musicDataJson from '../../public/data.json';
import musicAlbumsJson from '../mocks/musicAlbums.json';

describe('musicReducer', () => {
    it(`${MusicActionName.SET_MUSIC_ALBUMS} transforms the musicData and returns the musicAlbums state from the reducer`, () => {
        const state = musicReducer(undefined, setMusicAlbums(musicDataJson));

        expect(state).toEqual({
            musicAlbums: musicAlbumsJson
        });
    });
});