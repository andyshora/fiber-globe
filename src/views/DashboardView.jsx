import React, { useState } from "react"
import { Box, Grid, Paper, Typography } from "@mui/material"
import styled from "styled-components"
import {
  useWindowHeight
} from '@react-hook/window-size/throttled'

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
// import { GeoJsonGeometry } from 'three-geojson-geometry';
// import { geoGraticule10 } from 'd3-geo';

import ThreeGraticule from '../fiber/ThreeGraticule';
import ThreeCountries from '../fiber/ThreeCountries';
import ThreePoints from '../fiber/ThreePoints';

const FadeWrap = styled.div`
  position: relative;

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, rgba(0, 0, 0, 1) 3%, rgba(255, 255, 255, 0.1) 20%, rgba(255, 255, 255, 0.1) 80%, rgba(0, 0, 0, 1)  97%);
    top: 0;
    left: 0;
    position: fixed;
    pointer-events: none;
  }
`

const PaperSection = styled(Paper)`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${(p) => p.height}px;

  > p {
    font-size: 0.8rem;
    text-transform: uppercase;
    text-align: center;
  }
`

export const ExampleSection = ({ children, height = 500, text = "" }) => (
  <PaperSection height={height}>
    {children || <Typography>{text}</Typography>}
  </PaperSection>
)

const GlobeWrapper = ({ children }) => {
  const height = useWindowHeight()
  return <FadeWrap style={{ margin: "30px 0 0 0", height: height - 60 }}>{children}</FadeWrap>;
};

export default function DashboardView() {
  const [activePointData, setActivePointData] = useState(null)

  const handleDataChange = data => {
    setActivePointData(data)
  }
  return (
    <Grid container spacing={2}>
      <Grid item xs={10}>
      <GlobeWrapper>
        <Canvas
          camera={{
            fov: 75,
            position: [0, 0, 1.5]
          }}
          style={{
            cursor: 'move'
          }}
        >
          <OrbitControls enableRotate={true} enableZoom={false} enablePan={false} />
          <ambientLight intensity={1.3} />
          {/* <pointLight position={[-10, -10, -10]} intensity={0.4} /> */}
          <mesh>
            <sphereGeometry args={[1, 32]} />
            <meshPhongMaterial color="#000000" transparent={true} opacity={0.8} />
          </mesh>
          <ThreeGraticule />
          <ThreeCountries />
          <ThreePoints onDataChange={handleDataChange} />
        </Canvas>
      </GlobeWrapper>
      </Grid>
      <Grid item xs={2}>
        <Box padding={2} style={{ position: "relative", zIndex: 1 }}>
        {activePointData ? (
          <div>
            <Typography variant="h3">{activePointData.city}</Typography>
            <Typography variant="h4">Total BCG.X {activePointData.bcgx}</Typography>
            <Typography variant="h4">AI &amp; Software: {activePointData.ais}</Typography>
          </div>
        ) : ''}
        </Box>
      </Grid>
    </Grid>
  )
}
