import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SpeakerNotes from '@material-ui/icons/SpeakerNotes';
import LooksOne from '@material-ui/icons/LooksOne';
import LooksTwo from '@material-ui/icons/LooksTwo';
import LooksThree from '@material-ui/icons/Looks3';
import LooksFour from '@material-ui/icons/Looks4';
import LooksFive from '@material-ui/icons/Looks5';
import { navigate } from 'hookrouter';
export const listItems = () => {
  const routes = [
    { name: 'Instruction', icon: <SpeakerNotes />, url: '/' },
    { name: 'StepOne', icon: <LooksOne />, url: '/stepone' },
    { name: 'StepTwo', icon: <LooksTwo />, url: '/steptwo' },
    { name: 'StepThree', icon: <LooksThree />, url: '/stepthree' },
    { name: 'StepFour', icon: <LooksFour />, url: '/stepfour' },
    { name: 'StepFive', icon: <LooksFive />, url: '/stepfive' }
  ];
  return (<div>
    {routes.map(item =>
      (
        <ListItem
          button
          onClick = {() => navigate(item.url)}
          key={item.name}
        >
          <ListItemIcon>
            {item.icon}
          </ListItemIcon>
          <ListItemText primary={item.name} />
        </ListItem>
      )
    )}
  </div>)
};
