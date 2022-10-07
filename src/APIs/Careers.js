var axios = require("axios");

const endpoint = "http://udecursos-backend.vercel.app/api";

export async function getCareer(code) {
  let request = {
    method: "GET",
    baseURL: endpoint,
    url: "/careers",
    params: {
      code: code
    }
  };
  const response = await axios(request);

  return response.data;
};

export async function getCareerTasks(code) {
  let request = {
    method: "GET",
    baseURL: endpoint,
    url: "/tasks",
    params: {
      code: code
    }
  };

  const response = await axios(request);
  return response.data;
};
