import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            
            <nav>
                <Link to="/"><h1>EcoLink</h1></Link>
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