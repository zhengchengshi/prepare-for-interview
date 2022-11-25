/*
给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 。请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表 。

示例 1：

输入：head = [1,2,3,4,5], left = 2, right = 4
输出：[1,4,3,2,5]
示例 2：

输入：head = [5], left = 1, right = 1
输出：[5]
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
// 头插法的关键在于确定要插在谁的后面，然后把元素一个个插入
var reverseBetween = function(head, left, right) {
    const dummyHead = new ListNode(0, head);
    let slow = dummyHead
    let fast = dummyHead.next
    for (let i = 0; i < left - 1; i++) {
        slow = slow.next;
        fast = fast.next;
    }
    for (let step = 0; step < right - left; step++) {
        // 删除fast节点，将fast后继节点插入头部
        // 循环遍历要删除的节点
        const removed = fast.next;
        // 指针后移
        fast.next = fast.next.next;
        // 之前删除的元素指向头节点原先的后继
        removed.next = slow.next;
        // slow为头，所有移除的元素插入到slow后面
        slow.next = removed;
    }
    return dummyHead.next
};