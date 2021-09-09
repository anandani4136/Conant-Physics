const url = "http://localhost:5000";



export const backendReq = (method, urlExt, callback) => {
    const http = new XMLHttpRequest();
    alert('ajax req made')
    http.withCredentials = true;
    http.responseType = 'json';

    http.open(method, url + urlExt);
    alert('req opened')

    // if (body != null) {
    //     http.setRequestHeader('Content-Type', 'application/json');
    // }

    http.onload = function() {
        callback(http.response);
        // alert('onload')
        // console.log(http.response)
        
    }
    
    http.send();
    alert("request sent")

    // http.send(JSON.stringify(body));

    return JSON.stringify(http.response);
}

// xhr.open("GET", "https://twinword-text-similarity-v1.p.rapidapi.com/similarity/?text1=" + CurrentRecord.key + "&text2=" + imgName);
//                                         xhr.setRequestHeader("x-rapidapi-key", "6c0ac42843msh4bec17db4b0e9adp128a17jsnfefa5fdddb20");
//                                         xhr.setRequestHeader("x-rapidapi-host", "twinword-text-similarity-v1.p.rapidapi.com");


// https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe/43881141#43881141