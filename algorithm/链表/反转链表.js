/*
给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。

示例 1：

输入：head = [1,2,3,4,5]
输出：[5,4,3,2,1]
示例 2：


输入：head = [1,2]
输出：[2,1]
示例 3：

输入：head = []
输出：[]
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
var reverseList = function(head) {
    // 栈
    // let len = 0;
    // let cur = head;
    // const stack = []
    // while(cur){
    //     len++;
    //     stack.unshift(cur.val);
    //     cur = cur.next;
    // }
    // let cur2 = new ListNode(0,null);
    // let newLinkList = cur2;
    // for(let i = 0;i<len;i++){
    //     cur2.next = new ListNode(stack[i],null);
    //     cur2 = cur2.next;
    // }
    // return newLinkList.next;

    // 正确逻辑：快乐双指针，反转前后两个相邻指针指向
    // 原本为preV -> curV 反转后 preV <- curV
    let preV = null;
    let curV = head;
    while(curV){
        let next = curV.next;
        // 相邻节点反转指向
        curV.next = preV;
        // preV后移，为下轮循环做准备
        preV = curV;
        // curV后移
        curV = next;
    }
    return preV;

    // 递归
    if (head == null || head.next == null) {
        /*
        直到当前节点的下一个节点为空时返回当前节点
        由于5没有下一个节点了，所以此处返回节点5
        */
        return head;
    }
    const newHead = reverseList(head.next);
    // 同样为前后节点交换，不过为递归形式，倒着来的
        /*
        第一轮出栈，head为5，head.next为空，返回5
        第二轮出栈，head为4，head.next为5，执行head.next.next=head也就是5.next=4，
                    把当前节点的子节点的子节点指向当前节点
                    此时链表为1->2->3->4<->5，由于4与5互相指向，所以此处要断开4.next=null
                    此时链表为1->2->3->4<-5
                    返回节点5
        第三轮出栈，head为3，head.next为4，执行head.next.next=head也就是4.next=3，
                    此时链表为1->2->3<->4<-5，由于3与4互相指向，所以此处要断开3.next=null
                    此时链表为1->2->3<-4<-5
                    返回节点5
        第四轮出栈，head为2，head.next为3，执行head.next.next=head也就是3.next=2，
                    此时链表为1->2<->3<-4<-5，由于2与3互相指向，所以此处要断开2.next=null
                    此时链表为1->2<-3<-4<-5
                    返回节点5
        第五轮出栈，head为1，head.next为2，执行head.next.next=head也就是2.next=1，
                    此时链表为1<->2<-3<-4<-5，由于1与2互相指向，所以此处要断开1.next=null
                    此时链表为1<-2<-3<-4<-5
                    返回节点5
        出栈完成，最终头节点5->4->3->2->1
        */
    head.next.next = head;
    // 断开正向指向
    head.next = null;
    return newHead;

};