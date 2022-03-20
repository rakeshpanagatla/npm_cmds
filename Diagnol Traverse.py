class Solution:
    def findDiagonalOrder(self, mat: List[List[int]]) -> List[int]:

        # 1 -> up
        # 0 -> down
        size = len(mat) * len(mat[0])
        direction = 1
        diagonalTraversal = []
        i = 0
        row = 0
        column = 0
        while (i < size):
            diagonalTraversal.append(mat[row][column])
            i += 1
            if (direction == 1):
                # check first corner case
                # if(row == 0):
                #     column += 1
                #     direction = 0
                if (column == len(mat[0]) - 1):
                    row += 1
                    direction = 0

                # Check the second corner case
                #                 elif(column == len(mat[0])-1):
                #                     row += 1
                #                     direction = 0
                elif (row == 0 and column < len(mat[0]) - 1):
                    column += 1
                    direction = 0

                else:
                    column += 1
                    row -= 1

            else:
                # first corner case
                # if(column == 0):
                #     row += 1
                #     direction = 1
                if (row == len(mat) - 1):
                    column += 1
                    direction = 1

                # Check 2nd corneer case
                # elif(row == len(mat)-1):
                #     column += 1
                #     direction = 1
                elif (column == 0 and row < len(mat) - 1):
                    row += 1
                    direction = 1

                else:
                    column -= 1
                    row += 1
        return diagonalTraversal