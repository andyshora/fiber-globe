import React, { useState } from "react";
import { Box, Grid, Paper, Typography, useTheme } from "@mui/material";
import styled from "styled-components";
import { NumericScore, Flag } from "@bcgx-personalization-community/gamma.ui";
import { useWindowHeight } from "@react-hook/window-size/throttled";

import { getCountryCodeFromName } from "../utils/address";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import ThreeGraticule from "../fiber/ThreeGraticule";
import ThreeCountries from "../fiber/ThreeCountries";
import ThreePoints from "../fiber/ThreePoints";

const FadeWrap = styled.div`
  position: relative;

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 3%,
      rgba(255, 255, 255, 0) 20%,
      rgba(255, 255, 255, 0) 80%,
      rgba(0, 0, 0, 1) 97%
    );
    top: 0;
    left: 0;
    position: fixed;
    pointer-events: none;
  }
`;

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
`;

const VizWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ExampleSection = ({ children, height = 500, text = "" }) => (
  <PaperSection height={height}>
    {children || <Typography>{text}</Typography>}
  </PaperSection>
);

const GlobeWrapper = ({ children }) => {
  const height = useWindowHeight();
  return (
    <FadeWrap style={{ margin: "30px 0 0 0", height: height - 60 }}>
      {children}
    </FadeWrap>
  );
};

export default function DashboardView() {
  const [activePointData, setActivePointData] = useState(null);
  const [countryCode, setCountryCode] = useState(null);
  const [countryName, setCountryName] = useState(null);
  const theme = useTheme();

  const handleDataChange = (data) => {
    setActivePointData(data);

    let cc = null;
    if (data && data.address) {
      const arr = data.address.split(",");
      const cName = arr[arr.length - 1].trim();
      setCountryName(cName);
      cc = getCountryCodeFromName(cName);
      console.log(cName, cc);
    }

    setCountryCode(cc);
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={9}>
        <GlobeWrapper>
          <Canvas
            camera={{
              fov: 75,
              position: [0, 0, 1.5],
            }}
            style={{
              cursor: "move",
            }}
          >
            <OrbitControls
              enableRotate={true}
              enableZoom={false}
              enablePan={false}
            />
            <ambientLight intensity={1.3} />
            {/* <pointLight position={[-10, -10, -10]} intensity={0.4} /> */}
            <mesh>
              <sphereGeometry args={[1, 32]} />
              <meshPhongMaterial
                color="#000000"
                transparent={true}
                opacity={0.8}
              />
            </mesh>
            <ThreeGraticule />
            <ThreeCountries />
            <ThreePoints onDataChange={handleDataChange} />
          </Canvas>
        </GlobeWrapper>
      </Grid>
      <Grid item xs={3}>
        <Box padding={0} sx={{ position: "relative", zIndex: 1 }}>
          {activePointData ? (
            <Box
              padding={2}
              sx={{
                position: "relative",
                zIndex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <div
                style={{
                  margin: "2rem 0 2rem",
                  textAlign: "center",
                  width: "100%",
                }}
              >
                {countryCode ? (
                  <Flag countryCode={countryCode} size="small" />
                ) : (
                  ""
                )}
                <Typography
                  variant="h2"
                  sx={{
                    textAlign: "center",
                    width: "100%",
                    textTransform: "uppercase",
                  }}
                >
                  {activePointData.city}
                </Typography>
                <Typography
                  variant="subtitle"
                  sx={{
                    textAlign: "center",
                    width: "100%",
                    textTransform: "uppercase",
                  }}
                >
                  {countryName}
                </Typography>
              </div>

              <VizWrap>
                <NumericScore value={activePointData.bcgx} label="BCG.X" />
              </VizWrap>
              <VizWrap>
                {/* <Waffle width={100} height={100} blockWidth={5} blockGap={1} data={[activePointData.bcgx - activePointData.ais, activePointData.ais]} colors={["rgb(163, 163, 163)", theme.palette.primary.main]} /> */}
              </VizWrap>
              <VizWrap>
                {/* <Waffle width={100} height={100} blockWidth={5} blockGap={1} data={[activePointData.ais]} colors={["lightGrey", theme.palette.primary.main]} /> */}
                <NumericScore
                  value={activePointData.ais}
                  label="AI & Software"
                  color="positive"
                />
              </VizWrap>
            </Box>
          ) : (
            ""
          )}
        </Box>
      </Grid>
    </Grid>
  );
}
