import java.util.*;
class Pangram {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        String s=sc.nextLine();
        System.out.println(checkIfPangram(s));
    }
    public static boolean checkIfPangram(String s) {

        HashMap<Character,Integer> map = new HashMap<>();

        for (int i = 0; i < s.length(); i++){
            map.put(s.charAt(i),1);
        }

        if(map.size() == 26){
            return true;
        }

        return false;
    }
}
