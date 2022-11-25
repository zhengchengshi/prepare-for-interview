/*
给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

请你将两个数相加，并以相同形式返回一个表示和的链表。

你可以假设除了数字 0 之外，这两个数都不会以 0 开头。


示例 1：

输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[7,0,8]
解释：342 + 465 = 807.
示例 2：

输入：l1 = [0], l2 = [0]
输出：[0]
示例 3：

输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
输出：[8,9,9,9,0,0,0,1]

*/

// 力扣中的l1，l2都是链表 不是数组！ 
// 力扣中插入新节点可以直接使用new ListNode() ListNode为力扣内置接口 
// 注意区分ListNode和NodeList

// 可以直接相加
// 对于长度不匹配的链表 可以通过填充0来实现
// 当前位数数值为 ( l1.val + l2.val + 进位数 ) % 10 
// 进位数为 (l1.val + l2.val + 进位数) / 10
// 需要注意末位如果进位需要补1
var addTwoNumbers = function(l1, l2) {
    // 官方题解
    // let tail = null,head = null;
    // let carry = 0;
    // while(l1||l2){
    //     const n1 = l1 ? l1.val : 0;
    //     const n2 = l2 ? l2.val : 0;
    //     const sum = n1 + n2 + carry;
    //     if(!head){
    //         head = tail= new NodeList(sum%10);
    //     }
    //     else{
    //         tail.next = new NodeList(sum%10);
    //         tail = tail.next
    //     }
    //     carry = Math.floor(sum / 10)
    //     if(l1){
    //         l1 = l1.next
    //     }
    //     if(l2){
    //         l2 = l2.next
    //     }
    // }
    // if(carry>0){
    //     tail.next = new NodeList(carry)
    // }
    // return head

    // 容易忘记两链表长短不一和末尾进位补1
    let cur1 = l1;
    let cur2 = l2;
    // 不用手动去补0，最佳实践是在循环中直接判断是否为空然后补0，但是每次单一链表后移要判空，不然长短不一的情况下会出错
    while(cur1||cur2){
        if(!cur1.next&&!cur2.next){
            break;
        }
        else if(!cur1.next&&cur2.next){
            cur1.next = new ListNode(0,null);
        }
        else if(cur1.next&&!cur2.next){
            cur2.next = new ListNode(0,null);
        }
        cur1 = cur1.next;
        cur2 = cur2.next;
    }
    let num = 0;
    const dummy = new ListNode(0,null);
    let cur = dummy
    while(l1||l2){
        cur.next = new ListNode((num+l1.val+l2.val)%10,null);
        cur = cur.next;
        if(l1.val+l2.val+num>=10){
            num = 1
        }
        else{
            num = 0;
        }
        l1 = l1.next;
        l2 = l2.next;
    }
    if(num===1){
        cur.next = new ListNode(1,null)
    }
    return dummy.next
};
addTwoNumbers()