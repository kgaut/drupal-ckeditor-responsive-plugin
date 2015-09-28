CONTENTS OF THIS FILE
---------------------
   
 * Introduction
 * Requirements
 * Installation
 * Troubleshooting
 * FAQ
 * Maintainers


INTRODUCTION
------------

This module, used on top of CKEditor allows the use of responsive area within 
rich editing textarea. 

Instead of tables, the plugins insert divs with standard responsive css lasses.

 * For a full description of the module, visit the project sandbox page:
   https://www.drupal.org/sandbox/kgaut/2424721

 * To submit bug reports and feature suggestions, or to track changes:
   https://www.drupal.org/project/issues/2424721


REQUIREMENTS
------------
This module requires the following module:

 * CKEditor (https://drupal.org/project/ckeditor)


INSTALLATION
------------

This module requires CKEditor module to be installed
(https://www.drupal.org/project/ckeditor).

Copy the module folder to your module directory, enable it on the admin module
page.

Enable the module, and follow the line to your CKEditor profile for which you
want to enable the plugin. ie : /admin/config/content/ckeditor/edit/Advanced

 1. Under "Editor appearance", section "Plugins", please be sure that
"CKEditor Responsive Plugin : Allow to insert responsive areas" is checked
 2. Drag the button on your toolbar (the button is the one showed in
docs/button.jpg


TROUBLESHOOTING
---------------

 * If the button does not display on the toolbar, check the following:

   - is the CKEditor option "CKEditor Responsive Plugin : Allow to insert 
   responsive areas" is checked ?

   - Is the button is present on CKEditor visual toolbar configuration ?


FAQ
---

Q: Does this module work with WYSIWYG bridge API ?

A: Nothing has been done for it, so I can't answer this question, feel free to 
try it out and report any issue you'll face.


MAINTAINERS
-----------

Current maintainers:
 * Kevin Gautreau (kgaut) - https://drupal.org/user/686336