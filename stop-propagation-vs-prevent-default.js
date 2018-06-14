/*
    event.stopPropagation() stops the event going down the
    capturing phase or up the bubbling phase, depending which
    order you specified in the event listener.

    Events are queued. Stop propagation halts the queue after that event has fired.

    EVENTS ARE SYNCHRONOUS.
*/

/*
    event.preventDefault() stops the default action assigned to element
    (ie. go to url on an anchor)
    but does not stop propagation of the event.
*/
