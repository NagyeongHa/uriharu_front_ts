let backendHost;

const hostname = window && window.location && window.location.hostname;

if (hostname === "localhost") {
  backendHost = "http://localhost:8080/uriharu";
} else {
  backendHost =
    "https://port-0-uriharu-backend-422t024lblxt1w1.gksl2.cloudtype.app/";
}

export const API_BASE_URL = `${backendHost}`;
