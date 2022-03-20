class Solution:
    def gameOfLife(self, board: List[List[int]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """
        # 0 -> 1 = 5
        # 1 -> 0 = 7 
        for row in range(0,len(board)):
            for col in range(0,len(board[0])):
                living_cells = count(board, row, col)
                if(board[row][col] == 1):
                    if(living_cells < 2 or living_cells > 3):
                        board[row][col] = 7
                else:
                    if(living_cells == 3):
                        board[row][col] = 5
                        
        for row in range(0,len(board)):
            for col in range(0,len(board[0])):
                if(board[row][col] == 5):
                    board[row][col] = 1
                if(board[row][col] == 7):
                    board[row][col] = 0
        
                        
# function to count total living cells around a cell            
def count(board, row, col):
    neighbours = [[-1,-1], [-1,0], [-1,1], [0,-1], [0,1], [1,-1], [1,0], [1,1]];
    rows = len(board)
    cols = len(board[0])
    living_cells = 0
    for i in range(0, len(neighbours)):
        nrow = row + neighbours[i][0]
        ncol = col + neighbours[i][1]
        if(nrow>=0 and nrow<rows) and (ncol>=0 and ncol<cols):
            if(board[nrow][ncol] == 1 or board[nrow][ncol] == 7):
                living_cells += 1
    return living_cells