function permute(nums) {
    // Base cases
    if (nums.length === 0) {
        return [];
    }
    if (nums.length === 1) {
        return [nums];
    }

    // Recursive case
    const results = [];
    for (let i = 0; i < nums.length; i++) {
        const remainingNums = nums.slice(0, i).concat(nums.slice(i + 1));
        const permutations = permute(remainingNums);

        for (const permutation of permutations) {
            results.push([nums[i]].concat(permutation));
        }
    }

    return results;
}

const nums = [1, 2, 3]

perms = permute(nums)

console.log(perms)