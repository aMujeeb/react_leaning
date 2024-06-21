import { useCallback, useReducer } from "react";

const formReducer = (state, action) => {
    switch (action.type) {
        case 'INPUT_CHANGE':
            let formIsValid = true;
            for (const inputId in state.inputs) {
                if(!state.inputs[inputId]) { //Is the input falsi..or undefined.. if a field is added without content in a switching mode
                    continue; //this means move to next section
                }
                if (inputId === action.inputId) {
                    formIsValid = formIsValid && action.isValid;
                } else {
                    formIsValid = formIsValid && state.inputs[inputId].isValid;
                }
            }
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.inputId]: { value: action.value, isValid: action.isValid }
                },
                isValid: formIsValid
            };
        case 'SET_DATA':
            return {
                inputs: action.inputs,
                isValid: action.formIsValid
            };    
        default:
            return state;
    }
};

export const useForm = (initialInputs, initialFormValidity) => {
    //useReducer used to handle multiple states
    const [formState, dispatch] = useReducer(formReducer, {
        /*inputs: {
            title: {
                value: '',
                isValid: false
            },
            description: {
                value: '',
                isValid: false
            },
            address: {
                value: '',
                isValid: false
            }
        },
        isValid: false*/
        //Maging the commented code more generalized
        inputs: initialInputs,
        isValid: initialFormValidity
    });

     //useCallBack used to avoid object recreations
     const inputHandler = useCallback((id, mValue, mIsValid) => {
        dispatch({ type: 'INPUT_CHANGE', value: mValue, isValid: mIsValid, inputId: id });
    }, []);

    const setFormData = useCallback((inputData, formValidity) => {
        dispatch({
            type: 'SET_DATA',
            inputs: inputData,
            formIsValid: formValidity
        });
    }, []);

    return [formState, inputHandler, setFormData]; //Hooks can return anything as required. Arrays, Objects, text or simply any values
};
