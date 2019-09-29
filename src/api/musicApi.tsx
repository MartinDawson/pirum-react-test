import axios from 'axios';
import { IMusicData } from '../types';

export default {
    getMusicData: async (): Promise<IMusicData[]> => {
        // Needs error handling in real impl.
        const result = await axios.get('/api/music-list');

        return result.data;
    }
}