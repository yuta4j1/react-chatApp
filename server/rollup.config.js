import babel from 'rollup-plugin-babel'

export default {
    input: 'src/index.ts',
    output: {
        file: 'websocket-server.js',
        format: 'cjs'
    },
    plugins: [
        babel({
            exclude: 'node_modules/**',
            extensions: ['.ts', '.js'],
        })
    ]
}