import axios from 'axios';
import musicApi from './musicApi';
import musicDataJson from '../../public/data.json';

// Could also have used axios mock library and 
// probably would in real impl.
jest.mock('axios', () => {
    const mockMusicDataJson = require('../../public/data.json');

    return {
        get: jest.fn().mockResolvedValue({
            data: mockMusicDataJson
        })
    };
});

describe('musicApi', () => {
    it('getMusicData calls get with /api/music-list', async () => {
        await musicApi.getMusicData();

        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(axios.get).toHaveBeenCalledWith('/api/music-list');
    });

    it('getMusicData returns musicData correctly', async () => {
        const response = await musicApi.getMusicData();

        expect(response).toBe(musicDataJson);
    });
});
