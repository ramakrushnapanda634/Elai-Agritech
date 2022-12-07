import React from 'react'

const Page = () => {
   
 let x=  localStorage.getItem("count")

  return (
    <div>
      <h2>{x}</h2>
    </div>
  );
}

export default Page