// // Valid Palindrome or not - 125

// // var isPalindrome = function(s) {
// //     let str = s.toLowerCase();
// //     let left = 0;
// //     let right = str.length - 1;
// //     const isAlphaNumeric = (ch) => /[a-z0-9]/i.test(ch);
// //     while(left < right)
// //     {
// //         while(left < right && !isAlphaNumeric(str[left]))
// //         {
// //             left++
// //         }
// //         while(left < right && !isAlphaNumeric(str[right]))
// //         {
// //             right--
// //         }
// //         if (str[left] !== str[right]) {
// //             return false;
// //         }
// //         left++;
// //         right--;
// //     }
// //     return true
// // }

// // console.log(isPalindrome("A man, a plan, a canal: Panama"));
// // console.log(isPalindrome( "race a car"));


// /************************************************************************************************************************************** */

// //Remove Duplicates in Place

// // var removeDuplicates = function (nums) {
// //     let slow = 0;
// //     let fast = 1;

// //     while (fast < nums.length) {
// //         if (nums[slow] === nums[fast]) {
// //             fast++;
// //         } else {
// //             slow++;
// //             nums[slow] = nums[fast];
// //             fast++;
// //         }
// //     }

// //     return nums.slice(0, slow + 1);
// // }

// // console.log(removeDuplicates([1, 1, 2, 2, 3, 4, 4]));

// /************************************************************************************************************************************** */


// // var removeElement = function(nums,val)
// // {
// //     let slow = 0;
// //     let fast = 0;
// //     while(fast < nums.length)
// //     {
// //         if(nums[fast] === val)
// //     {
// //         fast++
// //     }
// //     else{
// //         nums[slow] = nums[fast];
// //         slow++;
// //         fast++
// //     }
// //     }
// //     return slow
// // }
// // console.log(removeElement([3,2,2,3],3));

// /************************************************************************************************************************************** */

// // Move Zeros:


// // var moveZeros = function(nums)
// // {
// //     let slow = 0;
// //     let fast = 0;
// //     while( fast < nums.length)
// //     {
// //         if(nums[fast] != 0)
// //         {
// //             nums[slow] = nums[fast];
// //             slow++;
// //             fast++
// //         }else{
// //             fast++
// //         }
// //     }
// //     for(let i =slow; i<nums.length;i++)
// //     {
// //         nums[i] = 0
// //     }
// //     return nums

// // }

// // console.log(moveZeros([0, 1, 0, 3, 12]));


// /****************************************************************************** */

// // var merge = function(nums1, m, nums2, n) {
// //     let write = m + n - 1;
// //     let p1 = m - 1;
// //     let p2 = n - 1;

// //     while (p2 >= 0) {
// //         if (p1 >= 0 && nums1[p1] > nums2[p2]) {
// //             nums1[write] = nums1[p1];
// //             p1--;
// //         } else {
// //             nums1[write] = nums2[p2];
// //             p2--;
// //         }
// //         write--;
// //     }
// //     return nums1;
// // };


// // console.log(merge([1,2,3,0,0,0],3,[2,5,6],3));
// // console.log(merge([1],1,[],0));
// // console.log(merge([0],0,[1],1));


// /**************************************************************************** */
// //11. Container with most water:

// // var maxArea = function(height) {
// //     let left = 0;
// //     let right = height.length - 1;
// //     let area = 0
// //     let maxArea = 0;
// //     while( left < right)
// //     {
// //         area = (right - left) * Math.min(height[left],height[right]);
// //         maxArea = Math.max(maxArea,area)
// //     if( height[left] < height[right])
// //     {
// //         left++
// //     }
// //     else{
// //         right--
// //     }
// //     }
// //     return maxArea
// // };

// // console.log(maxArea([1,8,6,2,5,4,8,3,7]));

// /***** */


// /// [1,2,3,4,5,6] target = 12 [3,4,5]
// ///////////8
// /*
// 2 
// 12-2 = 10




// */
// /*

// var threeSum = function (nums) {
//     let arr = nums.sort((a, b) => a - b);
//     console.log(arr);

//     let count = 0;
//     while (count < arr.length) {
//         let fixed = arr[count];
//         let needed = 0 - fixed;//4
//         let left = 1;
//         let right = arr.length - 1;
//         for (let i = 0; i < arr.length; i++) {

//             let sum = arr[left] + arr[right];//1,1
//             console.log("-->>>",sum,count);

