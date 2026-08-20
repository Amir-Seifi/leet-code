#9. Palindrome Number

class Solution(object):
    def isPalindrome(self, x):
        """
        :type x: int
        :rtype: bool
        """

        reverse_x = ""
        str_x = str(x)

        for i in range(len(str_x) - 1, -1, -1):
            reverse_x += str_x[i]

        return reverse_x == str_x