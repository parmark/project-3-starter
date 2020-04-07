import axios from 'axios';

export default {
  Users: {
    login: function (email, password) {
      return axios.post('/api/users/login', { email, password });
    },

    create: function (email, password) {
      return axios.post('/api/users', { email, password });
    },

    getMe: function (authToken) {
      return axios.get('/api/users/me', {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
    }
  },
  Forms: {
    getAll: function (authToken) {
      return axios.get('/api/galleries', {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
    },
    create: function (name) {
        return axios.post('/api/galleries', {name});
    }
  }
}
