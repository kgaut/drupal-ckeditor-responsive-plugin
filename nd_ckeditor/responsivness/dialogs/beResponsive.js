
CKEDITOR.dialog.add( 'beResponsive', function ( editor ) {
    return {
        title: 'Zone Responsive',
        minWidth: 400,
        minHeight: 200,
        contents: [
            {
                id: 'tab-basic',
                label: 'Basic Settings',
                elements: [
                    {
                        type: 'radio',
                        id: 'layout',
                        label: 'Layout',
                        items: [
                            [ '1 zones - 100%', '1_100'],
                            [ '2 zones - 50% - 50%', '2_50_50'],
                            [ '2 zones - 75% - 25%', '2_75_25'],
                            [ '2 zones - 25% - 75%', '2_25_75'],
                            [ '3 zones - 33% - 34% - 33%', '3_33_34_33' ],
                        ],
                        //style: 'display: block',
                        'default': '2_50_50'/*,
                        onClick: function() {
                            var val = this.getValue();
                            var tpl = responsiveness_get_template(val);
                            if(tpl != "") {
                                var dialog = CKEDITOR.dialog.getCurrent();

                                var e = dialog.getElement('preview');
                                console.log(e);
                                e.setHtml(tpl);

                                return false
                            }
                        }*/
                    }/*,
                    {
                        type: 'html',
                        id: 'preview',
                        label: 'Aperçu',
                        html: '<div>loooorem</div>'
                    }*/
                ]
            }
        ],
        onOk: function() {
            var dialog = this;
            var mode = dialog.getValueOf( 'tab-basic', 'layout' );
            var tpl = responsiveness_get_template(mode);
            if(tpl != "") {
                editor.insertHtml( tpl );
            }
        }
    };


});

function responsiveness_get_template(tpl) {
    var grid = "";
    switch(tpl) {
    	case '1_100' :
        grid = '<div class="ckeditor-col-container clearfix">';
				grid += '<div class="grid-12 twelvecol first-col"><p>lorem ipsum</p></div>';
				grid += '</div><br />';
        break;
      case '2_50_50' :
        grid = '<div class="ckeditor-col-container clearfix">';
				grid += '<div class="grid-6 sixcol first-col"><p>lorem ipsum</p></div>';
				grid += '<div class="grid-6 sixcol last-col"><p>lorem ipsum</p></div>';
				grid += '</div><br />';
        break;
      case '2_75_25' :
        grid = '<div class="ckeditor-col-container clearfix">';
        grid += '<div class="grid-8 eightcol first-col"><p>lorem ipsum</p></div>';
				grid += '<div class="grid-4 fourcol last-col"><p>lorem ipsum</p></div>';
				grid += '</div><br />';
				break;
      case '2_25_75' :
        grid = '<div class="ckeditor-col-container clearfix">';
				grid += '<div class="grid-4 fourcol first-col"><p>lorem ipsum</p></div>';
				grid += '<div class="grid-8 eightcol last-col"><p>lorem ipsum</p></div>';
				grid += '</div><br />';
        break;
      case '3_33_34_33' :
        grid = '<div class="ckeditor-col-container clearfix">';
				grid += '<div class="grid-4 fourcol first-col"><p>lorem ipsum</p></div>';
				grid += '<div class="grid-4 fourcol"><p>lorem ipsum</p></div>';
				grid += '<div class="grid-4 fourcol last-col"><p>lorem ipsum</p></div>';
				grid += '</div><br />';
				break;
    }
    return grid;
}