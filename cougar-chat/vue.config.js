// vue.config.js
module.exports = {
    // options...
    devServer: {
        disableHostCheck: true
    }
}

// vue.config.js
module.exports = {
    // options...
    devServer: {
        useLocalIp: false,
        public: 'yourhost:8080',
        disableHostCheck: true,
        proxy: {
            '^/api': {
                target: 'http://localhost:3000',
            },
        },
    }
}