var config = {
  apiKey: 'AIzaSyDsjzzwlqFSTNNxhLSvDXdp3xnzJn-eOyg',
  authDomain: 'simba-test-repo.firebaseapp.com',
  databaseURL: 'https://simba-test-repo.firebaseio.com',
  projectId: 'simba-test-repo',
  storageBucket: 'simba-test-repo.appspot.com',
  messagingSenderId: '1126097166'
};
firebase.initializeApp(config);
export const db = firebase.database();
