//Make sure jQuery has been loaded before leftBar.js
if (typeof jQuery === "undefined") {
  throw new Error("controller requires jQuery");
}

var LeftBar = React.createClass({
  render: function () {
    return (
      <div className="row">LeftBar</div>
    );
  }
});

ReactDOM.render(
  <LeftBar />,
  document.getElementById('leftBar')
);

