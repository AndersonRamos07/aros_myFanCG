package _dev;

public class Service {

    private int identificationOfTheService;
    private String description;
    private double costOfTheService;
    private double warrantyOfMileage;
    
    public Service(String pDescription, double pCostOfTheService){
        this.identificationOfTheService++;
        this.description = pDescription;
        this.costOfTheService = pCostOfTheService;
    }
    public Service(String pDescription, double pCostOfTheService, double pWarrantyOfMileage){
        this.identificationOfTheService++;
        this.description = pDescription;
        this.costOfTheService = pCostOfTheService;
        this.warrantyOfMileage = pWarrantyOfMileage;
    }
}
