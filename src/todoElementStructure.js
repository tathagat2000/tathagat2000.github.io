import { dataAttributes } from "./constants.js";

export const createTodoElement = (element) => {
  if (!element) {
    element = initializeTodoElement();
  }

  const newElement = document.createElement(element.type);

  addClassesToElement(newElement, element);

  addPropertiesToElement(newElement, element);

  addChildrenToElement(newElement, element);

  return newElement;
};

const initializeTodoElement = () => {
  const editIcon = {
    type: "i",
    classes: ["fa", "fa-edit"],
    children: [],
  };

  const deleteIcon = {
    type: "i",
    classes: ["fa", "fa-trash"],
    children: [],
  };

  const editButton = {
    type: "button",
    classes: ["edit"],
    children: [editIcon],
    properties: {
      "data-button": dataAttributes.EDIT_BUTTON,
    },
  };

  const deleteButton = {
    type: "button",
    classes: ["delete"],
    children: [deleteIcon],
    properties: {
      "data-button": dataAttributes.DELETE_BUTTON,
    },
  };

  const buttons = {
    type: "div",
    classes: ["buttons"],
    children: [editButton, deleteButton],
  };

  const todoText = {
    type: "div",
    classes: ["todoText"],
    children: [],
    properties: {
      "data-type": dataAttributes.TEXT,
    },
  };

  const time = {
    type: "div",
    classes: ["time"],
    children: [],
    properties: {
      "data-type": dataAttributes.TIME,
    },
  };

  const urgencyIcon = {
    type: "i",
    classes: [],
    children: [],
    properties: {
      "data-type": dataAttributes.URGENCYICON,
    },
  };

  const categoryIcon = {
    type: "i",
    classes: [],
    children: [],
    properties: {
      "data-type": dataAttributes.CATEGORYICON,
    },
  };

  const symbols = {
    type: "div",
    classes: ["symbols"],
    children: [urgencyIcon, categoryIcon],
  };

  const completeButton = {
    type: "button",
    classes: ["completeButton"],
    children: [],
    properties: {
      innerHTML: "Mark Complete",
      "data-button": dataAttributes.COMPLETE_BUTTON,
    },
  };

  const complete = {
    type: "div",
    classes: ["complete"],
    children: [completeButton],
  };

  const select = {
    type: "div",
    classes: ["notSelect"],
    children: [],
    properties: {
      "data-button": dataAttributes.SELECT_BUTTON,
    },
  };

  const todoElement = {
    type: "div",
    classes: ["todo"],
    children: [buttons, todoText, time, symbols, complete, select],
  };

  return todoElement;
};

const addClassesToElement = (newElement, element) =>
  newElement.classList.add(...element.classes);

const addPropertiesToElement = (newElement, element) => {
  if (element.properties) {
    Object.entries(element.properties).forEach(([property, value]) => {
      newElement.setAttribute(property, value);
    });
  }
};

const addChildrenToElement = (newElement, element) => {
  element.children.forEach((childElement) => {
    newElement.appendChild(createTodoElement(childElement));
  });
};
