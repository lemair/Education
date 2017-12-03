package lab2;

public class exampley {

	public static void main(String[] args) {
		     int y;
			 double a=1.65;
			 double x=1.3;
			 double p=1;
			 if(x<1.3){
				 System.out.println("p*Math.pow(x,x)-7/Math.pow(x,x)"+ Math.floor(p*Math.pow(x,x)-7/Math.pow(x,x)));
				 
			 } 
			 else if(x==1.3) {
				 System.out.println("a*Math.pow(x,x)+7/Math.sqrt(x)" +Math.floor(a*Math.pow(x,x)+7/Math.sqrt(x)));
		
			 }
			 else if (x>1.3) {
				 System.out.println("Math.log(x)*(x+7*Math.sqrt(x+a)"  +Math.floor( Math.log(x)*(x+7*Math.sqrt(x+a))));
			
			 }

		 }


	}


