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
      var style = {
        width: '100%',
        height: '100%',
        backgroundColor: mui.Styles.Colors.deepPurpleA400
      };

      return (
        <div style={style}>
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
