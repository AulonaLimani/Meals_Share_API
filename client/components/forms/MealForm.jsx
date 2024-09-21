import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import axios from "axios";
import classes from "./MealForm.module.css";
import ReactMarkdown from "react-markdown";
import CryptoJS from "crypto-js";
import { toast } from "react-toastify";

const initialDataDefault = {
  title: "",
  image: "",
  summary: "",
  instructions: "",
  creator: "",
  creator_email: "",
  password: "",
  confirm_password: "",
};

export const MealForm = ({ initialData, onSubmit, showPasswords = true }) => {
  const [fileName, setFileName] = useState("");

  const getValidationSchema = () => {
    const schema = {
      title: Yup.string().required("Required"),
      summary: Yup.string().required("Required"),
      instructions: Yup.string().required("Required"),
      creator: Yup.string().required("Required"),
      creator_email: Yup.string()
        .email("Invalid email address")
        .required("Required"),
    };

    if (showPasswords) {
      schema.password = Yup.string().required("Required");
      schema.confirm_password = Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required");
    }

    return Yup.object().shape(schema);
  };

  return (
    <Formik
      initialValues={initialData ?? initialDataDefault}
      validationSchema={getValidationSchema()}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(true);
        const { password, confirm_password, ...data } = values;

        if (password === confirm_password && showPasswords) {
          const hash = CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);
          const args = { ...data, password: hash };
          await onSubmit(args);
          return;
        }

        if (!showPasswords) {
          await onSubmit(data);
          return;
        }

        setSubmitting(false);
      }}
    >
      {({ isSubmitting, values, setFieldValue }) => {
        console.log("values", values);
        const handleFileChange = async (e) => {
          if (e.target.files.length > 0) {
            const file = e.target.files[0];
            const formData = new FormData();
            formData.append("image", file);

            try {
              const response = await axios.post(
                "http://localhost:3001/upload/meals",
                formData,
                {
                  headers: { "Content-Type": "multipart/form-data" },
                }
              );

              console.log(response.data);

              const imageUrl = response.data.fileName;
              setFileName(file.name);
              setFieldValue("image", imageUrl);
            } catch (error) {
              console.error("Error uploading file:", error);
              setFileName("");
            }
          } else {
            setFileName("");
          }
        };

        return (
          <Form>
            <div className={classes.formContainer}>
              <h1 className={classes.header}>Share Meal</h1>
              <div className={classes.fieldGroup}>
                <label className={classes.label} htmlFor="title">
                  Title
                </label>
                <Field
                  className={classes.inputField}
                  type="text"
                  name="title"
                />
                <ErrorMessage
                  className={classes.errorMessage}
                  name="title"
                  component="div"
                />
              </div>
              <div className={classes.fieldGroup}>
                <label className={classes.label} htmlFor="summary">
                  Summary
                </label>
                <Field
                  className={classes.inputField}
                  type="text"
                  name="summary"
                />
                <ErrorMessage
                  className={classes.errorMessage}
                  name="summary"
                  component="div"
                />
              </div>
              <div className={classes.fieldGroup}>
                <label className={classes.label} htmlFor="image">
                  Upload Image
                </label>
                <div className={classes.customFileContainer}>
                  <label className={classes.customFileUpload}>
                    <input
                      className={classes.imageInput}
                      type="file"
                      accept="image/*"
                      id="image"
                      name="image"
                      onChange={handleFileChange}
                    />
                    Choose File
                  </label>
                  {fileName && (
                    <span className={classes.fileName}>{fileName}</span>
                  )}
                </div>
              </div>
              <div className={classes.instructionsContainer}>
                <div className={classes.instructionsGroup}>
                  <label className={classes.instructionsLabel}>
                    Instructions
                  </label>
                  <Field
                    className={`${classes.inputField} ${classes.textarea}`}
                    name="instructions"
                    as="textarea"
                  />
                  <ErrorMessage
                    className={classes.errorMessage}
                    name="instructions"
                    component="div"
                  />
                </div>
                <div className={classes.instructionsGroup}>
                  <label className={classes.instructionsLabel}>
                    Instructions (preview)
                  </label>
                  <div className={classes.previewMarkdown}>
                    <ReactMarkdown>{values.instructions}</ReactMarkdown>
                  </div>
                </div>
              </div>
              <div className={classes.fieldGroup}>
                <label className={classes.label} htmlFor="creator">
                  Creator
                </label>
                <Field
                  className={classes.inputField}
                  type="text"
                  name="creator"
                />
                <ErrorMessage
                  className={classes.errorMessage}
                  name="creator"
                  component="div"
                />
              </div>
              <div className={classes.fieldGroup}>
                <label className={classes.label} htmlFor="creator_email">
                  Creator Email
                </label>
                <Field
                  className={classes.inputField}
                  type="text"
                  name="creator_email"
                />
                <ErrorMessage
                  className={classes.errorMessage}
                  name="creator_email"
                  component="div"
                />
              </div>
              {showPasswords && (
                <>
                  <div className={classes.fieldGroup}>
                    <label className={classes.label} htmlFor="password">
                      Password
                    </label>
                    <Field
                      className={classes.inputField}
                      type="password"
                      name="password"
                    />
                    <ErrorMessage
                      className={classes.errorMessage}
                      name="password"
                      component="div"
                    />
                  </div>
                  <div className={classes.fieldGroup}>
                    <label className={classes.label} htmlFor="confirm_password">
                      Confirm Password
                    </label>
                    <Field
                      className={classes.inputField}
                      type="password"
                      name="confirm_password"
                    />
                    <ErrorMessage
                      className={classes.errorMessage}
                      name="confirm_password"
                      component="div"
                    />
                  </div>
                </>
              )}
              <button
                className={classes.submitButton}
                type="submit"
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
