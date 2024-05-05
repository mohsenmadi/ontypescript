// toggler: remove if there, insert if not; works in say selected checkboxes....

class ToggleSet<T> {
  private set: Set<T> = new Set<T>();

  toggle = (element: T): void => {
    if (this.set.has(element)) {
      this.set.delete(element);
    } else {
      this.set.add(element);
    }
  }

  printSet = () => console.log(Array.from(this.set))
}

const toggleSet = new ToggleSet();

toggleSet.toggle(10);
toggleSet.toggle(20);
toggleSet.toggle(30);
toggleSet.toggle(10);
toggleSet.toggle(40);

toggleSet.printSet();


export {}
