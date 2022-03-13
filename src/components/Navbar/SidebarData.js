import React from 'react';
//Import React-Icons
import * as FaIcon from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as MdIcons from 'react-icons/md'

export const SidebarData = [
    {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text',
        iconClosed: <MdIcons.MdKeyboardArrowDown />,
        iconOpened: <MdIcons.MdKeyboardArrowUp />,
        subItems: [
            {
                title: 'SubTitulo 1',
                path: '/dashboard1',
                icon: <AiIcons.AiFillHome />
            },
            {
                title: 'SubTitulo 2',
                path: '/dashboard2',
                icon: <AiIcons.AiFillHome />
            },
            {
                title: 'SubTitulo 3',
                path: '/dashboard3',
                icon: <AiIcons.AiFillHome />
            }
        ]
    },
    {
        title: 'Monedas',
        path: '/coins',
        icon: <FaIcon.FaBtc />,
        cName: 'nav-text',
        subItems: null
    },
    {
        title: 'Subir Archivo',
        path: '/inputfile',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text',
        subItems: null
    },
    {
        title: 'Categories',
        path: '/categories',
        icon: <IoIcons.IoIosGrid />,
        cName: 'nav-text',
        subItems: null
    },
    {
        title: 'Ordenes',
        path: '/ordenes',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text',
        subItems: null
    }
]