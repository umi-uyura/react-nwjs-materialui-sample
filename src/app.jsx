'use strict';

(function() {
  var React = require("react");
  var injectTapEventPlugin = require("react-tap-event-plugin");
  injectTapEventPlugin();

  var mui = require("material-ui");
  var ThemeManager = new mui.Styles.ThemeManager();

  var Hello = require('./Hello.jsx');
  var Hi = require('./Hi.jsx');

  var App = React.createClass({
    childContextTypes: {
      muiTheme: React.PropTypes.object
    },
    getChildContext: function() {
      return {
        muiTheme: ThemeManager.getCurrentTheme()
      };
    },
    render: function() {
      return (
        <div>
          <Hello name='Material' />
          <Hi />
        </div>
      );
    }
  });

  React.render(
    <App />,
    document.body
  );
})();
