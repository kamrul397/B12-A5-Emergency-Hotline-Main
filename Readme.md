1 no. ans

getElementById select a single html element and getElementsByClassName selects all html elements with a specific class name.Otherhand, querySelector → Returns the first matching element. querySelectorAll returns a static NodeList of all matching elements.

2 no. ans

I will create an element using document.createElement() and insert it to DOM using appendChild. example:
// Create a new paragraph
const para = document.createElement("p");
para.textContent = "This is a new paragraph.";
// Insert it into the DOM
const container = document.getElementById("container");
container.appendChild(para);

3 no. ans

When an event happens on an element (like clicking a button), it first runs the event handler on that element. Then, the event moves upward through its parent elements one by one until it reaches the document.For example:
If I click on a button inside a div, the click event first happens on the button, then on the div, then on the body, and finally on the document.

4 no. ans

Event Delegation is a technique where we add an event listener to a parent element to handle events on its child elements using event bubbling.It is necessary because It reduces the number of event listeners, improves performance, and works for dynamically added elements.

5 no. ans

preventDefault() stops a function's submiting in each refreshing and stopPropagation() stops the event from bubbling up so it won’t trigger handlers on parent elements.
