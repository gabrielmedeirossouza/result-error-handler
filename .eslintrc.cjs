module.exports = {
	"env": {
		"browser": true,
		"es2021": true,
	},
	"extends": [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react/recommended",
	],
	"overrides": [
		{
			"env": {
				"node": true,
			},
			"files": [
				".eslintrc.{js,cjs}",
			],
			"parserOptions": {
				"sourceType": "script",
			},
		},
	],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module",
	},
	"plugins": [
		"@typescript-eslint",
		"react",
	],
	"rules": {
		"react/react-in-jsx-scope": "off",
		"indent": [
			"error",
			"tab",
		],
		"linebreak-style": [
			"error",
			"unix",
		],
		"quotes": [
			"error",
			"double",
		],
		"semi": [
			"error",
			"always",
		],
		"object-curly-spacing": [
			"error",
			"always",
		],
		"object-curly-newline": [ "error", {
			"consistent": true,
		} ],
		"array-bracket-spacing": [
			"error",
			"always",
		],
		"array-element-newline": [
			"error",
			"consistent",
		],
		"comma-dangle": [
			"error",
			"always-multiline",
		],
		"comma-spacing": [
			"error",
			{
				"before": false,
				"after": true,
			},
		],
	},
};
