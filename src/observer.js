// mutate observer

import { addCountTotalTask, doneTaskCount } from "./list.js";
import { listGroup } from "./selectors.js";

const observerListGroup = () => {
  const job = () => {
    addCountTotalTask();
    doneTaskCount();
  };

  const observerOptions = {
    childList: true,
    subtree: true,
    attributes: true,
  };
  const listGroupObserver = new MutationObserver(job);
  listGroupObserver.observe(listGroup, observerOptions);
};

export default observerListGroup;
