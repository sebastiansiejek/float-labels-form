module.exports = {
    "extends": "airbnb-base",
    "globals": {
        "window": true,
        "document": true,
        "expect": true
    },
    
    "rules": {
        "no-new": 0,
        "class-methods-use-this": [2, { "exceptMethods": ['addActive', 'removeActive'] }],
    },
};