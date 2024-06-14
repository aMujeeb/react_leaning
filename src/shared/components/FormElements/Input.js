import React, { useReducer } from "react"; //UseReducer used when need to validate more than 1 condition. Advance state of useState

import { validate } from "../../../util/validators";
import './Input.css';
import { type } from "@testing-library/user-event/dist/type";

const inputReducer = (state, action) => { // capturing action and validating accordingly
    switch (action.type) {
        case 'CHANGE':
            return {
                ...state,
                value: action.val,
                isValid: validate(action.val, action.validators)
            };
        case 'TOUCH':
            return {
                ...state,
                isTouched: true
            };
        default:
            return state;
    }
};

const Input = props => {

    //const [enteredValue, setEnteredValue] = useState('');
    //const [isValid, setIsValid] = useState(false);

    const [inputState, dispatch] = useReducer(inputReducer, { value: '', isTouched: false, isValid: false }); //Setting initial values

    const changeHandler = event => {
        dispatch({ type: 'CHANGE', val: event.target.value, validators: props.validators });
    };

    const touchHandler = () => { //Events on the Input.. eg:Touch
        dispatch(
            { type: 'TOUCH' }
        );
    };

    const element = props.element === 'input' ? (
        <input id={props.id} type={props.type}
            placeholder={props.placeholder}
            onChange={changeHandler}
            onBlur={touchHandler}
            value={inputState.value} />
    ) :
        (
            <textarea id={props.id} rows={props.rows || 3}
                onChange={changeHandler}
                onBlur={touchHandler}
                value={inputState.value} />
        );

    return (
        <div className={`form-control  ${!inputState.isValid && inputState.isTouched && 'form-control--invalid'}`}>
            <label htmlFor={props.id}>{props.label}</label>
            {element}
            {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
        </div>
    );
};


export default Input;