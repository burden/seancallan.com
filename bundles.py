"""
Define static webasset bundles.
"""
from flask.ext.assets import Bundle

main_css = Bundle(
    'css/vendor/font-awesome.css',
    'css/vendor/bootstrap.css',
    'css/site.css',
    filters='cssmin',
    output='main.css'
)

main_js = Bundle(
    'js/vendor/jquery-1.11.2.min.js',
    'js/vendor/jquery.easing.1.3.js',
    'js/vendor/bootstrap.js',
    'js/animatedHeader.js',
    'js/site.js',
    Bundle(
        'js/*.coffee',
        filters='coffeescript'
    ),
    filters='uglifyjs',
    output='main.js'
)
