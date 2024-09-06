import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <h1>EcoLink</h1>
            <nav>
                <Link to="/">Início</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Cadastro</Link>
                <Link to="/description">Descartar Lixo</Link>
                <Link to="/points">Acúmulo de Pontos</Link>
                <Link to="/partners">Empresas Parceiras</Link>
            </nav>
        </header>
    );
}

export default Header;