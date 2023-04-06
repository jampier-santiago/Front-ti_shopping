import useComponents from "./components";
import usePages from "./pages";

const useViews = () => {
  return { usePages, useComponents };
};

export default useViews;
