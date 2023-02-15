import React from 'react'
import { useSearchParams ,useLocation} from 'react-router-dom'

export default function Detail() {
    const [search,setSearch] = useSearchParams()
    const id = search.get('id')
    const title = search.get('title')
    const content = search.get('content')

    // const x = useLocation()
    // console.log(x)
    
    return (
        <ul>
            <button onClick={()=>setSearch('id=008&title=哈哈哈&content=嘻嘻嘻')}>点我更新一下收到的search参数</button>
            <li>{id}</li>
            <li>{title}</li>
            <li>{content}</li>
        </ul>
    )
}
