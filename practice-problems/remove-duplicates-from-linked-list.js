/*

  You're given the head of a Singly Linked List whose nodes are in sorted order
  with respect to their values. Write a function that returns a modified version
  of the Linked List that doesn't contain any nodes with duplicate values. The
  Linked List should be modified in place (i.e., you shouldn't create a brand
  new list), and the modified Linked List should still have its nodes sorted
  with respect to their values.

  Each LinkedList node has an integer value as well as
  a next node pointing to the next node in the list or to
  None/null if it's the tail of the list.

  Sample Input:
  linkedList = 1 -> 1 -> 3 -> 4 -> 4 -> 4 -> 5 -> 6 -> 6 // the head node with value 1

  Sample Output:
  1 -> 3 -> 4 -> 5 -> 6

  Optimal Space & Time Complexity:
  O(n) time | O(1) space, where n is the number of nodes in the Linked List

  */

  // This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  // input: the head of a linked list
  // output: the head of a sorted linked list
  // edge cases: ignore for now
  // constraints: must be modified in place (no new list should be created)

  // create variable to keep track of current node
  var currentNode = linkedList;
  // while node has a next
  while (currentNode.next) {
    //if next node is the same as current node
    console.log(currentNode.value)
    if (currentNode.value === currentNode.next.value) {
      // next node is the next next node
      currentNode.next = currentNode.next.next;
    } else {
      // set current node to next
      currentNode = currentNode.next;
    }
  }
  // return linkedList
  return linkedList
}



