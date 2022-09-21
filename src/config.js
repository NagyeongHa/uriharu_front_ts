let backendHost;

const hostname = window && window.location && window.location.hostname;

if (hostname === "localhost") {
  backendHost = "http://localhost:8080/uriharu";
} else {
  backendHost = "https://uri-haru.herokuapp.com";
}

export const API_BASE_URL = `${backendHost}`;
