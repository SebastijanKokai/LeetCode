// Determine if a 9 x 9 Sudoku board is valid.
// Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.
public class Solution
{
    public static bool IsValidSudoku(char[][] board)
    {
        int rows = 9;
        int cols = 9;
        // Check each column O(n^2)
        for (int i = 0; i < rows; i++)
        {
            var hashSet = new HashSet<char>();
            for (int j = 0; j < cols; j++)
            {
                if (board[j][i] == '.')
                {
                    continue;
                }
                if (!hashSet.Add(board[j][i]))
                {
                    return false;
                }
            }
        }

        // Check each row O(n^2)
        for (int i = 0; i < cols; i++)
        {
            var hashSet = new HashSet<char>();
            for (int j = 0; j < rows; j++)
            {
                if (board[i][j] == '.')
                {
                    continue;
                }
                if (!hashSet.Add(board[i][j]))
                {
                    return false;
                }
            }
        }

        // Check 3x3 boxes O(n^2)
        for (int i = 0; i < rows; i += 3)
        {
            for (int j = 0; j < cols; j += 3)
            {

                var hashSet = new HashSet<char>();
                for (int k = i; k < (i + 3); k++)
                {
                    for (int l = j; l < (j + 3); l++)
                    {
                        if (board[k][l] == '.')
                        {
                            continue;
                        }
                        if (!hashSet.Add(board[k][l]))
                        {
                            return false;
                        }
                    }
                }
            }
        }

        return true;
    }

    static void Main()
    {
        char[][] board = new char[9][];
        board[0] = new char[] { '5', '3', '.', '.', '7', '.', '.', '.', '.' };
        board[1] = new char[] { '2', '.', '.', '1', '9', '5', '.', '.', '.' };
        board[2] = new char[] { '.', '9', '.', '.', '.', '.', '6', '.', '.' };
        board[3] = new char[] { '8', '.', '.', '.', '6', '.', '.', '.', '3' };
        board[4] = new char[] { '4', '.', '.', '8', '.', '3', '.', '.', '1' };
        board[5] = new char[] { '7', '.', '.', '.', '2', '.', '.', '.', '6' };
        board[6] = new char[] { '.', '6', '.', '.', '.', '.', '2', '8', '.' };
        board[7] = new char[] { '.', '.', '.', '4', '1', '9', '.', '.', '5' };
        board[8] = new char[] { '.', '.', '.', '.', '8', '.', '.', '7', '9' };
        Console.WriteLine(IsValidSudoku(board));
    }

}

// Runtime: 202 ms, faster than 12.31% of C# online submissions for Valid Sudoku.
// Memory Usage: 41.4 MB, less than 57.78% of C# online submissions for Valid Sudoku.