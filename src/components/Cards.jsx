
import { useState } from "react"
import Card from "./Card"

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function Cards(){
    const [items, setItems] = useState(shuffle([
        { id: 1, img: '/html.png', stat: "" },
        { id: 1, img: '/html.png', stat: "" },
        { id: 2, img: '/css.png', stat: "" },
        { id: 2, img: '/css.png', stat: "" },
        { id: 3, img: '/js.png', stat: "" },
        { id: 3, img: '/js.png', stat: "" },
        { id: 4, img: '/scss.png', stat: "" },
        { id: 4, img: '/scss.png', stat: "" },
        { id: 5, img: '/react.png', stat: "" },
        { id: 5, img: '/react.png', stat: "" },
        { id: 6, img: '/vue.png', stat: "" },
        { id: 6, img: '/vue.png', stat: "" },
        { id: 7, img: '/angular.png', stat: "" },
        { id: 7, img: '/angular.png', stat: "" },
        { id: 8, img: '/nodejs.png', stat: "" },
        { id: 8, img: '/nodejs.png', stat: "" }
    ]));

    return (
        <div className="container">
            {items.map((item,index)=>(
                <Card key={index} item={item}/>
            ))}
        </div>
    );
}

export default Cards;