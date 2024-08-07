export const ValidationNumbers = (string) => {
    if (/^[0-9]+$/.test(string)) {
        return true;

    } else {
        return false;
    }
}

export const ValidationNumbers4D = (string) => {
    if (/^[0-9]+(?:\.\d{0,4})?$/.test(string)) {
        return true;

    } else {
        return false;
    }
}

export const ValidationEmail = (string) => {
    if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(string)) {
        return true;
    } else {
        return false;
    }
}

export const ValidationCurp = (string) => {
    if (/^[A-Z]{1}[AEIOU]{1}[A-Z]{2}[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[HM]{1}(AS|BC|BS|CC|CS|CH|CL|CM|DF|DG|GT|GR|HG|JC|MC|MN|MS|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TS|TL|VZ|YN|ZS|NE)[B-DF-HJ-NP-TV-Z]{3}[0-9A-Z]{1}[0-9]{1}$/.test(string)) {
        return true;
    } else {
        return false;
    }
}
export const ValidationRfc = (string) => {
    if (/^([A-ZÑ\x26]{4,5}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1]))((-)?([A-Z\d]{2,3}))?$/.test(string)) {
        return true;
    } else {
        return false;
    }
}

export const ValidationEmpty = (value) => {
    if (value === "") {
        return false
    } else {
        return true
    }
}

export const ValidationSelect = (value) => {
    if (value) {
        return true
    } else {
        return false
    }
}

// export const ValidationMultiple = (multipleValidations) => {
//     if (value) {
//         return true
//     } else {
//         return false
//     }
// }

export const ValidationOneUpper = (string) => {
    if (/[A-Z]/.test(string)) {
        return true
    } else {
        return false
    }
}
export const ValidationOneLower = (string) => {
    if (/[a-z]/.test(string)) {
        return true
    } else {
        return false
    }
}

export const ValidationOneNumber = (string) => {
    if (/[0-9]+/.test(string)) {
        return true
    } else {
        return false
    }
}

export const ValidationZiseString = (string, limit) => {
    if (string) {
        if (string?.length < limit) {
            return false
        } else {
            return true
        }
    }
}

export const ValidationZiseStringExact = (string, limit) => {
    if (string) {
        if (string?.length == limit) {
            return true
        }
    }

    return false

}



export const ValidationZiseStringEqual = (string, limit) => {
    if (string) {
        if (string?.length !== limit) {
            return false
        } else {
            return true
        }
    }

}

export const UpdateValue = (e, id, inputList, setInputList) => {
    e.preventDefault() 
    if (id == 'datePick') {
        let inputCopy = { ...inputList }
        inputCopy[id].value = e;
        setInputList(inputCopy);
    } else {
        if (e?.value) {
            let inputCopy = { ...inputList }
            inputCopy[id].value = e.value;
            setInputList(inputCopy);
        } else {

            let inputCopy = { ...inputList }
            inputCopy[id].value = e.target.value;
            setInputList(inputCopy);
        }
    }
}


export const ColorValidation = (propertyName, inputList, validationType = "empty", multipleValidatios,limit) => {
    let validationFunction;
    //number4D = number withe maximum four decimals
    switch (validationType) {
        case "number": validationFunction = ValidationNumbers; break;
        case "number4D": validationFunction = ValidationNumbers4D; break;
        // case "number5D": validationFunction = ValidationNumbers5D; break;
        case "email": validationFunction = ValidationEmail; break;
        case "empty": validationFunction = ValidationEmpty; break;
        case "select": validationFunction = ValidationSelect; break;
        case "multiple": validationFunction = ValidationSelect; break;
        case "optional": validationFunction = () => { return true }; break;
        case "curp": validationFunction = ValidationCurp; break
        case "rfc": validationFunction = ValidationRfc; break
        case "validationSize": validationFunction = ValidationZiseStringExact; break
        case "validationSizeStr": validationFunction = ValidationZiseString; break
    }

    const codeElement = document.getElementById(propertyName);
    const obligatoryElement = document.getElementById(propertyName + "obligatory");

    let result = validationFunction(inputList[propertyName].value,limit)

    if (result === false && inputList[propertyName].value != null) {
        try {
            if (document.all) {
                codeElement.style.setAttribute('cssText', 'border: 1px solid red" !important');
                obligatoryElement.style.setAttribute('cssText', 'color:red" !important');
                // Modern browser
            } else {
                codeElement.setAttribute('style', 'border: 1px solid red !important');
                obligatoryElement.setAttribute('style', 'color:red !important');
            }
        } catch (error) {

        }

    } else {
        try {
            if (validationType == "select") {
                codeElement.setAttribute('style', 'border: 1px solid transpatent !important');
                obligatoryElement.setAttribute('style', 'color: #c1c1c1 !important');
            } else {
                codeElement.setAttribute('style', 'border: 1px solid transpatent !important');
                // codeElement.setAttribute('style', 'border: 1px solid #a0a0a3 !important');
                obligatoryElement.setAttribute('style', 'color: #a0a0a3 !important');
            }

        } catch (error) {

        }

    }
}


