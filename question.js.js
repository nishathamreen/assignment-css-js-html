
 
 
// Return the maximum water that can be stored
function maxWater( height, n)
{
    let maximum = 0;
 
    // Check all possible pairs of buildings
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            let current = (Math.min(height[i],
                               height[j])
                           * (j - i - 1));
 
            maximum = Math.max(maximum, current);
        }
    }
    return maximum;
}
 
     

     
    let height = [ 2, 1, 3, 4, 6, 5 ];
    let n = height.length;
    document.write(maxWater(height, n));
     
     
