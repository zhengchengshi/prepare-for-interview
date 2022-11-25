/*
给你一个链表的头节点 head 和一个特定值 x ，请你对链表进行分隔，使得所有 小于 x 的节点都出现在 大于或等于 x 的节点之前。

你应当 保留 两个分区中每个节点的初始相对位置。

示例 1：


输入：head = [1,4,3,2,5,2], x = 3
输出：[1,2,2,4,3,5]
示例 2：

输入：head = [2,1], x = 2
输出：[1,2]
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
 * @param {number} x
 * @return {ListNode}
 */
 var partition = function(head, x) {
    const dummy = new ListNode(0,head);
    let cur = dummy;
    let head1 = new ListNode(0,null),
        head2 = new ListNode(0,null);
    let cur1 = head1,
        cur2 = head2;
    while(cur&&cur.next){
        cur = cur.next;
        if(cur.val<x){
            cur1.next = new ListNode(cur.val,null);
            cur1 = cur1.next;
        }
        else{
            cur2.next = new ListNode(cur.val,null);
            cur2 = cur2.next;
        }
    }
    const res = new ListNode(0,head1.next);
    let resCur = res;
    while(resCur.next){
        resCur = resCur.next;
    }
    resCur.next = head2.next;
    return res.next;
};