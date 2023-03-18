import axios from "axios";
import { useEffect } from "react";

const useHomeControllers = () => {
  function sumarNumeros(num1: number, num2: number) {
    axios.get("httppsdsadsasadas").then(() => {
      const user = "";
      if (user) {
        // ssnfnjsas
      }
    });

    return num1 + num2;
  }

  useEffect(() => {
    sumarNumeros(1, 2);
  }, []);

  return { sumarNumeros };
};

export default useHomeControllers;
