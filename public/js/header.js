'use strict';

var Header = React.createClass({
  render: function () {
    return (
      <div className="row">Header</div>
    );
  }
});

ReactDOM.render(
  <Header />,
  document.getElementById('header')
);

