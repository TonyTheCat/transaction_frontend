import axios from 'axios';

export const getTranslations = async () => {
    const res = await axios.get('http://localhost:3000/translations');
    return res.data;
}