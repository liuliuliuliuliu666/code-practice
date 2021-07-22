var isSubtree = function (s, t) {
    if (s == null) return false;
    if (isSameTree(s, t)) return true;
    return isSubtree(s.left, t) || isSubtree(s.right, t);
};
function isSameTree(s, t) {
    if (s == null && t == null) return true;
    if (s == null || t == null) return false;
    return s.val === t.val && isSameTree(s.left, t.left) && isSameTree(s.right, t.right);
}