// Components
import { useState, useEffect } from "react";
import { ChartData } from "chart.js";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";

// Endpoint
import endpoint from "logic/api/api.adapter";

const useStaticsApplication = () => {
  const { token } = useSelector((state: RootState) => state.auth);

  const data: ChartData<"polarArea", number[], string> = {
    labels: ["Mac", "Asus", "Huawei", "Samsung", "Alkosto"],
    datasets: [
      {
        label: "# of compras",
        data: [2, 4, 12, 8, 7],
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

  // States
  const [sales, setSales] = useState<Array<number>>([]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Compras por dia de la semana",
      },
    },
  };

  const labels = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo",
  ];

  const dataBar = {
    labels,
    datasets: [
      {
        label: "Ventas",
        data: sales,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  const getSales = () => {
    endpoint()
      .get({ url: `/sales/1`, headers: { "x-token": token } })
      .then((result) => {
        const data = result as unknown as Array<any>;

        const days = {
          monday: 0,
          tuesday: 0,
          wednesday: 0,
          thursday: 0,
          friday: 0,
          saturday: 0,
          sunday: 0,
        };

        data.forEach((sale) => {
          const date = new Date(Date.parse(sale.Date_sales)).getDay();

          switch (date) {
            case 1:
              days.monday += 1;
              break;
            case 2:
              days.tuesday += 1;
              break;
            case 3:
              days.wednesday += 1;
              break;
            case 4:
              days.thursday += 1;
              break;
            case 5:
              days.friday += 1;
              break;
            case 6:
              days.saturday += 1;
              break;
            case 0:
              days.sunday += 1;
              break;
            default:
              break;
          }
        });

        setSales(Object.values(days));
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getSales();
  }, []);

  return { data, options, dataBar };
};

export default useStaticsApplication;
