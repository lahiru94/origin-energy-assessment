
import { Formik, Form as FormikForm, FormikHelpers } from "formik";

/**
 * Wrapper for Formik `Form` with `onSubmit` handler. Uses Formik context.
 */

interface FormProps {
    initialValues: object
    enableReinitialize: boolean
    children: React.ReactNode
    validationSchema?: object
    onSubmit: (values: any, formikHelpers: FormikHelpers<any>)=> void
}

const Form: React.FC<FormProps> = ({
    children,
    initialValues,
    validationSchema,
    enableReinitialize,
    onSubmit,
    ...rest
}) => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            enableReinitialize={enableReinitialize}
            {...rest}
        >
            <FormikForm className="needs-validation w-100" noValidate>
                {children}
            </FormikForm>
        </Formik>
    );
}

export default Form