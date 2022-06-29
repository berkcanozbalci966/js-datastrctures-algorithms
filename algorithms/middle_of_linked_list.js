/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let length = 0;
  let currentNode = head;
  while (currentNode != null) {
    length++;
    currentNode = currentNode.next;
  }

  for (let i = 0; i < parseInt(length / 2); i++) {
    head = head.next;
  }
  return head;
};
