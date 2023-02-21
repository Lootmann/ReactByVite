import React from "react";

// https://cataas.com/cat

export default function Cat() {
  const [image, setImage] = React.useState();

  async function fetchImage() {
    const res = await fetch("https://cataas.com/cat");
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImage(imageObjectURL);
  }

  React.useEffect(() => {
    fetchImage();
  }, []);

  return (
    <div id="contact">
      <img src={image} alt="icons" />
    </div>
  );
}
