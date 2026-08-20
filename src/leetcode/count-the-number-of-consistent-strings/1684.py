#1684. Count the Number of Consistent Strings

class Solution(object):
    def countConsistentStrings(self, allowed, words):
        """
        :type allowed: str
        :type words: List[str]
        :rtype: int
        """

        allowed = set(allowed)
        result = 0

        for word in words:
            if all(char in allowed for char in word):
                result += 1

        return result