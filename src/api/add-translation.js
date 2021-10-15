import axios from 'axios';

export const addTranslation = async (id, translation) => {
    const res = await axios.post('http://localhost:3000/translations/add',{id: id, translation: translation});
    return res.data;
}