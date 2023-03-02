import "./App.css";
import { useState } from "react";
import Card from "./components/card/Card";
import Button from "./components/button/Button";
import dataList from "./assets/data.json";
import { imgObjet as imgList } from "./assets/img";
function App() {
  const [backgroundImg, setBackgroundImg] = useState(0);

  const backgroundChange = () => {
    const newBackgroundImg = backgroundImg + 1;
    if (newBackgroundImg >= imgList.length) setBackgroundImg(0);
    else setBackgroundImg(newBackgroundImg);
  };

  const [phrases, setPhrases] = useState(
    Math.floor(Math.random() * dataList.length)
  );

  const changePhrase = () => {
    const newPhrase = Math.floor(Math.random() * dataList.length);
    if (newPhrase >= dataList.length) setPhrases(0);
    else setPhrases(newPhrase);
  };

  return (
    <div
      className="App"
      style={{ backgroundImage: `url(${imgList[backgroundImg].img})` }}
    >
      <h1>Famous phrases</h1>
      <Card phrases={dataList[phrases]} />
      <Button changePhrase={changePhrase} backgroundChange={backgroundChange} />
    </div>
  );
}

export default App;
