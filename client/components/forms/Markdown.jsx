"use client";
import { Field } from "formik";
import ReactMarkdown from "react-markdown";
import classes from "./Markdown.module.css";

export default function MarkdownField({ displayName, field, value }) {
  return (
    <div className={classes.formMarkdown}>
      <div>
        <label>{displayName}</label>
        <div>
          <Field
            name={field}
            as={"textarea"}
            className={classes.formTextarea}
          />
        </div>
      </div>
      <div>
        <label>{displayName} (preview): </label>
        <div className={classes.markdownContainer}>
          <ReactMarkdown>{value}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
