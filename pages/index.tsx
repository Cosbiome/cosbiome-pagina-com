import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const Home = () => {
  return (
    <>
      <div className="container">
        <AwesomeSlider organicArrows={false} className="aws-btn">
          <div data-src="https://firebasestorage.googleapis.com/v0/b/cosbiome-bcdf4.appspot.com/o/PABLO-WEB.jpg?alt=media&token=d951658d-489f-46bf-9963-a9c31db5ac9a" />
          <div data-src="https://firebasestorage.googleapis.com/v0/b/cosbiome-bcdf4.appspot.com/o/pablo04.jpg?alt=media&token=878ffdad-8274-4631-af9d-94828ffa41a8" />
          <div data-src="https://firebasestorage.googleapis.com/v0/b/cosbiome-bcdf4.appspot.com/o/pablo03.jpg?alt=media&token=694c4e1a-983d-4782-9d61-258e11be2b96" />
          <div data-src="https://firebasestorage.googleapis.com/v0/b/cosbiome-bcdf4.appspot.com/o/pablo%20(1).jpg?alt=media&token=425ce3c5-2799-4dd5-beb9-51ab83f20605" />
          <div data-src="https://firebasestorage.googleapis.com/v0/b/cosbiome-bcdf4.appspot.com/o/pablo02.jpg?alt=media&token=0b980d71-8021-4055-8d71-ace701e5996d" />
        </AwesomeSlider>
      </div>
    </>
  );
};

export default Home;
