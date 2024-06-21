import React, { useState } from "react";

import Card from "../../shared/components/UIElements/Card";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import { VALIDATOR_MINLENGTH, VALIDATOR_EMAIL, VALIDATOR_REQUIRE } from "../../util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import './Auth.css';

const Auth = () => {

    const [isLoginMode, setIsLoginMode] = useState(true);

    const [formState, inputHandler, setFormData] = useForm({
        email: {
            value: '',
            isValid: false
        },
        password: {
            value: '',
            isValid: false
        }
    });

    const authSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs);
    };

    const switchModeHandler = () => {
        //Adding required code for enable extra fields when mode change... for example user name
        if (!isLoginMode) {
            setFormData( {
                ...formState.inputs,
                name: undefined
            }
            , formState.inputs.email.isValid && formState.input.password.isValid
            );
        } else {
            setFormData({
                ...formState.inputs,
                name : {
                    value: '',
                    isValid: false
                }
            }, false);
        }
        setIsLoginMode(prevMode => !prevMode);
    };

    return (
        <Card className="authentication">
            <h2>Login Required</h2>
            <hr />
            <form onSubmit={authSubmitHandler}>
                {!isLoginMode && <Input
                    element="input"
                    id="name"
                    type="text"
                    label="Your Name"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorTÏext="Please Enter a Name"
                    onInput={inputHandler}>
                </Input>}
                <Input element="input"
                    id="email"
                    type="email"
                    label="E-Mail"
                    validators={[VALIDATOR_EMAIL()]}
                    errorTÏext="Please Enter Valid Email.!"
                    onInput={inputHandler}
                />

                <Input element="input"
                    id="password"
                    type="password"
                    label="Password"
                    validators={[VALIDATOR_MINLENGTH(6)]}
                    errorTÏext="Please Enter Valid Password. At least 6.!"
                    onInput={inputHandler}
                />

                <Button type="submit" disabled={!formState.isValid}>
                    {isLoginMode ? 'Login' : 'Sign Up'}
                </Button>
            </form>

            <Button inverse onClick={switchModeHandler}>Switch to {isLoginMode ? 'Sign Up' : 'Login'}</Button>
        </Card>
    );
};

export default Auth;