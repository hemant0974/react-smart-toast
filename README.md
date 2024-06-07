Run project:-
npm i
npm start

#Docs
React smart toast

The "useSmartToast" custom hook provides an easy and flexible way to show toast notifications in a React application. It allows you to specify the initial position of the toast and provides methods to control and display the toast notifications dynamically.

Initialization
To initialize the hook, call useSmartToast with an options object:

code:-
const { toastSmart, toastPosition, setToastPosition, SmartToastComponent } = useSmartToast({
position: "bottom-right",
});

*toastSmart and *SmartToastComponent are mandatory and toastPosition, setToastPosition are optional.

position: (optional) A string specifying the initial position of the toast. Possible values include:
"top-left"
"top-right"
"top-center"
"bottom-center"
"bottom-left"
"bottom-right"

Return Values
The hook returns an object with the following properties:

toastSmart: A function to show a toast notification. Call this function with a message and optional configuration.
toastPosition: A string representing the current position of the toast notification.
setToastPosition: A function to update the position of the toast notification.
SmartToastComponent: A React component to be included in your application, which renders the toast notifications.

e.g.
toastSmart("Hello, this is a toast!", { subDesc: "Sub description optinal", type: "success" })

complete demo component code:-

import React from 'react';
import { useSmartToast } from 'path-to-your-hook';

const App = () => {
const { toastSmart, setToastPosition, SmartToastComponent } = useSmartToast({
position: "bottom-right",
});

return (

<div>
<button onClick={() => toastSmart("Hello, this is a toast!")}>
Show Toast
</button>
<button onClick={() => setToastPosition("top-right")}>
Move Toast to Top Center
</button>
{SmartToastComponent}
</div>
);
};

export default App;
