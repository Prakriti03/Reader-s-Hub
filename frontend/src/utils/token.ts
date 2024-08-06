export function saveToken(token: string) {
  localStorage.setItem("token", token);
}

export function getToken() {
  return localStorage.getItem("token");
}

export function isAuthenticated() {
  let token = undefined;
  token = getToken();
  if (token == undefined || token == null) {
    //or expired
    return false;
  } else {
    return true;
  }
}


