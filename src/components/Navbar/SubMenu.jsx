import React from 'react'
import { Link } from 'react-router-dom'
//Importación de estilos
import './navbar.scss'

const SubMenu = ({ item }) => {
    //Despliegue de subitems
    const [subnav, setSubnav] = React.useState(false)

    //Funcion para desplegar subitems
    const showSubnav = () => setSubnav(!subnav)

    //Funcion para los subitems
    const DropdownItem = 
    subnav && item.subItems.map((item, index) => {
        return(
            <Link to={item.path} key={index} className='subnav__item'>
                {item.icon}
                <div className='subnav__title'>{item.title}</div>
            </Link>
        )
    })

    return(
        <React.Fragment>
            <Link to={item.path} className='subnav__container' onClick={item.subItems && showSubnav}>
                <div className='subnav__content'>
                    {item.icon}
                    <div className='subnav__title'>{item.title}</div>
                </div>
                <div>
                    {item.subItems && subnav 
                        ? item.iconOpened
                        : item.subItems
                        ? item.iconClosed
                        : null
                    }
                </div>
            </Link>
            {DropdownItem}
        </React.Fragment>
    )

}

export default SubMenu