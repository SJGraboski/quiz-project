const path = require('path');

module.exports = { 
    entry: {
        index: './jsx/app.jsx'
    },
    output: {
        path: path.join(__dirname, 'build', 'js'),
        filename: '[name].js'
    },
    mode: 'development',
    target: 'web',
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['@babel/preset-env',
                            {
                                'useBuiltIns': 'usage',
                                'corejs': '3'
                            }
                        ],
                        ['@babel/preset-react']
                    ]
                }
            }
        }]
    }
}