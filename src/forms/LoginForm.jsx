import React from "react";
import { Field } from "formik";
import AppForm from "./AppForm";
import useAdminStore from "../stores/adminStore";
import CustomField from './fields/LoginField';
import { GoPerson, GoKey } from "react-icons/go";

export default function Login() {
    const { login, isLoading } = useAdminStore();

    return (
        <AppForm
            classname={'flex flex-col max-w-[400px] mr-20  rounded-lg shadow-lg'}
            validateOnChange={true}
            initialValues={{
                email: "",
                password: "",
                rememberMe: false,
            }}
            onSubmit={(data, { setSubmitting }) => {
                login(data);
            }}
        >
            <div className="w-full pl-4 p-3 bg-[#333333] flex items-center rounded-md mb-4">
                <GoPerson className="mr-2 h-6 w-6 text-gray-400" />
                <Field
                    name="email"
                    as={CustomField}
                    label={'Email'}
                    type="email"
                    required
                />
            </div>

            <div className="w-full pl-4 p-3 bg-[#333333] flex items-center rounded-md mb-8">
                <GoKey className="mr-3 h-5 w-5 text-gray-400" />
                <Field
                    name="password"
                    as={CustomField}
                    type="password"
                    label={'Password'}
                    required
                />
            </div>

            <div className="flex items-baseline mb-6">
                <Field
                    type="checkbox"
                    name="rememberMe"
                    id="rememberMe"
                    className="custom-checkbox translate-y-[2px]"
                />
                <label htmlFor="rememberMe" className="ml-1 text-gray-300 text-sm">
                    Remember Me
                </label>
            </div>

            <button
                type="submit"
                className={`flex items-center text-sm justify-center mt-6 px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
                disabled={isLoading}
            >
                {isLoading && (
                    <svg className="animate-spin h-5 w-5 text-white mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0116 0 8 8 0 01-16 0zm2 0a6 6 0 1112 0 6 6 0 01-12 0z"></path>
                    </svg>
                )}
                {isLoading ? 'Loading...' : 'Login'}
            </button>
        </AppForm>
    );
}
