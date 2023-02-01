
export function Img (props){

let imgs=props.imga

return (

    imgs.map((element,index)=>(

        <img className={element.class} src={element.src} key={index} alt="" />

    ))

)

}