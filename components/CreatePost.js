"use client"
{/*Needed for things where the input changes often, like forms or a user's scroll position because the default is server components*/}
import React, { useState } from 'react'

function CreatePost() {
    const [post, setPost] = useState("")
  return (
    <div>
        <h1 className='font-bold text-xl'>Create Post</h1>
        <form>
            <textarea onChange={(e) => setPost(e.target.value)}
            className="border border-black w-[400px] h-[80px] resize-none"
            ></textarea>
            <br/>
            <button className='p-3 bg-blue-600 text-white w-full'>Post</button>
        </form>
    </div>
  )
}

export default CreatePost