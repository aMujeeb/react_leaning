import React from "react";

import Card from "../../shared/components/UIElements/Card";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import { VALIDATOR_MINLENGTH, VALIDATOR_EMAIL } from "../../util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import './Auth.css';

const Auth = () => {
    const [formState, inputHandler] = useForm({
        email: {
            value: '',
            isValid: false
        },
        password: {
            value: '',
            isValid: false
        }
    });

    return (
        <Card className="authentication">
            <h2>Login Required</h2>
            <hr />
            <form>
                <Input element="input"
                    id="email"
                    type="email"
                    label="E-Mail"
                    validators={[VALIDATOR_EMAIL()]}
                    errorTÏext="Please Enter Valid Email.!"
                    onChange={inputHandler}
                />

                <Input element="input"
                    id="password"
                    type="password"
                    label="Password"
                    validators={[VALIDATOR_MINLENGTH(6)]}
                    errorTÏext="Please Enter Valid Password. At least 6.!"
                    onChange={inputHandler}
                />
            </form>
        </Card>
    );
};

export default Auth;