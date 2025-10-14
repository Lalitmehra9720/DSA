import java.util.*;

public class InvertedHalfPyramid {
    // * * * *
    // * * *
    // * *
    // *
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("enter the order to make the inverted half pyramid : ");
        int order = sc.nextInt();
        for (int i = 1; i <= order; i++) {
           
            for (int j = order; j >= i; j--) {
                System.out.print("* ");
            }
            System.out.println();
        }
        sc.close();
    }
}
