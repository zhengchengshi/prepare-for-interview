/*
给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。

示例 1：

输入：head = [1,2,3,4]
输出：[2,1,4,3]
示例 2：

输入：head = []
输出：[]
示例 3：

输入：head = [1]
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
 * @return {ListNode}
 */
var swapPairs = function(head) {
    // 换值 这是错误的，题目要求是交换节点
    // let cur = head;
    // while(cur){
    //     if(!cur.next){
    //         return head;
    //     }
    //     let temporaryVal = cur.val;
    //     cur.val = cur.next.val;
    //     cur.next.val = temporaryVal;
    //     cur = cur.next.next;
    // }
    // return head;
    // 换节点
    const dummyHead = new ListNode(0);
    dummyHead.next = head;
    let temp = dummyHead;
    while (temp.next !== null && temp.next.next !== null) {
        const node1 = temp.next;
        const node2 = temp.next.next;
        // 头节点先连node2，因为node2到前面去了
        temp.next = node2;
        // node1交换到了node2的后面，所以其后继应该在node2没变之前连node2的后继
        node1.next = node2.next;
        // node2后继连接node1
        node2.next = node1;
        // temp继续后移
        temp = node1;
    }
    return dummyHead.next;
    // 递归(实则为倒着拼出一条链表)
    // 中止条件
    if (head === null|| head.next === null) {
        return head;
    }
    // 每次头部后移两次
    // 新头指向后面的节点
    const newHead = head.next;
    head.next = swapPairs(newHead.next);
    // 新头拼接后续节点
    newHead.next = head;
    // 返回新头作为上个节点的后续的后继节点
    return newHead;
};