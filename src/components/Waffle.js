import React, { useMemo } from "react"
import styled from "styled-components"
import { useTheme } from "@mui/material"
import useId from "react-use-uuid"

const WaffleRect = styled.rect`
  stroke: none;
`

const OutlineRect = styled.rect`
  stroke: ${({ color }) => color};
  stroke-width: 1;
  vector-effect: non-scaling-stroke;
  opacity: 0;
`

export const Waffle = ({
  blockWidth = 10,
  blockGap = 1,
  data = [],
  outlineColor = "white",
  colors = ["red", "yellow", "green"],
  width = 200,
  height = 200
}) => {
  const theme = useTheme()
  const color = theme.palette.secondary.light
  const id = useId()
  const padding = 2

  // get color from palette
  const seriesPaletteKey = "light"
  let activeColor = "white"
  if (outlineColor) {
    activeColor = outlineColor
  } else if (
    outlineColor &&
    /primary|secondary|error|warning|info|spice|success/.test(outlineColor) &&
    outlineColor in theme.palette
  ) {
    activeColor = theme.palette[outlineColor][seriesPaletteKey]
  }

  const { blockCells, numColsAndRows } = useMemo(() => {
    const cells = []
    const maxNum = Math.max(...data)
    const _numColsAndRows = Math.ceil(Math.sqrt(maxNum))
    let totalBlockCount = 0
    let activeDataIndex = 0
    const normalisedData = data.map(d => Math.max(d, 0))

    // row-by-row layout, left-to-right, top-to-bottom
    for (let i = 0; i < _numColsAndRows; i++) {
      // j: iterate row number
      for (let j = 0; j < _numColsAndRows; j++) {
        let styles = {
          fill: "#000000",
          fillOpacity: 1
        }
        if (normalisedData[activeDataIndex] === 0) {
          if (activeDataIndex + 1 === normalisedData.length) {
            break
          } else {
            activeDataIndex++
          }
        }
        styles = {
          fill: colors[activeDataIndex],
          fillOpacity: 1
        }
        
        
       
        // // j: iterate column number
        // if (totalBlockCount >= numBlocks) {
        //   // exceeded counts, hide blocks
        //   styles = {
        //     filter: `url(#outer-glow-${id})`,
        //     fill: theme.palette.primary.light,
        //     opacity: 0
        //   }
        // }

        
        const key = `block-cell-${id}__${i}_${j}`
        cells.push({
          key,
          x: padding + j * (blockWidth + blockGap),
          y: padding + i * (blockWidth + blockGap),
          styles
        })
        totalBlockCount++
        normalisedData[activeDataIndex]--
      }
    }

    return { blockCells: cells, numColsAndRows: _numColsAndRows }
  }, [data, blockGap, blockWidth, id, theme.palette.primary.light])

  return (
    <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height}>
      <g>
        <OutlineRect
          color={theme.palette.secondary.main}
          width={(blockWidth + blockGap) * numColsAndRows + padding}
          height={(blockWidth + blockGap) * numColsAndRows + padding}
          style={{
            filter: `url(#outline-inner-glow-${id})`,
            fill: activeColor
          }}
        />
      </g>
      <g>
        {blockCells.map(({ key, styles, x, y }) => (
          <WaffleRect
            key={key}
            width={blockWidth}
            height={blockWidth}
            x={x}
            y={y}
            color={color}
            style={styles}
          />
        ))}
      </g>
      <defs>
        {theme.viz.SVG.filters.outerGlow({
          id: `outer-glow-${id}`,
          color: theme.palette.primary.light,
          radius: 1,
          opacity: 0.2
        })}
        {theme.viz.SVG.filters.innerGlow({
          id: `inner-glow-${id}`,
          color: theme.basePalette.fg,
          opacity: 0.05
        })}
        {theme.viz.SVG.filters.innerGlow({
          id: `outline-inner-glow-${id}`,
          color: activeColor,
          opacity: 0.2
        })}
      </defs>
    </svg>
  )
}

export default Waffle
