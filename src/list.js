import Swal from "sweetalert2";
import { doneTaskTag, template, totalTaskTag } from "./selectors.js";

import { v4 as uuidv4 } from "uuid";

export const tasks = ["To do read js doc", "Sleep with gf", "eat with js"];

export const doneTaskCount = () => {
  const doneTask = document.querySelectorAll(".list input:checked");
  doneTaskTag.innerText = doneTask.length;
};

export const addCountTotalTask = () => {
  // take and show total task status
  let totalTask = document.querySelectorAll(".list");
  totalTaskTag.innerText = totalTask.length;
};

export const createNewList = (text) => {
  const list = template.content.cloneNode(true);
  list.querySelector(".job").innerText = text;
  list.querySelector(".list").id = `list${uuidv4()}`;
  list.querySelector(".list").classList.add("animate__animated");
  list.querySelector(".list").classList.add("animate__zoomIn");
  return list;
};

export const addList = (currentTask) => {
  if (currentTask.trim()) {
    listGroup.append(createNewList(currentTask));
  }
  // addCountTotalTask();
  userInput.focus();
  userInput.value = null;
};

export const doneList = (id) => {
  const currentTask = document.querySelector(`#${id}`);
  currentTask.classList.toggle("opacity-50");
  currentTask.classList.toggle("scale-95");
  currentTask.classList.add("duration-200");
  currentTask.querySelector(".editBtn").toggleAttribute("disabled");
  currentTask.querySelector(".editBtn").classList.toggle("cursor-not-allowed");
  // doneTaskCount();
};

export const editList = (id) => {
  const currentTask = document.querySelector(`#${id}`);
  const job = currentTask.querySelector(".job");
  const listDoneTask = currentTask.querySelector(".done-check-list");
  const editBtn = currentTask.querySelector(".editBtn");
  const trashBtn = currentTask.querySelector(".trashBtn");

  const inputTag = document.createElement("input");
  inputTag.focus();
  inputTag.className = "border border-stone-900 px-2 py-1 focus:outline-none";
  inputTag.value = job.innerText;
  job.classList.add("hidden");
  editBtn.setAttribute("disabled", true);
  editBtn.classList.add("cursor-not-allowed");
  listDoneTask.setAttribute("disabled", true);
  listDoneTask.classList.add("cursor-not-allowed");
  trashBtn.setAttribute("disabled", true);
  trashBtn.classList.add("cursor-not-allowed");
  job.after(inputTag);

  inputTag.addEventListener("blur", () => {
    job.innerText = inputTag.value;
    inputTag.remove();
    job.classList.remove("hidden");
    editBtn.classList.remove("cursor-not-allowed");
    editBtn.removeAttribute("disabled");
    listDoneTask.removeAttribute("disabled");
    listDoneTask.classList.remove("cursor-not-allowed");
    trashBtn.removeAttribute("disabled", true);
    trashBtn.classList.remove("cursor-not-allowed");
  });
};

export const deleteList = (id) => {
  const currentTask = document.querySelector(`#${id}`);
  // if (window.confirm("Are u sure remove?")) {
  //   currentTask.classList.add("animate__animated", "animate__zoomOut");
  //   currentTask.addEventListener("animationend", () => {
  //     // addCountTotalTask();
  //     // doneTaskCount();
  //   });
  // }
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
      currentTask.remove();
    } else {
      Swal.fire({
        title: "Cancel!",
        icon: "error",
      });
    }
  });
};
