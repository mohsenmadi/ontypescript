class TrieNode {
  children: Map<string, TrieNode> = new Map()
  isLeaf = false;
}

class TrieOps {
  private root = new TrieNode();

  insert = (word: string) => {
    let node = this.root;

    word.split('').forEach(char => {
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }
      node = node.children.get(char);
    })
    node.isLeaf = true;
  };

  search = (word: string): boolean => {
    let node = this.root;

    for (let char of word) {
      if (!node.children.has(char)) {
        return false;
      }
      node = node.children.get(char);
    }
    return node.isLeaf;
  };
}

const trie = new TrieOps();

trie.insert('hello');
trie.insert('hat');
trie.insert("world");
trie.insert("help");
trie.insert("helix");
trie.insert("hello");

const searchStrings = ['hello', 'world', 'help', 'helix', 'helloo', 'hero'];

searchStrings.forEach(searchStr => {
  console.log(`== ${searchStr} is ${trie.search(searchStr)}`);
})

export {}
