import React, { useState, useEffect } from 'react'
import { GridLoader } from 'react-spinners'


const Loading = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        }, 5000)
    }, [])

    if (loading) {
        return (
            <div>
                <GridLoader
                    size={50}
                    color={'#8DD3BB'}
                    loading={loading}
                    speedMultiplier={2}
                />
            </div >
        )
    }
}

export default Loading