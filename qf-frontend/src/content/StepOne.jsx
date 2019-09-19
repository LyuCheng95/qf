import React from 'react';
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
  card: {
    width: "100%"
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
  return (
    <Card>
      <FlexibleWidthXYPlot height={500}>
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis />
        <YAxis />
        <LineSeries data={stockData.stockOne} />
        <LineSeries data={stockData.stockTwo} />
      </FlexibleWidthXYPlot>
      <ReactJson
        src={stockData}
        theme="monokai"
        displayDataTypes={false}
        displayObjectSize={false}
        style={{ 'font-family': 'Verdana' }}
      />
    </Card>
  );
}