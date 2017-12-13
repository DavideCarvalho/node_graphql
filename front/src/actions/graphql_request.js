import axios from 'axios';

const makeGraphqlRequest = async (url, query, variables, headers) => {
  let response
  try {
    response = await axios.post(url, { query, variables }, headers)
    response.data = {...response.data.data}
    delete response.data.data
  } catch (e) {
    response = e;
  }
  return response;
}

export default makeGraphqlRequest;