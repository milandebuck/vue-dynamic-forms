
### Table of Contents

-   [Form](#form)
    -   [data](#data)
    -   [reset](#reset)
    -   [submit](#submit)
    -   [onFail](#onfail)
-   [Input](#input)
-   [Errors](#errors)
    -   [has](#has)
    -   [any](#any)
    -   [get](#get)
    -   [set](#set)
    -   [clear](#clear)

## Form

-   **See: module:dynamic-input**
-   **See: class:classes/Form.js**
-   **See: clas:classes/Errors.js-   @Module Dynamic Input - all supported inputs**

**Parameters**

-   `inputs` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** A list of all the required form fields with initial values form more info see the params section
-   `request` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** A object containing an optional the configuration for the requests (optional)
    -   `request.headers` **[Headers](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header)** A Javascript Headers object containing custom headers (optional)
    -   `request.credentials` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** set credentials option in the request (optional) default value='omit'
    -   `request.url` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The url which the form will be send to (optional) default value = ''(self)
    -   `request.method` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** The method of the request (optional) default value = 'post'
-   `config` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** the configuration of the whole form

### data

groups all form values in a formData object

Returns **[FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData)** data - a FormData object containing all form values

### reset

Resets all values in the form + clears the errors

### submit

Submit the form with the current values

Returns **[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)** promise based on the succes or failure of a request done with the fetch API

### onFail

Sets the Errors of the form

**Parameters**

-   `errors` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** An array containing error objects

## Input
an input object in the inputs array

**Parameters**
-   `input` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** an input configuration
    -   `input.type` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** (Required) - The type of input **supported input types:** text,email,password,hidden,tel,date,number,select,textarea
    -   `input.name` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** (Required) - The name of the input field
    -   `input.value`  (Optional) - The value of the input field
    -   `input.label` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** (Optional) - The label of the input field
    -   `input.class` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** (Optional) - The Css class(es) of the input field

    **Input specific parameters**

    -   `input.min`  minimum value of the input field(date,number)
    -   `input.max`  maximum value of the input field(date,number)
    -   `input.step` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** increments of the value on increase & decrease(number)
    -   `options` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** all the options in a selectbox

## Errors

### has

Check if an error exists

**Parameters**

-   `field` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** the name of the field you are looking for

### any

Check if there are any Errors

Returns **[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** boolean

### get

get an Error for a particular field

**Parameters**

-   `field` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** the name of the field you are looking for

Returns **any** if exists returns the error else returns false

### set

Sets the error Object

**Parameters**

-   `Errors`  errors
-   `err`  

### clear

Clear all the erros
