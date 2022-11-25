/*
给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。

示例 1：

输入：head = [1,2,3,4,5], n = 2
输出：[1,2,3,5]
示例 2：

输入：head = [1], n = 1
输出：[]
示例 3：

输入：head = [1,2], n = 1
输出：[1]
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // 双指针
    // 可以使用两个指针 first 和 second 同时对链表进行遍历，并且 first 比 second 超前 n 个节点。当 first 遍历到链表的末尾时，second 就恰好处于倒数第 n 个节点。
    let dummy = new ListNode(0,head);
    let right = head;
    let left = dummy;
    // 使两指针相差n格
    for(let i = 0;i<n;i++){
        right = right.next;
    }
    // 双指针同时后移，直到right指针指向末尾
    while(right){
        right = right.next;
        left = left.next;
    }
    // right指针指向末尾时，left正好处于倒数第n-1个位置，其后面的节点就是需要删除的
    // 这也是为什么left处于dummy，right处于head的原因
    left.next = left.next.next;
    return head;

    // 不设置哑节点
    // let cur = head;
    // let len = 0;
    // while(cur !== null){
    //     cur = cur.next;
    //     len++;
    // }

    // let cur3 = cur2 = head;
    // for(let i = 0;i<len - n - 1;i++){
    //     cur2 = cur2.next;
    // }
    // console.log(cur2)
    // if(len !== n){
    //     cur2.next = cur2.next.next;
    // }
    // // 头节点判断，如果删除头节点则直接返回其后继
    // else{
    //     return cur2.next;
    // }
    // console.log(cur3);
    // return cur3;

    // const getLength = (node)=>{
    //     let len = 0;
    //     let cur = node;
    //     while(cur){
    //         cur = cur.next;
    //         len++;
    //     }
    //     return len;
    // }
    // let dummy = new ListNode(0,head);
    // let len = getLength(head);
    // let cur = dummy;
    // for(let i = 0;i<len - n;i++){
    //     cur = cur.next;
    // }
    // console.log(dummy)
    // // 设置虚拟头部就无需对head进行特判
    // cur.next = cur.next.next;
    // return dummy.next;

};
const res = removeNthFromEnd([1,2,3,4,5],2);
console.log (res);