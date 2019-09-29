import React from 'react';
import { shallow } from 'enzyme';
import { IMusicProps } from './MusicList';
import musicAlbumsJson from '../mocks/musicAlbums.json';
import { IMusicAlbum } from '../types';
import AlbumList, { IAlbumListProps } from './AlbumList';

const setup = (newProps?: IAlbumListProps) => {
    const props: IAlbumListProps = {
        musicAlbum: musicAlbumsJson[0],
        ...newProps
    };

    const wrapper = shallow(<AlbumList {...props} />);

    return {
        props,
        wrapper
    }
}

describe('AlbumList', () => {
    it('renders the band name & album in albumNameWrapper', () => {
        const { wrapper, props} = setup();
        const bandName = wrapper.find('.albumNameWrapper').find('.albumName');

        expect(bandName.text()).toBe(`${props.musicAlbum.band} - ${props.musicAlbum.album}`);
    });

    it('renders the song names for each album when epanded is true', () => {
        const { wrapper } = setup();
        const songs: IMusicAlbum['songs'] = [];
        const icon = wrapper.find('.albumNameWrapper').find('.icon');

        icon.simulate('click');

        musicAlbumsJson.forEach((musicAlbum) => {
            musicAlbum.songs.forEach((song) => {
                songs.push(song);
            });
        });

        const songNames = wrapper.find('.songName');

        songNames.forEach((songName, i) => {
            const mockSongName = songs[i];

            expect(songName.text()).toBe(mockSongName);
        });

        expect(songNames).not.toHaveLength(0);
    });

    it('does not render the song names when epanded is false', () => {
        const { wrapper } = setup();
        const songNames = wrapper.find('.songName');

        expect(songNames).toHaveLength(0);
    });

    it('adds expanded className to albumList when expanded is true', () => {
        const { wrapper } = setup();
        const icon = wrapper.find('.albumNameWrapper').find('.icon');

        icon.simulate('click');

        const albumList = wrapper.find('.albumList');

        expect(albumList.hasClass('expanded')).toBe(true);
    });

    it('does not have expanded className on albumList when expanded is false', () => {
        const { wrapper } = setup();
        const albumList = wrapper.find('.albumList');

        expect(albumList.hasClass('expanded')).toBe(false);
    });

    it('renders icon button in albumNameWrapper', () => {
        const { wrapper } = setup();
        const icon = wrapper.find('.albumNameWrapper').find('.icon');

        expect(icon.type()).toBe('button');
    });
});
