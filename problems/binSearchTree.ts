class TreeNode<T> {
  value: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree<T> {
  root: TreeNode<T> | null = null;
  largeVals: T[] = [];

  insert(value: T) {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      this._insertNode(newNode, this.root);
    }
  }

  findLargest(): T {
    let curNode = this.root;
    while (curNode.right) {
      curNode = curNode.right;
    }
    return curNode.value;
  }

  findSecondLargest(): T {
    this._findSecondLargest();
    console.log(this.largeVals);
    return this.largeVals.length < 2 ? null : this.largeVals[0];
  }

  _findSecondLargest(node = this.root) {
    if (node) {
      this._findSecondLargest(node.left);
      this.largeVals.push(node.value);
      if (this.largeVals.length > 2) {
        this.largeVals.shift();
      }
      this._findSecondLargest(node.right);
    }
  }

  inOrder(node: TreeNode<T> = this.root) {
    if (node) {
      this.inOrder(node.left);
      console.log(node.value + ' ');
      this.inOrder(node.right);
    }
  }

  private _insertNode(newNode: TreeNode<T>, curRoot: TreeNode<T>) {
    if (newNode.value < curRoot.value) {
      if (curRoot.left) {
        this._insertNode(newNode, curRoot.left);
      } else {
        curRoot.left = newNode;
      }
    } else {
      if (curRoot.right) {
        this._insertNode(newNode, curRoot.right);
      } else {
        curRoot.right = newNode;
      }
    }
  }
}

const bst = new BinarySearchTree();
bst.insert(15);
bst.insert(10);
bst.insert(20);
bst.insert(25);
bst.insert(8);
bst.insert(12);
bst.insert(24);

bst.inOrder();
console.log('== the largest element is', bst.findLargest());
console.log('== the 2largest element is', bst.findSecondLargest());
