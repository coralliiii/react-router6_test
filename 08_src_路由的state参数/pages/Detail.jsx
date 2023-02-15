import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Detail() {
    const {state:{id,title:title2,content}} = useLocation()
    return (
        <ul>
            <li>{id}</li>
            <li>{title2}</li>
            <li>{content}</li>
        </ul>
    )
}
