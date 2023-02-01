import { Buton } from "./button-container";

// export function Button(props) {
//   return (
//     <div className={props.class}>
//       <Buton class="about">About me</Buton>
//       <Buton class="porto">😮 Let’s see portfolios</Buton>
//     </div>
//   );
// }
export function Button(props){
  return(
    <div className={props.class}>
      <Buton class="about">About Us</Buton>
      <Buton class="porto">😮 Let’s see portfolios</Buton>
    </div>
  )
}