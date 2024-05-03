class ListNode {
  value: number;
  next: ListNode | null;
  visited?: boolean;

  constructor(value: number, next: ListNode | null = null) {
    this.value = value;
    this.next = next;
    this.visited = false;
  }
}

const check4cycleTurtle = (head: ListNode | null): [ListNode, ListNode] | boolean => {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return [slow, fast.next]
    }
  }
  return false;
}

const check4cycleVisited = (head: ListNode | null): [ListNode, ListNode] | boolean => {
  let curNode = head;

  while (curNode && curNode.next) {
    if (curNode.visited) {
      return [curNode, curNode.next];
    }
    curNode.visited = true;
    curNode = curNode.next;
  }

  return false;
}

const displayListNode = (head: ListNode | null) => {
  if (!head) return null;

  const arr: number[] = [];
  let curNode = head;
  while (curNode) {
    arr.push(curNode.value);
    curNode = curNode.next;
  }
  console.log(arr.join(' -> '));
}

const node11 = new ListNode(11);
const node9 = new ListNode(9, node11);
const node7 = new ListNode(7, node9);
const node5 = new ListNode(5, node7);
const node3 = new ListNode(3, node5);
const node1 = new ListNode(1, node3);
displayListNode(node1);
// console.log('==> cycle-t?', check4cycleTurtle(node1));
console.log('==> cycle-v?', check4cycleVisited(node1));

node9.next = node5;
// console.log('==> cycle-t?', check4cycleTurtle(node1));
console.log('==> cycle-v?', check4cycleVisited(node1));

export {}
