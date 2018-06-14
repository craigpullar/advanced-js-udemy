/*
    What is JSONP?

    Predates CORS. Psuedo standard way to get data from a domain.
    Only supports GET requests.

    jsonp would wrap json data in a js function on the server end.
    The function would be directly called from the HTML's script tag.

    This bypasses the same oigin policy because a script tag ignores the policy
    vs an ajax request.

    We can then call the function directly in the HTML.

    Doesn't send an XHR request. It is a simple JS file request in the netork tab.
*/