import React from 'react';

export default function AboutUs() {
  return (
    <div>
      <div className='about-us-top'>
        <h1>Meet the Makers</h1>
      </div>
      <div className='about-us'>
        <div className='about-section'>
          <img className='aboutImg' src='./thomasCard.png'/>
          <p>Thomas is a California-(soon Texas-) based software developer in progress.<br/>
    He used to DM 3.5 and 5e, but has sworn to never do so again (except if he gets to use Demogorgon).<br/>
    In World of Warcraft, his Fury Warrior is dead last on the charts every pull. Dgespite actively raiding every tier since Gul&apos;dan, he has not a single Cutting Edge.<br/>
    He hit legend in Hearthstone once.<br/>
    Favorite Set: Dominaria</p>
        </div>
        <div className='about-section'>
          <img className='aboutImg' src='./ianCard.png'/>
          <p>Ian is a  Software Developer based in Beaverton, OR.<br/>
    Coming from a background of security related work and private development, he is moving into a professional experience looking to develop new skills.<br/>
    Most of his time outside of work is spent either metalworking, fixing 3D printers, or drawing.<br/>
    Favorite Set: Onslaught
          </p>
        </div>
        <div className='about-section'>
          <img className='aboutImg' src='./haileyCard.png'/>
          <p>Hailey is a Eugene-based software developer who can&apos;t resist a good puzzle.<br/>
    With a background in customer service, she brings a people-first approach to the coding process.<br/>
    In her free time, she loves to frolic in the sun, identify wildflowers, and read the stars.<br/>
    Favorite Set: Alchemy</p>
        </div>
        <div className='about-section'>
          <img className='aboutImg' src='./codyCard.png'/>
          <p>Cody is a full stack software developer in training living in Portland, Oregon.<br/>
    Cody enjoys using his skills to solve problems in innovative ways.<br/>
    When he is not coding, you can find him spending time with family, cooking, hiking, and playing video games.<br/>
    Favorite Set: Streets of New Capenna</p>
        </div>
      </div>
    </div>

  );
}