//             if(sum < needed)
//             {
//                 left++
//             }
//             else if(sum > needed)
//             {
//                 right--
//             }
//             else if(sum === needed)
//             {
//                 return [fixed,arr[left],arr[right]]
//             }
//         }
//         count++
//     }
//     return []
// };


// console.log(threeSum([-1, 0, 1, 2, -1, -4]));


// The code is not correct

// */

// // var threeSum = function (nums) {
// //     nums.sort((a, b) => a - b);

// //     let result = [];

// //     for (let i = 0; i < nums.length - 2; i++) {

// //         if (i > 0 && nums[i] === nums[i - 1]) {
// //             continue;
// //         }
// //         let fixed = nums[i];
// //         let needed = 0 - fixed;

// //         let left = i + 1;
// //         let right = nums.length - 1;

// //         while (left < right) {

// //             let sum = nums[left] + nums[right];

// //             if (sum < needed) {
// //                 left++;
// //             }
// //             else if (sum > needed) {
// //                 right--;
// //             }
// //             else {
// //                 result.push([fixed, nums[left], nums[right]]);
// //                 left++;
// //                 right--;
// //                 while (left < right && nums[left] === nums[left - 1]) {
// //                     left++;
// //                 }

// //                 while (left < right && nums[right] === nums[right + 1]) {
// //                     right--;
// //                 }
// //             }
// //         }
// //     }

// //     return result;
// // };



// // var threeSum = function (arr) {
// //     arr.sort((a, b) => a - b);
// //     let result = [];
// //     for (let i = 0; i < arr.length - 2; i++) {
// //         if (i > 0 && arr[i] === arr[i - 1]) {
// //                 continue
// //             }
// //         let needed = 0 - arr[i];
// //         let left = i + 1;
// //         let right = arr.length - 1;

// //         while (left < right) {
// //             let sum = arr[left] + arr[right]

// //             if (sum < needed) {
// //                 left++
// //             }
// //             else if (sum > needed) {
// //                 right--
// //             }
// //             else {
// //                 result.push([arr[i], arr[left], arr[right]])
// //                 left++;
// //                 right--;
// //                 while (left < right && arr[left] === arr[left - 1]) {
// //                     left++
// //                 }
// //                 while (left < right && arr[right] === arr[right + 1]) {
// //                     right--
// //                 }
// //             }
// //         }
// //     }
// //     return result
// // }

// // var threeSum = function (arr) {
// //     arr.sort((a, b) => a - b);
// //     let result = [];
// //     for (let i = 0; i < arr.length - 2; i++) {
// //         if (i > 0 && arr[i] === arr[i - 1]) {
// //                 continue
// //             }
// //         // let needed = 0 - arr[i];
// //         let left = i + 1;
// //         let right = arr.length - 1;

// //         while (left < right) {
// //             let sum = arr[i] + arr[left] + arr[right]

// //             if (sum < 0) {
// //                 left++
// //             }
// //             else if (sum > 0) {
// //                 right--
// //             }
// //             else {
// //                 result.push([arr[i], arr[left], arr[right]])
// //                 left++;
// //                 right--;
// //                 while (left < right && arr[left] === arr[left - 1]) {
// //                     left++
// //                 }
// //                 while (left < right && arr[right] === arr[right + 1]) {
// //                     right--
// //                 }
// //             }
// //         }
// //     }
// //     return result
// // }

// // console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// // console.log(threeSum([0, 0, 0]));
// // console.log(threeSum([1, 2, 0, 1, 0, 0, 0, 0]));



// var sortedSquares = function (nums) {
//     // let result = nums.map((item) => item * item);
//     let result = []
//     let left = 0;
//     let right = nums.length - 1;
//     let write = right
//     while (left <= right) {
//         if (nums[left] * nums[left] > nums[right] * nums[right]) {
//             result[write] = nums[left] * nums[left];
//             left++
//             write--
//         }
//         else {
//             result[write] = nums[right] * nums[right]
//             right--
//             write--
//         }
//     }
//     return result
// };

// console.log(sortedSquares([-4, -1, 0, 3, 10]));


/****************************************************************************8 */
//sort the colors:




// var sortColors = function(nums) {
//     let low=0
//     let mid = 0
//     let high = nums.length -1;
//     while(mid <= high)
//     {

