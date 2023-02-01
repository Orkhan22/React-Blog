import { Button } from "./button";
import { MainImgs } from "./photo";
import { Img } from "./img";
import { Info } from "./info";
export function Main() {
  let Mainimg = MainImgs;
  return (
    <main className="main">
      <section className="main-container">
        
        <Info class="name">Hey there 👋 I am Amirhossein</Info>
        <Info class="name_p">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Info>
        <Img class="main-img" imga={Mainimg}></Img>
        <Button class="btn" />
      </section>
    </main>
  );
}
