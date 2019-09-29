import { Reducer } from 'redux';
import { MusicActionName, ISetMusicAlbumAction } from '../actions/musicActions';
import { IMusicData, IMusicAlbum } from '../types';

export interface IMusicState {
    musicAlbums: IMusicAlbum[];
};

type IAction = ISetMusicAlbumAction;

const transformMusicDataToAlbums = (musicData: IMusicData[]) => {
    const albumMap = new Map<string, IMusicAlbum>();

    musicData.forEach((data) => {
        const key = data.band + data.album;
        const existingAlbum = albumMap.get(key);
        const album: IMusicAlbum = {
            album: data.album,
            band: data.band,
            songs: existingAlbum ? existingAlbum.songs.concat(data.song) : []
        };

        albumMap.set(key, album);
    });

    return Array.from(albumMap.values());
};

const musicReducer: Reducer<IMusicState, IAction> = (state, action) => {
    switch (action.type) {
        case MusicActionName.SET_MUSIC_ALBUMS:
            return {
                ...state,
                musicAlbums: transformMusicDataToAlbums(action.musicData)
            };
        default:
            return {
                musicAlbums: []
            };
    }
};

export default musicReducer;