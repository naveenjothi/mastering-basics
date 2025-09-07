# 📘 Linked List Implementation Roadmap

This roadmap assumes a **Singly Linked List** as the base. You can later extend it to **Doubly** and **Circular** lists.

---

## 🔹 Basic Setup

- **Node class**

  - `data`
  - `next`

- **LinkedList class**

  - `head` (and `tail` for optimization)
  - methods below 👇

---

## 🔹 Utility Methods

1. **`isEmpty()`** → return true if head is `null`.
2. **`size()`** → count number of nodes.
3. **`print()` / `toArray()`** → convert list into array for easy debugging.

---

## 🔹 Insertion Methods

4. **`insertAtBeginning(value)`** → add new node before head.
5. **`insertAtEnd(value)`** → add new node after tail.
6. **`insertAt(index, value)`** → add new node at given index.
7. **`insertAfter(value, targetValue)`** → insert node after a given value.
8. **`insertBefore(value, targetValue)`** → insert node before a given value.

---

## 🔹 Deletion Methods

9. **`deleteFirst()`** → remove head node.
10. **`deleteLast()`** → remove tail node.
11. **`deleteAt(index)`** → remove node at a specific position.
12. **`deleteValue(value)`** → remove first occurrence of a value.
13. **`deleteAll(value)`** → remove all occurrences of a value.

---

## 🔹 Searching Methods

14. **`search(value)`** → return index or `-1` if not found.
15. **`contains(value)`** → return boolean (true/false).

---

## 🔹 Access & Update

16. **`getAt(index)`** → return value at given index.
17. **`updateAt(index, newValue)`** → update node at index.

---

## 🔹 Advanced Methods

18. **`reverse()`** → reverse the linked list.
19. **`findMiddle()`** → return middle node (fast/slow pointer).
20. **`hasCycle()`** → detect cycle using Floyd’s algorithm.
21. **`nthFromEnd(n)`** → return nth node from end.
22. **`removeDuplicates()`** → remove duplicate values.
23. **`mergeWith(otherList)`** → merge two sorted linked lists.
24. **`sort()`** → sort linked list (usually via merge sort).

---

## 🔹 Doubly Linked List Extras

25. **`insertBefore(node, value)`** → insert before a given node.
26. **`insertAfter(node, value)`** → insert after a given node.
27. **`deleteNode(node)`** → delete node by reference in O(1).

---

## 🔹 Circular Linked List Extras

28. **`insertCircular(value)`** → maintain circular property (`tail.next = head`).
29. **`traverseOnce()`** → print all nodes once (avoid infinite loop).
30. **`isCircular()`** → check if list is circular.

---

# 📌 Interview Notes

- **Core focus (must-know for interviews)**:

  - Insert / Delete (head, tail, middle)
  - Search by value
  - Reverse a linked list
  - Find middle / nth from end
  - Detect cycle

- **Follow-ups (stronger impression)**:

  - Remove duplicates
  - Merge two lists
  - Sort list
  - Doubly vs Circular differences

---

⚡ Pro Tip:
Build in **layers** — start with **Singly Linked List basics**, then extend to **Doubly** and **Circular**.
