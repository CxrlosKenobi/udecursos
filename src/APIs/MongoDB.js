var axios = require("axios");

const endpoint = "http://127.0.0.1:5000/api";

export async function getCareer(code) {
  let request = {
    method: "GET",
    url: endpoint + "/careers/" + code
  };

  const response = await axios(request);
  return response.data;
};

export async function getCareerTasks(code) {
  let request = {
    method: "GET",
    url: endpoint + "/careers/" + code + "/tasks"
  };

  const response = await axios(request);
  return response.data;
};
