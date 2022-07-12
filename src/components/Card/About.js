import React from 'react'
import profilPicture from '../../img/profil.jpg'

function About() {
  return (
        <div className="sngCard">
          
        <div className="pPic">
          <img src={profilPicture} alt="Tahsin Sungur"/>
        </div>

        <div className="title">
          <h1>Tahsin Sungur</h1>
          <p className="exc">Front-end Developer, Grafik Tasarımcı ve Blog Yazarı</p>
          <p className="about">İzmir'de yaşıyorum, 27 yaşındayım. Front-end teknolojileri haricinde grafik tasarım ve video düzenleme ile uğraşıyorum, aynı zamanda <strong>tahsinbey.com</strong>'da kişisel yazılar paylaşıyorum.</p>
        </div>
        
      </div>
  )
}

export default About