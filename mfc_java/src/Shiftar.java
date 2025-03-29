
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Shiftar {
    public Date data;
    public double kmStart;
    public List<Packot> apps;
    public double kmEnd;
    public boolean isBegin = false;

    public Shiftar(double pKmStart, Packot pApp)
    {
        this.data = new Date();
        this.kmStart = pKmStart;
        this.apps = new ArrayList<>();
        this.apps.add(pApp);
        this.isBegin = true;
        System.out.println(this.apps);
    }

    public Shiftar(double pKmStart, Packot pApp, double pKmEnd)
    {
        this.data = new Date();
        this.kmStart = pKmStart;
        this.apps = new ArrayList<>();
        this.apps.add(pApp);
        this.kmEnd = pKmEnd;
        System.out.println(this.apps);
        this.isBegin = false;
    }

    public Shiftar(List<Packot> apps) {
        this.apps = apps;
    }

    public Date getData (){
        return this.data;
    };
    public void setData (Date pData){
        this.data = pData;
    };
    public double getKmStart (){
        return this.kmStart;
    };
    public void setKmStart (double km){
        this.kmStart = km;
    };
        public List getPack (){
        return this.apps;
    };
    public double getKmEnd (){
        return this.kmEnd;
    };
    public void setkmEnd (double km){
        this.kmEnd = km;
    };

    public List<Packot> getApps() {
        return apps;
    }

    public void setApps(List<Packot> apps) {
        this.apps = apps;
    }

    public void setKmEnd(double kmEnd) {
        this.kmEnd = kmEnd;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("Shiftar{");
        sb.append("data=").append(data);
        sb.append(", kmStart=").append(kmStart);
        sb.append(", apps=").append(apps);
        sb.append(", kmEnd=").append(kmEnd);
        sb.append(", isBegin=").append(isBegin);
        sb.append('}');
        return sb.toString();
    }
}