import React from "react";
import { useField, useFormikContext } from "formik";

interface CardDetailsInputProps {
}

const CardDetailsInput: React.FC<CardDetailsInputProps> = () => {

    const [cardNumberField, cardNumberMeta] = useField({ name: "cardNumber" });
    const [expiryField, expiryMeta] = useField({ name: "expiry" });
    const [cvvField, cvvMeta] = useField({ name: "cvv" });
    const { setFieldValue } = useFormikContext();

    const formatCardNumber = (value: string): string => {
        return value
            .replace(/\D/g, "") // remove non-digits
            .replace(/(.{4})/g, "$1 ")
            .trim(); // add space every 4 digits
    };

    const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const rawValue = e.target.value;
        const formattedValue = formatCardNumber(rawValue);
        setFieldValue("cardNumber", formattedValue);
    };

    const formatExpiry = (value: string): string => {
        const cleaned = value.replace(/\D/g, "").slice(0, 4); // Max 4 digits: MMYY
        if (cleaned.length < 3) return cleaned;
        return cleaned.slice(0, 2) + "/" + cleaned.slice(2);
    };

    const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formatted = formatExpiry(e.target.value);
        setFieldValue("expiry", formatted);
    };

    return (
        <>
            <div className="w-100 mb-2">
                <label htmlFor={"cardNumber"} className="form-label">
                    How do you want to pay?
                </label>
                <input
                    className="form-control"
                    placeholder="card number"
                    name="cardNumber"
                    value={cardNumberField.value}
                    onChange={handleCardNumberChange}
                    onBlur={cardNumberField.onBlur}
                    maxLength={19} // 16 digits + 3 spaces = 19 characters
                />
                <div
                    hidden={!(cardNumberMeta.touched && cardNumberMeta.error)}
                    className="invalid-feedback"
                    style={{ display: "block" }}
                >
                    {cardNumberMeta.error}
                </div>
            </div>

            <div className="d-flex justify-content-inbetween">
                <div className="w-100 mb-2">
                    <input
                        className="form-control"
                        placeholder="expiry(MM/YY)"
                        name="expiry"
                        value={expiryField.value}
                        onChange={handleExpiryChange}
                        onBlur={expiryField.onBlur}
                        maxLength={5}
                    />
                    <div
                        hidden={!(expiryMeta.touched && expiryMeta.error)}
                        className="invalid-feedback"
                        style={{ display: "block" }}
                    >
                        {expiryMeta.error}
                    </div>
                </div>

                <div style={{ width: 20 }}></div>

                <div className="w-100 mb-2">
                    <input
                        className="form-control"
                        placeholder="cvv"
                        {...cvvField}
                    />
                    <div
                        hidden={!(cvvMeta.touched && cvvMeta.error)}
                        className="invalid-feedback"
                        style={{ display: "block" }}
                    >
                        {cvvMeta.error}
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardDetailsInput