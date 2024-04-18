let nums = []
let impar = []
for (let i = 0; i < 10; i++) {
    nums[i] = Number(prompt("Digite o " + (i + 1) + "º número: "))
}
for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 ) {
        impar.push(nums[i])
    }
}
alert(impar.join())
