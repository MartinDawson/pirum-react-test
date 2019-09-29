import { getMusicData, setMusicAlbums, MusicActionName } from './musicActions';
import musicDataJson from '../../public/data.json';
import { IMusicData } from '../types';

jest.mock('../api/musicApi', () => {
    const mockMusicDataJson = require('../../public/data.json');

    return {
        getMusicData: jest.fn<Promise<IMusicData[]>, IMusicData[]>().mockResolvedValue(mockMusicDataJson as IMusicData[])
    };
});

describe('musicActions', () => {
    it('setMusicAlbums is mapped correctly', () => {
        const setMusicAlbumsAction = setMusicAlbums(musicDataJson);

        expect(setMusicAlbumsAction).toEqual({
            musicData: musicDataJson,
            type: MusicActionName.SET_MUSIC_ALBUMS
        });
    });

    describe('getMusicData', () => {
        it('calls the musicApi', async () => {
            const mockDispatch = jest.fn();
            const thunk = getMusicData();

            await thunk(mockDispatch);

            expect(mockDispatch).toHaveBeenCalledWith(setMusicAlbums(musicDataJson));
        });
    });
});
