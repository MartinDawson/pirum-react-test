import { Action, Dispatch } from 'redux';
import musicApi from '../api/musicApi';
import { IMusicData } from '../types';

export enum MusicActionName {
    SET_MUSIC_ALBUMS = 'SET_MUSIC_ALBUMS'
}

export interface ISetMusicAlbumAction extends Action<MusicActionName.SET_MUSIC_ALBUMS> {
    musicData: IMusicData[];
};

export const setMusicAlbums = (musicData: IMusicData[]): ISetMusicAlbumAction => ({
    musicData,
    type: MusicActionName.SET_MUSIC_ALBUMS
});

export const getMusicData = () => {
    return async (dispatch: Dispatch) => {
        const musicData = await musicApi.getMusicData();

        dispatch(setMusicAlbums(musicData));
    }
}