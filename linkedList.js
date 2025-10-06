import { createNode } from "./node.js";

export const createLinkedList = () => {
  let head = null;
  let tail = null;
  let size = 0;

  const getHead = () => head;

  const getTail = () => tail;

  const getSize = () => size;

  const append = (value) => {
    const newNode = createNode(value);
    size++;
    if (!head) {
      head = newNode;
      tail = head;
      return;
    }
    tail.nextNode = newNode;
    tail = newNode;
  };

  const prepend = (value) => {
    const newNode = createNode(value);
    size++;
    if (!head) tail = newNode;
    newNode.nextNode = head;
    head = newNode;
  };

  const at = (index) => {
    if (index >= size || index < 0) return;
    let currentNode = head;

    for (let i = 0; i < index; i++) {
      currentNode = currentNode.nextNode;
    }

    return currentNode;
  };

  const pop = () => {
    if (size === 0) return;
    if (size === 1) {
      tail = null;
      head = null;
      size = 0;
      return;
    }
    const secondLast = at(size - 2);
    tail = secondLast;
    tail.nextNode = null;
    size--;
  };

  const find = (value) => {
    let currentNode = head;

    for (let i = 0; i < size; i++) {
      if (currentNode.value === value) {
        return i;
      }
      currentNode = currentNode.nextNode;
    }

    return currentNode;
  };

  const contains = (value) => {
    return find(value) !== null;
  };

  const insertAt = (value, index) => {
    if (index > size || index < 0) return;
    if (index === 0) {
      prepend(value);
      return;
    }
    if (index === size) {
      append(value);
      return;
    }
    const newNode = createNode(value);
    const prev = at(index - 1);
    const next = prev.nextNode;

    prev.nextNode = newNode;
    newNode.nextNode = next;
    size++;
  };

  const shift = () => {
    if (!head) return;
    head = head.nextNode;
    size--;
    if (!head) tail = null;
  };

  const removeAt = (index) => {
    if (index >= size || index < 0) return;

    if (index === 0) {
      shift();
      return;
    }

    if (index === size - 1) {
      pop();
      return;
    }

    const prev = at(index - 1);
    const next = prev.nextNode.nextNode;

    prev.nextNode = next;
    size--;
  };

  const toString = () => {
    let currentNode = head;
    let str = "";

    while (currentNode) {
      str += `(${currentNode.value}) -> `;
      currentNode = currentNode.nextNode;
    }

    return str + "null";
  };

  return {
    append,
    prepend,
    pop,
    at,
    insertAt,
    removeAt,
    find,
    contains,
    getHead,
    toString,
    getTail,
    getSize,
  };
};
