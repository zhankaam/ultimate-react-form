import React from "react";
import {MainContainer} from "./MainContainer";
import {Typography} from "@material-ui/core";
import {FileInput} from "./FileInput";
import {useForm} from "react-hook-form";
import {PrimaryButton} from "./PrimaryButton";
import {useHistory} from "react-router-dom";
import {RoutePath} from "../App";
import {useData} from "../Context/DataContext";
import {Form} from "./Form";

export const Step3 = () => {
    const history = useHistory()
    const {data, setValues} = useData()
    const {control, handleSubmit} = useForm({
        defaultValues: {
            files: data.files
        }
    })
    const onSubmit = (data) => {
        history.push(RoutePath.result)
        setValues(data)
    };

    return (
        <MainContainer>
            <Typography component='h2' variant='h5'>
                🦄 Step 3
            </Typography>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <FileInput name="files" control={control}/>
            </Form>
            <PrimaryButton>Next</PrimaryButton>
        </MainContainer>
    );
};
