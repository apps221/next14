import { db } from "@/firebase"
import { addDoc, collection } from "firebase/firestore"
import { revalidatePath } from "next/cache"

{/* "use client" Needed for things where the input changes often, like forms or a user's scroll position because the default is server components*/}


function CreatePost() {
    async function addPost(formData) {
      "use server"
      const post = formData.get("text")
      await addDoc(collection(db, "posts"),  
      {
        post: post
      })
      revalidatePath("/posts")
      {/*automatically reloads the page to show the next post*/}
    }
  return (
    <div>
        <h1 className='font-bold text-xl'>Create Post</h1>
        <form action={addPost}>
            <textarea name="text"
            className="border border-black w-[400px] h-[80px] resize-none"
            ></textarea>
            <br/>
            <button className='p-3 bg-blue-600 text-white w-full'>Post</button>
        </form>
    </div>
  )
}

export default CreatePost