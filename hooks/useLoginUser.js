import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigation } from "@react-navigation/native";

const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email!").required("Required"),
    password: Yup.string().required("Required"),
});

export const useLoginUser = () => {
    const [login, setLogin] = useState(false);

    const navigation = useNavigation();

    const onSubmit = (values) => {
        try {
            values.email = values.email.toLowerCase();
            values.password = values.password.toLowerCase();
            setLogin(true);
            navigation.navigate("HomeTab");
        } catch (err) {
            console.log(err);
        }
    };

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit,
        validationSchema,
    });

    const handleLogout = () => {
        navigation.navigate("Login")
        setLogin(false)
    }
    return {
        formik,
        login,
        handleLogout
    };
};
