const Notification = (props) => {
  //  Write your code here.
  const { classText, Url, className } = props;
  const container = `containers ${className}`;

  return (
    <div className={container}>
      <img className="icons" src={Url} />
      <p className="message">{classText}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div>
    <div className="container-card">
      <h1 className="heading">Notifications</h1>
      <div className="color-container">
        <Notification
          className="primary-color"
          Url="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
          classText="information Message"
        />
        <Notification
          className="success-color"
          Url="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          classText="Success Message"
        />
        <Notification
          className="warning-color"
          Url="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
          classText="Warning Message"
        />
        <Notification
          className="danger-color"
          Url="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
          classText="Error Message"
        />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
