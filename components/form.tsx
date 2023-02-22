import React from "react";
import type { MetaFunction } from "@remix-run/node";
import { Form } from "@remix-run/react";

function IForm() {
  return (
    <Form replace method="post">
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
