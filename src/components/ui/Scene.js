import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html, useScroll } from '@react-three/drei';
import { val } from '@theatre/core';
import { useCurrentSheet, PerspectiveCamera, editable as e } from '@theatre/r3f';

import Heading from './Heading';
import TVScreen from './TV/TVScreen';
import Image from './Billboard/Image';
import CementPole from './Billboard/CementPole';
import AnimatedStars from './AnimatedStars';
import Floor from './Floor';
import Text3D from './Text3D';
import Text from './Text';
import NavSocialTextHtml from './NavSocialTextHtml';

import CC92MB from '../../assets/coca-cola_92mb.mp4';
import DFS from '../../assets/dfs-mrp.mp4';
import JNJ from '../../assets/jnjvision.mp4';
import SAMSHA from '../../assets/samsha.mp4';
import NA from '../../assets/new-alternatives.mp4';
import TABOOLA from '../../assets/taboola.mp4';

import TESTIMONIALS from '../../assets/images/testimonials-heading_border.png';
import DFSREC_BL from '../../assets/images/ben-lane-dfs_border.png';
import JNJREC_DB from '../../assets/images/dalila-brosen-jnj_border.png';
import DFSREC_BW from '../../assets/images/bradley-walker-dfs_border.png';
import CTSREC_BF from '../../assets/images/brian_fowler_cts.png';

import '../../styles.css';

