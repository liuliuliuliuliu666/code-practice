function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

// 前序遍历
var preorderTraversal = function(root) {
    const array = []
    const getNode = function(node) {
        if(!node) {
            return false
        }
        array.push(node.val)
        node.left && getNode(node.left)
        node.right && getNode(node.right)
    }
    getNode(root)
    return array
};

// 中序遍历
var inorderTraversal = function(root) {
    const array = []
    const getNode = function(node) {
        if(!node) {
            return false
        }
        node.left && getNode(node.left)
        array.push(node.val)
        node.right && getNode(node.right)
    }
    getNode(root)
    return array
};

// 后序遍历
var postorderTraversal = function(root) {
    const array = []
    const getNode = function(node) {
        if(!node) {
            return false
        }
        node.left && getNode(node.left)
        node.right && getNode(node.right)
        array.push(node.val)
    }
    getNode(root)
    return array
};