import java.util.*;
public class NumberPyramid {
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter number of rows: ");
        int num = sc.nextInt();
        for(int i = 1; i <= num; i++){
            for(int space = num; space > i; space--){
                System.out.print(" ");
            }
            for(int j = 1; j <= i; j++){
                System.out.print(i);
                if(j != num){
                    System.out.print(" ");
                }
            }
            System.out.println();
        }
    }
}
