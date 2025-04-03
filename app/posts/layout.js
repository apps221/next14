import React from 'react'

export default function RootLayout({children}) {
  return (
    <>
    <h1 className="font-bold text-4xl text-center">Posts</h1>
    <div>{children}</div>
    </>
  )
}
