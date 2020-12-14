import React from 'react'
import Story from './Story'
import './StoryReel.css'

const StoryReel = () => {
    return (
        <div className="storyReel">
            <Story
                image="https://images.unsplash.com/photo-1519791883288-dc8bd696e667?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c3Rvcnl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                profileSrc="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                title="Sonny Sangha"
            />

            <Story
                image="https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8c3Rvcnl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                profileSrc="https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                title="Rafeh Qazi"
            />

            <Story
                image="https://images.unsplash.com/photo-1500099817043-86d46000d58f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHN0b3J5fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                profileSrc="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                title="Clinton Jones"
            />
        </div>
    )
}

export default StoryReel
