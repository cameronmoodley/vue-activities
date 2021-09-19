module.exports = {
	extends: [
		// add more generic rulesets here, such as:
		// 'eslint:recommended',
		'plugin:vue/recommended',
	],
	rules: {
		// override/add rules settings here, such as:
		// 'vue/no-unused-vars': 'error'
		'vue/singleline-html-element-content-newline': 0,
		'vue/html-indent': ['error', 'tab'], // enforce tabs in template
		indent: ['error', 'tab'],
		'vue/html-self-closing': false,
		'vue/attributes-order': false,
	},
};
