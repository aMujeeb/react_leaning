import React from "react";

//Hoks.. re-render function based on state changes

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../util/validators";
import { useForm } from "../../shared/hooks/form-hook";
import './NewPlace.css';
import { type } from "@testing-library/user-event/dist/type";

const NewPlace = () => {
    const [formState, inputHandler] = useForm({
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
        false
    )

    ////<Input type="text" label="Title" validators={[]} onChange={} />

    const placeSubmitHandler = event => {
        event.preventDefault(); //Preventing default submit handler
        //later send formState.inputs to Back end
    };

    return (
        <form className="place-form" onSubmit={placeSubmitHandler}>

            <Input element="input"
                id="title"
                type="text"
                label="Title"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a valid Title"
                onInput={inputHandler} />

            <Input element="input"
                id="description"
                type="text"
                label="Description"
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText="Please enter a valid description (min 5 Characters)"
                onInput={inputHandler} />

            <Input element="input"
                id="address"
                type="text"
                label="aAddress"
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a valid Address"
                onInput={inputHandler} />

            <Button type="submit" disabled={!formState.isValid}>Add Place</Button>
        </form>
    );
};

export default NewPlace;