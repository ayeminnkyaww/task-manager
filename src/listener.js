import {
  addListHandler,
  deleteAllList,
  doneAllList,
  modified,
  taskInputEventHandler,
} from "./handlers.js";
import {
  addBtn,
  deleteAllBtn,
  doneAllBtn,
  listGroup,
  userInput,
} from "./selectors.js";

const listener = () => {
  addBtn.addEventListener("click", addListHandler);
  userInput.addEventListener("keyup", taskInputEventHandler);
  listGroup.addEventListener("click", modified);
  deleteAllBtn.addEventListener("click", deleteAllList);
  doneAllBtn.addEventListener("click", doneAllList);
};

export default listener;
