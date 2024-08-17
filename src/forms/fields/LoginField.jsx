import React from "react";
import { useField } from "formik";

export default function AddTour({ ...props }) {
    const [field, meta] = useField(props);
    const errorText = meta.error && meta.touched ? meta.error : "";
    return (
        <input
        {...props}
        {...field}
        className="bg-transparent w-full outline-none ring-0"
        placeholder={props.label}
        />
        
    );
}
