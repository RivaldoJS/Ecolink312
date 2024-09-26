const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use('/api/auth', authRoutes);

// Sincronizando o Sequelize com o Banco de Dados
sequelize.sync({ alter: true })
    .then(() => console.log('Tabelas sincronizadas com sucesso'))
    .catch(err => console.error('Erro ao sincronizar tabelas', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
