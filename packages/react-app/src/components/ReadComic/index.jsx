import React from 'react'

import anonvsmolochissue2 from "../../assets/anonvsmoloch-issue2.svg";

const ReadComic = () => {
	return (
<section id="whatisit" class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="w-1/2">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-green-teal">An Alternate-Reality Coordination Game.
      </h1>
      <p class="mb-2 leading-relaxed">
      <strong>The Greatest LARP</strong> is a coordination game about coordination games. 
      <br/>
      <br/>
      Moloch, the god of Coordination Failiure, is winning.  And you, must stop him at all costs, Anon! On each level, you and your frens will complete a mission.  Only then can you pass to the next level.
      Some levels may involve minting of NFTs.  All proceeds go to support public goods on Gitcoin Grants, of course.
      <br/>
      <br/>
      You'll laugh, you'll cry, maybe you'll share it with your frens.  Most importantly, you'll experience something more meaningful than just another decentralized casino.
      </p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      onClick={() => {
        document.location = "/get-started/";
      }}

        >Join the LARP</button>
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
