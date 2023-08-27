"use strict";
class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
function reverseList(head) {
    let curr = head;
    let prev = null;
    while (curr != null) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    return prev;
}
