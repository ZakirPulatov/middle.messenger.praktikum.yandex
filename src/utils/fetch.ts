const METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

function queryStringify(data) {
  const query = Object.entries(data).map(([key, value]) => {
    if (Array.isArray(value)) {
      value = value.join(',')
    }
    return `${key}=${value}`;
  }).join('&');

  return query ? `?${query}` : '';
}

class HTTPTransport {
  get = (url, options = {}) => {
    const query = options.data ? `?${queryStringify(options.data)}` : '';
    return this.request(url + query, {...options, method: METHODS.GET}, options.timeout);
  };

  post = (url, options = {}) => {
    return this.request(url, {...options, method: METHODS.POST}, options.timeout);
  };

  put = (url, options = {}) => {
    return this.request(url, {...options, method: METHODS.PUT}, options.timeout);
  };

  delete = (url, options = {}) => {
    return this.request(url, {...options, method: METHODS.DELETE}, options.timeout);
  };

  request = (url, options, timeout = 5000) => {
    
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(options.method, url);

      xhr.timeout = timeout;

      xhr.onload = function () {
        if (this.status >= 200 && this.status < 300) {
          resolve(xhr.response);
        } else {
          reject('Error');
        }
      };
      
      xhr.ontimeout = reject('Error');

      xhr.onerror = function () {
        reject('Error');
      };

      if (options.headers) {
        Object.keys(options.headers).forEach(key => {
          xhr.setRequestHeader(key, options.headers[key]);
        });
      }

      const data = options.data ? JSON.stringify(options.data) : null;
      xhr.send(data);
    });
  };
}

// const baseUrl = 'https://jsonplaceholder.typicode.com';
// const api = new HTTPTransport();

// api.get(`${baseUrl}/users`)
//   .then(response => console.log('GET:', JSON.parse(response)))
//   .catch(error => console.error('GET error:', error));

// api.post(`${baseUrl}/users`, {
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   data: {
//     name: 'New User',
//     username: 'newuser'
//   }
// })
//   .then(response => console.log('POST:', JSON.parse(response)))
//   .catch(error => console.error('POST error:', error));

// api.put(`${baseUrl}/users/1`, {
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   data: {
//     name: 'Updated User',
//     username: 'updateduser'
//   }
// })
//   .then(response => console.log('PUT:', JSON.parse(response)))
//   .catch(error => console.error('PUT error:', error));

// api.delete(`${baseUrl}/users/1`)
//   .then(response => console.log('DELETE:', response))
//   .catch(error => console.error('DELETE error:', error));

