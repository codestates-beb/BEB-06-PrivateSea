import ReactCardSlider from "react-card-slider-component";
// a slide object contains the image link, title and function/click event for when a user clicks on a card

function Slider() {
  const slides = [
    {
      image:
        "https://i.pinimg.com/564x/61/38/7b/61387bc83dcb60df0f34eb93362bd97a.jpg",
      title: "This is a title",
      description: "This is a description",
    },
    {
      image:
        "https://i.pinimg.com/736x/4e/f2/2b/4ef22b0e3db5b76f52e1b73376d6c301.jpg",
      title: "This is a second title",
      description: "This is a second description",
    },
    {
      image:
        "https://i.pinimg.com/564x/dd/a1/db/dda1dbe5970aaa08839cac4f7ce6dcae.jpg",
      title: "This is a third title",
      description: "This is a third description",
    },
    {
      image:
        "https://i.pinimg.com/564x/2d/94/b5/2d94b506f427963a131465b489c8f809.jpg",
      title: "This is a fourth title",
      description: "This is a fourth description",
    },
    {
      image:
        "https://i.pinimg.com/564x/eb/0b/0f/eb0b0fc5852b28ff6c8716677a26fb44.jpg",
      title: "This is a fifth title",
      description: "This is a fifth description",
    },
    {
      image:
        "https://i.pinimg.com/564x/98/57/40/9857401dcfdac01504f1982ca490bbd1.jpg",
      title: "This is a sixth title",
      description: "This is a sixth description",
    },
    {
      image:
        "https://i.pinimg.com/564x/60/66/10/6066103e6af8c10a646a23b1be242ba3.jpg",
      title: "This is a seventh title",
      description: "This is a seventh description",
    },
    {
      image:
        "https://i.pinimg.com/564x/a4/13/97/a41397f4bb6a4e6d4fab08034333974e.jpg",
      title: "This is a seventh title",
      description: "This is a seventh description",
    },
  ];

  return <ReactCardSlider slides={slides} />;
}

export default Slider;
