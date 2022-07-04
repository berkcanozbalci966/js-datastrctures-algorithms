/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let left = 0;
  let values = [];

  while (head) {
    values.push(head.val);
    head = head.next;
  }

  let right = values.length - 1;

  while (left < right) {
    if (values[left] != values[right]) {
      return false;
    }
    right--;
    left++;
  }

  return true;
};
