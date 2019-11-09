This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
# Design Notes
### MVP: The user should be able to enter their bill in an input and select the percentage of tip from a dropdown .
When they press the calculate button, the tip and total bill (with tip) amount will show. Stretch goal would be background animation library, triggered by calculate tip event. Additional styling considerations for beyond MVP - coherent font sizing, aria entries, role designation arguments, and media queries for device/resolution. 

### Bronze: Validate inputs and show messages if the inputs are incorrect.

Tested (isNaN) of Number constructor on inputs - additional steps could include prefiltered inputs using regular expressions, allow for basic operators -+/. Opted for simplest solution, considering the variability of uses, but the designated input is total bill, so pre-calculation discounts are outside of scope. 

### Silver: Add the ability to split the bill in your dinner party. 
Did not format inputs with Cleave.js. 
Included custom checks and basic JS methods(toFixed, parseFloat, etc). 


