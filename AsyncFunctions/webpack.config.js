const path = require('path');

module.exports = {
    entry: { //Arquivo de entrada
        index: './src/index.js',
    },
    output: { //Arquivo de saída
        filename: '[name].bundle.js', //Nome do arquivo de saída
        path: path.resolve(__dirname, 'public'), //Caminho do arquivo de saída
    },
    mode: 'none', //Modo de desenvolvimento
    module: {
        rules: [
            {
                test: /\.js$/, //Expressão regular para identificar arquivos .js
                use: 'babel-loader', //Babel para transpilar o código
            },
        ]
    },
    watch: true, //Monitora as alterações nos arquivos

    devServer: { //Servidor de desenvolvimento
        liveReload: true, //Recarrega a página automaticamente
        port: 9000, //Porta do servidor
    },
}
