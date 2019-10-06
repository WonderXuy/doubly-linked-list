const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    append(data) {
        let node = new Node(data);
        if(this._head==null){
            this._head = node;
            this._tail = node;
            this.length++;
        }
        else{
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
            this.length++;
        }
        return this;
    }

    head() {
        if(!this.isEmpty())
        return this._head.data;
        else return null;
    }

    tail() {
        if(!this.isEmpty())
        return this._tail.data;
        else return null;
    }

    at(index) {
        if(!this.isEmpty()&&index+1<=this.length){
        if(index+1<=Math.round(this.length/2)){
            let node = this._head;
            while(index>0){
                node = node.next;
                index--;
            }
            return node.data;
        }
        else if(index+1>=Math.round(this.length/2)){
            let node = this._tail;
            while((this.length-1-index)>0){
                node = node.prev;
                index++;
            }
            return node.data;
        }
    }
    }

    insertAt(index, data) {
        if(!this.isEmpty()&&index+1<=this.length){
            
                if(index+1<=Math.round(this.length/2)){
                    let node = this._head;
                    while(index>0){
                        node = node.next;
                        index--;
                    }
                    let inNode = new Node(data);
                    inNode.next = node;
                    inNode.prev = node.prev;
                    node = node.prev;
                    node.next = inNode;
                    node = node.next.next;
                    node.prev = inNode;
                    this.length++;
                }
                else if(index+1>=Math.round(this.length/2)){
                    let node = this._tail;
                    while((this.length-1-index)>0){
                        node = node.prev;
                        index++;
                    }
                    let inNode = new Node(data);
                    inNode.next = node;
                    inNode.prev = node.prev;
                    node = node.prev;
                    node.next = inNode;
                    node = node.next.next;
                    node.prev = inNode;
                    this.length++;
                }
            
        }
        return this;
    }

    isEmpty() {
        return this._head == null ? true : false;
    }

    clear() {
        if(!this.isEmpty()){
        this._head = null;
        this._tail = null;
        this.length = 0;
        }
        return this;
    }

    deleteAt(index) {
        if(index == 0){
            this.head = this.head.next;
        }
        else if (index == this.length-1){
            this._tail = this._tail.prev;
        }
        else if(index+1<=Math.round(this.length/2)){
            let node = this._head;
            while(index>0){
                node = node.next;
                index--;
            }
            let buf = node.prev;
            buf.next = node.next;
            buf = buf.next;
            buf.prev = node.prev;
            node.next = null;
            node.prev = null;
            this.length--;
        }
        else if(index+1>=Math.round(this.length/2)){
            let node = this._tail;
            while((this.length-1-index)>0){
                node = node.prev;
                index++;
            }
            let buf = node.prev;
            buf.next = node.next;
            buf = buf.next;
            buf.prev = node.prev;
            node.next = null;
            node.prev = null;
            this.length--;
        }
        return this;
    }

    reverse() {
        if(!this.isEmpty()&&this.length>1){
        let buf = this._head;
        this._head = this._tail;
        this._tail = buf;
        let node = this._head;
        while(node!=null){
            buf = node.next;
            node.next = node.prev;
            node.prev = buf;
            node = node.next;
        }
    }
        return this;
    }

    indexOf(data) {
        if(!this.isEmpty()){
            if(this.length==1&&this._head.data==data){
                return 1;
            }
        let nodeStart = this._head;
        let nodeFinish = this._tail;
        let count = 0;
        while(nodeStart!==nodeFinish){
            if(nodeStart.data==data){
                return count;
            }
            else if(nodeFinish.data == data){
                return this.length-1-count;
            }
            nodeStart = nodeStart.next;
            nodeFinish = nodeFinish.prev;
            count++;
        }
    }
        return -1;
    }
}

module.exports = LinkedList;
