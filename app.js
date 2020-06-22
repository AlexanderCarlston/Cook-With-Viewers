var token, userId;
var options = []

// so we don't have to write this out everytime 
const twitch = window.Twitch.ext;

console.log(twitch)

twitch.onAuthorized((auth) => {
  // save our credentials
  token = auth.token; //JWT passed to backend for authentication 
  userId = auth.userId; //opaque userID 
});