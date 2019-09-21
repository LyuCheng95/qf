import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import ReactJson from 'react-json-view'
import { makeStyles } from '@material-ui/core/styles';
import '../../node_modules/react-vis/dist/style.css';
import {
  LineSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
  FlexibleWidthXYPlot,
} from 'react-vis';

const useStyles = makeStyles(theme => ({
  cardRoot: {
    width: "100%",
    marginBottom: "20px"
  },
}));

export default function StepOne(props) {
  const classes = useStyles();
  const stockData = {
    stockOne: [
      { x: 0, y: 8 },
      { x: 1, y: 5 },
      { x: 2, y: 4 },
      { x: 3, y: 9 },
      { x: 4, y: 1 },
      { x: 5, y: 7 },
      { x: 6, y: 6 },
      { x: 7, y: 3 },
      { x: 8, y: 2 },
      { x: 9, y: 0 }
    ],
    stockTwo: [
      { x: 0, y: 4 },
      { x: 1, y: 4 },
      { x: 2, y: 7 },
      { x: 3, y: 3 },
      { x: 4, y: 8 },
      { x: 5, y: 9 },
      { x: 6, y: 1 },
      { x: 7, y: 2 },
      { x: 8, y: 3 },
      { x: 9, y: 2 }
    ]
  };
  const [stockDiagramData, setStockDiagramData] = useState(stockData);
  const updateJson = info => {
    let newStockDiagramData = JSON.parse(JSON.stringify(stockDiagramData));
    newStockDiagramData[info.namespace[0]][Number(info.namespace[1])][info.name] = info.new_value;
    console.log(newStockDiagramData);
    setStockDiagramData(newStockDiagramData);
  }
  console.log(stockDiagramData);
  return (
    <>
      <Card
        classes={{root: classes.cardRoot}}
      >
        <FlexibleWidthXYPlot height={500}>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <LineSeries data={stockDiagramData.stockOne} />
          <LineSeries data={stockDiagramData.stockTwo} />
        </FlexibleWidthXYPlot>
      </Card>
      <Card>
        <ReactJson
          src={stockDiagramData}
          theme="monokai"
          displayDataTypes={false}
          displayObjectSize={false}
          style={{ 'font-family': 'Verdana' }}
          onEdit={updateJson}
          enableClipboard={false}
        />
      </Card>
    </>
  );
}