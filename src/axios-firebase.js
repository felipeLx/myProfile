import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://imessanger-39b6d.firebaseio.com/'
});

export const config = {
    apiKey: 'AIzaSyCq6ZZvbNRRioXxYpE97448hS7x1t49OZw',
    authDomain: 'imessanger-39b6d.firebaseapp.com',
    databaseURL: 'https://imessanger-39b6d.firebaseio.com/'
};