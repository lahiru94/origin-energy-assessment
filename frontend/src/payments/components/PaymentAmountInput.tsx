import React from "react";
import { useField } from "formik";

/**
 * Native `text` input wrapper with 
 * Bootstrap styling and Formik integration.
 */

interface PaymentAmountInputProps {
    name: string,
    label: string,
    placeholder?: string,
    type?: string,
    disabled?: boolean
}

const PaymentAmountInput:React.FC<PaymentAmountInputProps> = ({
    name,
    label,
    type = "text",
    placeholder,
    ...rest
}) => {
    const [field, meta] = useField({ name, label, type, placeholder, ...rest });
    return (
        <div className="w-100 mb-2">
            {label && (
                <label htmlFor={name} className="form-label">
                    {label}
                </label>
            )}
            <input
                className="form-control"
                placeholder={placeholder || ""}
                type={type}
                {...field}
                {...rest}
            />

            <div
                hidden={!(meta.touched && meta.error)}
                className="invalid-feedback"
                style={{ display: "block" }}
            >
                {meta.error}
            </div>
        </div>
    );
}

export default PaymentAmountInput