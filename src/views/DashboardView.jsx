import React from "react"
import { Grid, Paper, Typography } from "@mui/material"
import styled from "styled-components"

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
// import { GeoJsonGeometry } from 'three-geojson-geometry';
// import { geoGraticule10 } from 'd3-geo';

import ThreeGraticule from '../three-graticule';
import ThreeCountries from '../three-countries';

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

export const ExampleSection = ({ children, height = 80, text = "" }) => (
  <PaperSection height={height}>
    {children || <Typography>{text}</Typography>}
  </PaperSection>
)

const GlobeWrapper = ({ children }) => {
  return <div style={{ margin: 0, height: 500, border: '1px solid #232323' }}>{children}</div>;
};

export default function DashboardView() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={10}>
      <GlobeWrapper>
        <Canvas
          camera={{
            fov: 75,
            position: [0, 0, 2.1]
          }}
          style={{
            cursor: 'move'
          }}
        >
          <OrbitControls enableRotate={true} enableZoom={false} enablePan={false} />
          <ambientLight intensity={1.3} />
          <pointLight position={[-10, -10, -10]} intensity={0.4} />
          <mesh>
            <sphereGeometry args={[1, 32]} />
            <meshPhongMaterial color="#191919" transparent={true} opacity={0.8} />
          </mesh>
          <ThreeGraticule />
          <ThreeCountries />
        </Canvas>
      </GlobeWrapper>
      </Grid>
      <Grid item xs={2}>
        Sidebar
      </Grid>
    </Grid>
  )
}
