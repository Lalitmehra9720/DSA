import java.util.*;
public class SolidRectangle {
    public static void main(String[] args){
        int row, col;
        Scanner sc = new Scanner(System.in);
        System.out.print("enter number of rows: ");
        row = sc.nextInt();
        System.out.print("enter number of columns: ");
        col = sc.nextInt();

        for(int i = 1; i<= row; i++){
            for(int j = 1; j<=col; j++){
                System.out.print("*");
            }
            System.out.println(" ");
        }
         sc.close();
    }
   
}
