
public class Packot {
    public String app;
    public double total;

    public Packot(String pApp, double pTotal)
    {
        this.app = pApp;
        this.total = pTotal;
        System.out.println("Pack criado: "+this.app+" , "+this.total);
    }

    public String getApp (){
        return this.app;
    }
    public double getTotal (){
        return this.total;
    }
    public String setApp (String pApp){
        this.app = pApp;
        return null;
    }
    public double setTotal (double pTotal){
        this.total = pTotal;
        return 0;
    }
}