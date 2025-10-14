import java.util.*;
public class Halfpyramid {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.print("enter the order of the half pyramid: ");
        int order = sc.nextInt();
        for(int i = 1; i<= order; i++){
            for(int j = 1; j<=i; j++){
                System.out.print("*");
                if(j< order){
                    System.out.print(" ");
                }
            }
            System.out.println();
        }
    }
}
