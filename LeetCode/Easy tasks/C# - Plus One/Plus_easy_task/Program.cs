// See https://aka.ms/new-console-template for more information

//You are given a large integer represented as an integer array digits,
//where each digits[i] is the ith digit of the integer.
//The digits are ordered from most significant to least significant in left-to-right order.
//The large integer does not contain any leading 0's.
//Increment the large integer by one and return the resulting array of digits.


// ---------- First try, didn't work because of system overflow exception

// [7,2,8,5,0,9,1,2,9,5,3,6,6,7,3,2,8,4,3,7,9,5,7,7,4,7,4,9,4,7,0,1,1,1,7,4,0,0,6] array is too large

//string integerArrayToString(int[] inputArray)
//{
//    string inputToString = "";

//    for (int i = 0; i < inputArray.Length; i++)
//    {
//        inputToString += inputArray[i].ToString();
//    }

//    return inputToString;
//}

//int[] integerToIntegerArray(Int64 input)
//{
//    string inputToString = input.ToString();
//    int[] outputArray = new int[inputToString.Length];


//    for(int i = 0; i< inputToString.Length; i++)
//    {
//        outputArray[i] = Convert.ToInt32(inputToString[i]) - 48;
//    }
//    return outputArray;
//}

//int[] inputArray = new int[] { 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 };
//string inputArrayToString = integerArrayToString(inputArray);

//Int64 inputToInt = Convert.ToInt64(inputArrayToString);
//inputToInt++;

//int[] outputArray = integerToIntegerArray(inputToInt);

//foreach(int i in outputArray)
//{
//    Console.Write(i + " ");
//}

// ---------- Second try

int[] inputArray = new int[] { 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 };
//int[] inputArray = new int[] { 9, 9, 9 };
//int[] inputArray = new int[] { 7, 2, 8, 5, 0, 9, 1, 2, 9, 5, 3, 6, 6, 7, 3, 2, 8, 4, 3, 7, 9, 5, 7, 7, 4, 7, 4, 9, 4, 7, 0, 1, 1, 1, 7, 4, 0, 0, 6 };

int i = inputArray.Length - 1;

while(i >= 0)
{
    if (inputArray[i] == 9)
    {
        inputArray[i] = 0;
        if (i == 0)
        {
            int[] newArray = new int[inputArray.Length + 1];
            Array.Copy(inputArray, 0, newArray, 1, inputArray.Length);
            newArray[0] = 1;
            inputArray = newArray;
        }
    }
    else
    {
        inputArray[i]++;
        break;
    }
    i--;
}

foreach(int j in inputArray)
{
    Console.Write(j + " ");
}


//Runtime: 191 ms, faster than 41.17% of C# online submissions for Plus One.
//Memory Usage: 40.8 MB, less than 38.84% of C# online submissions for Plus One.
