/*
 **********************. Construct String from Binary Tree **************
You need to construct a string consists of parenthesis and integers from a binary tree with the preorder traversing way.

The null node needs to be represented by empty parenthesis pair "()". And you need to omit all the empty parenthesis pairs that don't affect the one-to-one mapping relationship between the string and the original binary tree.

Example 1:
Input: Binary tree: [1,2,3,4]
       1
     /   \
    2     3
   /
  4

Output: "1(2(4))(3)"

Explanation: Originallay it needs to be "1(2(4)())(3()())",
but you need to omit all the unnecessary empty parenthesis pairs.
And it will be "1(2(4))(3)".
Example 2:
Input: Binary tree: [1,2,3,null,4]
       1
     /   \
    2     3
     \
      4

Output: "1(2()(4))(3)"
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function(t) {
  //input tree;
  //output string

  //if input.value !== null
   //string += input.value
  //if t.left != null and t.right != null
    //string += (tree2str(t.left))(tree2str(t.right))
  //else if t.left = null && t.right != null
    //string += ()(tree2str(t.right))
  //else if t.left != null && t.right == null
    //string += (tree2str(t.left))
  //return string

  let string = "";

  if (t.val != null) {
   string += t.val;
  }
  if (t.right != null & t.left != null){
    string += "(" + tree2str(t.left) +")(" + tree2str(t.right) +")";
  } else if(t.left == null && t.right != null) {
    string += "()(" + tree2str(t.left) +")";
  } else if (t.left != null && t.right == null){
    string += "(" + tree2str(t.left) +")";
  }
  return string;
};

//o(n) = n since n nodes will recursion for each node
//space = n depth can go upto n for skewed trees
