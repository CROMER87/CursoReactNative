import React, { Component } from "react";

import FormularioCadastro from "./components/FomularioCadastro";
import ListaDeNotas from "./components/ListaDeNotas";

class App extends Component {
  render() {
    return (
      <section>
        <FormularioCadastro />
        <ListaDeNotas />
      </section>
    );
  }
}

export default App;
