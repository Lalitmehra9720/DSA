
import java.util.*;
public class NumberHalfPyramid {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the number of rows for the half pyramid: ");
        int rows = sc.nextInt();

        for(int i = 1; i <= rows; i++){
            for(int j = 1; j<= i; j++){
                System.out.print(j+" ");
            }
            System.out.println();
        }
        sc.close();
    }
}