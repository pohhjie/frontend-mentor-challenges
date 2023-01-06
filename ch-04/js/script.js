'use strict';

// TODO: Convert into a utility script.
(function () {

    const emailRegex = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);

    //--------------------------------------------------------------------------------
    /**
     * Method to validate the input field based on the field attributes.
     * @param {HTMLElement} elementInputField 
     * @returns string which indicates the validation error reason.
     */
    //--------------------------------------------------------------------------------
    function _validateField(elementInputField) {
        // Get the field name based on the placeholder.
        const elementFieldName = (elementInputField.placeholder == null) 
            ? "" : elementInputField.placeholder + " ";

        if (elementInputField.hasAttribute('required')) {
            if (elementInputField.value == null || elementInputField.value.trim() == "") 
                return elementFieldName + 'cannot be empty';
        }

        // Validate input field type.
        switch (elementInputField.type) {
            case 'email': 
                if (!emailRegex.test(elementInputField.value))
                    return "Looks like this is not an email";

            default: break;
        }

        return null;
    }
    //--------------------------------------------------------------------------------



    //--------------------------------------------------------------------------------
    /**
     * Method to validate the form fields on submit.
     * @param {SubmitEvent} event 
     * @returns true if there are no validation errors, otherwise false.
     */
    //--------------------------------------------------------------------------------
    function validationOnFormSubmit(event) {
        // Suppress the default form submission.
        event.preventDefault();

        // Get the form element.
        const elementForm = event.target;
        if (elementForm == null || elementForm.tagName !== 'FORM') {
            return true;
        }

        let elementInput = null,
            elementInputIdx = 0,
            hasError = false,
            validationErrorReason = '';

        // Loop through the form elements and validate each field.
        for (elementInputIdx = 0; elementInputIdx < elementForm.length; elementInputIdx++) {
            elementInput = elementForm[elementInputIdx];
            validationErrorReason = _validateField(elementInput);

            if (validationErrorReason !== null) {
                elementInput.parentElement.classList.add('error');
                elementInput.nextElementSibling.style.display = 'block';
                elementInput.nextElementSibling.innerHTML = validationErrorReason;
                // Flag to true to indicate that an error has occurred.
                hasError = true;
            } else {
                elementInput.parentElement.classList.remove('error');
                elementInput.nextElementSibling.style.display = 'none';
                elementInput.nextElementSibling.innerHTML = '';
            }
        }

        if (!hasError) elementForm.submit();
    }
    //--------------------------------------------------------------------------------



    // Add default listener for submit event.
    document.addEventListener('submit', validationOnFormSubmit);

}())