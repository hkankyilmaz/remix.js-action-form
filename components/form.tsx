import React from "react";
import type { MetaFunction } from "@remix-run/node";

const API_KEY = process.env.API_KEY;
const API_SECRET = process.env.API_SECRET;
const FORM_ID = process.env.FORM_ID;
const API = "https://api.convertkit.com/v3";

function Form() {
  console.log(API_KEY);
  return (
    <form action="post">
      <h2>Subscribe!</h2>
      <p>Don't miss any of the action!</p>
      <fieldset>
        <input type="email" name="email" placeholder="Enter e-mail..." />
        <button type="submit">Send</button>
      </fieldset>
    </form>
  );
}

export default Form;
