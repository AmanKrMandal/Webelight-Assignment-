import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export function CommitChart({ owner, repo, selectedOption }) {
  const [getWeekCodeFreq, setGetWeekCodeFreq] = useState([]);
  const [getWeekContribute, setGetWeekContribute] = useState([]);
  const [contri, setContri] = useState([]);

  const options1 = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Total changes",
      },
    },
  };

  const labels1 = getWeekCodeFreq.map((_, index) => `Week ${index+1}`);
  console.log("labels 1", labels1);

  const data1 = {
    labels: labels1.slice(0,52),
    datasets: [
      {
        label: `${selectedOption}`,
        data: getWeekCodeFreq.map((item) => item[1]),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        yAxisID: "y1",
      },
    ],
  };

  const options2 = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Total Contributes",
      },
    },
  };

  const labels2 = contri.slice(0, 52);
  console.log("getWeekContribute 2", getWeekContribute);
  const data2 = {
    labels: labels2,
    datasets: [
      {
        label: "Contributes",
        data: getWeekContribute.map((item) => item.total),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        yAxisID: "y1",
      },
      
    ],
  };

  const same = async () => {
    let resp1 = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/stats/code_frequency`
    );

    let resp2 = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/stats/contributors`
    );

    console.log("Owner", owner, "Repo", repo);
    resp1 = await resp1.json();
    resp2 = await resp2.json();
    console.log("Resp 2", resp2[0]);
    setGetWeekCodeFreq(resp1);
    setGetWeekContribute(resp2);

    const Arr1 = resp2.map((item) => item);
    const Arr1Weeks = Arr1.map((w) => w.weeks);
    const LengthOfWeeks = Arr1Weeks[0].length;
    console.log("length", LengthOfWeeks);
    const totalArrayOfWeeks = Array(LengthOfWeeks)
      .fill(0)
      .map((_, index) => `Week ${index + 1}`);
    setContri(totalArrayOfWeeks);
  };

  useEffect(() => {
    same();
  }, []);

  return (
    <div>
      <div>
        <Line options={options1} data={data1} />
      </div>
      <div>
        <Line options={options2} data={data2} />
      </div>
    </div>
  );
}
