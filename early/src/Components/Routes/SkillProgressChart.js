import React from "react";
import { Doughnut } from "react-chartjs-2";

const SkillProgressChart = ({ complete, incomplete }) => {
  const data = {
    labels: ["Complete", "Incomplete"],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: ["#0D3B66", "#EE964B"],
        borderColor: ["rgba(0,0,0,0)", "rgba(0,0,0,0)"],
        borderWidth: 1,
        hoverBackgroundColor: "rgba(0,0,0,0.4)",
        hoverBorderColor: "rgba(0,0,0,0)",
        data: [complete, incomplete],
      },
    ],
  };

  const options = {
    legend: {
      display: false
    },
    maintainAspectRatio: false
  }

  return (
    <div className="skills-chart">
      <Doughnut
        data={data}
        width={100}
        height={100}
        options={options}
      />
    </div>
  );
};

export default SkillProgressChart;