//         if(nums[mid] === 2)
//         {
//             [nums[mid],nums[high]] = [nums[high],nums[mid]]
//             high--
//         }
//         else if(nums[mid] === 0)
//         {
//             [nums[low], nums[mid]] = [nums[mid], nums[low]]
//             low++
//             mid++
//         }
//         else{
//             // [nums[mid],nums[high]] = [nums[high],nums[mid]]
//             mid++
//         }
//     }
//     return nums
// };

// console.log(sortColors([2,0,2,1,1,0]));//passed
// console.log(sortColors([2,0,1]));//passed
// console.log(sortColors([1,2]));//getting [2,1]


// var trap = function (height) {
//     let left = 0;
//     let right = height.length - 1;
//     let leftMax = 0;
//     let rightMax = 0
//     let water = 0
//     while (left <= right) {
//         if (leftMax < rightMax) {
//             if (height[left] > leftMax) {
//                 leftMax = height[left];
//             }
//             else {
//                 water += leftMax - height[left]
//             }
//             left++
//         }

//         else {
//             if (height[right] > rightMax) {
//                 rightMax = height[right];
//             }
//             else {
//                 water += rightMax - height[right]
//             }
//             right--
//         }


//     }

//     return water
// };

// console.log(trap([4, 2, 0, 3, 2, 5]));
// console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));

// var backspaceCompare = function(s, t) {
//     let skipS = 0;
//     let skipT = 0;
//     let p1 = s.length -1;
//     let p2 = t.length - 1;
//     let count = 0;

//     while(count <= s.length)
//     {
//         count++
//         console.log(`S: ${s[p1]} and T: ${t[p2]} - Skips: ${skipS} - Skipt: ${skipT}`);
        
//         if(s[p1] === t[p2])
//         {
//             console.log("yes");
            
//             p1--
//             p2--
//         }
//         else if(s[p1] === "#")
//         {
//             skipS++
//             p1--
//         }
//         else if(t[p2] === "#")
//         {
//             skipT++
//             p2--
//         }
//         else
//         {
//             while(skipS > 0 || skipT > 0)
//             {
//                 skipS--;
//                 p1--
//                 skipT--;
//                 p2--
//             }
//             if(s[p1] === t[p2])
//             {
//                 return true
//             }
//         }
       
//     }
//     return false
// };

// console.log(backspaceCompare("ab#c","ad#c"));

// var backspaceCompare = function(s, t) {
//     let p1 = s.length - 1;
//     let p2 = t.length - 1;

//     let skipS = 0;
//     let skipT = 0;

//     while (p1 >= 0 || p2 >= 0) {
//         while (p1 >= 0) {
//             if (s[p1] === "#") {
//                 skipS++;
//                 p1--;
//             }
//             else if (skipS > 0) {
//                 skipS--;
//                 p1--;
//             }
//             else {
//                 break;
//             }
//         }
//         while (p2 >= 0) {
//             if (t[p2] === "#") {
//                 skipT++;
//                 p2--;
//             }
//             else if (skipT > 0) {
//                 skipT--;
//                 p2--;
//             }
//             else {
//                 break;
//             }
//         }
//         if (p1 >= 0 && p2 >= 0) {
//             if (s[p1] !== t[p2]) {
//                 return false;
//             }
//         }
//         else {

//             if (p1 >= 0 || p2 >= 0) {
//                 return false;
//             }
//         }

//         p1--;
//         p2--;
//     }

//     return true;
// };

// console.log(backspaceCompare("ab#c", "ad#c")); // true
// console.log(backspaceCompare("ab##", "c#d#")); // true
// console.log(backspaceCompare("a#c", "b"));     // false

console.log("PR-Agent test");
var slidingwindow = function (arr,k)
{
    let left = 0
    let right = 0;
    let windowsum = 0;
    let maxsum = 0;

    for(let i =0; i<k;i++)
    {
        windowsum += arr[right]
        right++
    }
    maxsum = windowsum
    right++
    while(left < k)
    {
        if(left+right - 1 > k)
        {
            windowsum -= arr[left]
            left++
        }
        else{
            windowsum = windowsum - arr[left] + arr[right]
            maxsum = Math.max(maxsum,windowsum)
            right++
        }
       
    }
    console.log(windowsum,maxsum);
    
}

slidingwindow([2, 1, 5, 1, 3, 2],3)
slidingwindow([4, 2, 7, 1, 8, 3, 5],3)
