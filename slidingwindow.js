// // var findMaxAverage = function (nums, k) {
// //     let left = 0;
// //     let right = 0;
// //     let windowSum = 0;
// //     let maxsum = -Infinity;
// //     for (let i = 0; right < nums.length; i++) {
// //         windowSum += nums[right];

// //         if (right - left + 1 > k) {
// //             windowSum -= nums[left];
// //             left++
// //         }
// //         if (right - left + 1 === k) {
// //             maxsum = Math.max(maxsum,windowSum) 
// //         }
// //         right++
// //     }
// //     return maxsum/k
// // }

// // // console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
// // console.log(findMaxAverage([-1], 1));


// // // //method 2:

// // // var findaverage = function(nums,k)
// // // {
// // //     let windowsum = 0;
// // //     let maxsum = 0;
// // //     for(let i =0;i<k;i++)
// // //     {
// // //         windowsum += nums[i]
// // //     }
// // //     maxsum = windowsum


// // //     for(let i = k; i< nums.length;i++)
// // //     {
// // //         windowsum = windowsum - nums[i-k] + nums[i]


// // //         maxsum = Math.max(maxsum,windowsum)
// // //     }
// // //     return maxsum/k
// // // }

// // // console.log(findaverage([1, 12, -5, -6, 50, 3], 4));
// // // console.log("me2",findMaxAverage([-1], 1));



// // var findAverageArrays = function (nums,k,threshold)
// // {
// //     let left = 0;
// //     let right = 0;
// //     let windowsum = 0;
// //     let count = 0;
// //     for(let i =0; right<nums.length;i++)
// //     {
// //         windowsum += nums[right];
// //         if(right - left + 1 > k)
// //         {
// //             windowsum -= nums[left];
// //             left++
// //         }
// //         if(right - left + 1 === k)
// //         {
// //             if(windowsum / k >= threshold)
// //             {
// //                 count++
// //             }
// //         }
// //         right++
// //     }
// //     return count
// // }


// console.log(findAverageArrays([11,13,17,23,29,31,7,5,2,3],5,5));


// var minSubArrayLen = function (target, nums) {
//     let left = 0;
//     let windowsum = 0;

//     let min = Infinity;

//     for (let right = 0; right < nums.length; right++) {
//         windowsum += nums[right];

//         while (windowsum >= target) {
//             min = Math.min(min, right - left + 1);
//             windowsum -= nums[left]
//             left++
//         }

//     }
//     return min === Infinity ? 0 : min;
// };
// console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
// console.log(minSubArrayLen(4, [1, 4, 4]));
// console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]));

var lengthOfLongestSubstring = function (s) {
    let left = 0;
    let set = new Set();
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {

        while (set.has(s[right])) {
            set.delete(s[left])
            left++
        }

        set.add(s[right])

        maxLength = Math.max(maxLength, right - left + 1)

    }

    return maxLength;
};
console.log(lengthOfLongestSubstring("abcda"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
