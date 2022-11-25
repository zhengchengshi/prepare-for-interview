class Node {
    constructor(val){
        this.next = null;
        this.value = val;
    }
}
class Link_List {
    constructor(value){
        this.head = new Node(value);
        // this.tail = this.head;
    }
    // 按值查找
    findByValue=(value)=>{
        let cur = this.head;
        while(cur.next!==null&&cur.value!==value){
            cur = cur.next;
        }
        return cur
    }
    // 按位查找
    findByIndex=(index)=>{
        let cur = this.head
        for(let i = 0;i<index;i++){
            cur = cur.next
        }
        return cur;
    }
    // 插入至尾部
    insertAtTail=(value)=>{   
        const node = new Node(value);
        // this.tail.next = node
        // this.tail = node
        let cur = this.head;
        while( cur.next !== null ){
            cur = cur.next;
        }
        cur.next = node;
    }
    // 按值插入
    insertByValue=(value,searchValue)=>{
        const node = new Node(value);
        let cur = this.findByValue(searchValue);
        node.next = cur.next;
        cur.next = node;
    }
    // 按位插入
    insertByIndex=(value,searchIndex)=>{
        const node = new Node(value);
        let cur = this.findByIndex(searchIndex);
        node.next = cur.next;
        cur.next = node;
    }
    // 按位删除
    deleteByIndex=(searchIndex)=>{
        let cur = this.findByIndex(searchIndex-1);
        cur.next = cur.next.next;
    }
    // 遍历
    traverse= ()=>{
        let arr = []
        let cur = this.head;
        // console.log(cur.value)
        while(cur.next!==null){
            cur = cur.next

            arr.push(cur.value)
        }
        return arr
    }
}