import React from "react";
import { useField } from "formik";

export default function AddTour({ ...props }) {
    const [field, meta] = useField(props);
    const errorText = meta.error && meta.touched ? meta.error : "";
    return (
        <input
        {...props}
        {...field}
        className="bg-white border-[1px] w-[min(800px,90%)] px-8 py-4 ring-0 placeholder-zinc-700 text-xl"
        placeholder={props.label}
        />
        
    );
}
