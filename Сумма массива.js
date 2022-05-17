let mas = [5, 6, 7, 8, 9, 10];

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
