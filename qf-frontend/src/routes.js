import Instruction from './content/Instruction';
import StepOne from './content/StepOne';
import React from 'react';
export const routes = {
    "/": () => <Instruction/>,
    "/stepone": () => <StepOne/>,
    // "/steptwo": () => <StepTwo/>,
    // "/stepthree": () => <StepThree/>,
    // "/stepfour": () => <StepFour/>,
    // "/stepfive": () => <StepFive/>,
};
