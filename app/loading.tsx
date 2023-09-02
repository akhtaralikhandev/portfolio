"use client"
import { Watch } from 'react-loader-spinner'
const Loading = () => {
    return (
        <div>
            <Watch
                height="80"
                width="80"
                radius="48"
                color="#4fa94d"
                ariaLabel="watch-loading"
                wrapperStyle={{}}

                visible={true}
            />
        </div>
    )
}
export default Loading