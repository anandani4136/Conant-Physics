export default url = "http://localhost:3000";

export default function backendReq(method, urlExt, body, callback) {
    const http = new XMLHttpRequest();
    http.responseType = 'json';

    http.open(method, url + handler, true);

    if (body != null) {
        http.setRequestHeader('Content-Type', 'application/json');
    }

    http.onload = function() {
        callback(http.response);
    }

    http.send(JSON.stringify(body));

    return http.responseText;
}