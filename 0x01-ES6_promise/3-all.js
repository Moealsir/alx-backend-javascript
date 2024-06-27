import { uploadPhoto, createUser} from './utils';
function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((results) => {
      const [photoResult, userResult] = results;
      console.log(`Photo: ${photoResult.body}; User: ${userResult.firstName} ${userResult.lastName}`);
    })
    .catch((error) => {
      console.log('Signup system offline');
    });
}

export default handleProfileSignup;
