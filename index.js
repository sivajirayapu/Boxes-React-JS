const Box = (props) => {
  //  Write your code here.
  const { className, text } = props;
  return (
    <div class={className}>
      <h1 class="box-heading">{text}</h1>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div class="bg-container">
    <h1 class="heading">Boxes</h1>
    <div class="boxes-container">
      <Box className="box1" text="Small" />
      <Box className="box2" text="Medium" />
      <Box className="box3" text="Larg" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
