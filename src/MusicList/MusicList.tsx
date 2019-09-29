import * as React from 'react';
import { IMusicAlbum } from '../types';
import AlbumList from './AlbumList';

export interface IMusicProps {
    musicAlbums: IMusicAlbum[];
}

const MusicList: React.FC<IMusicProps> = (props) => {
    return (
        <div>
            <div>Albums</div>
            <ul>
                {props.musicAlbums.map((musicAlbum) => (
                    <AlbumList
                        key={musicAlbum.band + musicAlbum.album}
                        musicAlbum={musicAlbum} 
                    />
                ))}
            </ul>
        </div>
    );
}

export default MusicList;