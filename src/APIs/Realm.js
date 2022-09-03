var axios = require("axios");

const endpoint = "https://us-east-1.aws.data.mongodb-api.com/app/udecursos_realm-rwjuf/endpoint";
const api = process.env.REACT_APP_REALM_TOKEN;

export async function getCareer(code) {
  let request = {
    method: "GET",
    url: endpoint + "/careers?career=" + code,
    headers: {
      "api-key": api,
    }
  };

  const response = await axios(request);
  return response.data.response[0];
};

export async function getCareerTasks(code) {
  let request = {
    method: "GET",
    url: endpoint + "/careers/tasks?careerCode=" + code,
    headers: {
      "api-key": api,
    }
  };

  const response = await axios(request);
  return response.data.response;
};
