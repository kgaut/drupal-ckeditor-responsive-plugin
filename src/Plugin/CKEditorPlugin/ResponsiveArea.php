<?php

/**
 * @file
 * Contains \Drupal\ckeditor\Plugin\CKEditorPlugin\DrupalLink.
 */

namespace Drupal\ckeditor\Plugin\CKEditorPlugin;

use Drupal\ckeditor\CKEditorPluginBase;
use Drupal\editor\Entity\Editor;

/**
 * Defines the "responsivearea" plugin.
 *
 * @CKEditorPlugin(
 *   id = "responsivearea",
 *   label = @Translation("Responsive area"),
 *   module = "ckeditor_responsive_plugin"
 * )
 */
class ResponsiveArea extends CKEditorPluginBase {

  /**
   * {@inheritdoc}
   */
  public function getFile() {
    return drupal_get_path('module', 'ckeditor_responsive_plugin') . '/js/plugins/responsivearea.js';
  }

  /**
   * {@inheritdoc}
   */
  public function getLibraries(Editor $editor) {
    return array(
      'core/drupal.ajax',
    );
  }

  /**
   * {@inheritdoc}
   */
  public function getConfig(Editor $editor) {
    return array(
      'drupalLink_dialogTitleAdd' => t('Add Link'),
      'drupalLink_dialogTitleEdit' => t('Edit Link'),
    );
  }

  /**
   * {@inheritdoc}
   */
  public function getButtons() {
    $path = drupal_get_path('module', 'ckeditor') . '/js/plugins/drupallink';
    return array(
      'DrupalLink' => array(
        'label' => t('Link'),
        'image' => $path . '/link.png',
      ),
      'DrupalUnlink' => array(
        'label' => t('Unlink'),
        'image' => $path . '/unlink.png',
      ),
    );
  }

}
