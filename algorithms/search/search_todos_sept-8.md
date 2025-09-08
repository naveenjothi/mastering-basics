Awesome 👌 Now we’re moving from **array-based searching techniques** (linear, binary, jump, interpolation, etc.) into **searching within different data structures**.
This is super important because the way you search depends on how the data is stored.

---

## 🔍 1. Searching in **Hash Tables**

- **Idea**: Use a hash function to map a key to an index.
- **Lookup**: Directly go to the index and check.
- **Time Complexity**:

  - Average: **O(1)**
  - Worst case (when collisions happen): **O(n)**

- **Use case**: Fast lookups (like dictionary word search, cache).

👉 Example: Searching for `"apple"` in `{ "apple" → 5, "banana" → 10 }` → O(1).

---

## 🔍 2. Searching in **Linked Lists**

- **Singly / Doubly Linked List**:

  - Start from the head and traverse node by node.
  - **Time Complexity**: **O(n)**
  - No direct indexing, so you must walk through.

- **Skip Lists**: A special kind of linked list with multiple levels to speed up search (works like a balanced tree).

  - **Time Complexity**: **O(log n)**

👉 Example: Searching for `15` in a linked list `[3 → 7 → 15 → 20]`.

---

## 🔍 3. Searching in **Trees**

- **Binary Search Tree (BST)**:

  - Compare target with root:

    - If smaller → go left
    - If larger → go right

  - **Average**: **O(log n)**
  - **Worst case** (skewed tree): **O(n)**

- **Balanced Trees (AVL, Red-Black Tree, B-Trees)**:

  - Always keep the tree balanced.
  - Guarantee **O(log n)** search.

- **Tries (Prefix Trees)**:

  - Great for string searches (like autocomplete).
  - **Time Complexity**: **O(m)** where `m` = length of string.

👉 Example: In a BST with `[10, 7, 15, 5, 9, 12, 20]`, searching for `12` takes 3 steps (`10 → 15 → 12`).

---

## 🔍 4. Searching in **Graphs**

- **DFS (Depth-First Search)**:

  - Go deep into one branch before backtracking.
  - Good for path-finding and exploring.
  - **Time Complexity**: **O(V + E)** (Vertices + Edges).

- **BFS (Breadth-First Search)**:

  - Explore all neighbors first, then go deeper.
  - Great for shortest path in unweighted graphs.
  - **Time Complexity**: **O(V + E)**

👉 Example: Searching if node `F` exists in a graph of cities connected by roads.

---

## 🔍 5. Searching in **Heaps**

- Heaps are mainly for min/max retrieval, not general searching.
- **Find Min (in Min-Heap)**: Always **O(1)** (at root).
- **Find Max (in Max-Heap)**: Always **O(1)**.
- Searching for arbitrary element (not root): **O(n)**.

---

## 📊 Quick Comparison

| Data Structure      | Search Time Complexity   |
| ------------------- | ------------------------ |
| Array (Linear)      | O(n)                     |
| Array (Binary)      | O(log n) (sorted)        |
| Hash Table          | O(1) avg, O(n) worst     |
| Linked List         | O(n)                     |
| Skip List           | O(log n)                 |
| BST                 | O(log n) avg, O(n) worst |
| Balanced Tree       | O(log n)                 |
| Trie                | O(m) (m = key length)    |
| Graph (DFS/BFS)     | O(V + E)                 |
| Heap (min/max only) | O(1)                     |

---

👉 Now, do you want me to **pick one data structure (like Hashing, BST, Tries, or Graphs)** and walk you through the search process step by step with an example?
