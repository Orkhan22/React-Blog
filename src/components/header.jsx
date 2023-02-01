import { List } from "./list";

export function Navbar(){
    let lists=["home","about","contact","porfolious","journey","blog"]
    return(
        <div className="umum">
        <header className="header">
            <List nav={lists}/>
        </header>
        </div>
    )
}

// 1ci burani yaz 