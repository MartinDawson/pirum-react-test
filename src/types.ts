import { IMusicState } from "./redcuers/musicReducer";

export interface IMusicData {
  band: string;
  album: string;
  song: string; 
}

export interface IMusicAlbum {
  band: string;
  album: string;
  songs: string[];
}

export interface IStoreState {
  music: IMusicState;
}