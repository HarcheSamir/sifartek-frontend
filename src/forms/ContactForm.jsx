import React from 'react';
import { Field } from "formik";
import AppForm from "./AppForm";
import CustomField from './fields/ContactField';
import useContactStore from '../stores/contactStore';

export default function ContactForm() {
    const { isLoading, addContact } = useContactStore();

    return (
        <AppForm
            classname={'flex flex-col mt-20 gap-8 w-full items-center'}
            validateOnChange={true}
            initialValues={{
                name: "",
                email: "",
                subject: "",
                message: "",
            }}
            onSubmit={(data, { setSubmitting }) => {
                addContact(data);
            }}
        >
            <div className="w-full flex justify-center">
                <Field
                    name="name"
                    as={CustomField}
                    label={'Name'}
                    type="text"
                    required
                />
            </div>
            <div className="w-full flex justify-center">
                <Field
                    name="email"
                    as={CustomField}
                    label={'Email'}
                    type="email"
                    required
                />
            </div>
            <div className="w-full flex justify-center">
                <Field
                    name="subject"
                    as={CustomField}
                    label={'Subject'}
                    type="text"
                    required
                />
            </div>
            <div className="w-full flex justify-center">
                <Field
                    name="message"
                    as={CustomField}
                    label={'message'}
                    type="text"
                    required
                />
            </div>

            <button
                type="submit"
                className={`flex items-center justify-center mt-6 px-6 py-3 bg-secondary text-white rounded-md shadow-md hover:bg-secondaryHovered w-[300px] focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
                disabled={isLoading}
            >
                {isLoading && (
                    <svg className="animate-spin h-5 w-5 text-white mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0116 0 8 8 0 01-16 0zm2 0a6 6 0 1112 0 6 6 0 01-12 0z"></path>
                    </svg>
                )}
                {isLoading ? 'SENDING...' : 'SEND!'}
            </button>
        </AppForm>
    );
}
