class Node {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
        this.answer = [[], []];
    }
    
    insert(x, y, i) {
        const node = new Node(x, y, i);
        if (!this.root) {
            this.root = node;
        } else {
            this.subInsert(this.root, node);
        }
    }
    subInsert(parent, child) {
        if (parent.x > child.x) {
            if (!parent.left) {
                parent.left = child;
            } else {
                this.subInsert(parent.left, child);
            }
        } else {
            if (!parent.right) {
                parent.right = child;
            } else {
                this.subInsert(parent.right, child);
            }
        }
    }
    preorder(node) {
        this.answer[0].push(node.index);
        if (node.left) this.preorder(node.left);
        if (node.right) this.preorder(node.right);
    }
    postorder(node) {
        if (node.left) this.postorder(node.left);
        if (node.right) this.postorder(node.right);
        this.answer[1].push(node.index);
    }
}

function solution(nodeinfo) {
    nodeinfo = nodeinfo.map((node, i) => [...node, i + 1])
    nodeinfo.sort((a, b) => {
        if (a[1] - b[1] === 0) {
            return a[0] - b[0];
        } else {
            return b[1] - a[1];
        }
    });
    
    const bTree = new BinaryTree();
    nodeinfo.forEach(([x, y, i]) => {
        bTree.insert(x, y, i);
    });
    bTree.preorder(bTree.root);
    bTree.postorder(bTree.root);
    
    return bTree.answer;
}