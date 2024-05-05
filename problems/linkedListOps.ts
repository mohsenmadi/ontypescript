// LinkedList class, each elem is SimpleNode, then insert, remove, getLast...

class SimpleNode<T> {
  data: T;
  next?: SimpleNode<T>;

  constructor(data: T) {
    this.data = data;
  }
}

class LinkedList<T> {
  head: SimpleNode<T> | null = null;

  getLast = (node = this.head): SimpleNode<T> =>
      node.next ? this.getLast(node.next) : node;

  insert(value: T) {
    const newNode = new SimpleNode(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      this.getLast().next = newNode;
    }
  }

  remove(value: T) {
    let node = this.head;
    let prev;
    while (node && node.data !== value) {
      prev = node;
      node = node.next;
    }
    if (!node) return;

    if (!prev) {
      let node = this.head;
      this.head = this.head.next;
      node = null;
      return;
    }

    if (node.next) {
      prev.next = node.next;
    } else {
      prev.next = null;
    }
    node = null;
  }

  displayList() {
    let node = this.head;
    const arr = [];
    while (node) {
      arr.push(node.data);
      node = node.next;
    }
    console.log(arr.join(' -> '));
  }
}

const linkedList = new LinkedList();

[1].forEach((value) => linkedList.insert(value));

linkedList.displayList();
linkedList.remove(1);
linkedList.displayList();

// [11].forEach((value) => linkedList.insert(value));
// linkedList.displayList();


export {};
