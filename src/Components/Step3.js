import React from "react";
import {MainContainer} from "./MainContainer";
import {Typography} from "@material-ui/core";
import {FileInput} from "./FileInput";
import {useForm} from "react-hook-form";
import {Form} from "./Form";

export const Step3 = () => {
    const {control, handleSubmit} = useForm();
    const onSubmit = () => {

    };

    return (
        <MainContainer>
            <Typography component='h2' variant='h5'>
                🦄 Step 3
            </Typography>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <FileInput name="files" control={control}/>
            </Form>
        </MainContainer>
    );
};
