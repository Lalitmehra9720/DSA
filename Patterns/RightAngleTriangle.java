import java.util.Scanner;
public class RightAngleTriangle {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the order of the pattern: ");
        int len = sc.nextInt();
        for(int i = 1; i <= len; i++){
            for(int j = 1; j <= i; j++){
                System.out.print("* ");
            }
            System.out.println("");
        }
        sc.close();
    }
}