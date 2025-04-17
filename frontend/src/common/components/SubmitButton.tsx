
import { useFormikContext } from "formik";

interface SubmitButton {
    text: string
}

const SubmitButton: React.FC<SubmitButton> = ({ text }) => {

    const { isSubmitting } = useFormikContext();

    return (
        <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
            {isSubmitting &&
                <>
                    <span className="spinner-border spinner-border-sm mr-4" aria-hidden="true"></span>
                    <span role="status">Loading...</span>
                </>
            }
            {!isSubmitting && text}
        </button>
    )
}

export default SubmitButton;