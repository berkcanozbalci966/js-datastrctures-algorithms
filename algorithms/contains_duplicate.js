/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
    for(let i = 0; i< nums.length - 1; i++){
        const selectedItem = nums[i];
        
        for(let j =0; j <nums.length;j++ ){
            if(i !== j){
                if(selectedItem == nums[j]){
                    return true
                }
            }
        }
        
    
    }
    
    return false
};


console.log(containsDuplicate([1,2,3,1]))