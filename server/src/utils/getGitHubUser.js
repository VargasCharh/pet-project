const axios = require('axios');
const querystring = require('node:querystring');

const GITHUB_CLIENT_ID = '5ae10c1944c7cbae38f6';
const GITHUB_CLIENT_SECRET = 'de849a11fb9b4791d2229f5725ae223cb2858481';

async function getGitHubUser({ code }) {
  const githubToken = await axios
    .post(
      `https://github.com/login/oauth/access_token?client_id=${GITHUB_CLIENT_ID}&client_secret=${GITHUB_CLIENT_SECRET}&code=${code}`,
    )
    .then((res) => res.data)

    .catch((error) => {
      throw error;
    });

  const decoded = querystring.parse(githubToken);

  const accessToken = decoded.access_token;

  return axios
    .get('https://api.github.com/user', {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
    .then((res) => res.data)
    .catch((error) => {
      console.error(`Error getting user from GitHub`);
      throw error;
    });
}
export default getGitHubUser;
