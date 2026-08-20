#20. Valid Parentheses

class Solution(object):
    def isValid(self, s):
        """
        :type s: str
        :rtype: bool
        """

        stack = []
        brackets = {")": "(", "}": "{", "]": "["}

        for char in s:
            if char in brackets.values():
                stack.append(char)
            else:
                if not stack or stack.pop() != brackets[char]:
                    return False

        return not stack