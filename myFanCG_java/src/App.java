import _dev.Odometer;

public class App {
    public static void main(String[] args) throws Exception {
        // System.out.println("Hello, World!");

        Odometer odometro = new Odometer(31576.7);

        odometro.getMileage();
        odometro.setMileage(31717.8);

        odometro.getDiffOfMileage();

    }
}
