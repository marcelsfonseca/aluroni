import filtros from './filtros.json';
import styles from "./Filtros.module.scss"

type IOpcao = typeof filtros[0];

function Filtros() {
    function selecionaFiltro(opcao: IOpcao) { }
    return (
        <div className={styles.filtros}>
            {filtros.map((opcao) => (
                <button key={opcao.id} onClick={() => selecionaFiltro(opcao)} className={styles.filtros__filtro}>
                    {opcao.label}
                </button>
            ))}
        </div>
    );
}

export default Filtros;