const configuration = {
  // client_id: 'qPceeIFKf8FyZVnGV1qYlXxYiZgQ2ySM3ZyQEH7a',
  client_id: '6vnP0utSSzj7NAp1eNp8glR4HYePMeHz2JDsbbuL',
  redirect_uri: 'http://localhost:8001/authentication/callback',
  response_type: 'code',
  post_logout_redirect_uri: 'http://localhost:8001/',
  scope: 'openid ',
  // authority: 'https://0d83-103-218-24-121.ngrok.io',
  authority: 'https://sso.hivecorelimited.com',
  silent_redirect_uri: 'http://localhost:8001/authentication/silent_callback',
  automaticSilentRenew: true,
  loadUserInfo: true,
  revokeAccessTokenOnSignout:true
};

export default configuration;
