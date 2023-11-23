const addTaskButton = document.getElementById("add-task");
const textList = [];

addTaskButton.addEventListener("click", updateText);

function updateText() {
  const id = new Date().getTime();
  textList.unshift({ id, value: "" });
  updateDetail();
}

function updateDetail() {
  const formContainer = document.getElementById("form__cover");
  formContainer.textContent = "";
  textList.forEach((el) => {
    const form = `<li><input id="${el.id}" class="text-value" type="text" value="${el.value}" placeholder="Enter your task" /><button class="remove-task" id="${el.id}">X</button></li>`;
    formContainer.insertAdjacentHTML("beforeend", form);
  });

  const textNodeList = document.querySelectorAll(".text-value");

  textNodeList.forEach((el) => {
    el.addEventListener("change", (e) => {
      const elementId = e.target.getAttribute("id");
      const textIndex = textList.findIndex(
        (text) => Number(elementId) === text.id
      );
      textList[textIndex].value = e.target.value;
    });
  });
  const removeTaskButtons = document.querySelectorAll(".remove-task");
  removeTaskButtons.forEach((el) => {
    el.addEventListener("click", (el) => {
      removeTask(el);
    });
  });
}

function removeTask(e) {
  const elementId = e.target.getAttribute("id");
  const elementIndex = textList.findIndex((el) => el.id === Number(elementId));
  textList.splice(elementIndex, 1);
  updateDetail();
}
