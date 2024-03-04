import React from "react";
import { Welcome } from "../components/Welcome/Welcome";
import { ColorSchemeToggle } from "../components/ColorSchemeToggle/ColorSchemeToggle";
import { EmailFilterForm } from "../components/Form/Form";

export default function HomePage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
      <br />
      <EmailFilterForm />
    </>
  );
}
