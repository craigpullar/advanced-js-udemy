/*
    CORS (CROSS ORIGIN RESOURCE SHARING) allows you to break the same origin policy of a browser

    Same origin policy stops requersts from other domains

    The browser blocks the response if the Allow-Control-Allow-Origin: tag
    does not equal current domain. This only works for GET though.

    CORS sends a pre-flight request, with POST, PUT, DELETE requests
    - Sends an OPTIONS request
    - Access-Control-Request-Method: [Eventual method to be used ie. PUT/POST etc]
    - Server responds:
        - Access-Control-Allow-Origin: *
        - Access-Control-Allow-Methods: PUT, POST

    test-cors.org
*/