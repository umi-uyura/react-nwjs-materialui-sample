'use strict';

(function() {
  var React = require('react');
  var injectTapEventPlugin = require("react-tap-event-plugin");
  injectTapEventPlugin();

  var Hello = require('./Hello.jsx');
  var Hi = require('./Hi.jsx');

  React.render(
    <div>
      <Hello name='Material' />
      <Hi />
    </div>,
    document.getElementById('app')
  );
})();
