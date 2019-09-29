import React from 'react';
import { IMusicAlbum } from '../types';
import classnames from 'classnames';
import styles from './AlbumList.module.css';

export interface IAlbumListProps {
    musicAlbum: IMusicAlbum;
}

const AlbumList: React.FC<IAlbumListProps> = ({
    musicAlbum
}) => {
    const [expanded, setExpanded] = React.useState(false);

    return (
        <li 
            className={classnames(styles.albumList, expanded && styles.expanded)} 
        >
            <div className={styles.albumNameWrapper}>
                <div className={styles.albumName}>{musicAlbum.band} - {musicAlbum.album}</div>
                <button className={styles.icon} onClick={() => setExpanded(!expanded)}></button>
            </div>
            <ul>
            {expanded && musicAlbum.songs.map((song) => (
                <li key={song} className={styles.songName}>
                    {song}
                </li>
            ))}
            </ul>
        </li>
    );
}

export default AlbumList;