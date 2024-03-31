import axios from 'axios';

const apiUrl = 'https://660419f62393662c31d09def.mockapi.io/api/news';

// export const fetchNewsData = async () => {
//     try {
//         const response = await fetch('https://660419f62393662c31d09def.mockapi.io/api/news',{
//             method: 'GET',
//             headers: {'content-type':'application/json'},
//           });
//         if (!response.ok) {
//             throw new Error('Failed to fetch data');
//         }
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         throw error; 
//     }
// };

// Function to fetch all news articles
export const fetchNewsData = async () => {
    try {
        const response = await axios.get(apiUrl);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

// Function to create a new news article
export const createNewsArticle = async (articleData) => {
    try {
        const response = await axios.post(apiUrl, articleData);
        return response.data;
    } catch (error) {
        console.error('Error creating news article:', error);
        throw error;
    }
};

// Function to update an existing news article
export const updateNewsArticle = async (articleId, updatedData) => {
    try {
        const response = await axios.put(`${apiUrl}/${articleId}`, updatedData);
        return response.data;
    } catch (error) {
        console.error('Error updating news article:', error);
        throw error;
    }
};

// Function to delete a news article
export const deleteNewsArticle = async (articleId) => {
    try {
        const response = await axios.delete(`${apiUrl}/${articleId}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting news article:', error);
        throw error;
    }
};

// Function to view details of a news article
export const viewNewsArticle = async (articleId) => {
    try {
        const response = await axios.get(`${apiUrl}/${articleId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching news article details:', error);
        throw error;
    }
};
