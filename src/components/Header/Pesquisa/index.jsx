import { useState } from "react";
import { Form, Input, ButtonForm } from "./styles";

const Pesquisa = ({ handleSearch }) => {
  const [value, setValue] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setValue("");
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Digitar Pesquisa"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <ButtonForm onClick={() => handleSearch(value)}>Pesquisar</ButtonForm>
    </Form>
  );
};
export default Pesquisa;
