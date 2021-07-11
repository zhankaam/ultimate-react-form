import React from "react";
import {MainContainer} from "./MainContainer";
import {Typography} from "@material-ui/core";
import {Form} from "./Form";
import {Input} from "./Input";
import {useForm} from "react-hook-form";
import {PrimaryButton} from "./PrimaryButton";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {useHistory} from "react-router-dom";
import {RoutePath} from "../App";
import {useData} from "../Context/DataContext";

const schema = yup.object().shape({
    firstName: yup
        .string()
        .matches(/^([^0-9]*)$/, "First name should not contain numbers")
        .required("First name is a required field"),
    lastName: yup
        .string()
        .matches(/^([^0-9]*)$/, "Last name should not contain numbers")
        .required("Last name is a required field")
});

export const Step1 = () => {
    const history = useHistory();
    const {data,setValues} = useData()
    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
           firstName: data.firstName,
            lastName: data.lastName
        },
        mode: "onBlur",
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        history.push(RoutePath.step2);
        setValues(data)
    };

    return (
        <MainContainer>
            <Typography component='h2' variant='h5'>
                🦄 Step 1
            </Typography>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    {...register("firstName")}
                    id='firstName'
                    type='text'
                    label='First Name'
                    error={!!errors.firstName}
                    helperText={errors?.firstName?.message}
                />
                <Input
                    {...register("lastName")}
                    id='lastName'
                    type='text'
                    label='Last Name'
                    error={!!errors.lastName}
                    helperText={errors?.lastName?.message}
                />
                <PrimaryButton>Next</PrimaryButton>
            </Form>
        </MainContainer>
    );
};