import StatUp from './startUp';

const port = process.env.PORT || '3050';

StatUp.app.listen(port, () => { console.log(' Rodando na Porta ', port) });