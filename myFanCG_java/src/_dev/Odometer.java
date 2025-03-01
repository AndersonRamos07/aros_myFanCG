package _dev;

public class Odometer {
    private double mileage;
    private double diffOfMileage;

    public Odometer(double pMiliage){
        this.mileage = pMiliage;
    }
    public double getMileage(){
        System.out.println("O odometro esta marcando: "+this.mileage+"km.");
        return this.mileage;
    }
    public double getDiffOfMileage(){
        System.out.println("The total of mileage: "+this.diffOfMileage+"km.");
        return this.diffOfMileage;
    }
    public void setMileage(double pMileage){
        this.diffOfMileage = pMileage - this.mileage;
        System.out.println("The total of mileage was: "+this.diffOfMileage+"km");
        this.mileage = pMileage;
        System.out.println("Agora o odometro esta marcando: "+this.mileage+"km.");
    }
}
