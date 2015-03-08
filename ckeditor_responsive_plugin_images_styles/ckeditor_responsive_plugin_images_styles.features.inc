<?php
/**
 * @file
 * ckeditor_responsive_plugin_images_styles.features.inc
 */

/**
 * Implements hook_image_default_styles().
 */
function ckeditor_responsive_plugin_images_styles_image_default_styles() {
  $styles = array();

  // Exported image style: fourcol.
  $styles['fourcol'] = array(
    'label' => '4 Colonnes - 33%',
    'effects' => array(
      1 => array(
        'name' => 'image_scale',
        'data' => array(
          'width' => 297,
          'height' => '',
          'upscale' => 0,
        ),
        'weight' => 1,
      ),
    ),
  );

  // Exported image style: sixcol.
  $styles['sixcol'] = array(
    'label' => '6 Colonnes - 50%',
    'effects' => array(
      2 => array(
        'name' => 'image_scale',
        'data' => array(
          'width' => 457,
          'height' => '',
          'upscale' => 0,
        ),
        'weight' => 1,
      ),
    ),
  );

  return $styles;
}
