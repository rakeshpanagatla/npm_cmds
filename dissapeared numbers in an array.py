class Solution:
    def findDisappearedNumbers(self, nums: List[int]) -> List[int]:
        result = []
        for i in range(0, len(nums)):
            index = abs(nums[i])-1
            if(nums[index]>0):
                nums[index] = nums[index] * -1
        
        for i in range(0, len(nums)):
            if(nums[i] > 0):
                result.append(i+1)
        return result
                