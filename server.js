require('dotenv').config();

const {
    NODE_PORT
} = process.env;

const { createApp, createServer } = require('yion');

const app = createApp();
const server = createServer(app);

app.link('/css', __dirname + '/public/styles/css');
app.link('/scss', __dirname + '/public/styles/scss');
app.link('/js', __dirname + '/public/js');
app.link('/dist', __dirname + '/public/dist');
app.link('/img', __dirname + '/public/images');
app.link('/node_modules', __dirname + '/node_modules');

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html', 'index.html', "text/html", false);
});

app.get('/config/routes', (req, res) => {
    res.sendFile(__dirname + '/config/routes.json', 'routes.json', "application/json", false);
});

server.listen(NODE_PORT).on('listening', () => console.log(`Server started on port ${NODE_PORT}.`));