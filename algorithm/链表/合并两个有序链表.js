/*
将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

示例 1：
输入：l1 = [1,2,4], l2 = [1,3,4]
输出：[1,1,2,3,4,4]

示例 2：
输入：l1 = [], l2 = []
输出：[]
示例 3：

输入：l1 = [], l2 = [0]
输出：[0]

示例 3：
输入：l1 = [], l2 = [0]
输出：[0]
 */

var mergeTwoLists = function(list1, list2) {
    // const dummy = new ListNode(0,null);
    // let cur = dummy;
    // let cur1 = list1;
    // let cur2 = list2;
    // while(cur1&&cur2){
    //     if(cur1.val>=cur2.val){
    //         cur.next = new ListNode(cur2.val,null);
    //         cur2 = cur2.next;
    //     }
    //     else{
    //         cur.next = new ListNode(cur1.val,null);
    //         cur1 = cur1.next;
    //     }
    //     cur = cur.next;
    // }
    // // 超出部分直接在外部拼接就可，不必在内部进行判断拼接，只用将不存在的链表的另一边拼接上去即可
    // cur.next = cur1 === null ? cur2 : cur1;
    // console.log(dummy.next);
    // return dummy.next;

    // 快乐递归
    if(!list1){
        return list2;
    }
    else if(!list2){
        return list1;
    }
    else if(list1.val>list2.val){
        list2.next = mergeTwoLists(list1,list2.next);
        return list2;
    }
    else{
        list1.next = mergeTwoLists(list1.next,list2);
        return list1;
    }
};
mergeTwoLists([1,2,4], [1,3,4])