import { useState } from 'react';

function Signup() {
    const [formData, setFormData] = useState({
        nome: '', email: '', senha: '', telefone: '', endereco: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica de cadastro
    };

    return (
        <main>
            <h2>Cadastro</h2>
            <form onSubmit={handleSubmit}>
                <label>Nome:</label>
                <input type="text" name="nome" value={formData.nome} onChange={handleChange} required />
                
                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                
                <label>Senha:</label>
                <input type="password" name="senha" value={formData.senha} onChange={handleChange} required />
                
                <label>Telefone:</label>
                <input type="tel" name="telefone" value={formData.telefone} onChange={handleChange} required />
                
                <label>Endereço:</label>
                <input type="text" name="endereco" value={formData.endereco} onChange={handleChange} required />
                
                <button type="submit">Cadastrar</button>
            </form>
            <link to="/login">Já tem cadastro? Faça login</link>  
        </main>
    );
}

export default Signup;
