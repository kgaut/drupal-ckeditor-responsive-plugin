/**
 * @file Plugin to count symbols, symbols without blanks and words
 */
(function () {
    CKEDITOR.plugins.add('responsivness', {
        icon: 'responsivness',
        init: function (editor) {

            // Register the toolbar buttons.
            editor.ui.addButton('responsivness', {
                label: Drupal.t('Inserer une zone responsive'),
                icon: this.path + 'images/responsivness.png',
                command: 'beResponsive'
            });

            var cssPath = this.path + 'responsivness.css';

            editor.on('instanceReady', function () {
                this.document.appendStyleSheet(cssPath);
            });
            editor.addCommand('beResponsive',new CKEDITOR.dialogCommand('beResponsive'));

            CKEDITOR.dialog.add('beResponsive', this.path + 'dialogs/beResponsive.js');
        }
    });
})();
