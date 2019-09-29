import React from 'react';
import { shallow } from 'enzyme';
import MusicList, { IMusicProps } from './MusicList';
import musicAlbumsJson from '../mocks/musicAlbums.json';
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
    it('renders every AlbumList in a ul when expanded is true', () => {
        const musicAlbums = musicAlbumsJson;
        const { wrapper } = setup({ musicAlbums });
        const icon = wrapper.find('.nameWrapper').find('.icon');

        icon.simulate('click');

        const albumList = wrapper.find('ul').find(AlbumList);    

        expect(albumList).toHaveLength(musicAlbums.length);
    });

    it('does not render AlbumList when expanded is false', () => {
        const musicAlbums = musicAlbumsJson;
        const { wrapper } = setup({ musicAlbums });
        const albumList = wrapper.find('ul').find(AlbumList);    

        expect(albumList).toHaveLength(0);
    });

    it('adds expanded className to wrapper when expanded is true', () => {
        const { wrapper } = setup();
        const icon = wrapper.find('.nameWrapper').find('.icon');

        icon.simulate('click');

        expect(wrapper.hasClass('expanded')).toBe(true);
    });

    it('does not have expanded className on wrapper when expanded is false', () => {
        const { wrapper } = setup();

        expect(wrapper.hasClass('expanded')).toBe(false);
    });
});
