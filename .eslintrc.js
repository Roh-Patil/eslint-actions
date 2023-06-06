module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "max-len": [
            "warn",
            {
                code: 80
            }
        ],
        "no-console": "warn",
        "no-duplicate-imports": "warn",
    }
}
