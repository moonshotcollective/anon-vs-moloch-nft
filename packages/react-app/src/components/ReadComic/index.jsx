import React from 'react'

import anonvsmolochissue2 from "../../assets/anonvsmoloch-issue2.svg";

const ReadComic = () => {
	return (
<section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="w-1/2">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Read Comic
      </h1>
      <p class="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Read</button>
      </div>
    </div>
	<div class="w-1/2">
		<div className="flex flex-grow py-2 justify-center">
			<img className="w-1/3" src={anonvsmolochissue2} alt="Comic Book"/>
		</div>
    </div>
  </div>
</section>
	)
}

export default ReadComic