const Scene = () => {

  const projectsHeadingRef = useRef();
  const sheet = useCurrentSheet();
  const scroll = useScroll();

  useFrame(() => {
    const sequenceLength = val(sheet.sequence.pointer.length);
    sheet.sequence.position = scroll.offset * sequenceLength;
  });

  return (
    <>
      <ambientLight
        intensity={1}
        theatreKey='Light'
      />
      <NavSocialTextHtml
        text='LinkedIn'
        link='https://www.linkedin.com/in/ramizackaryshamir/'
        xPosCaption={8}
        yPosCaption={27}
        zPosCaption={0}
      />
      <NavSocialTextHtml
        text='GitHub'
        link='https://github.com/MeetYourCreator'
        xPosCaption={8}
        yPosCaption={25.5}
        zPosCaption={0}
      />
      <NavSocialTextHtml
        text='Email'
        link='mailto:rzshamir@icloud.com'
        xPosCaption={8}
        yPosCaption={24}
        zPosCaption={0}
      />
      {/* <Text /> */}
      {/* <Text3D
        url='models/text_gitHub.gltf'
        textRotationX={1.5}
        textRotationY={0}
        textRotationZ={0}
        textPosX={9}
        textPosY={25}
        textPosZ={0}
      />
      <Text3D
        url='models/text_gitHub.gltf'
        textRotationX={1.5}
        textRotationY={0}
        textRotationZ={0}
        textPosX={9}
        textPosY={23}
        textPosZ={0}
      /> */}
      {/* Testimonials Billboard */}
      <Image
        zPosImage={2.1}
        xPosImage={-5.8}
        yPosImage={2}
        xRotImage={0}
        yRotImage={0}
        zRotImage={0}
        img={TESTIMONIALS}
        imgWidth={4}
        imgLength={2}
      />
      <CementPole
        posZ={1.9}
        posX={-6}
        posY={-2}
      />
      {/* Bradley Walker */}
      <Image
        zPosImage={-9}
        xPosImage={-1.3}
        yPosImage={2}
        xRotImage={0}
        yRotImage={.2}
        zRotImage={0}
        img={DFSREC_BW}
        imgWidth={4}
        imgLength={2}
      />
      <CementPole
        posZ={-9.5}
        posX={-1.5}
        posY={-2}
      />
      {/* Ben Lane */}
      <Image
        zPosImage={-15}
        xPosImage={3}
        yPosImage={2}
        xRotImage={0}
        yRotImage={.2}
        zRotImage={0}
        img={DFSREC_BL}
        imgWidth={4}
        imgLength={2}
      />
      <CementPole
        posZ={-15.2}
        posX={3}
        posY={-2}
      />
      {/* Dalia Brosen */}
      <Image
        zPosImage={-16}
        xPosImage={9}
        yPosImage={2}
        xRotImage={0}
        yRotImage={.2}
        zRotImage={0}
        img={JNJREC_DB}
        imgWidth={4}
        imgLength={2}
      />
      <CementPole
        posZ={-16.2}
        posX={9}
        posY={-2}
      />
      {/* Brian Fowler */}
      <Image
        zPosImage={-17}
        xPosImage={15}
        yPosImage={2}
        xRotImage={0}
        yRotImage={.2}
        zRotImage={0}
        img={CTSREC_BF}
        imgWidth={4}
        imgLength={2}
      />
      <CementPole
        posZ={-17.2}
        posX={15}
        posY={-2}
      />
      <Html
        ref={projectsHeadingRef}
        as='section'
        position={[-1, 7.3, 13]}

      >
        <Heading
          contactText='Projects'
          paddingTop='15%'
          paddingRight='20%'
          paddingBottom='15%'
          paddingLeft='20%'
          border='#7AF8FF 3px solid'
          borderRadius={10}
          backgroundColor='#1b1b1c'
          fontFamily='Raleway Dots'
          fontSize='1rem'
          fontVariant='small-caps'
          letterSpacing='.15rem'
          color='gold'
          mixBlendMode='screen'
        />
      </Html>
      <TVScreen
        src='tvPlane.gltf'
        url={DFS}
        zMeshPos={9.5}
        yMeshPos={8.7}
        xMeshPos={1}
        xPosCaption={1}
        yPosCaption={7.4}
        zPosCaption={9.5}
        xPlaneGeometry={3}
        yPlaneGeometry={1.5}
        captionText={`Overhaul and expansion of Discover's Mobile${'\n'}${'\n'}Regression Pipeline portal servicing all 15 mobile${'\n'}${'\n'}application development teams.`}
      />
      <TVScreen
        src='tvPlane.gltf'
        url={JNJ}
        zMeshPos={-46}
        yMeshPos={10}
        xMeshPos={5.2}
        xPosCaption={5.2}
        yPosCaption={8.9}
        zPosCaption={-46}
        xPlaneGeometry={3}
        yPlaneGeometry={1.5}
        captionText={`Piloted B2B customer loyalty website for Johnson${'\n'}${'\n'}and Johnson Vision's alliance of global GPOs.`}
      />
      <TVScreen
        src='tvPlane.gltf'
        url={CC92MB}
        zMeshPos={7}
        yMeshPos={5}
        xMeshPos={16.7}
        xPosCaption={16.7}
        yPosCaption={3.8}
        zPosCaption={7}
        xPlaneGeometry={3}
        yPlaneGeometry={1.5}
        captionText={`Developed in-house 100+ custom React component${'\n'}${'\n'}library as building blocks for redesign of customer-${'\n'}${'\n'}facing applications.`}
      />
      <TVScreen
        src='tvPlane.gltf'
        url={NA}
        zMeshPos={14}
        yMeshPos={6}
        xMeshPos={32}
        xPosCaption={31.9}
        yPosCaption={4.9}
        zPosCaption={14}
        xPlaneGeometry={3}
        yPlaneGeometry={1.5}
        captionText={`Redesigned customer-facing website for${'\n'}${'\n'}LGBTQ+ homeless center in NYC.`}
      />
      <TVScreen
        src='tvPlane.gltf'
        url={SAMSHA}
        zMeshPos={13}
        yMeshPos={19}
        xMeshPos={22.1}
        xPosCaption={7}
        yPosCaption={1}
        zPosCaption={11}
        xPlaneGeometry={3}
        yPlaneGeometry={1.5}
        captionText={''}
      />
      <TVScreen
        src='tvPlane.gltf'
        url={TABOOLA}
        zMeshPos={7}
        yMeshPos={18}
        xMeshPos={-7}
        xPosCaption={-7}
        yPosCaption={16.7}
        zPosCaption={7}
        xPlaneGeometry={3}
        yPlaneGeometry={1.5}
        captionText={`Developed web applications for global publishers,${'\n'}${'\n'}including the New York Times, Business Insider, and${'\n'}${'\n'}MSN, on the Taboola ads platform.`}
      />
      <Floor />
      <AnimatedStars />
      <PerspectiveCamera
        makeDefault
        theatreKey='Camera'
        position={[0, 0, 25]}
        fov={75}
        near={0.1}
        far={1000}
      />
      {/* <CameraPosLogging
        event='mousemove'
      /> */}
    </>
  );
};

export default Scene;
