/////////////////////////////
// ROD CUTTING CALCULATOR //
/////////////////////////////

// DEFINITION OF SAMPLE INPUT
var rodValues = [ 10, 1, 2, 3 ];
var costPerCut = 3;

// DEFINITION OF ROD CUTTING FUNCTION
function cutRod(rodValues, costPerCut) {
    let n = rodValues.length;
    let val = [...rodValues];

    // Build the table val[] in
    // bottom up manner and return
    // the last entry from the table
    for (let i = 1; i<n; i++) {
        for (let j = 0; j < i; j++) {
            val[i] = Math.max(val[i], val[j] + val[i - j - 1] - costPerCut);
        }
    }

    return val;
}

// SAMPLE OUTPUT
console.log(cutRod(rodValues, costPerCut))