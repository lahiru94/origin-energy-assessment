import React from "react";
import { useField } from "formik";

interface CardDetailsInputProps {
}

const CardDetailsInput: React.FC<CardDetailsInputProps> = () => {

    const [cardNumberField, cardNumberMeta] = useField({ name: "cardNumber" });
    const [expiryField, expiryMeta] = useField({ name: "expiry" });
    const [cvvField, cvvMeta] = useField({ name: "cvv" });

    return (
        <>
            <div className="w-100 mb-2">
                <label htmlFor={"cardNumber"} className="form-label">
                    How do you want to pay?
                </label>
                <input
                    className="form-control"
                    placeholder="card number"
                    {...cardNumberField}
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
                        placeholder="expiry"
                        {...expiryField}
                    />
                    <div
                        hidden={!(expiryMeta.touched && expiryMeta.error)}
                        className="invalid-feedback"
                        style={{ display: "block" }}
                    >
                        {expiryMeta.error}
                    </div>
                </div>

                <div style={{width:20}}></div>

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