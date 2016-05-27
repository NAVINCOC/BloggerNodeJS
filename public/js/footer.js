//Make sure jQuery has been loaded before footer.js
if (typeof jQuery === "undefined") {
  throw new Error("controller requires jQuery");
}

var Footer = React.createClass({
  render: function () {
    return (
      <div className="row">Footer</div>
    );
  }
});

ReactDOM.render(
  <Footer />,
  document.getElementById('footer')
);

