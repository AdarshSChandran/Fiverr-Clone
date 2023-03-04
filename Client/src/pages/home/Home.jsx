import React from 'react'
import CatCard from '../../components/catCard/CatCard';
import Featured from '../../components/featured/Featured'
import HomeBusinessContainer from '../../components/homeBusinessContainer/HomeBusinessContainer';
import ProjectCard from '../../components/projectCard/ProjectCard';
import QuickAbout from '../../components/quickAbout/QuickAbout';
import Slide from '../../components/slide/Slide'
import TrustedBy from '../../components/trustedBy/TrustedBy'
import { cards, projects } from "../../data";
import './Home.scss'


const Home = () => {
  return (
    <div className='home'>
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5}>
      {cards.map(card =>(
            <CatCard key={card.id} item={card} />
          ))}
      </Slide>
      <QuickAbout />
      <HomeBusinessContainer />
      <Slide slidesToShow={4} arrowsScroll={4}>
      {projects.map(card =>(
            <ProjectCard key={card.id} item={card} />
          ))}
      </Slide>
    </div>
  )
}

export default Home