export function List(props){
    let navs=props.nav
    return(
        navs.map((element,index)=>(
            <li className="lis" key={index}>{element}</li>
        ))

        
    )
}