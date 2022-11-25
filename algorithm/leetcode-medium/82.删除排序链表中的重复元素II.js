/*
给定一个已排序的链表的头 head ， 删除原始链表中所有重复数字的节点，只留下不同的数字 。返回 已排序的链表 。

示例 1：

输入：head = [1,2,3,3,4,4,5]
输出：[1,2,5]
示例 2：

输入：head = [1,1,1,2,3]
输出：[2,3]
*/
var deleteDuplicates = function(head) {
    const dummy = new ListNode(0,head);
    let slow = dummy,fast = dummy.next;
    while(fast&&fast.next){
        console.log(slow,fast)
        if(fast.val===fast.next.val){
            while(fast.val===fast.next.val){
                fast = fast.next;
                if(!fast||!fast.next){
                    break;
                }
            }
            
            slow.next = fast.next;
            fast = fast.next;
        }
        else{
            fast = fast.next;
            slow = slow.next;
        }
    }
    return dummy.next
}