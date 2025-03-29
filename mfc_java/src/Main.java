public class Main{
    public static void main(String[] args)
    {

        Packot pack1 = new Packot("Uber", 150.00);
        Packot pack2 = new Packot("Lalamove", 50.00);
        Shiftar shift1 = new Shiftar(34526.8, pack1, 34577.5);
        Shiftar shift2 = new Shiftar(34526.8, pack2, 34577.5);

        System.out.println(shift1.toString());
        shift2.toString();
        /*
        //TODO:

            input {
                apps utilizados, String
                valores em reais, R$ double
                km de inicio, double km
                km de termino, double km
                gasolina, R$ double <opcional>
                preco, R$ double <opcional>
            }
            output {
                total em R$, R$ double
                total em km, double km
                total de horas, data h
                R$/km, R$ double /km
                R$/h, R$ double /h
                consumo, double km/l <opcional>
            }
        */
    }
}