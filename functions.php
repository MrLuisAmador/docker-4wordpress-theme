<?php
add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles' );
function my_theme_enqueue_styles() {

    $parent_style = 'parent-style'; // This is 'twentyfifteen-style' for the Twenty Fifteen theme.
    wp_enqueue_style( $parent_style, get_template_directory_uri() . '/style.css' );
    wp_enqueue_style( 'child-style', get_stylesheet_directory_uri() . '/assets/css/main.css', array( $parent_style ), wp_get_theme()->get('Version'));

    wp_enqueue_script( 'la-main-js', get_stylesheet_directory_uri() . '/assets/js/bundle.js', array( 'jquery' ), '20120206', true );
}
?>