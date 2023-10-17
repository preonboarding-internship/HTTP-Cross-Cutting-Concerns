class HttpClient {
  // 1. baseURL
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  // 2. 모든 fetch 전에, access_token을 추가한다.
  fetch(url, options = {}) {
    console.log("token 추가");

    return fetch(`${this.baseURL}${url}`, {
      ...options,
      headers: {
        Authorization: sessionStorage.getItem("access_token"),
        ...options.headers
      }
    });
  }
}

export const httpClient = new HttpClient(
  "https://jsonplaceholder.typicode.com/"
);
