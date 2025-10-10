class MyNode<T> {
  data: T;
  left: MyNode<T> | null;
  right: MyNode<T> | null;
  constructor(value: T) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearhTree<T> {
  root: MyNode<T> | null;
  constructor() {
    this.root = null;
  }

  insert(value: T) {
    const newNode = new MyNode(value);

    if (!this.root?.data) {
      this.root = newNode;
      return;
    }

    let node: MyNode<T> | null = this.root;
    while (node) {
      if (value > node.data) {
        if (node.right == null) {
          node.right = newNode;
          return;
        }
        node = node.right;
      } else {
        if (node.left == null) {
          node.left = newNode;
          return;
        }
        node = node.left;
      }
    }
  }

  private findMin(node: MyNode<T>): MyNode<T> {
    while (node.left) {
      node = node.left;
    }
    return node;
  }

  delete(value: T, node: MyNode<T> | null = this.root) {
    if (!node) return null;

    if (value > node.data) {
      node.right = this.delete(value, node.right);
    } else if (value < node.data) {
      node.left = this.delete(value, node.left);
    } else {
      if (!node.left && !node.right) {
        return null;
      }

      if (!node.left) {
        return node.right;
      }

      if (!node.right) {
        return node.left;
      }

      const minRight = this.findMin(node.right);

      node.data = minRight.data;
      node.right = this.delete(minRight.data, node.right);
    }

    this.root = node;

    return node;
  }

  inorder(node: MyNode<T> | null = this.root) {
    if (node?.data) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }
}

const bst = new BinarySearhTree<number>();

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(2);
bst.insert(7);
bst.insert(20);
console.log("Inorder before delete:");
bst.inorder();

bst.delete(15);

console.log("Inorder after delete 15:");
bst.inorder();
