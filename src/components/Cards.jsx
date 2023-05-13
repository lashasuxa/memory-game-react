
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
    // Define all the unique items
    const allUniqueItems = [
        { id: 1, img: '/html.png', stat: "" },
        { id: 2, img: '/css.png', stat: "" },
        { id: 3, img: '/js.png', stat: "" },
        { id: 4, img: '/scss.png', stat: "" },
        { id: 5, img: '/react.png', stat: "" },
        { id: 6, img: '/vue.png', stat: "" },
        { id: 7, img: '/angular.png', stat: "" },
        { id: 8, img: '/nodejs.png', stat: "" },
        { id: 9, img: '/babel.png', stat: "" },
        { id: 10, img: '/bootstrap.png', stat: "" },
    ];

    // Shuffle the unique items
    const shuffledUniqueItems = shuffle(allUniqueItems);

    // Select the first 8 items
    const selectedItems = shuffledUniqueItems.slice(0, 8);

    // Duplicate each item to have pairs
    const allItems = [...selectedItems.map(item => ({...item})), ...selectedItems.map(item => ({...item}))];

    // Shuffle all the items
    const shuffledItems = shuffle(allItems);

    const [items, setItems] = useState(shuffledItems);

   


    const [prev,setPrev]=useState(-1)

    function check(current){
        if(items[current].id == items[prev].id){
            items[current].stat = "correct"
            items[prev].stat = "correct"
            setItems([...items])
            setPrev(-1)
        }else{
            items[current].stat = "wrong"
            items[prev].stat = "wrong"
            setItems([...items])
            setTimeout(() => {
                items[current].stat = ""
                items[prev].stat = ""
                setItems([...items])
                setPrev(-1)
            }, 1000)
        }
    }

    function handleClick(id){
        if(items[id].stat === 'correct'){
            return ;
        }
        if (items[id].stat === "correct" || items[id].stat === "active") {
            return;
        }
        if(prev === -1){
            items[id].stat = "active"
            setItems([...items])
            setPrev(id)
        }else{
            check(id)
        }
    }

    return (
        <div className="container">
            {items.map((item,index)=>(
                <Card key={index} item={item} id={index} handleClick={handleClick}/>
            ))}
        </div>
    );
}

export default Cards;