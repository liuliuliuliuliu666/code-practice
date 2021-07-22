const kthLargest = function(root, k) {
    const array = []
    const getNode = function(node) {
        if(!node) {
            return false
        }
        node.right && getNode(node.right)
        array.push(node.val)
        node.left && getNode(node.left)
    }
    getNode(root)
    return array[k - 1]
}