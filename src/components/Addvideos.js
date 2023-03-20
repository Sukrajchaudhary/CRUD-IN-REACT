import React, { useEffect, useState } from 'react'

const Addvideos = ({ addVideos, editVideo, updateVideo }) => {
    const initialState = {
        title: "",
        views: "",
        channel: "New React Master",
        time: "1 year Ago",
        verified: true
    }
    const [values, setValues] = useState({ initialState })
    function handleSubmit(e) {
        e.preventDefault()
        if(editVideo){
        updateVideo(values)
        }else{
        addVideos(values)
    }
        setValues(initialState)

    }
    function handleChande(e) {
        e.preventDefault()

        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (editVideo) {
            setValues(editVideo)
        }

    }, [editVideo])
    return (
        <>
            <form>
                <input type="text" name='title' onChange={handleChande} value={values.title} placeholder='title' />
                <input type="text" name="views" onChange={handleChande} value={values.views} placeholder='Views' />
                <button
                    onClick={handleSubmit}

                >{editVideo ? "Edit Video" : "Add Videos"}</button>
            </form>

        </>
    )
}

export default Addvideos
