import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router'

export default function Github() {
  const data = useLoaderData();

  return (
    <div
      className='bg-[#121212] text-white text-center text-3xl p-4 w-3/4 m-auto'>
      <img
        className='rounded-full w-24 h-24 mx-auto mb-4'
        src={data.avatar_url} alt="" />
      Github Followers: {data.followers}
    </div>
  )
}

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/mintdexdev')
  return response.json();
}


// export const githubInfoLoader = async () => {
//   const response = await fetch('https://api.github.com/users/mintdexdev');
//   return response.json();
// }