import React from 'react'
import Post from '../components/post/Post'
import Section from '../components/section/Section'
import { Jumbotron } from '../layout/default/styled'

const posts=[
    {
      label:'Amet varius aliquam',
      content:'Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.',
      src:'images/pic06.jpg',
      alt:'images/pic06.jpg',
      to:'/',
      category:'post',
      icon:'fa-gem',
    },  {
      label:'Amet varius aliquam',
      content:'Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.',
      src:'images/pic06.jpg',
      alt:'images/pic06.jpg',
      to:'/',
      category:'post',
      icon:'solid fa-paper-plane',
    },  {
      label:'Amet varius aliquam',
      content:'Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.',
      src:'images/pic06.jpg',
      alt:'images/pic06.jpg',
      to:'/',
      category:'post',
      icon:'solid fa-rocket',
    },  {
      label:'Amet varius aliquam',
      content:'Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.',
      src:'images/pic06.jpg',
      alt:'images/pic06.jpg',
      to:'/',
      category:'post',
      icon:'solid fa-signal',
    },  {
      label:'Amet varius aliquam',
      content:'Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.',
      src:'images/pic06.jpg',
      alt:'images/pic06.jpg',
      to:'/',
      category:'post',
      icon:'solid fa-rocket',
    },  {
      label:'Amet varius aliquam',
      content:'Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.',
      src:'images/pic06.jpg',
      alt:'images/pic06.jpg',
      to:'/',
      category:'post',
      icon:'solid fa-signal',
    }, 
  ]
  
  
  const features=[
    {
      label:'Amet varius aliquam',
      content:'Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.',
      src:'images/pic06.jpg',
      alt:'images/pic06.jpg',
      to:'/',
      category:'post',
      icon:'fa-gem',
    },  {
      label:'Amet varius aliquam',
      content:'Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.',
      src:'images/pic06.jpg',
      alt:'images/pic06.jpg',
      to:'/',
      category:'post',
      icon:'solid fa-paper-plane',
    },  {
      label:'Amet varius aliquam',
      content:'Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.',
      src:'images/pic06.jpg',
      alt:'images/pic06.jpg',
      to:'/',
      category:'post',
      icon:'solid fa-rocket',
    },  {
      label:'Amet varius aliquam',
      content:'Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.',
      src:'images/pic06.jpg',
      alt:'images/pic06.jpg',
      to:'/',
      category:'post',
      icon:'solid fa-signal',
    }, 
  ]
  
const Main = () => {
  return (
    <div>
       

    
      <Section headerLabel={"Ipsum sed dolor"}>
        <Post type={"features"} posts={features}></Post>
      </Section>

      <Section headerLabel={"Ipsum sed dolor"}>
        <Post type={"posts"} posts={posts}></Post>
      </Section>
    </div>
  )
}

export default Main