package _dev;

import java.time.LocalDate;

public class Register {

    private LocalDate datahora;
    private double miliage;
    private String details;
    private Service service;

    public double Register(double pMiliage){
        this.datahora = LocalDate.now();
        this.miliage = pMiliage;
        return this.miliage;
    }
    public double Register(double pMiliage, Service pService){
        this.datahora = LocalDate.now();
        this.miliage = pMiliage;
        this.service = pService;
        return this.miliage;
    }
    public double Register(double pMiliage, Service pService, String pDetails){
        this.datahora = LocalDate.now();
        this.miliage = pMiliage;
        this.service = pService;
        this.details = pDetails;
        return this.miliage;
    }

}
