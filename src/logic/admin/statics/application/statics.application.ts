import { ChartData } from "chart.js";

const useStaticsApplication = () => {
  const data: ChartData<"polarArea", number[], string> = {
    labels: ["Iphone 10", "Mac", "Asus", "Huawei", "Samsung"],
    datasets: [
      {
        label: "# of compras",
        data: [2, 4, 12, 8, 7, 1],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return { data };
};

export default useStaticsApplication;
