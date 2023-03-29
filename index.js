const Button = props => {
  const {name, style} = props
  return 
      <button className = `button ${style}`>{name}</button>
  
};

const element = (
  <div className="main-container">
    <h1 className="main-head">Social Buttons</h1>
    <div className="button-container">
      <Button name = "Like" style = "like-button" />
      <Button name = "Comment" style = "comment-button" />
      <Button name = "Share" style = "share-button" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
