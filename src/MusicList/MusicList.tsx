import * as React from 'react';
import classnames from 'classnames';
import { IMusicAlbum } from '../types';
import AlbumList from './AlbumList';
import styles from './MusicList.module.css';

export interface IMusicProps {
    musicAlbums: IMusicAlbum[];
}

const MusicList: React.FC<IMusicProps> = (props) => {
    const [expanded, setExpanded] = React.useState(false);

    return (
        <div className={classnames(styles.musicList, expanded && styles.expanded)}>
            <div className={styles.nameWrapper}>
                Albums
                <button className={styles.icon} onClick={() => setExpanded(!expanded)}></button>
            </div>
            <ul>
                {expanded && props.musicAlbums.map((musicAlbum) => (
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