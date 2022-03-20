class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        product = []
        p = 1
        for i in range(0, len(nums)):
            product.append(p)
            p = p * nums[i]
        r = 1
        for i in range(len(nums)-1, -1, -1):
            product[i] = r * product[i]
            r = r * nums[i]
        return product