import java.util.*;

class ShuffleArray {
    public static void main(String[] args) {
        // Create a list with the values
        int arr[]={1,2,3,4,5,6,7};
        ArrayList<Integer> arr_list=new ArrayList<>();
        for(int i:arr){
            arr_list.add(i);
        }
        // Shuffle the list
        Collections.shuffle(arr_list);

        // Print the shuffled list
        System.out.println(arr_list);
    }
}