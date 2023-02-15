
import { Navigate } from "react-router-dom";
import About from '../pages/About'
import Home from '../pages/Home'
import Message from '../pages/Message'
import News from '../pages/News'
import Detail from '../pages/Detail'
export default [
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/home',
        element: <Home />,
        children:[
            {
                path:'/home/news',
                element:<News/>
            },
            {
                path:'/home/message',
                element:<Message/>,
                children:[
                    {
                        // Search
                        path:'/home/message/detail',
                        element:<Detail/>
                    },
                ]
            },
        ]
    },
    {
        path: '/',
        element: <Navigate to='/about' />
    }
]