module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: ["plugin:react/recommended", "airbnb", "prettier"],
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: "latest",
		sourceType: "module"
	},
	plugins: ["react", "prettier"],
	rules: {
		"prettier/prettier": "error",
		"react/function-component-definition": [
			"error",
			{
				namedComponents: "arrow-function"
			}
		],
		"react/jsx-props-no-spreading": "off",
		"react/forbid-prop-types": "off",
		"no-param-reassign": [
			"error",
			{
				props: false
			}
		],
		"no-console": "off"
	}
};
