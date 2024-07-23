module.exports = {
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true, // Quan trọng để sử dụng với resolve-url-loader
                        },
                    },
                    'resolve-url-loader', // Cần phải đứng sau sass-loader
                ],
            },
        ],
    },
};