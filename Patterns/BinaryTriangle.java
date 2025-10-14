import java.util.*;

public class BinaryTriangle {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter number of rows of a triangle: ");
        int rows = sc.nextInt();
        int num1 = 1;

        for (int i = 1; i <= rows; i++) {
            for (int j = 1; j <= i; j++) {
                if (num1 == 1)
                    System.out.print("1");
                else
                    System.out.print("0");

                num1 = 1 - num1;

            }
            System.out.println();
        }
    }
}
