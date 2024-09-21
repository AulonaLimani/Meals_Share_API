import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import classes from "./MealForm.module.css";
import CryptoJS from "crypto-js";
import { toast } from "react-toastify";

export const Login = ({ initialData, setLoggedIn }) => {
  const validationSchema = Yup.object().shape({
    user: Yup.string().required("Required"),
    userPassword: Yup.string().required("Required"),
  });
  return (
    <Formik
      initialValues={{ user: "", userPassword: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);

        const { user, userPassword } = values;

        if (
          user === initialData.creator ||
          user === initialData.creator_email
        ) {
          const hash = CryptoJS.SHA256(userPassword).toString(CryptoJS.enc.Hex);
          if (initialData.password === hash) {
            setLoggedIn(true);
          }
          return;
        }

        toast.error("Wrong creator or creator email");
      }}
    >
      {({ isSubmitting }) => {
        return (
          <Form>
            <div className={classes.formContainer}>
              <div className={classes.fieldGroup}>
                <label className={classes.label} htmlFor="user">
                  Creator / Creator Email
                </label>
                <Field className={classes.inputField} type="text" name="user" />
                <ErrorMessage
                  className={classes.errorMessage}
                  name="user"
                  component="div"
                />
              </div>
              <div className={classes.fieldGroup}>
                <label className={classes.label} htmlFor="userPassword">
                  Password
                </label>
                <Field
                  className={classes.inputField}
                  type="password"
                  name="userPassword"
                />
                <ErrorMessage
                  className={classes.errorMessage}
                  name="userPassword"
                  component="div"
                />
              </div>
              <button
                type="submit"
                className={classes.submitButton}
                disabled={isSubmitting}
              >
                Submit
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
