import React from "react";
import styled from "styled-components";
import { caseInfo } from "../data/cases";
import CasesCard from '../HOME/CasesCard'


const Cases = () => {
  const casesList = caseInfo.map((cases) => {
    return (
      <CasesCard
        key={cases.cases_title}
        image={cases.image}
        caseTitle={cases.title}
        description={cases.description}
      />
      
    );
  });
  return (
    <div className="w-full">
      <h2 className="pt-20 text-3xl font-extrabold align-center text-justify">
        Cases 
      </h2>
      <div className="pt-20 w-4/5 mx-auto grid gap-8 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 align-center">{casesList}</div>
    </div>
  );
};
export default Cases;