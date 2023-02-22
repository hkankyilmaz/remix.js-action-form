import React from "react";
import type { MetaFunction } from "@remix-run/node";
import { Form } from "@remix-run/react";

const API_KEY = process.env.API_KEY;
const API_SECRET = process.env.API_SECRET;
const FORM_ID = process.env.FORM_ID;
const API = "https://api.convertkit.com/v3";

function IForm() {
  console.log(API_KEY);
  return (
    <Form method="post">
      <h2>Subscribe!</h2>
      <p>Don't miss any of the action!</p>
      <fieldset>
        <input name="email" placeholder="Enter e-mail..." />
        <button type="submit">Send</button>
      </fieldset>
    </Form>
  );
}

export default IForm;
