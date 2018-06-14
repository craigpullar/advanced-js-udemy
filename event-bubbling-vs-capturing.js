/*
    On clicking of a dom object the event traverses down:
    Ie.
    window
    document
    body
    first div
    second div
    button

    Any click events on those elements would be called.

    Once at the bottom it comes back up to the window.

    Root -> target is called the event capturing phase
    target -> root is called the event bubbling phase

    Each element gets called twice, but an event listener only listens to one. 
    Hence our events don't get called twice.
    Bubbling is default.
*/

const item = document.querySelector('.item');
const isCapturingPhase = true;
const logEvent = event => { console.log(event); }

item.addEventListener('click', logEvent, isCapturingPhase); //Event is on capturing phase

item.addEventListener('click', logEvent, !isCapturingPhase); //Event is on bubbling phase

item.addEventListener('click', logEvent); //Event is on bubbling phase