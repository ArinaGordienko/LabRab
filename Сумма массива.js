let mas = [1, 2, 3, 4, 5, 6];

function summ(mas)
{
    let sum = 0;
    mas.forEach(item => 
        {
            sum = sum + item;
        });
        return sum;
}
console.log(summ(mas))