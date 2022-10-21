import React, { useEffect, useState } from "react";
import { Vector3 } from "three";
import { GeoJsonGeometry } from "three-geojson-geometry";
import { scaleSqrt } from "d3-scale";
import { useTheme } from "@mui/material";
import { createPointsData } from "../data";

/**
 * GeoJson Format
 * 
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [102.0, 0.5]
      },
      "properties": {
        "prop0": "value0"
      }
    }
 */

function createFeature(elm) {
  return {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [elm.lng, elm.lat],
    },
    properties: {
      ...elm,
    },
  };
}

function createGeoJsonFromData(data) {
  return {
    type: "FeatureCollection",
    features: data.map(createFeature),
  };
}

const ThreePoints = ({ onDataChange }) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const pointsData = createPointsData();
  const geoJson = createGeoJsonFromData(pointsData);
  const theme = useTheme();

  useEffect(() => {
    if (typeof onDataChange === "function" && pointsData) {
      onDataChange(pointsData[activeIndex]);
    }
  }, [activeIndex]);

  // random points
  // const N = 4e4;
  // const multiPoints = {
  //     type: 'MultiPoint',
  //     coordinates: [...Array(N).keys()].map(() => [(Math.random() - 0.5) * 360, (Math.random() - 0.5) * 180]),
  //     resolution: 5
  // };

  const radiusScale = scaleSqrt().domain([0, 300]).range([0.002, 0.04]);
  const getPointColor = (i) =>
    i === activeIndex ? "white" : theme.palette.primary.main;
  return (
    <group>
      {geoJson.features.map((data, index) => {
        const { geometry } = data;
        const geoGeom = new GeoJsonGeometry(geometry, 1);
        const vec3 = new Vector3(
          parseFloat(geoGeom.attributes.position.array[0]),
          parseFloat(geoGeom.attributes.position.array[1]),
          parseFloat(geoGeom.attributes.position.array[2])
        );

        const radius = radiusScale(pointsData[index].ais);
        return (
          <group key={index}>
            <mesh position={vec3} onClick={() => setActiveIndex(index)}>
              <sphereGeometry args={[radius, 32]} />
              <meshPhongMaterial color={getPointColor(index)} />
            </mesh>
          </group>
        );
      })}
    </group>
  );
};

export default ThreePoints;
