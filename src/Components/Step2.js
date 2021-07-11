import React, {useEffect} from "react";
import {MainContainer} from "./MainContainer";
import {FormControlLabel, Typography, Checkbox} from "@material-ui/core";
import {Form} from "./Form";
import {Input} from "./Input";
import {useForm} from "react-hook-form";
import {useHistory} from "react-router-dom";
import {RoutePath} from "../App";
import {PrimaryButton} from "./PrimaryButton";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {parsePhoneNumberFromString} from "libphonenumber-js";


const schema = yup.object().shape({
    email: yup
        .string()
        .email("Email should have correct format")
        .required("Email is a required field"),
});


export const Step2 = () => {
    const history = useHistory();
    const {handleSubmit, register, formState: {errors}, watch, setValue} = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema)
    });

    const hasPhone = watch("hasPhone");

    const onSubmit = () => {
        history.push(RoutePath.step3);
    };

    const normalizePhoneNumber = (value) => {
        const phoneNumber = parsePhoneNumberFromString(value);
        if (!phoneNumber) {
            return value;
        }
        return (
            phoneNumber.formatInternational()
        );
    };

    useEffect(() => {
        register("hasPhone");
    }, [register]);


    return (
        <MainContainer>
            <Typography component='h2' variant='h5'>
                🦄 Step 2
            </Typography>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    {...register("email")}
                    id='email'
                    type='email'
                    label='Email'
                    error={!!errors.email}
                    helperText={errors?.email?.message}
                    required
                />

                <FormControlLabel
                    control={
                        <Checkbox
                            color="primary"
                            onChange={e => setValue("hasPhone", e.target.checked)}
                        />
                    }
                    label="Do you have a phone number?"
                />

                {
                    hasPhone && (
                        <Input
                            {...register("phoneNumber")}
                            id="phoneNumber"
                            type="tel"
                            label="Phone number"
                            onChange={(e) => {
                                e.target.value = normalizePhoneNumber(e.target.value);
                            }}
                        />
                    )
                }
                <PrimaryButton>Next</PrimaryButton>
            </Form>
        </MainContainer>
    );
};

