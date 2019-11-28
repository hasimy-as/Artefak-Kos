import express from 'express';

const server = express();
const PORT = process.env.PORT || 3001;

server.set('view engine', 'ejs');
server.use(express.static('public'));

server.get('/', (req, res) => res.render('index'));
server.get('/sewa', (req, res) => res.render('sewa'));
server.get('/kontak', (req, res) => res.render('kontak'));
server.get('/tentang', (req, res) => res.render('tentang'));

server.listen(PORT, console.log(`server in ${PORT}`));
