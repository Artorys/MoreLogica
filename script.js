//Iniciando 1 kata:
function calculateSalary(salario,vendas){
    let salarioAtual = salario
    let valorVendas = 0
    for(let i = 0; i < vendas.length;i++)
    {
        if(vendas[i] <= 1200)
        {
            vendas[i] = (3 * vendas[i] / 100) + vendas[i]
        }
        else
        {
            vendas[i] = (5 * vendas[i] / 100) + (vendas[i])
        }
        valorVendas += vendas[i]
    }
    return  salarioAtual + valorVendas
}
let salarioAtual = (calculateSalary(2100,[300,400,500,100]))
//Finalizado 1 kata.

//Iniciando 2 kata:
let notasNecessarias = 
{
    Nota_De_R$200 : 0,
    Nota_De_R$100 : 0,
    Nota_De_R$50: 0,
    Nota_De_R$25 : 0,
    Nota_De_R$10 : 0,
    Nota_De_R$5 : 0,
    Nota_De_R$2 : 0
};
let stringFinal = "Notas sacadas: "
function CashMachine(valorSaque,salario)
{
    let count = 0
    let salarioRestante = salario - valorSaque
    for(let i = 0; i < valorSaque; i++)
    {
        if(valorSaque  >= 200)
        {
            valorSaque -= 200
            count += 1
            notasNecessarias.Nota_De_R$200 = count
        }
        else if(valorSaque >= 100)
        {
            valorSaque -=100
            count += 1
            notasNecessarias.Nota_De_R$100 = count
            
        }
        else if(valorSaque >=50)
        {
            valorSaque -=50
            count += 1
            notasNecessarias. Nota_De_R$50 = count
        }
        else if(valorSaque >=25)
        {
            valorSaque -=25
            count += 1
            notasNecessarias.Nota_De_R$25 = count
        }
        else if(valorSaque >=10)
        {
            valorSaque -=10
            count += 1
            notasNecessarias.Nota_De_R$10 = count
        }
        else if(valorSaque >=5)
        {
            valorSaque -=5
            count += 1
            notasNecessarias.Nota_De_R$5 = count
        }
        else if(valorSaque >=2)
        {
            valorSaque -=2
            count += 1
            notasNecessarias.Nota_De_R$2 = count
        }
    }
    Object.entries(notasNecessarias).forEach((key)=>
{
    key[0] = key[0].replace(/_/g," ")
    if(key[1] == 1)
    {
        stringFinal += (`,${key[1]} ${key[0]}`)
    }
    if(key[1] > 1)
    {
        stringFinal += (`,${key[1]} ${key[0].replace("a", "as")}`)
    }
})
    return stringFinal.replace(",","") + `-Saldo Atual: R$${salarioRestante}`

}
CashMachine(720,salarioAtual)
//Finalizado 2 kata.

//Iniciando 3 kata : 
function calculateStock(now,max,min)
{
    let media = max + min / 2
    if(now >= media)
    {
        return 'Não efetuar compra'
    }
    return 'Efetuar compra'
}
calculateStock(20,50,25)
//Finalizado 3 kata.

//Iniciando 4 kata :
function calculateAge(anoNasc,anoAtual)
{
    let idade = anoAtual - anoNasc
    return `
    idade em anos : ${idade}
    idade em meses : ${idade * 12}
    idade em dias : ${idade  * 365}
    idade em semanas : ${Math.round(idade * 52.143)}`
}
calculateAge(2003,2022)
//Finalizado 4 kata.

//Iniciando 5 kata :

let matrizQuadrada3x3 = [ [1, 2, 3] , [4, 5, 6] , [7, 8, 9] ]
function getDiagonal(array)
{
    let diagonalPrincipal = []
    for(let i = 0;i < array.length; i++)
    {
        diagonalPrincipal.push(array[i][i])
    }
    return diagonalPrincipal.join(", ")
}
getDiagonal(matrizQuadrada3x3)
//Finalizado 5 kata.



