import Comp1 from "../components/comp1/comp1";
import Comp2 from "../components/comp2/comp2";
import Comp3 from "../components/comp3/comp3";

/**
 *
 * @param path
 * 根据path返回对应的react组件
 */
const getComponentByRoute = path => {
  let pathId = path.split("react")[1];
  let component = null;
  switch (pathId) {
    case "1":
      component = Comp1;
      break;
    case "2":
      component = Comp2;
      break;
    case "3":
      component = Comp3;
      break;
    default:
      break;
  }
  return component;
};

export { getComponentByRoute };
