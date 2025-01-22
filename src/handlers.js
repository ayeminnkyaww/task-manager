import Swal from "sweetalert2";
import {
  addCountTotalTask,
  addList,
  deleteList,
  doneList,
  doneTaskCount,
  editList,
} from "./list.js";
import { list } from "postcss";

export const modified = (event) => {
  const currenListId = event.target.closest(".list").id;
  if (event.target.classList.contains("done-check-list")) {
    doneList(currenListId);
  }

  if (event.target.classList.contains("editBtn")) {
    editList(currenListId);
  }

  if (event.target.classList.contains("trashBtn")) {
    deleteList(currenListId);
  }
};

export const deleteAllList = () => {
  const lists = listGroup.querySelectorAll(".list");
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Deleted!",
        text: "Your list has been deleted.",
        icon: "success",
      });
      lists.forEach((list) => {
        list.remove();
      });
    } else {
      Swal.fire({
        title: "Cancel!",
        icon: "error",
      });
    }
  });
  // addCountTotalTask();
  // doneTaskCount();
};

export const doneAllList = () => {
  const lists = listGroup.querySelectorAll(".list");

  lists.forEach((list) => {
    doneList(list.id);
    if (list.querySelector(".done-check-list").checked) {
      list.querySelector(".done-check-list").checked = false;
    } else {
      list.querySelector(".done-check-list").checked = true;
    }
  });
  // doneTaskCount();
};

export const addListHandler = () => {
  addList(userInput.value);
};

export const taskInputEventHandler = (event) => {
  if (event.key === "Enter") {
    addList(userInput.value);
  }
};
