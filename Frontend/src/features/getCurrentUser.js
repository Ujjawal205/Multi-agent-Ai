import api from '../../utils/axios';

const getCurrentUser = async () => {
    try{
        const response = await api.get('/api/me');
        console.log("Current user:", response.data.user);
        return response.data.user;
     } catch (error) {
        if (error.response?.status === 401) {
            return null
        }
        console.error("Failed to get current user:", error)
        return null
    }
}

export default getCurrentUser;