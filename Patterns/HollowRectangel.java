import java.util.*;
public class HollowRectangel {
    public static void main(String[] args){
       
        System.out.print("enter number of rows: ");
        Scanner sc = new Scanner(System.in);
        int row = sc.nextInt();
        System.out.print("enter number of columns: ");
        int col = sc.nextInt();
        for(int i = 1; i<=row; i++){
            for(int j = 1; j<= col; j++){
                if(i == 1 || j == 1 || i == row || j == col){
                    System.out.print("*");
                }else{
                    System.out.print(" ");
                }
            }System.out.println();
        }
        sc.close();
    }
}
