import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import {
  Html,
  useScroll
} from '@react-three/drei';
import { val } from '@theatre/core';
import {
  useCurrentSheet,
  PerspectiveCamera,
  editable as e
} from '@theatre/r3f';

import Heading from './Heading';
import TVScreen from './TV/TVScreen';
import Image from './Billboard/Image';
import CementPole from './Billboard/CementPole';
import AnimatedStars from './AnimatedStars';
import AnimatedSparkles from './AnimatedSparkles';
import Floor from './Floor';
import NavSocialTextHtml from './NavSocialTextHtml';

import CC92MB from '../../assets/coca-cola_92mb.mp4';
import DFS from '../../assets/dfs-mrp.mp4';
import JNJ from '../../assets/jnjvision.mp4';
import SAMSHA from '../../assets/samsha.mp4';
import NA from '../../assets/new-alternatives.mp4';
import TABOOLA from '../../assets/taboola.mp4';

import DFSStill from '../../assets/images/dfs-still.jpg';
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
        link='https://github.com/ramizackaryshamir'
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
      <e.mesh theatreKey='Heading'>
        <Html
          ref={projectsHeadingRef}
          as='section'
          position={[-1, 7.3, 13]}
        >
          <Heading />
        </Html>
      </e.mesh>
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
        fallbackUI={DFSStill}
      />
      <AnimatedSparkles
        xPos={5}
        yPos={11}
        zPos={17}
        colorFloat32Array={230}
      />
      <AnimatedSparkles
        xPos={6}
        yPos={11}
        zPos={17}
        colorFloat32Array={230}
      />
      <AnimatedSparkles
        xPos={7}
        yPos={11}
        zPos={17}
        colorFloat32Array={230}
      />
      <AnimatedSparkles
        xPos={8}
        yPos={11}
        zPos={17}
        colorFloat32Array={230}
      />
      <AnimatedSparkles
        xPos={7}
        yPos={10}
        zPos={17}
        colorFloat32Array={230}
      />
      <AnimatedSparkles
        xPos={8}
        yPos={10}
        zPos={17}
        colorFloat32Array={230}
      />
      <AnimatedSparkles
        xPos={9}
        yPos={10}
        zPos={17}
        colorFloat32Array={230}
      />
      <AnimatedSparkles
        xPos={10}
        yPos={10}
        zPos={17}
        colorFloat32Array={230}
      />
      <AnimatedSparkles
        xPos={11}
        yPos={9}
        zPos={17}
        colorFloat32Array={230}
      />
      <AnimatedSparkles
        xPos={12}
        yPos={9}
        zPos={17}
        colorFloat32Array={230}
      />
      <AnimatedSparkles
        xPos={11}
        yPos={11}
        zPos={17}
        colorFloat32Array={230}
      />
      <AnimatedSparkles
        xPos={12}
        yPos={10}
        zPos={17}
        colorFloat32Array={230}
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
        fallbackUI={DFSStill}
      />
      <TVScreen
        src='tvPlane.gltf'
        url={CC92MB}
        zMeshPos={7}
        yMeshPos={9.7}
        xMeshPos={16.7}
        xPosCaption={16.7}
        yPosCaption={8.4}
        zPosCaption={7}
        xPlaneGeometry={3}
        yPlaneGeometry={1.5}
        captionText={`Developed in-house 100+ custom React component${'\n'}${'\n'}library as building blocks for redesign of customer-${'\n'}${'\n'}facing applications.`}
        fallbackUI={DFSStill}
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
        fallbackUI={DFSStill}
      />
      <TVScreen
        src='tvPlane.gltf'
        url={SAMSHA}
        zMeshPos={13}
        yMeshPos={21}
        xMeshPos={22.1}
        xPosCaption={22.05}
        yPosCaption={20}
        zPosCaption={14}
        xPlaneGeometry={3}
        yPlaneGeometry={1.5}
        captionText={'Developed Navigation application for SAMSHA.'}
        fallbackUI={DFSStill}
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
        fallbackUI={DFSStill}
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
    </>
  );
};

export default Scene;
