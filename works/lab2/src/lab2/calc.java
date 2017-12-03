package lab2;
public class calc {
	public double calcY(int y)   {
		 double a=1.65;
		 double x=1;
		 double p=1;
		 if(x<1.3){
			 System.out.println("p*Math.pow(x,x)-7/Math.pow(x,x)");
		 return Math.floor(p*Math.pow(x,x)-7/Math.pow(x,x));	 
		 } 
		 else if(x==1.3) {
			 System.out.println("a*Math.pow(x,x,x)+7/Math.sqrt(x)");
		 return Math.floor(a*Math.pow(x,x)+7/Math.sqrt(x));
		 }
		 else if (x>1.3) {
			 System.out.println("Math.log(x)*(+7*Math.sqrt(x+a)");
		 return Math.floor( Math.log(x)*(x+7*Math.sqrt(x+a)));
		 }
	return y;
	 }
}
