module.exports = {
	'extends': 'eslint:recommended',
	'parserOptions': {
		'ecmaVersion': 6,
		'sourceType': 'module'
	},
	'env': {
		'es6': true,
        'browser': true,
        'browser': true,
        'es6': true,
        'mocha': true,
        'node': true,
        'commonjs': true
	},
	'rules': {
		'indent': ['error', 'tab'],
		'linebreak-style': ['error', 'unix'],
		'quotes': ['error', 'single'],
		'semi': ['error', 'always'],
		'eqeqeq': ['error', 'always'],
		'complexity': ['error', { 'max': 6 }],
		'block-scoped-var': 'error',
		'curly': ['error', 'all'],
		'no-else-return': ['error', { 'allowElseIf': true }],
		'no-empty-function': 'error',
		'no-eval': 'error',
		'no-lone-blocks': 'error',
		'no-multi-spaces': 'error',
		'no-var': 'error',
		'no-console': 'off',
		'no-throw-literal': 'error'
	},
	'globals': {
		'ExecutorError': true,
	},
	'parser': 'babel-eslint'
};
