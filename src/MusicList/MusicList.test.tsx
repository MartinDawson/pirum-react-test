import React from 'react';
import { shallow } from 'enzyme';
import MusicList, { IMusicProps } from './MusicList';
import musicAlbumsJson from '../mocks/musicAlbums.json';
import { IMusicAlbum } from '../types';
import AlbumList from './AlbumList';

const setup = (newProps?: IMusicProps) => {
    const props = {
        musicAlbums: [],
        ...newProps
    };

    const wrapper = shallow(<MusicList {...props} />);

    return {
        props,
        wrapper
    }
}

describe('MusicList', () => {
    it('renders every AlbumList in a ul', () => {
        const musicAlbums = musicAlbumsJson;
        const { wrapper } = setup({ musicAlbums });
        const albumList = wrapper.find('ul').find(AlbumList);

        expect(albumList).toHaveLength(musicAlbums.length);
    });
});
