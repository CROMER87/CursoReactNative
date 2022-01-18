import Button from "@material-ui/core/Button"


function FormularioCadastro() {
    return (
        <form>
            <label>Nome</label>
            <input type="text" />

            <label>Sobrenome</label>
            <input type="text" />

            <label>cpf</label>
            <input type="text" />

            <label>promoções</label>
            <input type="checkbox" />

            <label>novidades</label>
            <input type="checkbox" />

            <Button type="submit">Cadastrar</Button>
        </form>
    );

}

export default FormularioCadastro;