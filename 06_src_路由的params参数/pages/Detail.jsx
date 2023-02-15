import React from 'react'
import { useParams ,useMatch } from 'react-router-dom'

export default function Detail() {
    const {id,title,content} = useParams()

    // 也可达到同样效果，但不常用
    // const x = useMatch('/home/message/detail/:id/:title/:content')
    // console.log(x)
    
    return (
        <ul>
            <li>{id}</li>
            <li>{title}</li>
            <li>{content}</li>
        </ul>
    )
}
