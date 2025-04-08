
import CreatePost from "@/components/CreatePost";
import { db } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";
import React from "react";
 export default async function Page() {
  const posts = await getDocs(collection(db, "posts"))
    return (
      <>
     <h1>This is the Posts page</h1>
     <div>
      <CreatePost />
     </div>
     <ul>
      {posts.docs.map(p => <li>{p.data().post}</li>)}
     </ul>
     </>
    );
  }
  