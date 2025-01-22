import initialRender from "./initialRender.js";
import listener from "./listener.js";
import observerListGroup from "./observer.js";

class Todo {
  init() {
    observerListGroup();
    initialRender();
    listener();
  }
}

export default Todo;
