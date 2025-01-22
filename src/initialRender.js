import { addList, tasks } from "./list.js";

const initialRender = () => {
  tasks.forEach((task) => addList(task));
};

export default initialRender;
