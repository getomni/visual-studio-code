const path = require('path');

module.exports = {
    THEME_DIR: path.join(__dirname, '..', 'theme'),
    THEME_COLOR_REFERENCE_URL: 'https://code.visualstudio.com/api/references/theme-color',
    NOT_THEME_KEYS: [
        'workbench.colorCustomizations',
        'editor.tokenColorCustomizations',
    ],
};
