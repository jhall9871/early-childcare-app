import React from "react";
import { Doughnut } from "react-chartjs-2";

const SkillProgressChart = ({ complete, incomplete }) => {
  const data = {
    labels: ["% Complete", "% Incomplete"],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: ["rgba(0,0,0,0.2)", "rgba(255,199,132,0)"],
        borderColor: ["rgba(0,0,0,1)", "rgba(0,0,0,0)"],
        borderWidth: 1,
        hoverBackgroundColor: "rgba(0,0,0,0.4)",
        hoverBorderColor: "rgba(0,0,0,1)",
        data: [complete, incomplete],
      },
    ],
  };

  return (
    <div>
      <Doughnut
        data={data}
        width={300}
        height={300}
        options={{ maintainAspectRatio: false }}
      />
    </div>
  );
};

export default SkillProgressChart;
