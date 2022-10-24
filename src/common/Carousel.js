import ReactCardSlider from "react-card-slider-component";
// a slide object contains the image link, title and function/click event for when a user clicks on a card

function Slider() {
  const slides = [
    {
      image:
        "https://i.seadn.io/gae/6uHAoVlROJRaf9d4ziDp7Ng8E_-tgTmqf1zx1I6v1pYn0soIgDLj43-a48-iffICoCQJLAyv0zILFqZI_8eir8O_IlR0JUoizsrV?auto=format&w=1000",
    },
    {
      image:
        "https://i.pinimg.com/736x/4e/f2/2b/4ef22b0e3db5b76f52e1b73376d6c301.jpg",
    },
    {
      image:
        "https://i.pinimg.com/564x/dd/a1/db/dda1dbe5970aaa08839cac4f7ce6dcae.jpg",
    },
    {
      image:
        "https://i.pinimg.com/564x/2d/94/b5/2d94b506f427963a131465b489c8f809.jpg",
    },
    {
      image:
        "https://i.pinimg.com/564x/eb/0b/0f/eb0b0fc5852b28ff6c8716677a26fb44.jpg",
    },
    {
      image:
        "https://i.pinimg.com/564x/98/57/40/9857401dcfdac01504f1982ca490bbd1.jpg",
    },
    {
      image:
        "https://i.pinimg.com/564x/60/66/10/6066103e6af8c10a646a23b1be242ba3.jpg",
    },
    {
      image:
        "https://i.pinimg.com/564x/a4/13/97/a41397f4bb6a4e6d4fab08034333974e.jpg",
    },
  ];

  return <ReactCardSlider slides={slides} />;
}

export default Slider;
