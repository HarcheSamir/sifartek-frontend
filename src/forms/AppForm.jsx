import React from "react";

import { Form, Formik } from "formik";



export default function AppForm({
    initialValues,
    validationSchema,
    onSubmit,
    children,
    classname,
    ...props
}) {
    return (

        <div dir="ltr">
            <Formik
                {...props}
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                {() => <Form className={classname}>{children}</Form>}
            </Formik>
        </div>

    );
}
