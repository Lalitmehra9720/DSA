public class MissingInArray {
    public int missingNum(int arr[]) {
        int n = arr.length + 1; 

        long total = ((long)n * (n + 1)) / 2;

        long sum = 0;
        for (int i = 0; i < arr.length; i++) {
            sum += arr[i]; 
        }

        return (int)(total - sum);
    }
    public static void main(String[] args) {
        MissingInArray obj = new MissingInArray();
        int arr[] = {1, 2, 4, 5, 6};
        System.out.println("Missing number: " + obj.missingNum(arr)); 
    }
}
