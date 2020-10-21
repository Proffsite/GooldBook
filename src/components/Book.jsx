import React from 'react'

function Book({items, onClickItem}) {
    const [activeItem, setActiveItem] = React.useState(null);

    const onSelectItem = (index) => {
    setActiveItem(index);
    }


    return (
        <div className="categories">
            <ul>
              <li className={activeItem === null ? 'active' : ''}
               onClick = {() => onSelectItem(null)}> Все </li>
              { items &&
                  items.map((name, index) => (
         
                  <li
                    onMouseEnter={ () => onSelectItem(index) } 
                    className={activeItem === index ? 'active' : ''}
                    key={`${name}_${index}`}>
                    {name}</li>
                   
                  ))}
            
          

           
            </ul>

            <div className="main_bookshelf">
                        <div className="bookshelf_header"><h2>Серебряная полка читателя</h2></div>
                        <div className="bookshelf_content">
                            <ul className="bookshelf">
                            
                                <li className="book21">
                                <a href="./" className="book">
                                    <h3 className="spine">Екатерина Бурмистрова "Взрослеем с подростком: воспитание родителей"</h3>
                                    <p className="cover"><img src={require("../goldbook/s1.jpg")} width="180" height="279" alt="" /></p>
                                </a>
                                </li>
                                </ul>   
                                </div> 
                    </div>

                    </div>
    )}

export default Book
