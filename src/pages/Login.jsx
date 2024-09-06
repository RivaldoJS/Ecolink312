import { useState } from 'react';


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica de login
    };

    return (
        <main>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                
                <label>Senha:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                
                <button type="submit">Entrar</button>
            </form>
        </main>
    );
}

export default Login;
