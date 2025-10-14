import java.util.*;
public class Rhombus {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter number of rows: ");
        int rows = sc.nextInt();
        for(int i = 1; i <= rows; i++){
            for(int j = rows; j > i; j--){
                System.out.print(" ");
            }
            for(int k = 1; k <= rows; k++){
                System.out.print("*");
            }System.out.println();
        }

    }
}
