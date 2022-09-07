//Design an API that limits maximum concurrent requests for a domain?

(function main() {
  const _max = 2;
  const _timeout = 5000;
  const _maxFail = 5;
  var m = {};

  function queueAPI(request) {
    if (m[request.host]) {
      m[request.host].req.push(request);
    } else {
      m[request.host] = {
        req: [request],
        count: 0,
      };
    }
    if (m[request.host].count < _max) {
      _fetch(request);
    }
  }

  function _fetch(request) {
    m[request.host].req.pop();
    m[request.host].count++;
    http.fetch(request).then(
      function () {
        m[request.host].count--;
        if (m[request.host].req.length > 0) {
          queueAPI(m[request.host].req[0]);
        }
      },
      function (e) {
        m[request.host].count--;
        request.failureCount
          ? request.failureCount++
          : (request.failureCount = 1);
        if (e.responseCode == 404) {
          if (request.failureCount <= 5) {
            setTimeout(function () {
              _fetch(request);
            }, _timeout * request.failureCount);
          } else {
            console.log("fail");
          }
        }
        console.log(e);
      }
    );
  }
})();
