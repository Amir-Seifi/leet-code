#2942. Find Words Containing Character

class Solution(object):
    def findWordsContaining(self, words, x):
        """
        :type words: List[str]
        :type x: str
        :rtype: List[int]
        """

        word_index = set()

        for i in range(len(words)):
            for char in words[i]:
                if char == x:
                    word_index.add(i)

        return list(word_index)