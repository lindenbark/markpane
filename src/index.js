const path = require('path');
const carlo = require('carlo');

(async () => {
    const app = await carlo.launch({
        title: 'markpane',
    });
    app.on('exit', () => process.exit());
    app.serveFolder(path.resolve(__dirname, 'html'));
    await app.exposeFunction('helloworld', _ => console.log('hello, world!'));
    await app.load('index.html');
})();
