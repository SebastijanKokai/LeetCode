// Acceptance rate: 27%

//Given a 0-indexed integer array nums, return true if it can be made strictly increasing
//after removing exactly one element, or false otherwise. If the array is already strictly increasing,
//return true.

//The array nums is strictly increasing if nums[i - 1] < nums[i] for each index (1 <= i < nums.length).

// Constraints:
//2 <= nums.length <= 1000
//1 <= nums[i] <= 1000

int[] nums = new int[] { 1, 2, 10, 5, 7 }; //true
//int[] nums = new int[] { 1, 2, 3, 4, 5 }; // true
//int[] nums = new int[] { 1, 2, 2, 3 }; // false
//int[] nums = new int[] { 2, 3, 1, 2 }; // false
//int[] nums = new int[] { 1, 1 }; // true

bool isArrayIncreasing(List<int> nums)
{
bool isIncreasing = true;
    for(int i = 0; i < nums.Count - 1; i++)
    {
        isIncreasing = isIncreasing && (nums[i] < nums[i + 1]);
    }
    return isIncreasing;
}


bool removeOneElementIfNeeded(int[] nums)
{
    List<int> list = nums.ToList();
    bool isIncreasing = isArrayIncreasing(list);

    if (isIncreasing)
    {
        return isIncreasing;
    }
    else
    {
        for (int i = 0; i < nums.Length; i++)
        {
            List<int> temporaryList = new List<int>(list);
            temporaryList.RemoveAt(i);
            if(isArrayIncreasing(temporaryList))
            {
                return true;
            }
        }
        return false;
    }
}

Console.WriteLine(removeOneElementIfNeeded(nums));


// Runtime: 190 ms, faster than 11.95% of C# online submissions
// for Remove One Element to Make the Array Strictly Increasing.
//Memory Usage: 41.3 MB, less than 5.43% of C# online submissions
//for Remove One Element to Make the Array Strictly Increasing.




