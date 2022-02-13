class Api {
  constructor(option) {
    this._url = option.baseUrl;
  }

  _handleResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Error ${res.status}`);
  }

  getSites(data) {
    return fetch(`${this._url}/sites`, {
      method: "GET",
    }).then(this._handleResponse);
  }
  getTests() {
    return fetch(`${this._url}/tests`, {
      method: "GET",
    }).then(this._handleResponse);
  }
}

// инстанс + экспорт объекта для запросов
const api = new Api({
  baseUrl: "http://localhost:3100",
});

export default api;
